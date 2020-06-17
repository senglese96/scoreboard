class CreateParticipants < ActiveRecord::Migration[5.2]
  def change
    create_table :participants do |t|
      t.references :owner, foreign_key: {to_table: :users}
      t.references :league, foreign_key: true
      t.string :name, null: false
    end
  end
end
