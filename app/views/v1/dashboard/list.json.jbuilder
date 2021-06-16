# json.lists_total_page @data.total_pages
json.profiles @profile.each do |profile|
    json.extract! profile, :id
    json.user_id                                profile.user_id
    json.first_name                             profile.first_name
    json.middle_name                            profile.middle_name
    json.last_name                              profile.last_name
    json.gender                                 profile.gender.name
    json.house                                  profile.house
    json.street                                 profile.street
    json.brgy                                   profile.barangay
    json.region                                 profile.address.region.name
    json.municipality                           profile.address.municipality.name
    json.province                               profile.address.province.name
    json.user_contact_number                    profile.user_contact_number
    json.dob                                    profile.dob
    json.ref_number                             profile.ref_number
    
    if profile.farm_parcel.any?
        json.farm_address       profile.farm_parcel.last.municipality.name
        json.ten_status         profile.farm_parcel.last.farm_parcel_description.last.is_registered_owner ? 'Land Owner' : 'Tenant'
        json.total_farm_area    profile.farm_parcel.last.total_farm_area
        json.lot_no             profile.farm_parcel.last.lot_no
    else
        json.total_farm_area    'N/A'
        json.farm_address       'N/A'
        json.ten_status         'N/A'
        json.lot_no             'N/A'
    end
    
end

json.municipalities @municipality.each do |municipality|
    json.extract! municipality, :id, :name
end