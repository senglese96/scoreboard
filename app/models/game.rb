# == Schema Information
#
# Table name: games
#
#  id          :bigint           not null, primary key
#  winner_name :string           not null
#  loser_name  :string           not null
#  league_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Game < ApplicationRecord

end
