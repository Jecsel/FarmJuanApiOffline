json.profile do
    json.user_id                                @profile.user_id
    json.first_name                             @profile.first_name
    json.middle_name                            @profile.middle_name
    json.last_name                              @profile.last_name
    json.extension_name                         @profile.extension_name
    json.gender                                 @profile.gender
    json.house                                  @profile.house
    json.street                                 @profile.street
    json.brgy                                   @profile.barangay
    json.region                                 @profile.address.region
    json.municipality                           @profile.address.municipality
    json.province                               @profile.address.province
    json.user_contact_number                    @profile.user_contact_number
    json.dob                                    @profile.dob
    json.religion                               @profile.religion
    json.civil_status                           @profile.civil_status
    json.spouse_name                            @profile.spouse_name
    json.mother_name                            @profile.mother_name
    json.household_head                         @profile.household_head
    json.household_name                         @profile.household_name
    json.household_head_relationship            @profile.household_head_relationship
    json.numbers_household_member               @profile.numbers_household_member
    json.education_attaintment                  @profile.education_attaintment
    json.numbers_of_male                        @profile.numbers_of_male
    json.numbers_of_female                      @profile.numbers_of_female
    json.pwd                                    @profile.pwd
    json.four_p_beneficiary                     @profile.four_p_beneficiary
    json.with_government_id                     @profile.with_government_id
    json.government_id                          @profile.government_id
    json.member_association                     @profile.member_association
    json.association_number                     @profile.association_id
    json.indigenous_group                       @profile.indigenous_group
    json.indigenous_id                          @profile.indigenous_id
    json.emergency_person_name                  @profile.emergency_person_name
    json.emergency_person_number                @profile.emergency_person_number
    json.agrarian                               @profile.agrarian ? 'YES' : 'NO'
    json.ref_number                             @profile.ref_number
    json.place_of_birth                         @profile.place_of_birth
    json.avatar                                 @profile.avatar.present? ? polymorphic_url(@profile.avatar) : ''
end
json.livelihood do
    if @main_livelihood.present?
        json.extract! @main_livelihood, :profile_id, :farming_income, :non_farming_income
        json.farmers_activity_name              @main_livelihood.main_livelihood_type.farmers_activity.name
        json.farmers_activity_type_description  @main_livelihood.main_livelihood_type.farmers_activity_type.name
        json.farmers_activity_description       @main_livelihood.main_livelihood_type.description
    end
end
json.parcel do
    if @farm_parcel.present?
        json.parcel_count                           @farm_parcel.count
        json.farm_parcel @farm_parcel.each do |farm|
            json.municipality                   farm.municipality.name
            json.brgy                           farm.brgy
            json.total_farm_area                farm.total_farm_area
            json.ownership_document_no          farm.ownership_document_no

            json.land_description farm.farm_parcel_description.each do |desc|
                json.is_registered_owner        desc.is_registered_owner
                json.is_other                   desc.is_other
                json.other_spec                 desc.other_spec
                json.is_tenant                  desc.is_tenant
                json.tenant_spec                desc.tenant_spec
                json.is_lessee                  desc.is_lessee
                json.farm_area                  desc.farm_area
                json.lessee_spec                desc.lessee_spec
                json.crop_commodity             desc.crop_commodity.name
                json.head_count                 desc.head_count
                json.farm_type                  desc.farm_type.name
                json.organic_practioner         desc.organic_practioner == 1 ? 'YES' : 'NO'
                json.head_count                 desc.head_count
            end
        end
    end
end