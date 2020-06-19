class ChangeGameWinnerToPlayer < ActiveRecord::Migration[5.2]
  def change
    remove_columns :games, :winner_id, :loser_id, :winner_score, :loser_score
    add_reference :games, :player1_id, foreign_key: {to_table: :users}
    add_reference :games, :player2_id, foreign_key: {to_table: :users}
    add_column :games, :player1_score, :integer, default: 0
    add_column :games, :player2_score, :integer, default: 0
  end
end
