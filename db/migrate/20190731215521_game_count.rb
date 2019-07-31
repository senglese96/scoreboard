class GameCount < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :loser_games, :integer
    add_column :games, :winner_games, :integer
  end
end
