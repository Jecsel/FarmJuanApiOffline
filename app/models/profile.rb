class Profile < ApplicationRecord
    belongs_to          :user, touch: true
    has_one             :address
    belongs_to          :gender
    belongs_to          :civil_status
    belongs_to          :education_attaintment
    has_one             :main_livelihood
    has_many            :farm_parcel
    has_one_attached    :avatar
end
