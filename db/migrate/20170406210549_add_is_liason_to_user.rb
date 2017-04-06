class AddIsLiasonToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :is_liason, :boolean
  end
end
