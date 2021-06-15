class FarmersActivity < ApplicationRecord
    has_one :main_livelihood_type
    has_many :farmers_activity_type
end
