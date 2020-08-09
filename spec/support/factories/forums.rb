require 'factory_bot'

FactoryBot.define do
  factory :forum do
    title {'uniquetitle'}
    body {'uniquebody'}
  end
end
