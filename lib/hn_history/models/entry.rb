module HnHistory
  module Models
    class Entry
      include DataMapper::Resource

      property :id, Serial
      property :entry_id, Integer, index: true
      property :title, String, length: 255, index: true
      property :site, String, length: 255, index: true
      property :link, String, length: 255, index: true
      property :upvotes, Integer
      property :position, Integer

      belongs_to :photo
    end
  end
end
