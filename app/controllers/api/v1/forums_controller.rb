class Api::V1::ForumsController < ApiController
  def index
    render json: Forum.all
  end

  def show
    render json: Forum.find(params["id"])
  end

  def create
    forum = Forum.new(forum_params)
    if forum.save
      render json: {submitted:true} 
    else
      render json: { error: forum.errors.full_messages.to_sentence, submitted: false }
    end
  end
  private

  def forum_params
    params.require(:forum).permit(:title, :body)
  end
end