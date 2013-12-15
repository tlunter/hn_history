module Entities
  class Entry < Grape::Entity
    expose :id
    expose :entry_id
    expose :title
    expose :site
    expose :link
    expose :upvotes
    expose :position
    expose :created_at do |entry, options|
      entry.photo.created_at
    end
  end
end
