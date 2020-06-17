# == Schema Information
#
# Table name: participants
#
#  id        :bigint           not null, primary key
#  owner_id  :bigint
#  league_id :bigint
#  name      :string           not null
#

require 'test_helper'

class ParticipantTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
