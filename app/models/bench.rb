class Bench < ActiveRecord::Base
  validates :description, :lng, :lat, presence: true
end
