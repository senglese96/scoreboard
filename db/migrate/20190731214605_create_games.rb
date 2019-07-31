class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :winner_name, null: false
      t.string :loser_name, null: false
      t.integer :league_id, null: false
      t.timestamps
    end

    add_index :games, :league_id
  end
end
