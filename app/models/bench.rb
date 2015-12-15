class Bench < ActiveRecord::Base
  validates :description, :lng, :lat, :seating, presence: true

  def self.filter(filters)
    if filters['minSeat'] === ""
      filters['maxSeat'] = 0
    end

    if filters['maxSeat'] === ""
      filters['maxSeat'] = 100
    end

    self.where(lat: filters['bounds']['southWest']['lat'] .. filters['bounds']['northEast']['lat'],
    lng: filters['bounds']['southWest']['lng'] .. filters['bounds']['northEast']['lng'], seating: filters['minSeat'] .. filters['maxSeat'])
  end
end
