class CreateCropCommodities < ActiveRecord::Migration[5.2]
  def change
    create_table :crop_commodities do |t|
      t.string          :name
      t.timestamps
    end
  end
end
