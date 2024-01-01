const data = [
    {
        id: 1,
        theme: "home",
        tip: "Save energy with energy efficient lighting. Compact fluorescent bulbs use around 20% of the energy to produce the same amount of light as an incandescent bulb and can last up to 10 times as long, meaning this is one of the most impactful home sustainability tips."
    },
    {
        id: 2,
        theme: "home",
        tip: "Reduce “phantom drain” energy consumption. Studies show that 35% of residential energy used is wasted. Save energy by turning off lights and unplugging appliances (even eco-friendly chargers) when not in use. Of all easy sustainability tips at home, this one has perhaps the biggest potential to reduce your carbon footprint."
    },
    {
        id: 3,
        theme: "home",
        tip: "Utilize solar energy. While installing solar panels in your house has a high upfront cost, it minimizes your use of electricity to save money in the long run—$130 per month for the average homeowner!"
    },
    {
        id: 4,
        theme: "home",
        tip: "Shop second hand for furniture (or recycled options like recycled outdoor plastic furniture). Not only will you save space in the landfill, but you can also curate a more unique, sustainable interior design."
    },
    {
        id: 5,
        theme: "home",
        tip: "Set up a water catchment system. A rain barrel can collect rainwater, which can be used to water plants or wash your car."
    },
    {
        id: 6,
        theme: "home",
        tip: "Air dry your clothes. Not only is hang-drying environmentally friendly, but it will also save you 24 and 72 cents per hour you would otherwise use the dryer, depending on the model."
    }, 
    {
        id: 7,
        theme: "home",
        tip: "Start an apartment garden. Houseplants not only consume CO2, but can help purify the air by removing harmful chemicals for a healthier, more sustainable home."
    },
    {
        id: 8,
        theme: "home",
        tip: "Insulate your home properly. A properly insulated house will help your home stay cool in summer and warm in winter, meaning you won't have to crank up the heating or air conditioning unit. This doesn't have to involve a big remodel. Something as simple as adding thermal curtains or draft-stopper to your doors can make a big difference."
    },
    {
        id: 9,
        theme: "home",
        tip: "Switch to water-based paints when renovating. Oil paints have harmful chemicals that can leak into the watershed and pollute the waterways. Make sure they're low-VOC, too, to prevent dangerous off-gassing of chemicals that degrade the air quality in your home." 
    },
    {
        id: 10,
        theme: "kitchen",
        tip: "Consider going meat-free. Studies show that a plant-based diet can reduce food's carbon footprint by 73%. Adopting a vegan and cruelty-free lifestyle (or even just reducing your meat consumption) reduces energy consumption, supports clean waterways, and reduces the pressure on overfished oceans." 
    },
    {
        id: 11,
        theme: "kitchen",
        tip: "Support sustainable food systems and learn what foods are sustainable. If giving up meat is a no-go for you, you can still make that steak more sustainable by sourcing it locally from organic, grass-fed farms."
    },
    {
        id: 12,
        theme: "kitchen",
        tip: "Visit local farmer's markets. Locally-sourced produce travels about 27 times less distance than conventionally sourced produce. By reducing the need to transport and store food, your plate will have a smaller carbon footprint. Local often means organic food that's cultivated in-season, meaning you're not supporting industrial-scale agriculture to produce crops unnaturally."
    },
    {
        id: 13,
        theme: "kitchen",
        tip: "Ditch the take-away. Plastic and styrofoam take-away containers dominate ocean plastic waste. Unfortunately, waste is almost unavoidable when ordering take-away, so it is almost always better to dine-in."
    },
    {
        id: 14,
        theme: "kitchen",
        tip: "Invest in plastic-free food storage containers. Things like silicone sandwich bags and knowing how to use beeswax wraps can replace the need for single-use plastic wrap, which is difficult to recycle and picks up harmful chemicals."
    },
    {
        id: 15,
        theme: "kitchen",
        tip: "Switch to bamboo eco-friendly dinnerware. Bamboo has a smaller carbon footprint than wood or steel due to its rapid growth rate, carbon sequestration, and regeneration ability. It also happens to be durable and stylish."
    },
    {
        id: 16,
        theme: "kitchen",
        tip: "Set up a compost system. This is hands-down one of the best sustainability practices you can implement. An indoor compost bin helps reduce food waste (which otherwise releases devastating methane gas in landfills) and turns your food scraps into natural fertilizer for plants."
    },
    {
        id: 17,
        theme: "kitchen",
        tip: "While paper towels are compostable, ditch them for reusable paper towels, Swedish dishcloths, or old t-shirts."
    },
    {
        id: 18,
        theme: "kitchen",
        tip: "Use the dishwasher. Unintuitive though it may sound, dishwashers actually save water (up to 5,000 gallons a year with an efficient appliance). That at least makes everyone's least favorite chore a bit better, especially when using eco-friendly dishwasher tablets."
    },
    {
        id: 19,
        theme: "kitchen",
        tip: "Speaking of, invest in energy efficient appliances. The EPA gives the ENERGY STAR label to eco-friendly appliances when they meet energy efficiency specifications, making it easy to decide what appliances are the most efficient."
    },
    {
        id: 20,
        theme: "kitchen",
        tip: "Switch to zero waste coffee products. Make that life-giving nectar even better by investing in reusable mesh filters or reusable coffee cup pods rather than plastic or paper versions."
    },
    {
        id: 21,
        theme: "kitchen",
        tip: "Install a tap filter to purify water. 80% of the plastic bottles purchased in the U.S. end up in landfills, a number that can be easily reduced by drinking filtered tap water instead."
    },
    {
        id: 22,
        theme: "kitchen",
        tip: "Ditch the plastic straws. Plastic straws are among the top ten contributors to plastic marine debris around the world (and we've all seen that video of the turtle with a straw stuck in its nose)."  
    },   
    {
        id: 23,
        theme: "cleaning",
        tip: "Tackle waste using the 5 Rs of zero waste. These are: reduce, refuse, reuse, recycle, and rot. Learning how to properly dispose of your waste can minimize the amount of product getting sent to landfills."
    },   
    {
        id: 24,
        theme: "cleaning",
        tip: "Use eco-friendly cleaning products. More sustainable home living means making sure our cleaners are clean in every way. Most surface disinfects use toxic chemicals that are slow to biodegrade, threaten wildlife, and are toxic to you."
    },   
    {
        id: 25,
        theme: "cleaning",
        tip: "Swap plastic bottles for glass bottles. Glass spray bottles last longer, meaning you can use them over and over for all your favorite refillable cleaning products."
    },   
    {
        id: 26,
        theme: "cleaning",
        tip: "Stick to natural, DIY cleaners when possible. Baking soda and lemon juice are cheap natural cleaners that can be used on a variety of surfaces."
    },   
    {
        id: 27,
        theme: "cleaning",
        tip: "Use recycled garbage bags or biodegradable trash bags. While still imperfect, they're better than virgin plastic bags that take 1,000 years for a plastic bag to degrade in a landfill."   
    },   
    {
        id: 28,
        theme: "cleaning",
        tip: "Wash with cold water. About 90% of the energy the washing machine uses goes towards heating the water. Washing your clothes with cold water saves energy and reduces wrinkles, fading, and wear and tear on your clothing."
    },   
    {
        id: 29,
        theme: "cleaning",
        tip: "Invest in a microfiber catching wash bag. An average of 9 million microfibers are released into wastewater treatment plants every time we launder garments made of synthetic fabrics. Most laundry machines do not have a microfiber filter and wastewater treatment plants have a hard time filtering them, meaning most of the time they end up in the ocean, in fish, and eventually, in humans."
    },   
    {
        id: 30,
        theme: "bathroom",
        tip: "Reduce waste water and water consumption. We know you've been waiting for this one, but take shorter showers. Or don't flush the toilet every time you use it, which saves anywhere from 2-7 gallons per flush. These almost-effortless daily sustainability tips will save literal tons of water over a lifetime." 
    },   
    {
        id: 31,
        theme: "bathroom",
        tip: "Invest in a low-flow toilet. If not flushing is too gross for you, low-flow toilets may be the way to go (to the bathroom). They use ~1.28 gallons of water per flush while inefficient, older toilets can use up to seven."
    },   
    {
        id: 32,
        theme: "bathroom",
        tip: "Switch to eco-friendly shampoo and conditioner. In the United States alone, 550 million empty shampoo bottles are thrown away every year. This statistic does not include conditioner or soap bottles. Bottle alternatives help reduce this number, while opting for cleaner ingredients reduces the waterway pollution caused by synthetic soaps."
    },   
    {
        id: 33,
        theme: "bathroom",
        tip: "Use zero waste toothpaste tablets. They can be easily bought in bulk and stored in plastic-free containers (and you won't have to spend hours getting the last drop of toothpaste out of the tube)."  
    },   
    {
        id: 34,
        theme: "bathroom",
        tip: "Brush with bamboo. Plastic toothbrushes can take up to 500 years to decompose while a zero waste toothbrush made of bamboo is naturally compostable (though you may need to remove the bristles)." 
    },   
    {
        id: 35,
        theme: "bathroom",
        tip: "Purchase eco-friendly toilet paper. Recycled toilet paper or reusable cloth squares are sustainable alternatives to paper toilet paper."
    },   
    {
        id: 36,
        theme: "bathroom",
        tip: "Replace your shower head. Showering accounts for nearly 17% of residential indoor water use. Similar to ENERGY STAR, the EPA has created a WaterSense label to identify water-efficient products. Switching to one could save the average family 2,700 gallons of water per year."
    },   
      {
        id: 37,
        theme: "bathroom",
        tip: "Opt for reusable cotton pads. Most makeup remover wipes are made from synthetic materials and harmful microplastics that are detrimental to marine life when they are broken down (and your skin for that matter)." 
    },   
      {
        id: 38,
        theme: "bathroom",
        tip: "Place a recycling bin in the bathroom. You are much more likely to recycle when the bin is easily accessible."
    },   
      {
        id: 39,
        theme: "bathroom",
        tip: "Choose conscious cosmetics. You should worry both about the packaging and ingredients to avoid in skincare, both of which are bad for you and the planet. Instead, look for products that utilize natural skincare ingredients products."
    },   
      {
        id: 40,
        theme: "bathroom",
        tip: "Say no to (or opt for sustainably-sourced) palm oil. Palm oil is a major driver of deforestation and exploitation as well as air pollution, water pollution, and biodiversity loss—and it's found in everything from toothpaste and shampoo to peanut butter."
    },   
    {
        id: 41,
        theme: "bathroom",
        tip: "Use a menstrual cup. In a lifetime, a single person who menstruates is expected to throw away around 400 pounds of period product packaging. Menstrual cups are completely hygienic and are a low-waste replacement for single use pads and tampons (even organic tampons)."  
    },   
    {
        id: 42,
        theme: "garden",
        tip: "Follow ecological gardening tips. Like planting native species. Without native plants, insects and birds that have co-evolved with them cannot survive. Planting native plant species can combat climate change, encourage water conservation, and increase biodiversity—which is just about the best summer and spring sustainability tip we can offer."
    },   
    {
        id: 43,
        theme: "garden",
        tip: "Plant pollinator friendly plants. Almost 80% of our food and industrial products require pollination by animals. By protecting pollinator species, we can help our air, water, and soil stay healthy. Common pollinator-friendly plants include bee balm, echinacea, and so many others, which you can look up based on your region."
    },   
    {
        id: 44,
        theme: "garden",
        tip: "Ditch the herbicides. The chemicals in herbicides can cause habitat alteration that affects the species living in these habitats. Look into natural alternatives to kill weeds, such as mulching your lawn, laying down glass panes for several weeks to burn them away before planting your garden, or hand-weeding once you have."  
    },   
    {
        id: 45,
        theme: "garden",
        tip: "Master the art of companion planting. Companion planting is the strategic planting of certain crops in proximity to each other (and keeping others far apart) for any number of reasons—like increasing soil nutrients, chasing away bugs and pests (so you don't have to buy natural bug spray), and maximizing the efficiency of your garden." 
    },   
    {
        id: 46,
        theme: "garden",
        tip: "You need the Neem. Neem oil is an organic insect repellent and fungal cure that is practically non-toxic to the environment, except in huge doses. Other chemical-free ways to rid your garden of unwanted insects include Diatomaceous Earth (food-grade, OMRI-tested) or planting herbs around perimeters."   
    },   
    {
        id: 47,
        theme: "garden",
        tip: "Switch your sprinklers. Rotary nozzles fit on most popup spray heads. Rotating nozzles deliver water slower with larger droplets, reducing both runoff and water waste." 
    },   
    {
        id: 48,
        theme: "garden",
        tip: "Stop sprinkling altogether. Take the previous summer sustainability tip to the next level and don't sprinkle at all. Landscape irrigation accounts for ⅓ of all residential water use in the U.S. (or 9 billion gallons per day). Reserve some water for your vegetables, but opt for drought-resistant landscaping plants or rock gardens."  
    },   
    {
        id: 49,
        theme: "garden",
        tip: "Dispose of yard waste properly. Many municipalities have free composting centers for yard waste like branches, leaves, and grass trimmings. Garden waste can be turned into soil conditioner, a product used for agriculture and land reclamation to increase soil condition."   
    },   
    {
        id: 50,
        theme: "garden",
        tip: "Look into rainscaping. Stormwater runoff picks pollutants from fertilizers and pesticides as it travels through storm drains into rivers, oceans, and lakes. Rainscaping uses the landscape to naturally redirect and reuse stormwater runoff to reduce the amount of water pollution happening." 
    },   
    {
        id: 51,
        theme: "garden",
        tip: "Leave the leaves. If you're looking for the best sustainability tips for fall, here it is. Fallen leaves break down to create nutrient rich soil and keep our insect friends happy by providing shelter and insulation during the colder months."  
    },   
    {
        id: 52,
        theme: "shopping",
        tip: "Adopt a minimalist mindset. The L.A. Times has reported that the average U.S. household has 300,000 things in it. We'd hazard a guess that you can't even name that many things you use. By consuming less resources, you can reduce the amount of waste being created—making this perhaps #1 among tips for sustainable living."   
    },   
    {
        id: 53,
        theme: "shopping",
        tip: "Adopt a capsule wardrobe. Capsule wardrobes are typically made of 30 to 50 articles of clothing that can be used interchangeably for a number of occasions. You'd be surprised how many outfits you can create with a minimalist wardrobe."
    },   
    {
        id: 54,
        theme: "shopping",
        tip: "Looking for sustainable spring cleaning tips? Donate or upcycle what you don't want. The recycling rate of all textiles, including furniture and clothing, is only 15%. It can be tempting to throw old clutter away, but donating used items can give someone else a chance to love them. There are tons of places to recycle old clothes and an equally infinite number of ways to upcycle them." 
    },   
    {
        id: 55,
        theme: "shopping",
        tip: "Become a borrower. Renting and borrowing items instead of buying them can reduce the amount of personal items that end up in the landfill. With increasing numbers of toy libraries, tool libraries, and online clothing rental services, this is easier than ever."
    },   
    {
        id: 56,
        theme: "shopping",
        tip: "Repair rather than replace. This can apply to everything from clothing to technology. If you're not handy with a sewing machine and don't have a local tailor in your area, there are plenty of online clothes repair services looking to revive your worn-out wardrobe. For non-textiles, look into local repair workshops."
    },   
    {
        id: 57,
        theme: "shopping",
        tip: "Shop second hand. Landfills receive around 11 tons of textile waste per year. Local or online thrift shopping can give a second chance to the clothes that would otherwise be a part of this statistic." 
    },   
    {
        id: 58,
        theme: "shopping",
        tip: "Invest in reusable bags (including produce bags). Here's an OG among sustainability practices examples, but that's for good reason. Americans use more than 100 billion plastic bags each year. Reusable bags are more durable than plastic bags and can help you express your personal style. Extra points if you make them yourself or use bags you already own."
    },   
    {
        id: 59,
        theme: "shopping",
        tip: "Buy in bulk. Grocery stores with bulk bins eliminate the need for fancy packaging and single-use plastics. If you prefer doing your shopping online, these online bulk stores might be for you."
    },   
    {
        id: 60,
        theme: "shopping",
        tip: "Shop at zero waste stores. These offer low-waste and compostable packaging options for food, beauty products, and cleaning products. Like with the bulk stores, there are a number of zero waste online shopping options."
    },   
    {
        id: 61,
        theme: "shopping",
        tip: "Online shopping with slower, grouped delivery. A traditional shopper has almost twice the carbon emissions as an online shopper. While ethical online shopping can cut carbon emissions, rushed delivery can break the benefit of shopping online due to more delivery trucks and packaging."
    },   
    {
        id: 62,
        theme: "shopping",
        tip: "Choose quality over quantity. Ah, the most classic (and our favorite) sustainable shopping tip. It may be tempting to purchase cheaper options, but products made of quality, sustainable fabrics and materials are both more ethical and last longer."
    },   
    {
        id: 63,
        theme: "shopping",
        tip: "Choose slow fashion. Dyeing and finishing are responsible for 3% of global CO2 emissions and over 20% of global water pollution—which is why fast fashion has become a rising problem due to the turnover rate of trendy pieces."
    },   
    {
        id: 64,
        theme: "travel",
        tip: "Buy a bike for shorter commutes. Some of the best tips for a sustainable office start with how you get there, after all. ​​Just moderate increases in bicycle use each year could save an estimated 6 to 14 million tons of CO2."
    },   
    {
        id: 65,
        theme: "travel",
        tip: "Use public transportation. Leaving your car at home and opting for public transportation could reduce annual CO2 emissions by 20 pounds per day."
    },   
    {
        id: 66,
        theme: "travel",
        tip: "Take a walk. Walking is not only better for the environment, but also for your mental and physical health."
    },   
    {
        id: 67,
        theme: "travel",
        tip: "Invest in an electric vehicle. If you have the means to do so, electric vehicles are the way to go (literally). They have fewer greenhouse gas emissions than petrol or diesel cars do and don't support the oil industry. However, be aware that they are still a vehicle with parts (including extremely hard-to-recycle batteries) that break and need replacing, so they aren't devoid of impact themselves."
    },   
    {
        id: 68,
        theme: "travel",
        tip: "Miss your flight. Trains can cut your CO2 emissions by half when compared to flight, which are responsible for 12% of all CO2 emissions from transport."
    },   
    {
        id: 69,
        theme: "travel",
        tip: "Choose sustainable travel tours offered by eco-tourism companies who support conservation and sustainable travel while supporting the local economy."
    },   
     {
        id: 70,
        theme: "travel",
        tip: "Invest in travel-friendly products. Staying stocked up with reusable cutlery, water bottles, and takeaway utensils can help reduce plastic usage, whether abroad or simply at a company lunch."
    },   
    {
        id: 71,
        theme: "travel",
        tip: "Offset your carbon. Sometimes the only option is catching a flight. Luckily, there are a number of carbon offset programs that make it easy to reduce your carbon footprint while flying."
    },   
    {
        id: 72,
        theme: "travel",
        tip: "Use portable solar panels. Solar power banks are environmentally-friendly and convenient during long trips where outlets may not be available."
    },   
    {
        id: 73,
        theme: "family",
        tip: "Swap to reusable cloths or other eco-friendly diapers. Disposable diapers are the third largest single consumer item in landfills, representing around 4% of solid waste."
    },   
    {
        id: 74,
        theme: "family",
        tip: "Choose to breastfeed if you are able. The carbon footprint and environmental impact of four months of exclusive feeding with infant formula is 35% to 72% higher than four months of exclusive breastfeeding. With no need for packaging, heating, or transportation, breastfeeding is as sustainable as it gets."
    },   
    {
        id: 75,
        theme: "family",
        tip: "Ditch the plastic bottles. When it comes to baby bottles, glass bottles take the cake over plastic bottles because they do not leach chemicals and are easier to repurpose."
    },   
    {
        id: 76,
        theme: "family",
        tip: "Make your own baby food. Supplementing your baby's diet with homemade food lets you control both the ingredients and amount of plastic you use—but make sure you talk to your child's pediatrician to ensure you know their needs."
    },   
    {
        id: 77,
        theme: "family",
        tip: "Invest in eco-friendly toys. Research finds that 25% of children's toys contain harmful chemicals that are both toxic to children and the environment. Those made from natural materials such as wood or bamboo are much better for everyone involved."
    },   
    {
        id: 78,
        theme: "family",
        tip: "Ditch baby wipes. Wet wipes do not degrade before reaching the sewer and are often ingested by sea creatures looking for their next meal. Environmental impacts of bio-based eco-friendly baby wipes are 38% lower than petroleum-based wipes." 
    },   
    {
        id: 79,
        theme: "family",
        tip: "Get them hooked on sustainability early. One of the most sustainable things to do at home is passing on a sense of responsibility for this wonderful world we inhabit. Sustainability for kids can be as easy as reading The Lorax at bedtime or as full-on as letting them help with your garden."
    },   
    {
        id: 80,
        theme: "pets",
        tip: "Use eco-friendly cat litter. Wheat-based, walnut-based, and wood-based cat litters are great alternatives to clay or silica-based litter, which is not biodegradable."
    },   
    {
        id: 81,
        theme: "pets",
        tip: "Choose sustainable pet toys. Eco-friendly dog toys made from natural materials (like rice husk, rubber, and hemp) or recycled materials (like old t-shirts) are safer options than those made from plastic."
    },   
    {
        id: 82,
        theme: "pets",
        tip: "Pick up poo in biodegradable waste bags. These can dissolve in water in as quickly as three months, meaning they won't build up in landfills like their plastic counterparts."
    },   
    {
        id: 83,
        theme: "pets",
        tip: "“Adopt Don't Shop”. According to the ASPCA, 6.3 million companion animals enter U.S. animal shelters nationwide with approximately 920,000 of them ending up euthanized. By choosing adoption over breeding, you are reducing the resources needed to feed another animal."
    },   
    {
        id: 84,
        theme: "pets",
        tip: "Keep pets indoors. Outdoor cats are opportunistic hunters, making them a huge threat to local wildlife biodiversity. Free-ranging domestic cats kill up to 4 billion birds and 22.3 billion mammals annually."
    },   
    {
        id: 85,
        theme: "pets",
        tip: "Get pets spay/neutered. Spaying and neutering are important methods for population control, reducing the amount of resources needed to support the population."
    },   
    {
        id: 86,
        theme: "pets",
        tip: "Shop for sustainable dog food and eco-friendly cat food. This can help reduce the carbon footprint associated with pet food production, which includes around 106 million tons of CO2."
    },   
    {
        id: 87,
        theme: "holidays",
        tip: "Use recycled and eco-friendly wrapping paper materials. The best Christmas sustainability tips are those that prevent the 2.3 million pounds of wrapping paper ending up in landfills annually. Old newspapers and thrifted wicker baskets are some options for zero waste gift wrapping."
    },   
    {
        id: 88,
        theme: "holidays",
        tip: "Invest in LED Christmas lights. LED lights are 80% more energy-efficient, emitting brighter light so you can save energy all season long."
    },   
    {
        id: 89,
        theme: "holidays",
        tip: "Recycle your eco Christmas tree. Most towns have tree recycling centers, but you could also recycle it yourself by turning the pine needles into mulch and using the trunks for firewood."
    },   
    {
        id: 90,
        theme: "holidays",
        tip: "Send a seed-filled card. Let's be honest, how many of us actually save Christmas cards? If Christmas-cards are a must, support pollinators by choosing plantable paper embedded with wildflower seeds."
    },   
    {
        id: 91,
        theme: "holidays",
        tip: "Gift an experience. The holiday season produces an extra 25 million tons of garbage a year, meaning the most zero waste gifts are those that don't involve a physical gift at all."
    },   
    {
        id: 92,
        theme: "holidays",
        tip: "Create your own DIY decor. Ditch that plastic tinsel and create your own garland from pine cones instead. If you don't have time, opt for other sustainable-made options like eco-friendly Christmas crackers and reusable advent calendars."
    },   
    {
        id: 93,
        theme: "holidays",
        tip: "Prepare an eco-friendly feast. During Thanksgiving sustainability tips are critical because Americans produce 305 million pounds of food waste during this food-filled festival. Planning a menu and portioning ingredients ahead of time is one of the best food waste solutions."
    },   
    {
        id: 94,
        theme: "holidays",
        tip: "Participate in a gift swap. Get rid of something old and replace it with something new-to-you rather than just purchasing new items. You can use this sustainability tip for Christmas, birthdays, and more."
    },   
    {
        id: 95,
        theme: "holidays",
        tip: "Opt for homemade sustainable stocking stuffers. Freshly baked goods and other home-made goodies are a better alternative to mass-produced store-bought stocking stuffers."
    },   
    {
        id: 96,
        theme: "holidays",
        tip: "Stay warm by cuddling up under the mistletoe. Lowering your thermostat during winter and raising it during summer can cause significant decreases in energy usage, effectively lowering your carbon footprint."
    },   
    {
        id: 97,
        theme: "holidays",
        tip: "Shop mindfully. Purchase ethical gifts that are practical and likely to be used more than once. Better still if they provide ways to be more sustainable for the recipient, too, like a zero-waste starter kit or compost bin."
    },   
    {
        id: 98,
        theme: "holidays",
        tip: "Use natural candles. Normal candles are filled with synthetic scents, petroleum wax, and lead wicks that don't always burn clean. Sustainable candles made from natural waxes are far less harmful when burned."
    },   
    {
        id: 99,
        theme: "holidays",
        tip: "Give that Jack O'Lantern a second chance. Pumpkin waste is more frightful than the holiday itself, with 900,000 tons thrown away each year in the US alone. Scare that waste away with Halloween sustainability tips. When carving, roast the seeds and make soup with the other “guts”. For the drooping face, be sure to compost it or give it to local farmers to feed to their livestock."
    },   
    {
        id: 100,
        theme: "misc",
        tip: "Volunteer for local organizations. By joining in on a local beach clean up or helping at the community garden, you can contribute to a healthier community. Plus, you get to set an example of sustainability to inspire those around you."
    },
    {
        id: 101,
        theme: "misc",
        tip: "Donate your money. Donating to a worthy cause can help fund environmental research and conservation work. Look into nonprofits that combat important conservation topics like climate change and biodiversity loss—like some of the nonprofits we donate to through 1% For the Planet."
    }

]

export default data