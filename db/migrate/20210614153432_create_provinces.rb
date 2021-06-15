class CreateProvinces < ActiveRecord::Migration[5.2]
  def change
    create_table :provinces do |t|
      t.belongs_to    :region,    foreign_key: true
      t.string        :name
      t.timestamps
    end
  end
end
