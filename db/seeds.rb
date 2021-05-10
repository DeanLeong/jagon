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
  biography: 'Lemmy is a Gunslinger from the Greying Wildlands. Plays the Gunflute in Jargon. Writer of hit single “Satyr Boi”.',
  note: 'Test Note',
  imgURL: 'https://i.pinimg.com/originals/14/39/07/143907511ed92777f68e77df61b340c9.jpg',
)

@character2 = Character.create!(
  name: 'Vrax the Brewer',
  biography: 'Vrax Bio',
  note: 'Test Note',
  imgURL: 'https://pbs.twimg.com/media/EAHR-1GUEAEtEXh.jpg',
)

@character3 = Character.create!(
  name: 'Jix',
  biography: 'Jix Bio',
  note: 'Test Note',
  imgURL: 'https://i.redd.it/e65mizc5jkk01.jpg',
)

@character4 = Character.create!(
  name: 'Nine',
  biography: 'Nine Bio',
  note: 'Test Note',
  imgURL: 'data:image/jpeg;base64,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',
)

@character5 = Character.create!(
  name: 'Test Man 1',
  biography: 'Test man bio',
  note: 'Test Note',
  imgURL: 'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F513343414%2F0x0.jpg%3Ffit%3Dscale',
)

@character6 = Character.create!(
  name: 'Test Man 2',
  biography: 'Test man bio',
  note: 'Test Note',
  imgURL: 'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F513343414%2F0x0.jpg%3Ffit%3Dscale',
)

@character7 = Character.create!(
  name: 'Test Man 3',
  biography: 'Test man bio',
  note: 'Test Note',
  imgURL: 'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F513343414%2F0x0.jpg%3Ffit%3Dscale',
)

@character8 = Character.create!(
  name: 'Test Man 4',
  biography: 'Test man bio',
  note: 'Test Note',
  imgURL: 'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F513343414%2F0x0.jpg%3Ffit%3Dscale',
)

@character9 = Character.create!(
  name: 'Test Man 5',
  biography: 'Test man bio',
  note: 'Test Note',
  imgURL: 'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F513343414%2F0x0.jpg%3Ffit%3Dscale',
)

@character10 = Character.create!(
  name: 'Test Man 6',
  biography: 'Test man bio',
  note: 'Test Note',
  imgURL: 'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F513343414%2F0x0.jpg%3Ffit%3Dscale',
)

@character11 = Character.create!(
  name: 'Test Man 7',
  biography: 'Test man bio',
  note: 'Test Note',
  imgURL: 'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F513343414%2F0x0.jpg%3Ffit%3Dscale',
)

@character12 = Character.create!(
  name: 'Test Man 8',
  biography: 'Test man bio',
  note: 'Test Note',
  imgURL: 'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F513343414%2F0x0.jpg%3Ffit%3Dscale',
)

@character13 = Character.create!(
  name: 'Test Man 9',
  biography: 'Test man bio',
  note: 'Test Note',
  imgURL: 'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F513343414%2F0x0.jpg%3Ffit%3Dscale',
)

@character14 = Character.create!(
  name: 'Test Man 10',
  biography: 'Test man bio',
  note: 'Test Note',
  imgURL: 'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F513343414%2F0x0.jpg%3Ffit%3Dscale',
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