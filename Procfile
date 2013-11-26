web: bundle exec unicorn -l unix:///tmp/hn_history.sock
resque: bundle exec rake jobs:work
clockwork: bundle exec clockwork ./clock.rb
