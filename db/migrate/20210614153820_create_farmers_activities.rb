class CreateFarmersActivities < ActiveRecord::Migration[5.2]
  def change
    create_table :farmers_activities do |t|
      t.string          :name
      t.string          :title
      t.string          :subtitle
      t.timestamps
    end
  end
end
