class CreateMatches < ActiveRecord::Migration[5.2]
  def change
    create_table :matches do |t|
      t.integer "league_id", null: false
      t.integer "best_of", null: false
      t.timestamps
    end
  end
end
