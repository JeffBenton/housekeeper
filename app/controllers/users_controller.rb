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
    user = User.find_by(email: params[:email])
    if user and user.authenticate(params[:password])
      render json: { status: 200 }
    else
      render json: { status: 400 }
    end
  end

end