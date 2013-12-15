require 'hn_history/api/entities/entries'

class Entries < Grape::API
  namespace :entries do
    helpers do
      def photo
        @photo ||= HnHistory::Models::Photo.first(created_at: params[:id])
      end

      def require_photo!
        photo || error!('No photo for this id', 400)
      end

      def entries
        @entries ||= HnHistory::Models::Entry.all(entry_id: params[:id])
      end
    end

    get ':id' do
      require_photo!

      present HnHistory::Models::Entry.all(photo: photo), with: Entities::Entry
    end

    get ':id/timeline' do
      present entries, with: Entities::Entry
    end
  end
end
