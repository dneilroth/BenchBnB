class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.filter(params[:filters])
  end

  def create
    @bench = Bench.new(bench_params)
    @bench.save!
  end

  private
  def bench_params
    params.require(:bench).permit(:seating, :description, :lat, :lng)
  end

end
