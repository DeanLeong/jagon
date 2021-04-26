class ChangeStringToText < ActiveRecord::Migration[6.0]
  def change
    change_column :characters, :biography, :text
  end
end
