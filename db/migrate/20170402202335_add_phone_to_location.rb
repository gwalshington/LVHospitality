class AddPhoneToLocation < ActiveRecord::Migration[5.0]
  def change
    add_column :locations, :phone, :string
    add_column :locations, :address, :string
  end
end
