class FarmersActivityType < ApplicationRecord
    belongs_to :farmers_activity
    has_one :farmers_activity_type
end
