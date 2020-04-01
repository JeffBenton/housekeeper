class UsersController < ApplicationController

  def register
    user = User.create(name: params[:name], email: params[:email], password: params[:password])
    if !user.errors.empty?
      render json: { status: 400 }
    else
      render json: { status: 200 }
    end
  end

  def login
    puts params
  end

end