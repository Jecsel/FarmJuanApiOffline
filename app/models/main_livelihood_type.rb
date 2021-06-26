class MainLivelihoodType < ApplicationRecord
    belongs_to :main_livelihood, touch: true
    belongs_to :farmers_activity
    belongs_to :farmers_activity_type

    def self.farmers
        where farmers_activity_id: 1
    end
    def self.laborers
        where farmers_activity_id: 2
    end
    def self.fisherfolks
        where farmers_activity_id: 3
    end
end
