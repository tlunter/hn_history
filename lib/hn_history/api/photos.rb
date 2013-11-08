require 'hn_history/api/entities/photos'

class Photos < Grape::API
  namespace :photos do
    helpers do
      def entry
        @entry ||= HnHistory::Models::Entry.get(params[:id])
      end

      def last_date
        HnHistory::Models::Photos.max(:created_at)
      end

      def require_entry!
        error!("Entry does not exist") unless entry
      end
    end

    desc "Get photos for an entry"
    params do
      requires :id, type: Integer, desc: "The ID of an Entry"
    end
    get ':id' do
      require_entry!

      present HnHistory::Models::Photo.all(entry: entry), with: Entities::Photo
    end

    desc "Get the latest photo"
    get 'latest' do
      
    end
  end
end

