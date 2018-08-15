class PiecesController < ApplicationController
    def index
        @pieces = Piece.all
        render json: @pieces
    end

    def create
        @piece = Piece.new
        @piece.name = params.require(:name)
        @piece.picture = piece_params
        tagIds = params.require(:tagIds)
        binding.pry
        tagIds.each do |tag_id|
            tag = Tags.find(tag_id)
            @piece.tags << tag
        end
        @piece.save
        binding.pry   
        render json: @piece
    end 

    def piece_params
        params.require(:uploaded_image)
    end
end
