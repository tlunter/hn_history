require 'sinatra'
require 'grape'
require 'grape-entity'

require 'hn_history'
require 'hn_history/api'

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

  class Web < Sinatra::Base
  end
end

def app
  Rack::Builder.app do
    use Rack::Session::Cookie
    run Rack::Cascade.new [HnHistory::BaseAPI, HnHistory::Web]
  end
end
