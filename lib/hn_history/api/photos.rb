require 'hn_history/api/entities/photos'

class Photos < Grape::API
  namespace :photos do
    helpers do
      def photos_for_time
        time = params[:time]
        @photo ||= begin
          photo = HnHistory::Models::Photo.first(
            :created_at.lt => (time + 3600),
            :created_at.gt => (time - 3600),
            :order => [ :created_at.asc ]
          )
          photo ||= HnHistory::Models::Photo.last

          before = HnHistory::Models::Photo.all(
            :created_at.lt => photo.created_at,
            :limit => 15,
            :order => [ :created_at.asc ]
          )
          after = HnHistory::Models::Photo.all(
            :created_at.gt => photo.created_at,
            :limit => 15,
            :order => [ :created_at.asc ]
          )
          before + [ photo ] + after
        end
      end

      def require_photos_for_time!
        !photos_for_time.empty? || error!("No photo for this time", 400)
      end
    end

    desc "Get all photos"
    get do
      present HnHistory::Models::Photo.all, with: Entities::Photo
    end

    desc "Get photo around time"
    params do
      requires :time, type: Integer, desc: "Timestamp in integer form"
    end
    get ":time" do
      require_photos_for_time!

      present photos_for_time, with: Entities::Photo
    end
  end
end

