require 'hn_history'

require 'grape'
require 'sinatra'

if ENV['RACK_ENV'] == "production"
  require 'oboe'
  require 'oboe/inst/rack'

  Oboe::Config[:tracing_mode] = 'through'
  Oboe::Config[:sample_rate] = 1000000
  Oboe::Config[:verbose] = true
end

require 'hn_history/api'
require 'hn_history/web'

def app
  Rack::Builder.app do
    if ENV['RACK_ENV'] == "production"
      # Force the Grape API to use Oboe
      HnHistory::BaseAPI.use ::Oboe::Rack
    end

    use Rack::Session::Cookie
    run Rack::Cascade.new [HnHistory::BaseAPI, HnHistory::Web]
  end
end
