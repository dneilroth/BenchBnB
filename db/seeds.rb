# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
benches = Bench.create([{description: "cozy", lat: 37.759, lng: 122.4261}, {description: "hard", lat:38.42, lng: 123.34}])
