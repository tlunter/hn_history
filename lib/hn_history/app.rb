require 'hn_history'
require 'hn_history/api'
require 'hn_history/web'

if ENV['RACK_ENV'] == "production"
  require 'oboe'
  require 'oboe/inst/rack'

  Oboe::Config[:tracing_mode] = 'through'

  Oboe::Ruby.initialize
end

def app
  Rack::Builder.app do
    if ENV['RACK_ENV'] == "production"
      use Oboe::Rack
    end

    use Rack::Session::Cookie
    run Rack::Cascade.new [HnHistory::BaseAPI, HnHistory::Web]
  end
end
