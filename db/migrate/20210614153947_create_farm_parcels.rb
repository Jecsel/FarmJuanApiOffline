class CreateFarmParcels < ActiveRecord::Migration[5.2]
  def change
    create_table :farm_parcels do |t|
      t.belongs_to      :profile,                     foreign_key: true
      t.belongs_to      :municipality,                foreign_key: true
      t.string          :brgy
      t.integer         :total_farm_area
      t.integer         :lot_no
      t.string          :ownership_document_no
      t.blob            :document_file
      t.timestamps
    end
  end
end
