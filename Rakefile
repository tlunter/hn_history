require 'bundler/gem_tasks'
require 'resque/tasks'
require 'hn_history'

task "resque:setup" do
    ENV['QUEUE'] = '*'
    ENV['TERM_CHILD'] = '1'
    if ENV['DOCKER']
      Resque.redis = 'redis:6379'
    end
end

desc "Alias for resque:work (To run workers on Heroku)"
task "jobs:work" => ['resque:setup', 'resque:work']

desc "Clockwork task"
task "jobs:clock" => 'resque:setup' do
  require 'clockwork'
  require './clock.rb'
  Clockwork::run
end

task "routes" do
  $LOAD_PATH << Dir.pwd
  require 'hn_history/api'
  HnHistory::BaseAPI.routes.each do |route|
    p route
  end
end
