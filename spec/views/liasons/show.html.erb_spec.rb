require 'rails_helper'

RSpec.describe "liasons/show", :type => :view do
  before(:each) do
    @liason = assign(:liason, Liason.create!(
      :first_name => "First Name",
      :phone => "Phone",
      :email => "Email",
      :photo_path => "Photo Path"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/First Name/)
    expect(rendered).to match(/Phone/)
    expect(rendered).to match(/Email/)
    expect(rendered).to match(/Photo Path/)
  end
end
