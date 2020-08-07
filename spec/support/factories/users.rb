require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
    sequence(:username) {|n| "user#{n}" }
    first_name { 'Gerald' }
    last_name { 'Donfheimer' }
  end
end
