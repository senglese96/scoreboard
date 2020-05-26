class ChangeGames < ActiveRecord::Migration[5.2]
  def change
    remove_columns :games, :winner_name, :loser_name, :loser_games, :winner_games
    add_column :games, :winner_id, :integer, null: false
    add_column :games, :loser_id, :integer, null: false
    add_column :games, :set_id, :integer, null: false
    add_column :games, :winner_score, :integer, default: 0
    add_column :games, :loser_score, :integer, default: 0
  end
end
