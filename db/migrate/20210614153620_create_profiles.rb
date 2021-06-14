class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.references(:user, null: false, type: :bigint)
      t.string          :first_name
      t.string          :middle_name
      t.string          :last_name
      t.string          :extension_name
      t.references(:gender, null: false, type: :bigint)
      t.string          :house
      t.string          :street
      t.string          :barangay
      t.string          :user_contact_number
      t.date            :dob
      t.string          :place_of_birth
      t.string          :religion
      t.references(:civil_status, null: false, type: :bigint)
      t.references(:education_attaintment, null: false, type: :bigint)
      t.string          :spouse_name
      t.string          :mother_name
      t.boolean          :household_head
      t.string          :household_name
      t.string          :household_head_relationship
      t.string          :numbers_household_member
      t.string          :numbers_of_male
      t.string          :numbers_of_female
      t.boolean         :pwd,                           default: false
      t.boolean         :four_p_beneficiary,            default: false
      t.boolean         :agrarian,                       default: false
      t.boolean         :with_government_id,            default: false
      t.string          :government_id
      t.boolean         :member_association,            default: false
      t.string          :association_id
      t.boolean         :indigenous_group,              default: false
      t.string          :indigenous_id
      t.string          :emergency_person_name
      t.string          :emergency_person_number
      t.blob            :photo
      t.string         :ref_number
      t.timestamps
    end
  end
end
