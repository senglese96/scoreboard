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

require 'test_helper'

class GameTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
