module HnHistory
  module Jobs
    class << self
      def get_photo
        current_time = Time.now.utc

        puts "Photo for: #{current_time.xmlschema(3)}"

        entries = RubyHackernews::Entry.all.select(&:id)

        return if entries.length == 0

        photo = HnHistory::Models::Photo.new
        photo.created_at = current_time.to_i
        photo.save

        entries.map do |e|
          entry = HnHistory::Models::Entry.new
          entry.entry_id = e.id
          entry.title = e.link.title
          entry.link = e.link.href
          entry.site = e.link.site
          entry.upvotes = e.voting.score
          entry.position = e.number
          entry.photo = photo
          entry.save
        end
      end
    end
  end
end

Clockwork.every(30.seconds, 'photos.new') do
  HnHistory::Jobs.get_photo
end
