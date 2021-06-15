class CreateAddresses < ActiveRecord::Migration[5.2]
  def change
    create_table :addresses do |t|
      t.belongs_to :profile,            foreign_key: true
      t.belongs_to :region,             foreign_key: true
      t.belongs_to :province,           foreign_key: true
      t.belongs_to :municipality,       foreign_key: true
      t.timestamps
    end
  end
end
