# == Schema Information
#
# Table name: teams
#
#  id         :bigint           not null, primary key
#  owner_id   :integer          not null
#  set_wins   :integer          default(0)
#  set_losses :integer          default(0)
#  game_wins  :integer          default(0)
#  league_id  :integer          not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class TeamTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
