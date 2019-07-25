# == Schema Information
#
# Table name: leagues
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  creator_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class League < ApplicationRecord
    validates :name, presence: true

    has_many(
        :teams,
        foreign_key: :league_id,
        class_name: 'League'
    )

    has_many(
        :members,
        through: :teams,
        source: :owner
    )

    belongs_to(
        :creator,
        foreign_key: :creator_id,
        class_name: 'User'
    )
end
