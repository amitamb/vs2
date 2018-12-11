class CreateExtensions < ActiveRecord::Migration[5.2]
  def change
    create_table :extensions do |t|
      t.string :name
      t.text :description
      t.string :logo

      t.timestamps
    end
  end
end
