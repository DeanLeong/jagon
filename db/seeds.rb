# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Character.destroy_all
Note.destroy_all
Song.destroy_all


@character1 = Character.create!(
  name: 'Lemmy',
  biography: 'Lemmy is a Gunslinger from the Greying Wildlands. Formerly a simple theif, liar and muderer, he is now a theif, liar and murderer with a gun. Currently being haunted by the previous owner of said gun. Plays the Gunflute in Jargon. Writer of hit single “Satyr Boi”.',
  note: 'Test Note',
  playerCharacter: true,
  imgURL: 'https://i.pinimg.com/originals/14/39/07/143907511ed92777f68e77df61b340c9.jpg',
)

puts "#{Character.count} characters created!"

@note1 = Note.create!(
  note: 'Test note',
)

puts "#{Note.count} notes created!"

@song1 = Song.create!(
  song: 'Saytr Boi'
)

puts "#{Song.count} songs created!"

