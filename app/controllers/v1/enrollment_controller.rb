class V1::EnrollmentController < ApplicationController
    before_action :must_be_authenticated

    def index
        p 'index'
        @gender = Gender.all
        @province = Province.all
        @region = Region.all
        @municipality = Municipality.all
        @civil_status = CivilStatus.all
        @education_attaintment = EducationAttaintment.all
        @commodity = CropCommodity.all
        @farm_type = FarmType.all
        @animal_type = AnimalType.all
        @farm_activity = FarmersActivity.all
        render 'index.json.jbuilder'
    end

    def show
        @profile = Profile.find params[:id]
        @main_livelihood = @profile.main_livelihood
        @farm_parcel = @profile.farm_parcel
    end

    def get_profile
        @profile = Profile.find params[:profile_id]
    end
    
    def get_main_livelihood
        @main_livelihood = MainLivelihood.where(profile_id: params[:profile_id]).last
    end

    def get_farm_parcel
        @farm_parcel = FarmParcel.where(profile_id: params[:profile_id])
    end

    def create
        if !create_params[:profile_id].nil?
            p "with id"
            farmer = Profile.find create_params[:profile_id]
            profile = farmer
        else
            p "no id"
            profile = Profile.new
            p profile
        end
        # profile = farmer.present? ? farmer : Profile.new
        address = profile.address.present? ? profile.address : profile.build_address

        address.region_id                           = create_params[:region]
        address.province_id                         = create_params[:province]
        address.municipality_id                     = create_params[:municipality]
        profile.user_id                             = @current_user.id
        profile.first_name                          = create_params[:first_name]
        profile.middle_name                         = create_params[:middle_name]
        profile.last_name                           = create_params[:last_name]
        profile.extension_name                      = create_params[:extension_name]
        profile.gender_id                           = create_params[:gender]
        profile.house                               = create_params[:house]
        profile.street                              = create_params[:street]
        profile.barangay                            = create_params[:brgy]
        profile.user_contact_number                 = create_params[:user_contact_number]
        profile.dob                                 = create_params[:dob]
        profile.place_of_birth                      = create_params[:place_of_birth]
        profile.religion                            = create_params[:religion]
        profile.civil_status_id                     = create_params[:civil_status]
        profile.spouse_name                         = create_params[:spouse_name]
        profile.mother_name                         = create_params[:mother_name]
        profile.household_head                      = create_params[:household_head]
        profile.household_name                      = create_params[:household_name]
        profile.household_head_relationship         = create_params[:household_head_relationship]
        profile.numbers_household_member            = create_params[:numbers_household_member]
        profile.education_attaintment_id            = create_params[:education_attaintments]
        profile.numbers_of_male                     = create_params[:numbers_of_male]
        profile.numbers_of_female                   = create_params[:numbers_of_female]
        profile.pwd                                 = create_params[:person_with_disability]
        profile.four_p_beneficiary                  = create_params[:four_p_beneficiary]
        profile.agrarian                            = create_params[:agrarian]
        profile.with_government_id                  = create_params[:with_government_id]
        profile.government_id                       = create_params[:government_number]
        profile.member_association                  = create_params[:member_of_association]
        profile.association_id                      = create_params[:association_number]
        profile.indigenous_group                    = create_params[:member_of_indigenous_group]
        profile.indigenous_id                       = create_params[:indigenous_id]
        profile.emergency_person_name               = create_params[:person_to_notify]
        profile.emergency_person_number             = create_params[:emergency_person_number]
  
        # if !create_params[:photo].nil?
        #     decoded_data = Base64.decode64(create_params[:photo].split(',')[1])
        #     resource = {
        #         io: StringIO.new(decoded_data),
        #         content_type: 'image/png',
        #         filename: 'image.png'
        #         }
        #         profile.avatar.attach(resource)
        # end
        
        if profile.save && address.save
            profile.ref_number = create_ref_number(profile.id).to_s
            p profile.ref_number
            # json_response(true, "Successfully Save Profile")
            # render json: {message:"Successfully Save Profile "}
            render json: { status:true, message:"Successfully Save Profile ", profile_id: profile.id },status: :ok
        else
            json_response(false, exception.errors.full_messages)
        end
    end

    def create_ref_number(profileId)
        ref_num = Date.current.year.to_s + "00000000"
        ref_num = ref_num.to_i + profileId
        return ref_num
    end

    def create_livelihoods

        main = livelihood_params[:main_livehood_id].to_i > 0 ? MainLivelihood.where(id: livelihood_params[:main_livehood_id]).last : MainLivelihood.new
        main.profile_id                             = livelihood_params[:profile_id]
        main.farming_income                         = livelihood_params[:farming]
        main.non_farming_income                     = livelihood_params[:non_farming]

        if main.save
            livelihood_params[:livelihood_type_data].each do |a|
    
                main_type = MainLivelihoodType.new
                main_type.main_livelihood_id            = main.id
                main_type.farmers_activity_id           = livelihood_params[:activity_id]
                main_type.farmers_activity_type_id      = a[:activity_type_id]
                main_type.description                   = a[:description]  
                main_type.save
                
            end
            json_response true, "Successfully Saved"
        else
            json_response false, "Failed to Save"
        end
    end

    def create_farm_parcel
        parcel_params[:farm_parcel].each do |parcel|
            farm = parcel_params[:id].to_i > 0 ? FarmParcel.where(id: parcel_params[:id]).last : FarmParcel.new
            farm.profile_id                 = parcel_params[:profile_id]
            farm.municipality_id            = parcel[:municipality_id]
            farm.brgy                       = parcel[:brgy]
            farm.total_farm_area            = parcel[:total_farm_area]
            farm.ownership_document_no      = parcel[:ownership_document_no]
            farm.lot_no                     = parcel[:lot_no]
            # if !parcel[:document_file].nil?
            #     decoded_data = Base64.decode64(parcel[:document_file].split(',')[1])
            #     resource = { 
            #     io: StringIO.new(decoded_data),
            #     content_type: 'application/pdf',
            #     filename: 'doc.pdf'
            #     }
            #     farm.doc_file.attach(resource)
            # end

            if farm.save
                parcel[:land_description].each do |land|
                    desc = FarmParcelDescription.new
                    desc.farm_parcel_id         = farm[:id]
                    desc.is_registered_owner    = land[:is_registered_owner]
                    desc.is_other               = land[:is_other]
                    desc.other_spec             = land[:other_spec]
                    desc.is_tenant              = land[:is_tenant]
                    desc.tenant_spec            = land[:tenant_spec]
                    desc.is_lessee              = land[:is_lessee]
                    desc.lessee_spec            = land[:lessee_spec]
                    desc.head_count             = land[:head_count]
                    desc.farm_type_id           = land[:farm_type_id]
                    desc.crop_commodity_id      = land[:crop_commodity_id]
                    desc.farm_area              = land[:farm_area]
                    desc.organic_practioner     = land[:organic_practioner]
                    desc.save
                end
            # else
            #     render json_response false, "Failed To Save "
            end
        end
        # render json_response true,"Successfully Saved"
    end

    private

    def parcel_params
        params
            .require(:enrollment)
            .permit(:id, :profile_id, :farm_parcel => [:municipality_id, :brgy, :total_farm_area, :ownership_document_no, :document_file, :lot_no,
                :land_description => [:is_registered_owner,:farm_area, :is_other, :other_spec, :is_tenant, :tenant_spec, :is_lessee,:lessee_spec,
                :crop_commodity_id, :farm_type_id, :organic_practioner, :head_count]])
    end

    def create_params
        params
            .require(:enrollment)
            .permit(:association_number, :last_name, :first_name, :middle_name, :extension_name,
                :gender, :province, :region, :municipality, :photo, :house, 
                :street, :brgy, :user_contact_number, :dob, :religion, :civil_status, :spouse_name, :mother_name,
                :household_head, :household_name, :household_head_relationship, :numbers_household_member, :numbers_of_male, :numbers_of_female,
                :person_with_disability, :four_p_beneficiary, :agrarian, :with_government_id, :government_number,
                :member_of_association, :association_number, :member_of_indigenous_group, :indigenous_id,
                :person_to_notify, :emergency_person_number, :education_attaintments, :place_of_birth, :profile_id, :member_no_of_association,
                :member_no_of_indigenous_group)
    end

    def livelihood_params
        params
            .require(:livelihood)
            .permit(:activity_id, :farming, :non_farming, :profile_id, :main_livehood_id, :livelihood_type_data => [:activity_type_id, :description])
    end
end
