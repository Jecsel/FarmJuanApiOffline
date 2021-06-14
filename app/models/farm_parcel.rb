class FarmParcel < ApplicationRecord
    has_one         :profile
    belongs_to      :municipality
    has_many        :farm_parcel_description
    has_one_attached    :doc_file
end
