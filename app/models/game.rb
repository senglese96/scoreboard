# == Schema Information
#
# Table name: games
#
#  id           :bigint           not null, primary key
#  league_id    :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  winner_id    :integer          not null
#  loser_id     :integer          not null
#  set_id       :integer          not null
#  winner_score :integer          default(0)
#  loser_score  :integer          default(0)
#

class Game < ApplicationRecord
  belongs_to :league

  belongs_to :winner, class_name: "Participant"
  belongs_to :loser, class_name: "Participant"

  
end
