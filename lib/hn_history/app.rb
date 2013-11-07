require 'hn_history'
require 'hn_history/api'
require 'hn_history/web'

def app
  Rack::Builder.app do
    use Rack::Session::Cookie
    run Rack::Cascade.new [HnHistory::BaseAPI, HnHistory::Web]
  end
end
