# == Schema Information
#
# Table name: participants
#
#  id        :bigint           not null, primary key
#  owner_id  :bigint
#  league_id :bigint
#  name      :string           not null
#

class Participant < ApplicationRecord
  validates :name, presence: true

  belongs_to :league

  belongs_to :owner, class_name: "User"

  set
end
