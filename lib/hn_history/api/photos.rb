require 'hn_history/api/entities/photos'

class Photos < Grape::API
  namespace :photos do
    helpers do
      def find_photo_closest_to_time(time)
        photos = HnHistory::Models::Photo.all(
          :created_at.lt => (time + 3600),
          :created_at.gt => (time - 3600),
          :order => [ :created_at.asc ]
        )
        closest = nil
        photos.each do |p|
          if closest.nil? or (closest.created_at - time).abs > (p.created_at - time).abs 
            closest = p
          end
        end
        closest
      end

      def photos_for_time
        time = params[:time]
        @photo ||= begin
          photo = find_photo_closest_to_time(time)
          photo ||= HnHistory::Models::Photo.last

          before = HnHistory::Models::Photo.all(
            :created_at.lt => photo.created_at,
            :limit => 15,
            :order => [ :created_at.desc ]
          )
          after = HnHistory::Models::Photo.all(
            :created_at.gt => photo.created_at,
            :limit => 15,
            :order => [ :created_at.asc ]
          )
          before.to_a.reverse + [ photo ] + after
        end
      end

      def require_photos_for_time!
        !photos_for_time.empty? || error!("No photo for this time", 400)
      end
    end

    desc "Get last 30 photos"
    get do
      present HnHistory::Models::Photo.all(
        :limit => 30, :order => [ :created_at.desc ]
      ).to_a.reverse, with: Entities::Photo
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

