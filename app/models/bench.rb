class Bench < ActiveRecord::Base
  validates :description, :lng, :lat, presence: true

  def self.in_bounds(bounds)
    self.where(lat: bounds['southWest']['lat'] .. bounds['northEast']['lat'],
    lng: bounds['southWest']['lng'] .. bounds['northEast']['lng']
    )
  end
end
