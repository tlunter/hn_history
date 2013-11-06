module HnHistory
  Clockwork.every(5.minutes, 'entries.refresh') do
    current_time = Time.now

    puts "Entries for: #{current_time.xmlschema(3)}"

    entries = RubyHackernews::Entry.all.select(&:id)
    entries.map do |e|
      entry = HnHistory::Models::Entry.first_or_create(id: e.id)
      photo = HnHistory::Models::Photo.new
      photo.title = e.link.title
      photo.site = e.link.site
      photo.upvotes = e.voting.score
      photo.position = e.number
      photo.entry = entry
      photo.created_at = current_time
      photo.save
    end
  end
end
