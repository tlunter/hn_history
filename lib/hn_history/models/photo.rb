module HnHistory
  module Models
    class Photo
      include DataMapper::Resource

      property :id, Serial
      property :created_at, Integer, index: true

      has n, :entries
    end
  end
end
