class Contribution < ApplicationRecord
  validates :body, presence: true

  belongs_to :users
  belongs_to :forums
end
