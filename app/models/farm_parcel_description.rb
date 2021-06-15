class FarmParcelDescription < ApplicationRecord
    belongs_to :farm_parcel
    belongs_to :crop_commodity
    belongs_to :farm_type
end
