# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

mike = User.create(email: "123@gmail.com", password: "password", username: "Loaded", first_name: "Paul", last_name: "Paulson")

post1 = Forum.create(title: "Best trucks for board dancing?", body: "I recently decided I wanted to trying dancing instead of downhill, but I use precision trucks currently. What trucks would you reccommend for carving/ dancing?")

comment1 = Contribution.create(body: "Hey homie, Paris v2 are definitely the way to go. A lot of the Loaded Dancer team uses em, I love them myself.")

post2 = Forum.create(title: "Who did it better? Liam Morgan or Dylan Hepworth?", body: "Some have said the Liam Morgan had the heaviest toeside the world has ever seen, but a since lost video showed Hepworth easily clearing 170 feet. Who actually is the king of toeside?")
