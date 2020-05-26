# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
m = User.create!(username: 'Mang0', password: 'thatsthemango', email: 'mango@gmail.com')
p = User.create!(username: 'Punk', password: 'PunkDaBest', email: 'punk@gmail.com')
g = User.create!(username: 'GO1', password: 'GoUnoLoco', email: 'go1@gmail.com')
d = User.create!(username: 'NoHablo96', password: 'GreenGoddess', email: 'senglese96@gmail.com')
sonic = User.create!(username: 'sonicfox', password: 'Schmixin', email: 'sonicfx@gmail.com')
wei = User.create!(username: 'weisa', password: 'Doujin', email: 'onthewei@gmail.com')
gimr = User.create!(username: 'Gimr', password: 'TheGimzWinz', email: 'gimr@vgbootcamp.com')

League.destroy_all
l = League.create!(name: 'Smash League', creator_id: d.id)

Team.destroy_all
Team.create!(owner_id: d.id, league_id: l.id, name: 'The Speaker')
