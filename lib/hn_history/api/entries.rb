require 'hn_history/api/entities/entries'

class Entries < Grape::API
  namespace :entries do
    get do
      present HnHistory::Models::Entry.all, with: HnHistory::API::Entities::Entry
    end
  end
end
