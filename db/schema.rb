# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_06_26_053200) do

  create_table "active_storage_attachments", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "addresses", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "profile_id"
    t.bigint "region_id"
    t.bigint "province_id"
    t.bigint "municipality_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["municipality_id"], name: "index_addresses_on_municipality_id"
    t.index ["profile_id"], name: "index_addresses_on_profile_id"
    t.index ["province_id"], name: "index_addresses_on_province_id"
    t.index ["region_id"], name: "index_addresses_on_region_id"
  end

  create_table "animal_types", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "civil_statuses", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "crop_commodities", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "education_attaintments", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "farm_parcel_descriptions", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "farm_parcel_id", null: false
    t.boolean "is_registered_owner"
    t.boolean "is_other"
    t.string "other_spec"
    t.boolean "is_tenant"
    t.string "tenant_spec"
    t.boolean "is_lessee"
    t.string "lessee_spec"
    t.integer "farm_area"
    t.bigint "crop_commodity_id"
    t.string "head_count"
    t.bigint "farm_type_id"
    t.integer "organic_practioner"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["crop_commodity_id"], name: "index_farm_parcel_descriptions_on_crop_commodity_id"
    t.index ["farm_parcel_id"], name: "index_farm_parcel_descriptions_on_farm_parcel_id"
    t.index ["farm_type_id"], name: "index_farm_parcel_descriptions_on_farm_type_id"
  end

  create_table "farm_parcels", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "profile_id"
    t.bigint "municipality_id"
    t.string "brgy"
    t.integer "total_farm_area"
    t.integer "lot_no"
    t.string "ownership_document_no"
    t.binary "document_file"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["municipality_id"], name: "index_farm_parcels_on_municipality_id"
    t.index ["profile_id"], name: "index_farm_parcels_on_profile_id"
  end

  create_table "farm_types", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "farmers_activities", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name"
    t.string "title"
    t.string "subtitle"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "farmers_activity_types", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "farmers_activity_id"
    t.string "name"
    t.boolean "with_description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["farmers_activity_id"], name: "index_farmers_activity_types_on_farmers_activity_id"
  end

  create_table "genders", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "main_livelihood_types", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "main_livelihood_id"
    t.bigint "farmers_activity_id"
    t.bigint "farmers_activity_type_id"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["farmers_activity_id"], name: "index_main_livelihood_types_on_farmers_activity_id"
    t.index ["farmers_activity_type_id"], name: "index_main_livelihood_types_on_farmers_activity_type_id"
    t.index ["main_livelihood_id"], name: "index_main_livelihood_types_on_main_livelihood_id"
  end

  create_table "main_livelihoods", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "profile_id"
    t.boolean "is_farmer", default: false
    t.boolean "is_farmer_worker", default: false
    t.boolean "is_fisher_folk", default: false
    t.string "farming_income"
    t.string "non_farming_income"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["profile_id"], name: "index_main_livelihoods_on_profile_id"
  end

  create_table "municipalities", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "province_id"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["province_id"], name: "index_municipalities_on_province_id"
  end

  create_table "profiles", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "first_name"
    t.string "middle_name"
    t.string "last_name"
    t.string "extension_name"
    t.bigint "gender_id", null: false
    t.string "house"
    t.string "street"
    t.string "barangay"
    t.string "user_contact_number"
    t.date "dob"
    t.string "place_of_birth"
    t.string "religion"
    t.bigint "civil_status_id", null: false
    t.bigint "education_attaintment_id", null: false
    t.string "spouse_name"
    t.string "mother_name"
    t.boolean "household_head"
    t.string "household_name"
    t.string "household_head_relationship"
    t.string "numbers_household_member"
    t.string "numbers_of_male"
    t.string "numbers_of_female"
    t.boolean "pwd", default: false
    t.boolean "four_p_beneficiary", default: false
    t.boolean "agrarian", default: false
    t.boolean "with_government_id", default: false
    t.string "government_id"
    t.boolean "member_association", default: false
    t.string "association_id"
    t.boolean "indigenous_group", default: false
    t.string "indigenous_id"
    t.string "emergency_person_name"
    t.string "emergency_person_number"
    t.binary "photo"
    t.string "ref_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["civil_status_id"], name: "index_profiles_on_civil_status_id"
    t.index ["education_attaintment_id"], name: "index_profiles_on_education_attaintment_id"
    t.index ["gender_id"], name: "index_profiles_on_gender_id"
    t.index ["user_id"], name: "index_profiles_on_user_id"
  end

  create_table "provinces", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "region_id"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["region_id"], name: "index_provinces_on_region_id"
  end

  create_table "regions", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "username"
    t.string "password"
    t.string "user_token"
    t.string "user_type"
    t.boolean "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "addresses", "municipalities"
  add_foreign_key "addresses", "profiles"
  add_foreign_key "addresses", "provinces"
  add_foreign_key "addresses", "regions"
  add_foreign_key "farm_parcels", "municipalities"
  add_foreign_key "farm_parcels", "profiles"
  add_foreign_key "farmers_activity_types", "farmers_activities"
  add_foreign_key "main_livelihood_types", "farmers_activities"
  add_foreign_key "main_livelihood_types", "farmers_activity_types"
  add_foreign_key "main_livelihood_types", "main_livelihoods"
  add_foreign_key "main_livelihoods", "profiles"
  add_foreign_key "municipalities", "provinces"
  add_foreign_key "provinces", "regions"
end
