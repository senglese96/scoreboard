class CreateLeagues < ActiveRecord::Migration[5.2]
  def change
    create_table :leagues do |t|
      t.string :name, null: false
      t.integer :creator_id, null: false
      t.timestamps
    end

    add_index :leagues, :name
    add_index :leagues, :creator_id
  end
end
