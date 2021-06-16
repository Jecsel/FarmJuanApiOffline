json.genders @gender.each do |gender|
    json.extract! gender, :id, :name
end
json.provinces @province.each do |province|
    json.extract! province, :id, :name
end
json.regions @region.each do |region|
    json.extract! region, :id, :name
end
json.municipalities @municipality.each do |municipality|
    json.extract! municipality, :id, :name
end
json.civil_statuses @civil_status.each do |civil_status|
    json.extract! civil_status, :id, :name
end
json.education_attaintments @education_attaintment.each do |education_attaintment|
    json.extract! education_attaintment, :id, :name
end
json.commodities @commodity.each do |commodity|
    json.extract! commodity, :id, :name
end
json.farm_type @farm_type.each do |farm_type|
    json.extract! farm_type, :id, :name
end
json.animal_type @animal_type.each do |animal_type|
    json.extract! animal_type, :id, :name
end
json.farm_activity @farm_activity.each do |farm_activity|
    json.extract! farm_activity, :id, :name, :title, :subtitle
    json.farmers_activity_type farm_activity.farmers_activity_type do |activity_type|
        json.id activity_type.id
        json.name activity_type.name
        json.with_description activity_type.with_description
    end
end