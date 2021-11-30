class CreateYums < ActiveRecord::Migration[5.2]
  def change
    create_table :yums do |t|
      t.integer :yummer_id, null: false
      t.integer :story_id, null: false
      t.integer :comment_id
      t.timestamps
    end
    add_index :yums, :yummer_id
    add_index :yums, :story_id
    add_index :yums, :comment_id
  end
end
