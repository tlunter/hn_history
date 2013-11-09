module Entities
  class Photo < Grape::Entity
    expose :id
    expose :created_at
  end
end

