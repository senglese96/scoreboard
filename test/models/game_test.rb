# == Schema Information
#
# Table name: games
#
#  id           :bigint           not null, primary key
#  winner_name  :string           not null
#  loser_name   :string           not null
#  league_id    :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  loser_games  :integer
#  winner_games :integer
#

require 'test_helper'

class GameTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
