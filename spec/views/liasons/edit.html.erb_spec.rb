require 'rails_helper'

RSpec.describe "liasons/edit", :type => :view do
  before(:each) do
    @liason = assign(:liason, Liason.create!(
      :first_name => "MyString",
      :phone => "MyString",
      :email => "MyString",
      :photo_path => "MyString"
    ))
  end

  it "renders the edit liason form" do
    render

    assert_select "form[action=?][method=?]", liason_path(@liason), "post" do

      assert_select "input#liason_first_name[name=?]", "liason[first_name]"

      assert_select "input#liason_phone[name=?]", "liason[phone]"

      assert_select "input#liason_email[name=?]", "liason[email]"

      assert_select "input#liason_photo_path[name=?]", "liason[photo_path]"
    end
  end
end
