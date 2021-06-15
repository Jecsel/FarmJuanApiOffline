class CreateMainLivelihoods < ActiveRecord::Migration[5.2]
  def change
    create_table :main_livelihoods do |t|
      t.belongs_to      :profile,               foreign_key: true
      t.boolean         :is_farmer,             default: false
      t.boolean         :is_farmer_worker,      default: false
      t.boolean         :is_fisher_folk,        default: false
      t.string          :farming_income
      t.string          :non_farming_income
      t.timestamps
    end
  end
end
