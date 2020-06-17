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

require 'test_helper'

class GameTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
