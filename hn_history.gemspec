# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'hn_history/version'

Gem::Specification.new do |spec|
  spec.name          = "hn_history"
  spec.version       = HnHistory::VERSION
  spec.authors       = ["Todd Lunter"]
  spec.email         = ["tlunter@gmail.com"]
  spec.description   = %q{TODO: Write a gem description}
  spec.summary       = %q{TODO: Write a gem summary}
  spec.homepage      = "https://github.com/tlunter/hn_history"
  spec.license       = "MIT"

  spec.files         = `git ls-files`.split($/)
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_dependency "clockwork"
  spec.add_dependency "daemons"
  spec.add_dependency "dm-aggregates"
  spec.add_dependency "dm-core"
  spec.add_dependency "dm-migrations"
  spec.add_dependency "dm-mysql-adapter"
  spec.add_dependency "factory_girl"
  spec.add_dependency "foreman"
  spec.add_dependency "grape"
  spec.add_dependency "grape-entity"
  spec.add_dependency "oboe"
  spec.add_dependency "ruby-hackernews"
  spec.add_dependency "resque"
  spec.add_dependency "sinatra"
  spec.add_dependency "unicorn"
  spec.add_development_dependency "bundler", "~> 1.3"
  spec.add_development_dependency "rake"
  spec.add_development_dependency "pry"
end
