class CreateFarmersActivityTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :farmers_activity_types do |t|
      t.belongs_to      :farmers_activity,       foreign_key: true
      t.string          :name
      t.boolean         :with_description
      t.timestamps
    end
  end
end
