class CreateEducationAttaintments < ActiveRecord::Migration[5.2]
  def change
    create_table :education_attaintments do |t|
      t.string :name
      t.timestamps
    end
  end
end
