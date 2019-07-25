class CreateTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.integer :owner_id, null: false
      t.integer :set_wins, :default => 0
      t.integer :set_losses, :default => 0
      t.integer :game_wins, :default => 0
      t.integer :league_id, null: false
      t.string :name, null: false
      t.timestamps
    end

    add_index :teams, :owner_id
    add_index :teams, :name
    add_index :teams, :league_id
  end
end
