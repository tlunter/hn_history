require 'hn_history/api/entities/photos'

class Photos < Grape::API
  namespace :photos do
    desc "Get all photos"
    get do
      present HnHistory::Models::Photo.all, with: Entities::Photo
    end

    desc "Get the latest page"
    get "latest" do
      present [HnHistory::Models::Photo.last], with: Entities::Photo
    end
  end
end

