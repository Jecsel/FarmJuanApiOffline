class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :farmers do |t|
      t.string :username
      t.string :password
      t.string :user_token
      t.string :user_type
      t.boolean :status
      t.timestamps
    end
  end
end
