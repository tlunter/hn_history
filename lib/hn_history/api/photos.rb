require 'hn_history/api/entities/photos'

class Photos < Grape::API
  namespace :photos do
    helpers do
      def photo_for_time
        time = params[:time]
        @photo ||= HnHistory::Models::Photo.last(
          :created_at.lt => (time + 300),
          :created_at.gt => (time - 300)
        )
      end

      def require_photo_for_time!
        photo_for_time || error!("No photo for this time", 400)
      end
    end

    desc "Get all photos"
    get do
      present HnHistory::Models::Photo.all, with: Entities::Photo
    end

    desc "Get the latest page"
    get "latest" do
      present [HnHistory::Models::Photo.last], with: Entities::Photo
    end

    desc "Get photo around time"
    params do
      requires :time, type: Integer, desc: "Timestamp in integer form"
    end
    get ":time" do
      require_photo_for_time!

      puts "photo_for_time: #{photo_for_time}"

      present [photo_for_time], with: Entities::Photo
    end
  end
end

