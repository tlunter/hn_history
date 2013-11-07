module HnHistory
  module Models
    class Entry
      include DataMapper::Resource

      property :id, Integer, key: true

      has n, :photos
    end
  end
end
