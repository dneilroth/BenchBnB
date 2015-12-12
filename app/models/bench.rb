class Bench < ActiveRecord::Base
  validates :description, :lng, :lat, presence: true

  def self.in_bounds(bounds)
    benches = []
    north_east_lat = bounds[:northEast][:lat]
    north_east_lng = bounds[:northEast][:lng]
    south_west_lat = bounds[:southWest][:lat]
    south_west_lng = bounds[:southWest][:lng]
    self.all do |bench|
      if (bench.lat < north_east_lat && bench.lat < south_west_lat) &&
          (bench.lng > north_east_lng && bench.lng > south_west_lng)
          benches.push(bench)
      end
    end
    benches
  end
end
