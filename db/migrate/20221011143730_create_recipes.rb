class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.string :title
      t.string :description
      t.string :ingredients

      t.timestamps
    end
  end
end
