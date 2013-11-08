module HnHistory
  module Models
    class Photo
      include DataMapper::Resource

      property :id, Serial
      property :title, String, length: 255, index: true
      property :site, String, length: 255, index: true
      property :upvotes, Integer
      property :position, Integer
      property :created_at, DateTime, index: true

      belongs_to :entry
    end
  end
end
