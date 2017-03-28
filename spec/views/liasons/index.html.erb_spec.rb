require 'rails_helper'

RSpec.describe "liasons/index", :type => :view do
  before(:each) do
    assign(:liasons, [
      Liason.create!(
        :first_name => "First Name",
        :phone => "Phone",
        :email => "Email",
        :photo_path => "Photo Path"
      ),
      Liason.create!(
        :first_name => "First Name",
        :phone => "Phone",
        :email => "Email",
        :photo_path => "Photo Path"
      )
    ])
  end

  it "renders a list of liasons" do
    render
    assert_select "tr>td", :text => "First Name".to_s, :count => 2
    assert_select "tr>td", :text => "Phone".to_s, :count => 2
    assert_select "tr>td", :text => "Email".to_s, :count => 2
    assert_select "tr>td", :text => "Photo Path".to_s, :count => 2
  end
end
