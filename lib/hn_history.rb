require 'ruby-hackernews'
require 'resque'
require 'clockwork'
require 'dm-core'
require 'dm-mysql-adapter'
require 'dm-aggregates'

if ENV['DOCKER']
  DataMapper.setup(:default, 'mysql://hn_history:@172.17.42.1/hn_history')
else
  DataMapper.setup(:default, 'mysql://hn_history:@localhost/hn_history')
end

module Clockwork
  handler do |job|
    Resque.enqueue(job)
  end
end

module HnHistory
end

require 'hn_history/models'
