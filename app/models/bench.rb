class Bench < ActiveRecord::Base
  validates :description, :lng, :lat, :seating, presence: true

  def self.filter(filters)
    self.where(lat: filters['bounds']['southWest']['lat'] .. filters['bounds']['northEast']['lat'],
    lng: filters['bounds']['southWest']['lng'] .. filters['bounds']['northEast']['lng'], seating: filters['minSeat'] .. filters['maxSeat'])
  end
end
