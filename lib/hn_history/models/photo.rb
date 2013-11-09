module HnHistory
  module Models
    class Photo
      include DataMapper::Resource

      property :id, Serial
      property :created_at, DateTime, index: true

      has n, :entries
    end
  end
end
