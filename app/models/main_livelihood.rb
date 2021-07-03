class MainLivelihood < ApplicationRecord
    has_many :main_livelihood_type
    has_one :profile
end
