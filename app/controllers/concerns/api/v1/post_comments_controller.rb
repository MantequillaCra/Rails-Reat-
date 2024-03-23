class Api::V1::PostCommentsController < ApplicationController
  before_action :set_post_comment, only: %i[ show update destroy ]

  # GET /post_comments
  def index
    # busca todos los posts por el Post_id y se almacenan en la variable @posts
    @comments = Post.find(params[:post_id])
    # llama todos los comentarios del post (por post_id) y los almacenan en la variable llamada @comments
    @postcomments = @comments.post_comments.all

    render json: @postcomments
  end

  # GET /post_comments/1
  def show
    render json: @post_comment
  end

  # POST /post_comments
  def create
    @post_comment = PostComment.new(post_comment_params)

    if @post_comment.save
      render json: @post_comment, status: :created, location: @post_comment
    else
      render json: @post_comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /post_comments/1
  def update
    if @post_comment.update(post_comment_params)
      render json: @post_comment
    else
      render json: @post_comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /post_comments/1
  def destroy
    @post_comment.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post_comment
      @post_comment = PostComment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_comment_params
      params.require(:post_comment).permit(:body, :post_id)
    end
end
