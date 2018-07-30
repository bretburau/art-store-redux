class PiecesController < ApplicationController
    def index
        @posts = Piece.all
        render json: @posts
    end
end
