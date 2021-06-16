json.profiles @profile.each do |profile|
    json.extract! profile, :id
    json.user_id                                profile.user_id
    json.first_name                             profile.first_name
    json.middle_name                            profile.middle_name
    json.last_name                              profile.last_name
    json.extension_name                         profile.extension_name
    json.gender                                 profile.gender.name
    json.house                                  profile.house
    json.street                                 profile.street
    json.brgy                                   profile.barangay
    json.region                                 profile.address.region.name
    json.municipality                           profile.address.municipality.name
    json.province                               profile.address.province.name
    json.user_contact_number                    profile.user_contact_number
    json.dob                                    profile.dob
    json.religion                               profile.religion
    json.civil_status                           profile.civil_status.name
    json.spouse_name                            profile.spouse_name
    json.mother_name                            profile.mother_name
    json.household_head                         profile.household_head
    json.household_name                         profile.household_name
    json.household_head_relationship            profile.household_head_relationship
    json.numbers_household_member               profile.numbers_household_member
    json.education_attaintment                  profile.education_attaintment.name
    json.numbers_of_male                        profile.numbers_of_male
    json.numbers_of_female                      profile.numbers_of_female
    json.pwd                                    profile.pwd
    json.four_p_beneficiary                     profile.four_p_beneficiary
    json.with_government_id                     profile.with_government_id
    json.government_id                          profile.government_id
    json.member_association                     profile.member_association
    json.association_id                         profile.association_id
    json.indigenous_group                       profile.indigenous_group
    json.indigenous_id                          profile.indigenous_id
    json.emergency_person_name                  profile.emergency_person_name
    json.emergency_person_number                profile.emergency_person_number
end