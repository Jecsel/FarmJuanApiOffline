class Address < ApplicationRecord
    belongs_to :profile, touch: true
    belongs_to :region
    belongs_to :province
    belongs_to :municipality
end
