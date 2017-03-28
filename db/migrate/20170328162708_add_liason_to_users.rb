class AddLiasonToUsers < ActiveRecord::Migration[5.0]
  def change
    add_reference :users, :liason, foreign_key: true
  end
end
