User.create([
    {
        username:'Jec',
        password:'123123123'
    }
])
Region.create([
	{
		name:"NCR"
	},
	{
		name:"CAR"
	},
	{
		name:"Region I"
	},
    {
		name:"Region II"
	},
	{
		name:"Region III"
	},
	{
		name:"Region IV-A"
	},
    {
		name:"Region IV-B"
	},
	{
		name:"Region V"
	},
	{
		name:"Region VI"
	},
    {
		name:"Region VII"
	},
	{
		name:"Region VIII"
	},
	{
		name:"Region IX"
	},
    {
		name:"Region X"
	},
    {
		name:"Region XI"
	},
	{
		name:"Region XII"
	},
	{
		name:"Region XIII"
	},
    {
		name:"Region BARMM"
	}

])

Province.create([
    {
        region_id: 2,
        name: "Ilocos Norte"
    },
    {
        region_id: 2,
        name: "Ilocos Sur"
    },
    {
        region_id: 2,
        name: "La Union"
    },
    {
        region_id: 2,
        name: "Pangasinan"
    },
])

Municipality.create([
    {
        province_id: 2,
        name:"Alilem"
    },
    {
        province_id: 2,
        name:"Banayoyo"
    },
    {
        province_id: 2,
        name:"Bantay"
    },
    {
        province_id: 2,
        name:"Burgos"
    },
    {
        province_id: 2,
        name:"Cabugao"
    },
    {
        province_id: 2,
        name:"Candon"
    },
    {
        province_id: 2,
        name:"Caoayan"
    },
    {
        province_id: 2,
        name:"Cervantes"
    },
    {
        province_id: 2,
        name:"Galimuyod"
    },
    {
        province_id: 2,
        name:"Gregorio del Pilar"
    },
])
Gender.create([
    {
        name: 'Male'
    },
    {
        name: 'Female'
    },
])
CivilStatus.create([
    {
        name:'Single'  
    },
    {
        name:'Married'  
    },
    {
        name:'Widowed'  
    },
    {
        name:'Separated'  
    }

])
EducationAttaintment.create([
    {
        name:'None'
    },
    {
        name:'Elementary'
    },
    {
        name:'High School'
    },
    {
        name:'Vocational'
    },
    {
        name:'College'
    },
    {
        name:'Post Graduate'
    }
])
CropCommodity.create([
    {
        name:'RICE'
    },
    {
        name:'CORN'
    },
    {
        name:'HVC'
    },
    {
        name:'LIVESTOCK'
    },
    {
        name:'POULTRY'
    },
    {
        name:'AGRI FISHERY'
    }
])
FarmType.create([
    {
        name:'IRRIGATED'
    },
    {
        name:'RAINFED UPLAND'
    },
    {
        name:'RAINFED LOWLAND'
    }
])
AnimalType.create([
    {
        name:'PIG'
    },
    {
        name:'COW'
    },
    {
        name:'GOAT'
    },
    {
        name:'CHICKEN'
    },
    {
        name:'DUCK'
    }
])
FarmersActivity.create([
    {
        name: 'FARMERS',
        title: 'TYPE OF FARMING ACTIVITY',
        subtitle: ''
    },
    {
        name: 'FARMWORKER/LABORER',
        title: 'KIND OF WORK',
        subtitle: ''
    },
    {
        name: 'FISHERFOLK',
        title: 'TYPE OF FISHING ACTIVITY',
        subtitle: 'The Lending Condult shall coordinate with the Bureau of Fisheries and Aquatic Resources(BFAR) in the issuance of a certification that the fisherfolk-borrower'
    },
])
FarmersActivityType.create([
    {
        farmers_activity_id: 1,
        name:'RICE',
        with_description:false
    },
    {
        farmers_activity_id: 1,
        name:'CORN',
        with_description:false
    },
    {
        farmers_activity_id: 1,
        name:'OTHER CROPS',
        with_description:true
    },
    {
        farmers_activity_id: 1,
        name:'LIVESTOCK',
        with_description:true
    },
    {
        farmers_activity_id: 1,
        name:'POULTRY',
        with_description:true
    },
    {
        farmers_activity_id: 2,
        name:'LAND PREPARATION',
        with_description:false
    },
    {
        farmers_activity_id: 2,
        name:'PLANTING/TRANSPLATING',
        with_description:false
    },
    {
        farmers_activity_id: 2,
        name:'CULTIVATION',
        with_description:false
    },
    {
        farmers_activity_id: 2,
        name:'HARVESTING',
        with_description:false
    },
    {
        farmers_activity_id: 2,
        name:'OTHER, PLEASE SPECIFY',
        with_description:true
    },
    {
        farmers_activity_id: 3,
        name:'FISH CAPTURE',
        with_description:false
    },
    {
        farmers_activity_id: 3,
        name:'AQUACULTURE',
        with_description:false
    },
    {
        farmers_activity_id: 3,
        name:'GLEANING',
        with_description:false
    },
    {
        farmers_activity_id: 3,
        name:'FISH PROCESSING',
        with_description:false
    },
    {
        farmers_activity_id: 3,
        name:'FISH VENDING',
        with_description:false
    },
    {
        farmers_activity_id: 3,
        name:'OTHER, PLEASE SPECIFY',
        with_description:true
    }
])