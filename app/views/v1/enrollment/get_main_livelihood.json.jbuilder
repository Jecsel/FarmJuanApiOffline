json.extract! @main_livelihood, :id, :profile_id
json.activity_id              @main_livelihood.main_livelihood_type.farmers_activity.id
json.activity_type_id  @main_livelihood.main_livelihood_type.farmers_activity_type.id
json.activity_description       @main_livelihood.main_livelihood_type.description
json.farming                            @main_livelihood.farming_income
json.non_farming                        @main_livelihood.non_farming_income