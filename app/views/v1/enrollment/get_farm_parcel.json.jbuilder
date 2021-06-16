json.farm_parcel @farm_parcel.each do |farm|
    json.id                             farm.id
    json.municipality_id                farm.municipality.id
    json.brgy                           farm.brgy
    json.total_farm_area                farm.total_farm_area
    json.ownership_document_no          farm.ownership_document_no
    json.lot_no                         farm.lot_no

    json.land_description farm.farm_parcel_description.each do |desc|
        json.is_registered_owner        desc.is_registered_owner
        json.is_other                   desc.is_other
        json.other_spec                 desc.other_spec
        json.is_tenant                  desc.is_tenant
        json.tenant_spec                desc.tenant_spec
        json.is_lessee                  desc.is_lessee
        json.farm_area                  desc.farm_area
        json.lessee_spec                desc.lessee_spec
        json.crop_commodity_id          desc.crop_commodity.id
        json.head_count                 desc.head_count
        json.farm_type_id               desc.farm_type.id
        json.organic_practioner         desc.organic_practioner
        json.head_count                 desc.head_count
    end
end