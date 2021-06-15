class CreateFarmParcelDescriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :farm_parcel_descriptions do |t|
      t.references(:farm_parcel, null: false, type: :bigint)
      t.boolean         :is_registered_owner
      t.boolean         :is_other
      t.string          :other_spec
      t.boolean         :is_tenant
      t.string          :tenant_spec
      t.boolean         :is_lessee
      t.string          :lessee_spec
      t.integer          :farm_area
      t.belongs_to      :crop_commodity
      t.string          :head_count
      t.belongs_to      :farm_type
      t.integer         :organic_practioner                
      t.timestamps
    end
  end
end
