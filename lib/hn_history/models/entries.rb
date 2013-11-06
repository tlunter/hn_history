module HnHistory
  module Models
    class Entry
      include DataMapper::Resource

      property :id, Integer, key: true

      has n, :photos
    end

    class Photo
      include DataMapper::Resource

      property :id, Serial
      property :title, String, length: 255, index: true
      property :site, String, length: 255, index: true
      property :upvotes, Integer
      property :position, Integer
      property :created_at, DateTime

      belongs_to :entry
    end

    Entry.finalize
    Photo.finalize
  end
end
