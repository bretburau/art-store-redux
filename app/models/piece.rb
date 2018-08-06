class Piece < ApplicationRecord
    mount_uploader :picture, PictureUploader
    serialize :picture, JSON
end
