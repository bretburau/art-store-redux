class AddTagIdToPieces < ActiveRecord::Migration[5.2]
  def change
    add_column :pieces, :tag_id, :integer
  end
end
