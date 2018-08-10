class TagsPiece < ApplicationRecord
    belongs_to :piece
    belongs_to :tag
end
