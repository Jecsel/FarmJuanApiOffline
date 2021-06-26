class CreateMainLivelihoodTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :main_livelihood_types do |t|
      t.belongs_to      :main_livelihood,              foreign_key: true
      t.belongs_to      :farmers_activity,             foreign_key: true
      t.belongs_to      :farmers_activity_type,        foreign_key: true
      t.string          :description
      t.timestamps
    end
  end
end
