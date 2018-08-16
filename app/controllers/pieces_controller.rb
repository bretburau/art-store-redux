class PiecesController < ApplicationController
    def index
        @pieces = Piece.all
        render json: @pieces
    end

    def create
        @piece = Piece.new
        @piece.name = params.require(:name)
        @piece.picture = piece_params
        tagIds = params.require(:tagIds).split(',')
        tagIds.each do |tag_id|
            tag = Tag.find(tag_id.to_i)
            @piece.tags << tag
        end
        @piece.save
        render json: @piece
    end 

    def show
        @piece = Piece.find(params[:id])
        render json: @piece
    end

    def piece_params
        params.require(:uploaded_image)
    end
end
