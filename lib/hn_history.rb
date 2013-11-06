require 'ruby-hackernews'
require 'resque'
require 'clockwork'
require 'dm-core'
require 'dm-redis-adapter'

DataMapper.setup(:default, {:adapter  => "redis"})

module Clockwork
  handler do |job|
    Resque.enqueue(job)
  end

end

module HnHistory
end

require 'hn_history/models'
