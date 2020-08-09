class Forum < ApplicationRecord
  validates :title, presence: true
  validates :body, presence: true

  has_many :users
  has_many :contributions
end