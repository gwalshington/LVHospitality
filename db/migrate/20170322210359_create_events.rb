class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.datetime :date
      t.string :title
      t.string :subtitle
      t.string :description
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
