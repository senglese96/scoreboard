# == Schema Information
#
# Table name: games
#
#  id            :bigint           not null, primary key
#  league_id     :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  set_id        :integer          not null
#  player1_id_id :bigint
#  player2_id_id :bigint
#  player1_score :integer          default(0)
#  player2_score :integer          default(0)
#

class Game < ApplicationRecord
  belongs_to :league

  belongs_to :player1, class_name: "Participant", optional: true
  belongs_to :player2, class_name: "Participant", optional: true

  def winner
    if self.player1_score > self.player2_score
      return 
    end
  end
end