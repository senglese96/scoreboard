# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string
#  session_token   :string
#  email           :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    validates :username, :session_token, :password_digest, :email, presence: true
    validates :username, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}

    attr_reader :password

    after_initialize :ensure_session_token

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(guess)
        BCrypt::Password.new(self.password_digest).is_password?(guess)
    end

    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save
        return self.session_token
    end

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        user && user.is_password?(password) ? user : nil
    end

    has_many(
        :created_leagues,
        foreign_key: :creator_id,
        class_name: 'League'
    )

    has_many(
        :teams,
        foreign_key: :owner_id,
        class_name: 'Team'
    )

    has_many(
        :competing_leagues,
        through: :teams,
        source: :league
    )
end
