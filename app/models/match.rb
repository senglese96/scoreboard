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

class Match < ApplicationRecord
end
