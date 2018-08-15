class PieceSerializer < ActiveModel::Serializer
  attributes :id, :name, :picture
  has_many :tags
end
