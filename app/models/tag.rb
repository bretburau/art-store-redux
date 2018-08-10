class Tag < ApplicationRecord
    has_many :tags_piece
    has_many :pieces, through: :tags_piece
end
