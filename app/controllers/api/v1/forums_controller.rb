class Api::V1::ForumsController < ApiController
  def index
    render json: Forum.all
  end

  # def show
  #   forum = Forum.find(params[:id])
  #   render json:
  # end
end