class PiecesController < ApplicationController
    def index
        @pieces = Piece.all
        render json: @pieces
    end

    def new
        binding.pry
    end 

    def piece_params
        params.require(:piece).permit(:name, :picture)
    end
end
