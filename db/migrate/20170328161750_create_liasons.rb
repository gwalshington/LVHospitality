class CreateLiasons < ActiveRecord::Migration[5.0]
  def change
    create_table :liasons do |t|
      t.string :first_name
      t.string :phone
      t.string :email
      t.string :photo_path

      t.timestamps
    end
  end
end
