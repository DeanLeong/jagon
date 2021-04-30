class CreateCharacterNotes < ActiveRecord::Migration[6.0]
  def change
    create_table :character_notes do |t|
      t.text :content
      t.string :title
      t.references :character, null: false, foreign_key: true

      t.timestamps
    end
  end
end
