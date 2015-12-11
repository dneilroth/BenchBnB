class Api::BenchesController < ApplicationController
  def index
    Bench.all
  end

  def create
  end
end
