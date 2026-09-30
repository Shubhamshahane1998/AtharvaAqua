export type Area = {
  slug: string;
  name: string;
  parent: string;
  /** Localities the technician route actually covers, for on-page specificity. */
  localities: string[];
  /** What the supply is typically like here — the reason advice differs by area. */
  water: string;
  /** Unique opening paragraph, so each page is not boilerplate with a name swapped. */
  intro: string;
  /** Slugs of genuinely neighbouring areas, for meaningful internal links. */
  nearby: string[];
};

/**
 * The area pages are the main organic asset, so each one carries its own copy.
 * Twelve pages that differ only by place name read as doorway pages and get
 * filtered; these differ in substance.
 */
export const areas: Area[] = [
  {
    slug: "pune",
    name: "Pune",
    parent: "Pune",
    localities: ["Shivajinagar", "Deccan", "Camp", "Aundh", "Erandwane", "Swargate"],
    water:
      "Most of the older city runs on municipal supply from the Khadakwasla system, which is comparatively soft. RO membranes last well here, but pre-filters clog quickly during the monsoon when turbidity rises.",
    intro:
      "We cover the full Pune city limits, from the older Peth areas and Deccan through to Aundh and Shivajinagar. City supply and apartment-tank storage bring their own problems — sediment after the monsoon, and taste complaints traced back to tanks that have not been cleaned in years — and both are routine visits for us.",
    nearby: ["kothrud", "baner", "hadapsar", "katraj"],
  },
  {
    slug: "pimpri-chinchwad",
    name: "Pimpri-Chinchwad",
    parent: "Pimpri-Chinchwad",
    localities: ["Pimpri", "Akurdi", "Bhosari", "Pimple Saudagar", "Sangvi", "Thergaon"],
    water:
      "PCMC supply varies noticeably by sector, and parts of the industrial belt still supplement with borewell water, which runs harder and shortens membrane life.",
    intro:
      "Across the PCMC belt we handle both ends of the job: dense older housing around Pimpri and Bhosari where purifiers have run for years without a service, and the newer towers in Pimple Saudagar and Thergaon where installations are recent but input water is harder than owners expect.",
    nearby: ["chinchwad", "nigdi", "wakad", "pune"],
  },
  {
    slug: "hinjewadi",
    name: "Hinjewadi",
    parent: "Pune",
    localities: ["Phase 1", "Phase 2", "Phase 3", "Maan", "Marunji", "Blue Ridge"],
    water:
      "Residential growth here outpaced piped supply, so societies lean on borewell and tanker water. Input TDS is often well above the city average, which is why membranes need changing sooner.",
    intro:
      "Hinjewadi is largely a hard-water story. Societies around the IT park run on a mix of tanker and borewell supply, so we see high input TDS, scaling on membranes, and purifiers rated for municipal water struggling inside two years. We carry membranes suited to higher TDS on these visits rather than fitting a standard one and returning in six months.",
    nearby: ["wakad", "baner", "pimpri-chinchwad"],
  },
  {
    slug: "wakad",
    name: "Wakad",
    parent: "Pimpri-Chinchwad",
    localities: ["Kaspate Vasti", "Datta Mandir Road", "Shankar Kalat Nagar", "Vishal Nagar"],
    water:
      "Wakad sits on the same borewell-dependent belt as Hinjewadi. Hardness is the usual complaint, and white scaling around taps is a reliable sign the purifier is overdue for a membrane check.",
    intro:
      "Wakad is mostly newer societies, which means a lot of purifiers bought along with the flat and never serviced since. The two calls we get most often here are no water at the tap after a clogged sediment filter, and rising output TDS from a membrane left in well past its life.",
    nearby: ["hinjewadi", "pimpri-chinchwad", "baner", "chinchwad"],
  },
  {
    slug: "baner",
    name: "Baner",
    parent: "Pune",
    localities: ["Baner Road", "Balewadi", "Pashan Link Road", "Sus Road"],
    water:
      "Baner runs on a mix of municipal and borewell supply depending on the society, so we test input TDS on the first visit rather than assuming either way.",
    intro:
      "Baner and Balewadi mix older bungalows with newer high-rises, and the right purifier differs sharply between them. We do a lot of under-sink installations here, along with AMC visits for offices and co-working spaces along Baner Road.",
    nearby: ["hinjewadi", "wakad", "pune", "kothrud"],
  },
  {
    slug: "kothrud",
    name: "Kothrud",
    parent: "Pune",
    localities: ["Karve Road", "Paud Road", "Warje", "Bavdhan", "Shivtirth Nagar"],
    water:
      "Established municipal supply, generally moderate TDS. Problems here are more often age-related — worn pumps, perished tubing, leaking housings — than water quality.",
    intro:
      "Kothrud is settled, older housing, and that shapes the work. Purifiers here are frequently eight or ten years old, so pumps, adaptors and tubing fail before membranes do. We can usually keep an older unit running well rather than pushing a replacement.",
    nearby: ["pune", "baner", "katraj"],
  },
  {
    slug: "hadapsar",
    name: "Hadapsar",
    parent: "Pune",
    localities: ["Magarpatta City", "Amanora Park Town", "Sasane Nagar", "Mundhwa", "Handewadi"],
    water:
      "Township supply in Magarpatta and Amanora is treated and consistent. The surrounding older areas vary far more, and borewell supply is common out towards Handewadi.",
    intro:
      "Hadapsar splits neatly in two. Inside the townships we mostly do scheduled AMC servicing and filter changes on a predictable cycle. Outside them, in the older parts and towards Handewadi, input water is far less predictable and we test before recommending anything.",
    nearby: ["kharadi", "viman-nagar", "pune", "katraj"],
  },
  {
    slug: "viman-nagar",
    name: "Viman Nagar",
    parent: "Pune",
    localities: ["Viman Nagar", "Lohegaon", "Kalyani Nagar", "Yerawada"],
    water:
      "Mostly municipal supply with reasonable consistency, though overhead-tank storage in older buildings is a common source of taste and odour complaints.",
    intro:
      "Viman Nagar and the stretch towards Kalyani Nagar is dense apartment living, so most of our work is servicing wall-mounted units in compact kitchens and sorting out taste complaints that trace back to building storage tanks rather than the purifier itself.",
    nearby: ["kharadi", "hadapsar", "pune"],
  },
  {
    slug: "kharadi",
    name: "Kharadi",
    parent: "Pune",
    localities: ["EON IT Park", "Wadgaon Sheri", "Chandan Nagar", "Keshav Nagar"],
    water:
      "Rapid construction has outrun piped supply in parts of Kharadi, so tanker and borewell water is common and input TDS swings between neighbouring societies.",
    intro:
      "Kharadi has grown fast and supply has not entirely kept up. We see many tanker-fed societies where input quality changes with the supplier, which is hard on membranes and makes a scheduled AMC worth more here than most places. Alongside home visits we run commercial AMC for offices around the IT park.",
    nearby: ["viman-nagar", "hadapsar", "pune"],
  },
  {
    slug: "chinchwad",
    name: "Chinchwad",
    parent: "Pimpri-Chinchwad",
    localities: ["Chinchwad Station", "Walhekarwadi", "Thergaon", "Ravet", "Kalewadi"],
    water:
      "PCMC supply is generally reliable here, though Ravet and the newer western edge still see borewell supplementation.",
    intro:
      "Chinchwad covers long-settled housing near the station along with fast-growing pockets around Ravet. Older units need mechanical repairs — pumps, valves, leaks — while the newer Ravet societies are mostly fresh installations and first filter changes.",
    nearby: ["pimpri-chinchwad", "nigdi", "wakad"],
  },
  {
    slug: "nigdi",
    name: "Nigdi",
    parent: "Pimpri-Chinchwad",
    localities: ["Pradhikaran", "Bhakti Shakti", "Yamunanagar", "Akurdi", "Otur Colony"],
    water:
      "Pradhikaran's planned sectors have stable municipal supply and moderate TDS, which is kind to membranes when the unit is serviced on schedule.",
    intro:
      "Nigdi and Pradhikaran are planned, well-served sectors, and purifiers here tend to be in good condition. Most of our work is AMC renewals and scheduled filter replacement rather than emergency repairs, which is exactly how it should be.",
    nearby: ["chinchwad", "pimpri-chinchwad"],
  },
  {
    slug: "katraj",
    name: "Katraj",
    parent: "Pune",
    localities: ["Ambegaon", "Dhankawadi", "Bharati Vidyapeeth", "Kondhwa Budruk", "Balaji Nagar"],
    water:
      "Supply towards the southern fringe is less uniform, and borewell use rises as you move out past Ambegaon, so hardness complaints are more frequent here than in the core city.",
    intro:
      "Katraj, Ambegaon and Dhankawadi sit on Pune's southern edge where piped supply thins out. Hardness and scaling come up often, and a water test on the first visit usually changes what we end up recommending. Student housing around Bharati Vidyapeeth is a steady source of installation work.",
    nearby: ["pune", "kothrud", "hadapsar"],
  },
];

export const areaBySlug = (slug: string) => areas.find((a) => a.slug === slug);
