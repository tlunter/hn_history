require 'sinatra'

module HnHistory
  class Web < Sinatra::Base
    get %r{^(?!/api).+} do
      erb :"index.html"
    end
  end
end
