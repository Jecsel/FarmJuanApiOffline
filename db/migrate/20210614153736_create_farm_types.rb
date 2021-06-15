class CreateFarmTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :farm_types do |t|
      t.string          :name
      t.timestamps
    end
  end
end
