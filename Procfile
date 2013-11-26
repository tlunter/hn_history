web: bundle exec unicorn -l unix:///tmp/hn_history.sock -c config/unicorn.rb
resque: bundle exec rake jobs:work
clockwork: bundle exec clockwork ./clock.rb
