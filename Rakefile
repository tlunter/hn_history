require 'bundler/gem_tasks'
require 'resque/tasks'
require 'hn_history'

task "resque:setup" do
    ENV['QUEUE'] = '*'
    ENV['TERM_CHILD'] = '1'
end

desc "Alias for resque:work (To run workers on Heroku)"
task "jobs:work" do
  Rake::Task["resque:setup"].invoke
  Rake::Task["resque:work"].invoke
end

task "routes" do
  $LOAD_PATH << Dir.pwd
  require 'hn_history/api'
  HnHistory::BaseAPI.routes.each do |route|
    p route
  end
end
