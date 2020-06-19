class ChangePlayerId < ActiveRecord::Migration[5.2]
  def change
    remove_columns :games, :player1_id_id, :player2_id_id
    add_reference :games, :player1, foreign_key: {to_table: :users}
    add_reference :games, :player2, foreign_key: {to_table: :users}
  end
end
