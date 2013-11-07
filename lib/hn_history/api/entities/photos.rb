module Entities
  class Photo < Grape::Entity
    expose :id
    expose :title
    expose :site
    expose :upvotes
    expose :position
    expose :created_at
  end
end

