require 'grape'
require 'grape-entity'

module HnHistory
  class API < Grape::API
    format :json

    require 'hn_history/api/entries'
    require 'hn_history/api/photos'
    mount Entries
    mount Photos
  end

  class BaseAPI < Grape::API
    prefix 'api'
    mount HnHistory::API
  end
end


