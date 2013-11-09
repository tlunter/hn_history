module Entities
  class Entry < Grape::Entity
    expose :id
    expose :title
    expose :site
    expose :upvotes
    expose :position
  end
end
