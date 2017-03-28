require 'rails_helper'

RSpec.describe "Liasons", :type => :request do
  describe "GET /liasons" do
    it "works! (now write some real specs)" do
      get liasons_path
      expect(response.status).to be(200)
    end
  end
end
