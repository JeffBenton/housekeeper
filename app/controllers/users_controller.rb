class UsersController < ApplicationController

  def register
    puts "$$$$$$$$$$$$$$$$$"
    puts params[:name]
    puts "$$$$$$$$$$$$$$$$$"
    render json: { status: 200 }
  end

  def login
    puts params
  end

end