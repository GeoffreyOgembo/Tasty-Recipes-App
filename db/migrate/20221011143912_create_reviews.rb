class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :textbody
      t.string :rating

      t.timestamps
    end
  end
end
