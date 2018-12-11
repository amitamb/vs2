# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
user = CreateAdminService.new.call
puts 'CREATED ADMIN USER: ' << user.email


exts = [
	{
		name: "Stack Overflow",
		description: "This is unofficial SO extension"
	},
	{
		name: "Calculator",
		description: "Basic calculator"
	},
	{
		name: "Wikipedia",
		description: "Wikipedia search service."
	},
	{
		name: "Google",
		description: "Basic Google search"
	},
	{
		name: "Netflix",
		description: "Search Netflix shows"
	}
]
exts.each do |ext|
	extension = Extension.where(name: ext[:name], description: ext[:description]).first_or_initialize
	if extension.new_record?
		extension.save(dalidate: false)
		puts 'CREATED EXTENSION: ' << extension.name
	end
end