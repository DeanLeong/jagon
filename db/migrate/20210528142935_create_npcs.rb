class CreateNpcs < ActiveRecord::Migration[6.0]
  def change
    create_table :npcs do |t|
      t.string :name
      t.text :biography
      t.text :note
    end
  end
end
