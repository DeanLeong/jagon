class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :biography
      t.text :note
      t.boolean :playerCharacter
      t.string :imgURL

      t.timestamps
    end
  end
end
