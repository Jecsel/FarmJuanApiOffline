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

ActiveRecord::Schema.define(version: 2021_06_14_153402) do

  create_table "bluetoothData", primary_key: "ID_frame", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", force: :cascade do |t|
    t.timestamp "TimeStamp", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.string "MAC", limit: 17, null: false
    t.string "ID", limit: 30, null: false, collation: "utf8_general_ci"
    t.string "RSSI", limit: 4, null: false, collation: "utf8_general_ci"
    t.string "Vendor", limit: 150, null: false, collation: "utf8_general_ci"
    t.string "cod", limit: 20, null: false
    t.bigint "sync", default: 0, null: false, unsigned: true
    t.string "MeshliumID", limit: 150, default: "meshlium", null: false
  end

  create_table "currentSensors", primary_key: "OBJECTID", id: :integer, default: nil, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", force: :cascade do |t|
    t.integer "waspmoteid", null: false
    t.string "name", limit: 45, null: false, collation: "latin1_swedish_ci"
    t.string "description", limit: 45, null: false, collation: "latin1_swedish_ci"
    t.string "sensorReading", limit: 45, null: false, collation: "latin1_swedish_ci"
    t.string "sensorType", limit: 45, null: false, collation: "latin1_swedish_ci"
    t.float "sensorValue", limit: 53
    t.string "extendedValue", limit: 45, collation: "latin1_swedish_ci"
    t.string "units", limit: 45, null: false, collation: "latin1_swedish_ci"
    t.string "timestamp", limit: 45, null: false, collation: "latin1_swedish_ci"
    t.float "x", limit: 53, null: false
    t.float "y", limit: 53, null: false
  end

  create_table "encryptionData", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", force: :cascade do |t|
    t.string "waspmote_id", limit: 100, null: false
    t.string "private_aes", limit: 512
    t.string "public_rsa", limit: 512
    t.string "modulus_rsa", limit: 512
    t.index ["id"], name: "id", unique: true
  end

  create_table "farmers", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", force: :cascade do |t|
    t.string "username"
    t.string "password"
    t.string "user_token"
    t.string "user_type"
    t.boolean "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "gpsData", primary_key: "ID_frame", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", force: :cascade do |t|
    t.timestamp "TimeStamp", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.datetime "date", null: false
    t.string "longitude", limit: 20, null: false
    t.string "latitude", limit: 20, null: false
    t.string "altitude", limit: 20, null: false
    t.integer "satellites", null: false
    t.string "speed", limit: 20, null: false
    t.bigint "sync", default: 0, null: false, unsigned: true
    t.string "MeshliumID", limit: 150, default: "meshlium", null: false
  end

  create_table "last_data", primary_key: ["id_wasp", "sensor"], options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", force: :cascade do |t|
    t.string "id_wasp", limit: 45, default: "id_wasp", null: false
    t.string "sensor", limit: 30, default: "sensor", null: false
    t.string "value", limit: 45, default: "0", null: false
    t.timestamp "timestamp", default: -> { "CURRENT_TIMESTAMP" }, null: false
  end

  create_table "login", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", force: :cascade do |t|
    t.string "user", limit: 75, null: false
    t.string "passwd", limit: 80, null: false
  end

  create_table "meshlium", primary_key: "objectid", id: :integer, default: nil, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", force: :cascade do |t|
    t.string "name", limit: 15, null: false
    t.string "description", limit: 100, null: false
    t.float "x", limit: 53, null: false
    t.float "y", limit: 53, null: false
    t.integer "spatialReference", null: false
    t.timestamp "timestamp", default: -> { "CURRENT_TIMESTAMP" }, null: false
  end

  create_table "sensorCloud", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", force: :cascade do |t|
    t.timestamp "timestamp", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.string "MeshliumID", limit: 150, default: "local", null: false
    t.bigint "sync", default: 0, null: false, unsigned: true
    t.string "id_node", limit: 22
    t.integer "frame_type"
    t.string "raw", limit: 250, default: "noraw", null: false
    t.index ["id_node"], name: "id_node"
    t.index ["timestamp"], name: "time"
  end

  create_table "sensorParser", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", force: :cascade do |t|
    t.string "id_wasp", limit: 16
    t.string "id_secret", limit: 22
    t.integer "frame_type"
    t.integer "frame_number"
    t.string "sensor", limit: 16
    t.string "value", limit: 50
    t.timestamp "timestamp", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.bigint "sync", default: 0, null: false, unsigned: true
    t.string "raw", limit: 100, default: "noraw", null: false
    t.integer "parser_type", limit: 1, default: 0, null: false
    t.string "MeshliumID", limit: 150, default: "local", null: false
    t.index ["id_wasp", "sensor"], name: "tw"
    t.index ["id_wasp", "timestamp"], name: "visualizer"
    t.index ["id_wasp"], name: "id_wasp"
    t.index ["timestamp"], name: "time"
  end

  create_table "sensors", primary_key: ["id", "list"], options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", force: :cascade do |t|
    t.integer "id", null: false
    t.string "name", limit: 45, null: false
    t.string "description", limit: 45, null: false
    t.string "id_ascii", limit: 45, null: false
    t.string "units", limit: 45, null: false
    t.integer "value", null: false
    t.boolean "vis", default: false, null: false, unsigned: true
    t.integer "fields", null: false
    t.string "list", limit: 45, default: "", null: false
  end

  create_table "tokens", primary_key: "idtokens", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", force: :cascade do |t|
    t.string "token", limit: 45, null: false
    t.string "expires", limit: 45, null: false
    t.string "referer", limit: 45
    t.string "ip", limit: 45
  end

  create_table "users", primary_key: "idusers", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", force: :cascade do |t|
    t.string "user", limit: 45, null: false
    t.string "passwd", limit: 45, null: false
  end

  create_table "waspmote", primary_key: "OBJECTID", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", force: :cascade do |t|
    t.string "name", limit: 45, null: false
    t.string "description", limit: 45, null: false
    t.float "x", limit: 53, null: false
    t.float "y", limit: 53, null: false
    t.float "spatialReference", limit: 53, null: false
    t.timestamp "timestamp", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.integer "sensorCount", null: false
    t.string "meshliumid", limit: 45, null: false
  end

  create_table "wifiScan", id: false, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", force: :cascade do |t|
    t.integer "ID_frame", null: false, auto_increment: true
    t.timestamp "TimeStamp", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.string "MAC", limit: 17, null: false
    t.string "SSID", limit: 32, null: false
    t.string "RSSI", limit: 4, null: false, collation: "utf8_general_ci"
    t.string "Vendor", limit: 150, null: false
    t.string "Type", limit: 10, null: false
    t.string "AP", limit: 17, null: false
    t.bigint "sync", default: 0, null: false, unsigned: true
    t.string "MeshliumID", limit: 150, null: false
    t.index ["ID_frame"], name: "ID_frame"
  end

end
