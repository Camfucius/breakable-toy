class Api::v1::UsersController < ApiController
  def index
    render json: User.all
  end
end