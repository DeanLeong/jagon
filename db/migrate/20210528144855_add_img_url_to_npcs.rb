class AddImgUrlToNpcs < ActiveRecord::Migration[6.0]
  def change
    add_column :npcs, :imgURL, :string
  end
end
