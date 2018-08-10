class CreateTagsPieces < ActiveRecord::Migration[5.2]
  def change
    create_table :tags_pieces do |t|
      t.integer :piece_id
      t.integer :tag_id

      t.timestamps
    end
  end
end
