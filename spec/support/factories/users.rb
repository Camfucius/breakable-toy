require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    #makes it unique! sequence
    password { 'password' }
    password_confirmation { 'password' }
    username { 'username' }
    first_name { 'Gerald' }
    last_name { 'Donfheimer' }
  end
end
