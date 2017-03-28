require "rails_helper"

RSpec.describe LiasonsController, :type => :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/liasons").to route_to("liasons#index")
    end

    it "routes to #new" do
      expect(:get => "/liasons/new").to route_to("liasons#new")
    end

    it "routes to #show" do
      expect(:get => "/liasons/1").to route_to("liasons#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/liasons/1/edit").to route_to("liasons#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/liasons").to route_to("liasons#create")
    end

    it "routes to #update" do
      expect(:put => "/liasons/1").to route_to("liasons#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/liasons/1").to route_to("liasons#destroy", :id => "1")
    end

  end
end
