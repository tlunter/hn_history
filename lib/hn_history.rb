require 'ruby-hackernews'
require 'resque'
require 'clockwork'
require 'dm-core'
require 'dm-mysql-adapter'
require 'dm-aggregates'

DataMapper.setup(:default, 'mysql://hn_history:@localhost/hn_history')

module Clockwork
  handler do |job|
    Resque.enqueue(job)
  end

end

module HnHistory
end

require 'hn_history/models'
