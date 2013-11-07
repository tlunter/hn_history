require 'sinatra'

module HnHistory
  class Web < Sinatra::Base
    get '*' do
      erb :"index.html"
    end
  end
end
