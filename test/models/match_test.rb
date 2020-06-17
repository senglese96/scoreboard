# == Schema Information
#
# Table name: matches
#
#  id         :bigint           not null, primary key
#  league_id  :integer          not null
#  best_of    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class MatchTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
