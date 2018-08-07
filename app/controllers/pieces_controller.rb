class PiecesController < ApplicationController
    def index
        @pieces = Piece.all
        render json: @pieces
    end

    def create
        @piece = Piece.new
    end 

    def piece_params
        params.require(:uploaded_image)
    end
end
