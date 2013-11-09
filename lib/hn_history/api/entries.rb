require 'hn_history/api/entities/entries'

class Entries < Grape::API
  namespace :entries do
    helpers do
      def photo
        @photo ||= HnHistory::Models::Photo.first(id: params[:id])
      end

      def require_photo!
        photo || error!(400, 'No photo for this id')
      end
    end

    get ':id' do
      require_photo!

      present HnHistory::Models::Entry.all(photo: photo), with: Entities::Entry
    end
  end
end
