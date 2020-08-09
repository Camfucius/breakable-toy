require 'rails_helper'

RSpec.describe Api::V1::ForumsController, type: :controller do
  describe "GET#Index" do
    let!(:forum1) {FactoryBot.create(:forum)}
    let!(:forum2) {FactoryBot.create(:forum)}

    it "returns a status of 200" do
      get :index

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"
    end

    it "returns all the forums in the database" do
      get :index

      returned_json = JSON.parse(response.body)
      expect(returned_json[0]["title"]).to eq(forum1.title)
      expect(returned_json[0]["body"]).to eq(forum1.body)
      expect(returned_json[1]["title"]).to eq(forum2.title)
      expect(returned_json[1]["body"]).to eq(forum2.body)
      #remember once you have a serializer, you'll need that "forum" key
    end
  end
end