class Piece < ApplicationRecord
    mount_uploader :picture, PictureUploader
    serialize :picture, JSON
    has_many :tags_piece
    has_many :tags, through: :tags_piece
end
