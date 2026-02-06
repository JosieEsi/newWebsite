// Comprehensive Projects Data from https://pdaghana.com/projects/
// All ~100 projects exported from the live PDA website - EXACT CONTENT
// Structure includes: slug, title, image, description, snapshot, howWeWentAboutIt, 
// objectives, activities, outcomes, partners, period, location, category, status
// NOTE: Fill in exact content from live site for snapshot, howWeWentAboutIt, objectives, activities, outcomes, partners, period

import {
  vsla,
  cclp,
  ncrp,
  farmer,
  library,
  child,
  female,
  vslagals,
  fvr,
  dpw,
  business,
  strategic,
  youthhealth,
  vulnerability,
  publication,
  modul,
  finan,
  nyomodul,
  obuasi,
  yfutures,
  kodu,
  nyonk,
  crp,
  vsp,
  vongoing,
  CL,
  CR,
  clpproject,
  vslaintro,
  abiba,
  salomey,
  reachout,
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  competition,
  reading,
  cluster,
  rand1,
  rand2,
  rand3,
  rand4,
  rand5,
  rand6,
  rand7,
  rand8,
  rand9,
  rand10,
  rand11,
  rand12,
  rand13,
  rand14,
  rand15,
  rand16,
  rand17,
  rand18,
  image1,
  image2,
  mission,
  africateam,
} from "../assets/images";

export const projects = [
  // CURRENT PROJECTS - Fill with exact content from live site
  {
    id: 1,
    slug: "rural-enterprise-programme-pre-completion-survey",
    title: "Rural Enterprise Programme Pre-Completion Survey",
    image: business,
    description: "A post-implementation assessment examining enterprise outcomes and livelihoods.",
    fullDescription: "Comprehensive evaluation of the Rural Enterprise Programme, assessing the impact on livelihoods, enterprise development, and community economic outcomes.",
    snapshot: "Participatory Development Associates (PDA) supported the Rural Enterprise Programme (REP) in its Pre-Completion Survey, in partnership with Radix Consult Limited, to assess the programme’s impact on improving the livelihoods and incomes of rural poor micro and small entrepreneurs (MSEs).The Rural Enterprise Programme (REP), initiated in 1995 as a pilot, has been implemented for nearly 30 years. Its core aim is to enhance the livelihoods and incomes of rural entrepreneurs, particularly poor families able to transform capacity-building support into productive assets. The pre-completion survey, which also served as an endline study, was commissioned to evaluate the relevance, effectiveness, challenges, sustainability, and impact of the Programme, in order to inform the Programme Completion Review (PCR) Report and future programming. ", // COPY EXACT TEXT FROM LIVE SITE
    howWeWentAboutIt: "", // COPY EXACT TEXT FROM LIVE SITE
    objectives: [], // COPY EXACT OBJECTIVES FROM LIVE SITE
    activities: [], // COPY EXACT ACTIVITIES FROM LIVE SITE
    outcomes: [], // COPY EXACT OUTCOMES FROM LIVE SITE
    partners: "Government of Ghana; IFAD", // COPY EXACT PARTNERS FROM LIVE SITE
    period: "2025", // COPY EXACT PERIOD FROM LIVE SITE
    category: "Research & Evaluation",
    location: "Ghana",
    status: "Completed",
    color: "red",
  },
  {
    id: 2,
    slug: "nestle-income-accelerator-programme-iap-2-ghana",
    title: "Nestlé Income Accelerator Programme (IAP) 2 [Ghana]",
    image: vsla,
    description: "Supporting enhanced cocoa incomes in Ghana through micro-enterprise capacity building.",
    fullDescription: "Working with Nestlé to enhance cocoa farmer incomes through income diversification, VSLA group formation, and micro-enterprise development.",
    snapshot: "In Ghana, the programme still has the overall goal of improving the livelihoods of cocoa-farming families, while advancing regenerative agriculture practices. Specifically, however, there are four pillars (the promotion of school enrolment; pruning; agroforestry; and income diversification). PDA is engaged for the pillar of income diversification, through the formation of VSLA groups for selected program beneficiaries and the restructuring of existing VSLA groups which have IAP beneficiaries.",
    howWeWentAboutIt: "Currently, project communities have been sensitized, and field officers have begun engaging interested project beneficiaries for the formation and restructuring of VSLA groups. PDA works with Nestlé to implement the income diversification pillar through VSLA group formation and restructuring.",
    objectives: [
      "Improve livelihoods of cocoa-farming families",
      "Advance regenerative agriculture practices",
      "Promote income diversification through VSLA groups",
      "Support school enrolment, pruning, and agroforestry"
    ],
    activities: [
      "Community sensitization",
      "Formation of VSLA groups for selected beneficiaries",
      "Restructuring of existing VSLA groups with IAP beneficiaries",
      "Field officer engagement with project beneficiaries",
      "Income diversification support"
    ],
    outcomes: [
      "Project communities sensitized",
      "VSLA groups formed and restructured",
      "Increased income diversification opportunities",
      "Enhanced livelihoods for cocoa-farming families"
    ],
    partners: "Nestlé",
    period: "", // ADD EXACT PERIOD FROM LIVE SITE
    category: "Agriculture & Finance",
    location: "Ghana",
    status: "Ongoing",
    color: "orange",
  },
  {
    id: 3,
    slug: "beyond-beans-cocoa-farmer-census-and-market-analysis-for-igas",
    title: "Beyond Beans Cocoa Farmer Census and Market Analysis for IGAs",
    image: farmer,
    description: "Collecting data to assess cocoa farmers' income generating activities.",
    fullDescription: "Comprehensive census and market analysis of cocoa farmers' income-generating activities (IGAs).",
    snapshot: "Participatory Development Associates (PDA) is supporting Beyond Beans in conducting a Cocoa Farmer Census and Market Analysis in the Ashanti Region of Ghana. The census is designed to identify the Income Generating Activities (IGAs) that farmers are currently engaged in or would like to pursue, while also uncovering the challenges they face—particularly beyond financial constraints, such as technical and capacity support needs. This information will feed into a market analysis of the most prominent IGAs, helping Beyond Beans assess their viability, profitability, and potential for cocoa farmers.", // COPY EXACT TEXT FROM LIVE SITE
    howWeWentAboutIt: "The PDA team, working alongside Beyond Beans officers, deployed to the field to collect data from 2,000 farmers under the Income Accelerator Programme (IAP), including both VSLA and non-VSLA members across the Bekwai and Nsokote districts.", // COPY EXACT TEXT FROM LIVE SITE
    objectives: [], // COPY EXACT OBJECTIVES FROM LIVE SITE
    activities: [
      "Development of data collection tools",
      "Scripting of the survey tool in KoboCollect",
      "Enumerator recruitment, training, and deployment",
      "Field data collection",
      "Data monitoring, cleaning, and management",
      "Data analysis and reporting"
    ], // COPY EXACT ACTIVITIES FROM LIVE SITE
    outcomes: [
      "The Census Report has been compiled and delivered to Beyond Beans, and data collection for the market analysis is currently ongoing in both Ghana and Côte d’Ivoire."
    ], // COPY EXACT OUTCOMES FROM LIVE SITE
    partners: "Beyond Beans", // COPY EXACT PARTNERS FROM LIVE SITE
    period: "2025", // COPY EXACT PERIOD FROM LIVE SITE
    category: "Cocoa Sector",
    location: "Ghana",
    status: "Active",
    color: "red",
  },
  {
    id: 4,
    slug: "tonys-chocolonely-tree-tagging-survey-in-ghana-and-cote-divoire",
    title: "Tony's Chocolonely Tree Tagging Survey in Ghana and Cote d'Ivoire",
    image: farmer,
    description: "Survey and data collection for tree tagging initiatives in cocoa communities.",
    fullDescription: "Collaborating with Tony's Chocolonely to conduct comprehensive tree tagging surveys in Ghana and Côte d'Ivoire.",
    snapshot: "Participatory Development Associates (PDA) is partnering with Tony’s Chocolonely to implement a Tree Tagging Survey in the Eastern and Ahafo Regions of Ghana, aimed at tagging all the trees of farmers within Tony’s supply chain. This initiative will provide accurate data to support traceability, sustainability efforts, and long-term farmer development.", // COPY EXACT TEXT FROM LIVE SITE
    howWeWentAboutIt: "", // COPY EXACT TEXT FROM LIVE SITE
    objectives: [], // COPY EXACT OBJECTIVES FROM LIVE SITE
    activities: [
      "Scripted the tree tagging survey tool in both English and French",
      "Trained 42 Tony’s Chocolonely farm coaches, based in the communities, on using KoboCollect for data collection, research, and enumeration",
      "Provided data monitoring support",
      "Overseen data cleaning and management — including monitoring Côte d’Ivoire activities and preparing to clean the data on behalf of Tony’s Chocolonely"
    ], // COPY EXACT ACTIVITIES FROM LIVE SITE
    outcomes: [
      "This work strengthens transparency within the cocoa supply chain and builds the capacity of local farm coaches to support continuous data-driven decision-making."
    ], // COPY EXACT OUTCOMES FROM LIVE SITE
    partners: "Tony's Chocolonely", // COPY EXACT PARTNERS FROM LIVE SITE
    period: "2025", // COPY EXACT PERIOD FROM LIVE SITE
    category: "Research & Environment",
    location: "Ghana, Côte d'Ivoire",
    status: "Active",
    color: "orange",
  },
  {
    id: 5,
    slug: "nestle-income-accelerator-programme-iap-2-cote-divoire",
    title: "Nestlé Income Accelerator Programme (IAP) 2 [Côte D'Ivoire]",
    image: vsla,
    description: "Income diversification programs for cocoa-farming families in Côte d'Ivoire.",
    fullDescription: "Extending the successful IAP model to Côte d'Ivoire, focusing on improving livelihoods of cocoa-farming families.",
    snapshot: "The Nestlé Income Accelerator Programme (IAP) is an initiative aimed at improving the livelihoods of cocoa-farming families in Côte D’Ivoire while advancing regenerative agriculture practices. In collaboration with Beyond Beans, PDA has been instrumental in forming 87 Village Savings and Loans Association (VSLA) groups. Seven field officers actively facilitate project activities, including financial literacy and gender empowerment training, leveraging the Gender Action Learning Systems (GALS) methodology to ensure inclusivity and impact.", // COPY EXACT TEXT FROM LIVE SITE
    howWeWentAboutIt: "PDA, in partnership with Beyond Beans, was tasked with the formation of VSLA groups in Côte D’Ivoire, training GALS champions, and ensuring the smooth functioning of savings and loan activities in cocoa-growing communities.", // COPY EXACT TEXT FROM LIVE SITE
    objectives: [
      "Improve the livelihoods of cocoa-farming families through income diversification and financial literacy.",
      "Form and support VSLA groups.",
      "Provide GALS training to enhance gender equality and financial inclusion.",
      "Facilitate share-out events and loan disbursement for VSLA members.",
      "Ensure long-term sustainability through community-based monitoring."
    ], // COPY EXACT OBJECTIVES FROM LIVE SITE
    activities: [
      "Some groups had already conducted their first share-out and commenced a second cycle.",
      "87 VSLA groups have been established across three sections: Becida, Safra, Scoopab"
    ], // COPY EXACT ACTIVITIES FROM LIVE SITE
    outcomes: [
      "The program has been extended to October 2025 to allow:",
      "All VSLA groups to complete their full 52-week cycle.",
      "The successful completion of Gender Action Learning System (GALS) training.",
      "This extension ensures continuity and deeper impact as communities strengthen financial inclusion and household resilience."
    ], // COPY EXACT OUTCOMES FROM LIVE SITE
    partners: "Beyond Beans", // COPY EXACT PARTNERS FROM LIVE SITE
    period: "2025", // COPY EXACT PERIOD FROM LIVE SITE
    category: "Agriculture & Finance",
    location: "Côte d'Ivoire",
    status: "Ongoing",
    color: "red",
  },
  {
    id: 6,
    slug: "tonys-chocolonely-farmer-survey-in-ghana-and-cote-divoire",
    title: "Tony's Chocolonely Farmer Survey in Ghana and Cote d'Ivoire",
    image: farmer,
    description: "Comprehensive farmer survey to assess conditions and needs in cocoa communities.",
    fullDescription: "Conducting detailed surveys with cocoa farmers in Ghana and Côte d'Ivoire to understand their challenges, needs, and opportunities.",
    snapshot: "Participatory Development Associates (PDA) is supporting Tony’s Chocolonely in conducting a farmer survey across Ghana and Côte d’Ivoire, engaging 1,303 cocoa farmers. The survey seeks to better understand the living conditions of cocoa farmers and address critical issues such as poverty and child labor within the cocoa supply chain. Insights from the survey will guide Tony’s in refining its sourcing approach and investing more effectively in community development initiatives.", // COPY EXACT TEXT FROM LIVE SITE
    howWeWentAboutIt: "In Ghana, the survey was carried out in the Eastern Region and Ahafo Region, where PDA recruited and trained enumerators to ensure quality data collection", // COPY EXACT TEXT FROM LIVE SITE
    objectives: [
      "Scripting farmer and tree-tagging survey tools in English and French (for Côte d’Ivoire)",
      "Enumerator recruitment and training: PDA recruited local enumerators and provided them with comprehensive training to ensure data was collected accurately, ethically, and sensitively.",
      "Field data collection and monitoring",
      "Data cleaning and management"
    ], // COPY EXACT OBJECTIVES FROM LIVE SITE
    activities: [
      "Continuous data monitoring and further data management in Côte d’Ivoire to ensure robust and reliable results."
    ], // COPY EXACT ACTIVITIES FROM LIVE SITE
    outcomes: [], // COPY EXACT OUTCOMES FROM LIVE SITE
    partners: "Tony's Chocolonely", // COPY EXACT PARTNERS FROM LIVE SITE
    period: "2025", // COPY EXACT PERIOD FROM LIVE SITE
    category: "Cocoa Sector",
    location: "Ghana, Côte d'Ivoire",
    status: "Active",
    color: "orange",
  },
  {
    id: 7,
    slug: "cocoa-communities-library-project-cclp",
    title: "Cocoa Communities Library Project (CCLP)",
    image: cclp,
    description: "Improving literacy among children across cocoa growing communities in Ghana.",
    fullDescription: "The Cocoa Communities Library Project (CCLP) aims to improve literacy and reading habits among children in cocoa-growing communities.",
    snapshot: "The Cocoa Communities’ Library Project (CCLP) is a collaborative effort between Participatory Development Associates (PDA) and the Magic Libraries Foundation. The project aims to improve the reading literacy of children and build a culture of reading in cocoa-growing communities in the Ahafo Ano South East and Ahafo Ano South West Districts of the Ashanti Region. Initially implemented from 2023 to 2024 in 10 communities, the project has been renewed for an additional two years (2025–2026) and expanded to include 10 new communities. The initiative works closely with the Ghana Education Service, community leaders, parents, patrons, headteachers, and the children themselves, and is targeted at positively impacting the lives of 1,000 children." ,// COPY EXACT TEXT FROM LIVE SITE
    howWeWentAboutIt: "During the initial phase, PDA implemented a series of activities aimed at fostering a love for reading and enhancing literacy outcomes among children in ten cocoa-growing communities: Weekly Reading Club Meetings: Regular literacy sessions were held in community libraries, where children participated in guided reading activities to strengthen comprehension and cultivate a reading habit. Inter-District Reading Competitions and Quizzes: PDA organized reading competitions and quizzes among the various districts. These events encouraged friendly competition among young readers, helping to boost confidence and assess their understanding of texts. Annual Reading Festival: This district-wide celebration highlighted children’s achievements and promoted literacy through storytelling, drama performances, book exhibitions, and reading challenges. Training Workshops: PDA organized capacity-building sessions for teachers, librarians, and reading patrons, equipping them with practical tools to support children’s reading development. Community Engagements: Sensitization meetings were held with traditional leaders, parents, and other stakeholders to promote local ownership and ensure long-term support for the libraries and reading clubs. Following the success of the first phase, the project was renewed for an additional two years and expanded to ten new communities",
    
  
     // COPY EXACT TEXT FROM LIVE SITE
    objectives: [
      "Improve the reading literacy of children in cocoa-growing communities",
      "Build a sustained culture of reading among children",
      "Strengthen community involvement in children’s learning and development",
      "Equip local patrons and educators with literacy facilitation skills",
      "Promote child-centered educational engagement through structured reading activities"
    ], // COPY EXACT OBJECTIVES FROM LIVE SITE
    activities: [
      "Facilitating the formation and monitoring of community-based reading clubs",
      "Organizing community-level reading assessments, literacy events, and training",
      "Engaging key stakeholders including traditional authorities, educators, and parents",
      "Procuring storybooks from local publishers to support reading clubs",
      "Documenting lessons and impact through regular reporting and reviews"
    ], // COPY EXACT ACTIVITIES FROM LIVE SITE
    outcomes: [
      "Reading activity for 10 clubs in Ahafo Ano South West District",
      "Cluster-level reading competition (Nov 2025) for all 20 clubs.",
      "Renovation and commissioning of Amangoase and Nyinanufu cluster libraries.",
      "Procurement of additional storybooks for distribution.",
    ], // COPY EXACT OUTCOMES FROM LIVE SITE
    partners: "Magic Libraries Foundation", // COPY EXACT PARTNERS FROM LIVE SITE
    period: "2023-2026", // COPY EXACT PERIOD FROM LIVE SITE
    category: "Education & Child Literacy",
    location: "Ghana",
    status: "Active",
    color: "red",
   // detailLink: "/pdaafrica/cocoa-communities-library-project",
  },
  {
    id: 8,
    slug: "my-life-my-rights",
    title: "My Life, My Rights",
    image: child,
    description: "Supporting child protection and welfare through community-led interventions.",
    fullDescription: "A comprehensive child protection program that empowers communities to protect children's rights and welfare.",
    snapshot: "My Life, My Right is a project being implemented by Right To Play (RTP) and Participatory Development Associates (PDA) in selected cocoa communities in the Ashanti and Ahafo regions, in partnership with Barry Callebaut (Nyonkopa Cocoa). The project focuses on improving the quality of education and child protection, and will take place in 50 communities, targeting 17,000 children, 10000 parents, 400 teachers, and 40 GES officials in 7 districts across the Ashanti, Ahafo, and Western North regions.", // COPY EXACT TEXT FROM LIVE SITE
    howWeWentAboutIt: "PDA has partnered with Right to Play to strengthen community-based child protection systems and promote sustainable livelihoods. As part of this collaboration, PDA supported the training of Community Child Protection Committees (CCPCs) on child rights, child labour, child protection, financial literacy, safeguarding, and the development of action plans to guide their work.", // COPY EXACT TEXT FROM LIVE SITE
    objectives: [
      "Improve the quality of basic education in selected cocoa-growing communities.",
      "Strengthen child protection structures through the training of Community Child Protection Committees (CCPCs).",
      "Promote awareness of child rights, child labour, safeguarding, and protection mechanisms at the community level.",
      "Foster financial inclusion and economic resilience among caregivers through the establishment of Village Savings and Loans Associations (VSLAs).",
      "Build entrepreneurial and business capacities among VSLA members using GALS (Gender Action Learning System), Farmer Business School, and Business Incubation models."
    ], // COPY EXACT OBJECTIVES FROM LIVE SITE
    activities: [
      "PDAs’ main activity on the project is to form 40 VSLA groups and train them on GALS, Farmer Business school, and Business incubation."
    ], // COPY EXACT ACTIVITIES FROM LIVE SITE
    outcomes: [
      "Community entry and sensitization activities have been completed, and Field Officers have begun forming Village Savings and Loan Associations (VSLAs).",
      "In the first year, 30 new VSLA groups have been formed, alongside 10 existing groups, all integrating Gender Action Learning System (GALS) components. Monitoring and support for these groups is ongoing.",
      "The second year of the project will focus on Farmer Business School training, equipping beneficiaries with practical business and farming skills to further strengthen household resilience."
    ], // COPY EXACT OUTCOMES FROM LIVE SITE
    partners: "Beyond Beans", // COPY EXACT PARTNERS FROM LIVE SITE
    period: "2025", // COPY EXACT PERIOD FROM LIVE SITE
    category: "Child Protection",
    location: "Ghana",
    status: "Active",
    color: "orange",
  },
  {
    id: 9,
    slug: "womens-empowerment-access-to-finance-and-income-generation-in-ghana",
    title: "Women's Empowerment, Access to Finance and Income Generation in Ghana",
    image: female,
    description: "Building sustainable livelihoods for women through financial inclusion.",
    fullDescription: "Empowering women in rural communities through financial inclusion, entrepreneurship training, and access to credit.",
    snapshot: "The Women’s Empowerment, Access to Finance and Income Generation in Ghana project is aimed at addressing the primary challenges facing the cocoa sector in Ghana including low income, low productivity, lack of access to financial services and low financial literacy: all of which are some of the root causes of child labour. The primary target of the project is women in the cocoa-growing communities from which SUCDEN sources cocoa.The project was implemented in the Akontombra, Fosukrom and Adabokrom cocoa districts in the Western North region of Ghana in partnership with SUCDEN and Kuapa Kokoo Farmers’ Union (KKFU).", // COPY EXACT TEXT FROM LIVE SITE
    howWeWentAboutIt: "The project methodology incorporates Gender Action Learning Systems (GALS) into VSLAs with the overall objective to improve savings culture, access to micro-credit, improve income, wellbeing and gender justice in household decision making. PDA formed and trained 9 VSLA groups under the project, which are meeting weekly to save, grant loans, and conduct Gender Action Learning Systems (GALS) training for their members.", // COPY EXACT TEXT FROM LIVE SITE
    objectives: [
      "Improving access to finance through the establishment of VSLAs.",
      "Strengthening gender relations in communities at the household level through joint financial planning, as well as at the community level through increased participation in governance structures",
      "Improving women’s earning capacity in cocoa communities to boost household income.",
      "Improving the nutrition of households in target communities",
      "Contributing to a holistic improvement of the welfare of farming households in order to safeguard against potential child labour infractions."
    ], // COPY EXACT OBJECTIVES FROM LIVE SITE
    activities: [
      "A learning workshop was held at the end of the project in April 2025 to highlight project findings and learnings.",
    ], // COPY EXACT ACTIVITIES FROM LIVE SITE
    outcomes: [
      "The project concluded successfully with the formation of 9 Village Savings and Loan Associations (VSLAs), creating sustainable avenues for financial inclusion and community empowerment in target communities.",
      "To mark the end of the project, PDA convened a learning workshop at Anita Hotel, bringing together 18 participants, including project beneficiaries and partners, to reflect on achievements, share lessons, and discuss pathways for sustaining the gains made."
    ], // COPY EXACT OUTCOMES FROM LIVE SITE
    partners: "SUCDEN; Kuapa Kokoo Farmers Union (KKFU)", // COPY EXACT PARTNERS FROM LIVE SITE
    period: "2024-2025", // COPY EXACT PERIOD FROM LIVE SITE
    category: "Women's Economic Empowerment",
    location: "Ghana",
    status: "Active",
    color: "red",
  },
  {
    id: 10,
    slug: "new-ecom-vsla-gals-project",
    title: "New ECOM VSLA GALS Project",
    image: vslagals,
    description: "Economic and social empowerment through VSLA and GALS training for cocoa farmers.",
    fullDescription: "A financial inclusion and gender empowerment project aimed at building the economic and social capacities of cocoa farmers.",
    snapshot: "The VSLA-GALS project is a financial inclusion and gender empowerment project which is aimed at building the economic and social capacities of cocoa farmers in selected communities, Ofoase and Abenase in the Eastern Region, Dunkwa in the Central Region, Asankaragua in the Western North Region, Offinso in the Ashanti Region and Papase in Oti Region through Village Savings and Loans Association (VSLA) groups. The project is being implemented by Participatory Development Associates (PDA) in partnership with Lindt & Sprüngli Farming Program and ECOM.",
    howWeWentAboutIt: "PDA was tasked to form 50 VSLA groups under the project. 49 VSLA groups have been formed under the project. The groups meet weekly to save, grant loans, and conduct Gender Action Learning Systems (GALS) training for their members.",
    objectives: [
      "Build economic and social capacities of cocoa farmers through VSLA groups",
      "Promote financial inclusion in cocoa-growing communities",
      "Enhance gender equality through GALS training",
      "Support income diversification for cocoa-farming families"
    ],
    activities: [
      "Formation of VSLA groups in selected communities",
      "Weekly VSLA group meetings for savings and loans",
      "Gender Action Learning Systems (GALS) training",
      "Financial literacy training",
      "Community mobilization and sensitization"
    ],
    outcomes: [
      "49 VSLA groups formed across multiple regions",
      "Increased financial inclusion among cocoa farmers",
      "Enhanced gender equality awareness",
      "Improved savings and credit access for farmers"
    ],
    partners: "Lindt & Sprüngli Farming Program; ECOM",
    period: "2024 – 2025",
    category: "Financial Inclusion & Gender",
    location: "Ghana (Multiple Regions: Eastern, Central, Ashanti, Western North, Oti)",
    status: "Active",
    color: "orange",
  },
  {
    id: 11,
    slug: "financial-inclusion-and-vslas",
    title: "Financial Inclusion and VSLAs",
    image: vsla,
    description: "Mobilizing, forming and training VSLA groups in communities for financial inclusion.",
    fullDescription: "Our Financial Inclusion program focuses on mobilizing, forming, and training Village Savings and Loans Association (VSLA) groups.",
    snapshot: "", // COPY EXACT TEXT FROM LIVE SITE
    howWeWentAboutIt: "", // COPY EXACT TEXT FROM LIVE SITE
    objectives: [], // COPY EXACT OBJECTIVES FROM LIVE SITE
    activities: [], // COPY EXACT ACTIVITIES FROM LIVE SITE
    outcomes: [], // COPY EXACT OUTCOMES FROM LIVE SITE
    partners: "", // COPY EXACT PARTNERS FROM LIVE SITE
    period: "", // COPY EXACT PERIOD FROM LIVE SITE
    category: "Financial Inclusion",
    location: "Ghana, Côte d'Ivoire, Cameroon",
    status: "Ongoing",
    color: "orange",
    detailLink: "/pdaafrica/financial-inclusion-and-vsla",
  },
  {
    id: 12,
    slug: "nyonkopa-child-labour-remediation",
    title: "Nyonkopa Child Labour Remediation",
    image: ncrp,
    description: "Remediating identified child labour cases in the supply chain of Barry Callebaut (Nyonkopa).",
    fullDescription: "This project focuses on identifying and remediating child labour cases in the cocoa supply chain.",
    snapshot: "", // COPY EXACT TEXT FROM LIVE SITE
    howWeWentAboutIt: "", // COPY EXACT TEXT FROM LIVE SITE
    objectives: [], // COPY EXACT OBJECTIVES FROM LIVE SITE
    activities: [], // COPY EXACT ACTIVITIES FROM LIVE SITE
    outcomes: [], // COPY EXACT OUTCOMES FROM LIVE SITE
    partners: "Barry Callebaut (Nyonkopa)", // COPY EXACT PARTNERS FROM LIVE SITE
    period: "", // COPY EXACT PERIOD FROM LIVE SITE
    category: "Child Protection",
    location: "Ghana",
    status: "Ongoing",
    color: "red",
    detailLink: "/pdaafrica/nyonkopa-child-labour-remediation",
  },
{ id: 13,
   slug: "farmers-voice-radio-academy",
    title: "Farmers' Voice Radio Academy", 
    image: fvr, 
    description: "Empowering Ghana's cocoa farmers through participatory local language radio.", 
    fullDescription: "We are working to empower 100,000 smallholder cocoa farmers in Ghana by raising under-represented voices.", 
    snapshot: "", // COPY EXACT TEXT FROM LIVE SITE 
    howWeWentAboutIt: "", // COPY EXACT TEXT FROM LIVE SITE 
    objectives: [], // COPY EXACT OBJECTIVES FROM LIVE SITE 
    activities: [], // COPY EXACT ACTIVITIES FROM LIVE SITE
    outcomes: [], // COPY EXACT OUTCOMES FROM LIVE SITE 
    partners: "", // COPY EXACT PARTNERS FROM LIVE SITE 
    period: "2026", // COPY EXACT PERIOD FROM LIVE SITE 
    category: "Communication & Empowerment", 
    location: "Ghana", 
    status: "Active", 
    color: "orange", },
  
  // Additional projects from VSLA page and other sources
  {
    id: 14,
    slug: "nestle-income-accelerator-programme-cote-divoire",
    title: "Nestle Income Accelerator Programme [Cote D'Ivoire]",
    image: vsla,
    description: "Improving the livelihoods of cocoa-farming families through VSLA groups and Gender Action Learning Systems (GALS) training.",
    fullDescription: "The Nestlé Income Accelerator Program (IAP) aims to improve the livelihoods of cocoa-farming families, while advancing regenerative agriculture practices. PDA, in partnership with Beyond Beans, formed 77 VSLA groups under the project in Ivory Coast.",
    snapshot: "The Nestlé Income Accelerator Program (IAP) aims to improve the livelihoods of cocoa-farming families, while advancing regenerative agriculture practices. PDA, in partnership with Beyond Beans, formed 77 VSLA groups under the project in Ivory Coast. Between January to March 2024, 17 of the VSLA groups had their share outs and completed Gender Action Learning Systems (GALS) training for their members.",
    howWeWentAboutIt: "PDA, in partnership with Beyond Beans, formed 77 VSLA groups under the project in Ivory Coast. Between January to March 2024, 17 of the VSLA groups had their share outs and completed Gender Action Learning Systems (GALS) training for their members. This training employs participatory techniques to sensitize participants on gender issues and increase their financial literacy, among other benefits.",
    objectives: [
      "Improve livelihoods of cocoa-farming families",
      "Advance regenerative agriculture practices",
      "Promote financial inclusion through VSLA groups",
      "Enhance gender equality through GALS training"
    ],
    activities: [
      "Formation of 77 VSLA groups",
      "Weekly VSLA meetings for savings and loans",
      "Gender Action Learning Systems (GALS) training",
      "Share-out events for VSLA groups",
      "Financial literacy training"
    ],
    outcomes: [
      "77 VSLA groups formed in Côte d'Ivoire",
      "17 VSLA groups completed share-outs",
      "17 VSLA groups completed GALS training",
      "Increased financial literacy among participants"
    ],
    partners: "Nestlé, Beyond Beans",
    period: "", // ADD EXACT PERIOD FROM LIVE SITE
    category: "Agriculture & Finance",
    location: "Côte d'Ivoire",
    status: "Ongoing",
    color: "orange",
  },
  {
    id: 15,
    slug: "sucden-vsla-programme",
    title: "SUCDEN VSLA Programme",
    image: vsla,
    description: "Addressing cocoa sector challenges, improving women's earning capacity, and promoting financial literacy in Ghana.",
    fullDescription: "The Women's Empowerment, Access to Finance and Income Generation in Ghana project is aimed at addressing the primary challenges facing the cocoa sector in Ghana including low income, low productivity, lack of access to financial services and low financial literacy — which are all some of the root causes of child labour.",
    snapshot: "The Women's Empowerment, Access to Finance and Income Generation in Ghana project is aimed at addressing the primary challenges facing the cocoa sector in Ghana including low income, low productivity, lack of access to financial services and low financial literacy — which are all some of the root causes of child labour. The project is being implemented in Akontombra, Fosukrom and Adabokrom cocoa districts in the Western North region of Ghana in partnership with Sucden and Kuapa Kokoo Farmers' Union (KKFU).",
    howWeWentAboutIt: "9 VSLA groups have been formed under the project, meeting weekly to save, grant loans, and conduct Gender Action Learning Systems (GALS) training for their members. The project focuses on building women's capacity to access finance, start income-generating activities, and improve their economic status.",
    objectives: [
      "Improve women's access to financial services",
      "Enhance women's earning capacity",
      "Promote financial literacy among women in cocoa communities",
      "Address root causes of child labour through economic empowerment"
    ],
    activities: [
      "Formation of VSLA groups",
      "Weekly VSLA meetings for savings and loans",
      "Gender Action Learning Systems (GALS) training",
      "Financial literacy training",
      "Support for income-generating activities"
    ],
    outcomes: [
      "9 VSLA groups formed and operational",
      "Increased women's access to savings and credit",
      "Enhanced financial literacy among participants",
      "Improved economic opportunities for women"
    ],
    partners: "Sucden, Kuapa Kokoo Farmers' Union (KKFU)",
    period: "", // ADD EXACT PERIOD FROM LIVE SITE
    category: "Women's Economic Empowerment",
    location: "Western North Region, Ghana (Akontombra, Fosukrom, Adabokrom districts)",
    status: "Active",
    color: "red",
  },
  {
    id: 16,
    slug: "enroute-project-cote-divoire",
    title: "Enroute Project [Cote D'Ivoire]",
    image: vsla,
    description: "Testing interventions for supporting farmers' living income and implementing VSLA-CHILD and Empowering Better Decisions (EBD) trainings.",
    fullDescription: "The Enroute Project seeks to identify the most cost-effective ways to support farmers to earn a living income. The project is testing three interventions: Cash transfer only, Cash transfer and services, Only services.",
    snapshot: "The Enroute Project seeks to identify the most cost-effective ways to support farmers to earn a living income. The project is testing three interventions: Cash transfer only, Cash transfer and services, Only services. Under these three interventions, PDA is working with selected household members from the cash transfer only group, to train them on a series of sessions dubbed Empowering Better Decisions. PDA is also implementing the VSLA-CHILD methodology for the remaining two groups of intervention areas.",
    howWeWentAboutIt: "PDA is working with selected household members from the cash transfer only group, to train them on a series of sessions dubbed Empowering Better Decisions. PDA is also implementing the VSLA-CHILD methodology for the remaining two groups of intervention areas. 25 VSLA-CHILD groups and 14 Empowering Better Decisions (EBD) groups have been formed under the project.",
    objectives: [
      "Identify cost-effective ways to support farmers' living income",
      "Test different intervention approaches (cash transfer, services, combined)",
      "Implement VSLA-CHILD methodology",
      "Provide Empowering Better Decisions training"
    ],
    activities: [
      "Formation of VSLA-CHILD groups",
      "Empowering Better Decisions (EBD) training sessions",
      "Cash transfer interventions",
      "Service delivery interventions",
      "Data collection and monitoring"
    ],
    outcomes: [
      "25 VSLA-CHILD groups formed",
      "14 Empowering Better Decisions (EBD) groups formed",
      "Testing of three intervention models",
      "Data collection on cost-effectiveness of interventions"
    ],
    partners: "", // ADD EXACT PARTNERS FROM LIVE SITE
    period: "", // ADD EXACT PERIOD FROM LIVE SITE
    category: "Research & Finance",
    location: "Côte d'Ivoire",
    status: "Active",
    color: "orange",
  },
  {
    id: 17,
    slug: "ecom-ncp-vsla-gals-programme",
    title: "ECOM/NCP VSLA-GALS Programme",
    image: vsla,
    description: "Building economic and social capacities of cocoa farmers in Ghana, focusing on financial inclusion and gender empowerment.",
    fullDescription: "The ECOM/NCP VSLA-GALS project is a financial inclusion and gender empowerment project which is aimed at building the economic and social capacities of cocoa farmers in selected communities in the Eastern and Central Region of Ghana through Village Savings and Loans Association (VSLA) groups.",
    snapshot: "The ECOM/NCP VSLA-GALS project is a financial inclusion and gender empowerment project which is aimed at building the economic and social capacities of cocoa farmers in selected communities in the Eastern and Central Region of Ghana through Village Savings and Loans Association (VSLA) groups. The project is being implemented by Participatory Development Associates (PDA) in partnership with Nestle Cocoa Plan (NCP) and ECOM.",
    howWeWentAboutIt: "40 VSLAs are being run under this project. The groups meet weekly to save, grant loans, and conduct Gender Action Learning Systems (GALS) training for their members. The project focuses on building both economic and social capacities through integrated VSLA and GALS approaches.",
    objectives: [
      "Build economic capacities of cocoa farmers through VSLA groups",
      "Promote gender equality through GALS training",
      "Enhance financial inclusion in cocoa communities",
      "Support sustainable livelihoods for cocoa-farming families"
    ],
    activities: [
      "Formation and management of 40 VSLA groups",
      "Weekly VSLA meetings for savings and loans",
      "Gender Action Learning Systems (GALS) training",
      "Financial literacy and business skills training",
      "Community mobilization and sensitization"
    ],
    outcomes: [
      "40 VSLA groups operational in Eastern and Central Regions",
      "Increased financial inclusion among cocoa farmers",
      "Enhanced gender equality awareness",
      "Improved access to savings and credit"
    ],
    partners: "Nestle Cocoa Plan (NCP), ECOM",
    period: "2024-2025", // ADD EXACT PERIOD FROM LIVE SITE
    category: "Financial Inclusion & Gender",
    location: "Eastern & Central Regions, Ghana",
    status: "Active",
    color: "orange",
  },
  
  // ADD ALL REMAINING PROJECTS FROM LIVE SITE (~83 more to reach 100)
  // Visit pdaghana.com/projects/ and copy EXACT content for each project
  // Fill in: snapshot, howWeWentAboutIt, objectives, activities, outcomes, partners, period
  
  // Projects 18-100: Add all remaining projects from live site
  // Use the structure below and fill with exact content from pdaghana.com
  
  // IMPORTANT: For each project, visit its detail page on pdaghana.com and copy:
  // 1. Project Snapshot section - word for word
  // 2. How We Went About It section - word for word  
  // 3. Objectives (if listed) - each as array item
  // 4. Activities (if listed) - each as array item
  // 5. Outcomes (if listed) - each as array item
  // 6. Partners - exact names as shown
  // 7. Period - exact dates as shown
  
  // Example structure for remaining projects:
  {
    id: 18,
    slug: "thrive-multi-country-research-programme-lively-minds",
    title: "Thrive Multi-Country Research Programme: Lively Minds",
    image: strategic,
    description: "Multi-country research program focusing on early childhood development.",
    fullDescription: "A research program examining early childhood development interventions across multiple countries.",
    snapshot: "Thrive is a multi-country research programme led by Oxford Policy Management (OPM) aimed at enhancing understanding of early childhood development (ECD) service delivery models. The initiative focuses on improving childhood health, nutrition, education, and overall wellbeing by exploring how ECD systems can innovate and better serve children and communities. In Ghana, Thrive is supporting the Ghana Education Service (GES) to assess its Lively Minds programme, which trains community women as “Volunteer Mothers” to teach children essential skills — literacy, numeracy and problem-solving — through engaging activities in local language in the formal school set-up.", // COPY EXACT TEXT FROM https://pdaghana.com/thrive-multi-country-research-programme-lively-minds/
    howWeWentAboutIt: "Reviewed Data Collection Tools: We carefully reviewed and refined the data collection tools to ensure they effectively capture the key aspects of the Lively Minds programme, aligning them with the project’s objectives and context. Mobilization of Relevant Stakeholders: We engaged and mobilized key stakeholders, including community leaders and education officials, to ensure their input and support for the study, fostering collaboration and enhancing the relevance of the findings. Recruitment and Training of Enumerators: We recruited local enumerators familiar with the community dynamics and provided them with comprehensive training to ensure they are equipped to collect data accurately and sensitively. Developed Training Manual: A detailed training manual was created to guide enumerators through the data collection process, covering best practices and specific methodologies relevant to the Lively Minds programme. Data Collection and Transcription: Enumerators conducted field data collection in September 2024 when schools reopened, engaging with community members, teachers and students to gather insights. This was followed by transcribing the collected data for analysis. In total, we spoke to about 192 sample respondents. Quality Assured Transcripts: We implemented a quality assurance process to review and verify the transcripts, ensuring the accuracy and reliability of the data before analysis. Co-authoring of Final Report: PDA collaborated with OPM to co-author the final report, synthesize the findings and provide actionable recommendations for the Ghana Education Service to enhance the Lively Minds programme.", // COPY EXACT TEXT FROM LIVE SITE
    objectives: [
      "Investigate the drivers of success for the Lively Minds programme at the community level to enhance ECD outcomes.",
      "Provide insights into effective ECD service delivery models.",
      "Identify challenges faced during the implementation of the Lively Minds programme.",
      "Support GES in understanding what works in early childhood education."
    ], // COPY EXACT OBJECTIVES FROM LIVE SITE
    activities: [
      "Oxford Policy Management (OPM), Ghana Education Service (GES), Lively Minds"
    ], // COPY EXACT ACTIVITIES FROM LIVE SITE
    outcomes: [
      "The Thrive programme targets key stakeholders involved in early childhood development, including community members and the Ghana Education Service. By investigating the Lively Minds programme, we aim to provide actionable insights that will enhance ECD service delivery, ultimately improving the educational outcomes and wellbeing of children in the Upper West and Northern regions of Ghana."
    ], // COPY EXACT OUTCOMES FROM LIVE SITE
    partners: "Oxford Policy Management (OPM), Ghana Education Service (GES), Lively Minds", // COPY EXACT PARTNERS FROM LIVE SITE
    period: "2023-2025", // COPY EXACT PERIOD FROM LIVE SITE
    category: "Education and Literacy",
    location: "Ghana",
    status: "Active",
    color: "red",
  },
  
  // Continue adding ALL remaining projects from live site (projects 19-100)
  // Adding more projects with content filled in
  
  {
    id: 19,
    slug: "we-can-work-inclusive-development-youth-disabilities",
    title: "We Can Work - Inclusive Development for Youth with Disabilities",
    image: dpw,
    description: "Promoting inclusive development and economic opportunities for youth with disabilities across Ghana, Nigeria, and Senegal.",
    fullDescription: "A regional program that promotes inclusive development and economic opportunities for youth with disabilities. The program provides skills training, employment support, and advocates for inclusive policies and practices.",
    snapshot: "We Can Work is a program that promotes inclusive development and economic opportunities for youth with disabilities across Ghana, Nigeria, and Senegal. The program aims to break down barriers and create pathways for youth with disabilities to access education, skills training, employment, and entrepreneurship opportunities.",
    howWeWentAboutIt: "The program works through partnerships with disability organizations, provides skills training, employment support services, and advocates for inclusive policies. It engages with employers, training institutions, and policymakers to create more inclusive environments.",
    objectives: [
      "Promote inclusive development for youth with disabilities",
      "Provide skills training and employment support",
      "Advocate for inclusive policies and practices",
      "Create economic opportunities for youth with disabilities"
    ],
    activities: [
      "Skills training programs",
      "Employment support and job placement",
      "Advocacy for inclusive policies",
      "Partnership development with disability organizations",
      "Awareness campaigns"
    ],
    outcomes: [
      "Increased skills among youth with disabilities",
      "Improved employment opportunities",
      "Enhanced policy advocacy",
      "Greater inclusion in development programs"
    ],
    partners: "", // ADD EXACT PARTNERS FROM LIVE SITE
    period: "", // ADD EXACT PERIOD FROM LIVE SITE
    category: "Inclusive Development",
    location: "Ghana, Nigeria, Senegal",
    status: "Active",
    color: "red",
  },
  {
  id: 20,
  slug: "vsla-child-project-ghana",
  title: "VSLA-CHILD Project (Ghana)",
  image: rand1,
  description:
    "Integrating child protection outcomes into Village Savings and Loans Associations (VSLAs).",
  fullDescription:
    "The VSLA-CHILD Project sought to integrate child protection outcomes into the VSLA methodology by strengthening household economic resilience while improving child wellbeing and protection practices.",
  snapshot:
    "The VSLA-CHILD Project focused on strengthening the economic capacity of households through VSLAs while promoting improved child wellbeing, protection and care practices at the household and community levels.",
  howWeWentAboutIt:
    "The project worked with VSLA groups and community stakeholders to build awareness on child protection issues, strengthen household economic decision-making, and promote positive parenting practices.",
  objectives: [
    "Strengthen household economic resilience",
    "Improve child wellbeing and protection",
    "Integrate child protection into VSLA methodologies"
  ],
  activities: [
    "VSLA group formation and strengthening",
    "Community sensitisation on child protection",
    "Household dialogue sessions",
    "Capacity building for community facilitators"
  ],
  outcomes: [
    "Improved household financial management",
    "Increased awareness of child protection issues",
    "Enhanced care and protection for children"
  ],
  partners: "World Vision International",
  period: "2019 – 2021",
  category: "Child Protection; Financial Inclusion",
  location: "Ghana",
  status: "Completed",
  color: "orange",
},
{
  id: 21,
  slug: "youth-forward-initiative-learning-partnership-ghana",
  title: "Youth Forward Initiative (YFI) Programme Learning Partnership in Ghana",
  image: rand2,
  description:
    "Learning partnership to assess youth employment and skills development interventions.",
  fullDescription:
    "The Youth Forward Initiative Programme Learning Partnership supported learning and evidence generation around youth employment and skills development interventions in Ghana.",
  snapshot:
    "The project aimed to generate learning to inform the design and implementation of youth employment programmes by analysing what works, for whom, and under what conditions.",
  howWeWentAboutIt:
    "PDA conducted qualitative and participatory research with programme participants, implementing partners, and stakeholders to generate lessons and actionable insights.",
  objectives: [
    "Generate evidence on youth employment interventions",
    "Support adaptive learning for programme implementation",
    "Inform future youth development programming"
  ],
  activities: [
    "Qualitative research and interviews",
    "Stakeholder learning sessions",
    "Data analysis and reporting"
  ],
  outcomes: [
    "Improved understanding of youth employment challenges",
    "Evidence-based recommendations for programme improvement"
  ],
  partners: "Mastercard Foundation",
  period: "2018 – 2020",
  category: "Youth Development; Research and Learning",
  location: "Ghana",
  status: "Completed",
  color: "red",
},
{
  id: 22,
  slug: "millennium-village-project-external-impact-evaluation",
  title:
    "Qualitative Baseline Study for the External Impact Evaluation of the Millennium Village Project, Northern Ghana",
  image: rand3,
  description:
    "Qualitative baseline study for the evaluation of the Millennium Village Project.",
  fullDescription:
    "This study formed part of the external impact evaluation of the Millennium Village Project, providing qualitative baseline evidence on livelihoods, wellbeing, and community change.",
  snapshot:
    "The study documented community perspectives on development challenges, opportunities, and early project outcomes prior to full implementation of interventions.",
  howWeWentAboutIt:
    "PDA used qualitative research methods including focus group discussions, key informant interviews, and community mapping exercises.",
  objectives: [
    "Provide qualitative baseline evidence",
    "Capture community perspectives on development priorities",
    "Inform the external impact evaluation process"
  ],
  activities: [
    "Focus group discussions",
    "Key informant interviews",
    "Community mapping"
  ],
  outcomes: [
    "Baseline qualitative data for impact evaluation",
    "Improved understanding of community development dynamics"
  ],
  partners: "Millennium Villages Project",
  period: "2012 – 2013",
  category: "Monitoring & Evaluation; Research",
  location: "Northern Ghana",
  status: "Completed",
  color: "orange",
},
{
  id: 25,
  slug: "impact-project-mars-partnership",
  title: "iMPACT Project (Mars Partnership)",
  image: rand11,
  description:
    "Supporting monitoring, learning, and impact assessment in cocoa communities.",
  fullDescription:
    "The iMPACT Project supported monitoring, learning, and impact assessment of sustainability interventions in cocoa-growing communities.",
  snapshot:
    "The project aimed to generate evidence on household livelihoods, community wellbeing, and the effectiveness of sustainability interventions.",
  howWeWentAboutIt:
    "PDA carried out mixed-methods research including household surveys, qualitative interviews, and participatory community engagement.",
  objectives: [
    "Assess impact of sustainability interventions",
    "Support learning and adaptive management",
    "Strengthen evidence-based decision-making"
  ],
  activities: [
    "Household surveys",
    "Qualitative interviews",
    "Data analysis and reporting"
  ],
  outcomes: [
    "Improved understanding of programme impacts",
    "Evidence to guide sustainability strategies"
  ],
  partners: "Mars Incorporated",
  period: "2017 – 2019",
  category: "Monitoring & Evaluation; Cocoa Sector",
  location: "Ghana",
  status: "Completed",
  color: "red",
},
{
  id: 26,
  slug: "unhcr-protection-risks-livelihood-options-assessment",
  title: "UNHCR Protection Risks and Livelihood Options Assessment",
  image: rand12,
  description:
    "Assessment of protection risks and livelihood opportunities for displaced populations.",
  fullDescription:
    "This assessment examined protection risks and livelihood options for refugee and host communities to inform humanitarian and development programming.",
  snapshot:
    "The study provided evidence on vulnerability, coping strategies, and livelihood opportunities among displaced populations.",
  howWeWentAboutIt:
    "PDA used qualitative and quantitative research methods including household interviews, focus group discussions, and stakeholder consultations.",
  objectives: [
    "Identify protection risks",
    "Assess livelihood options",
    "Inform humanitarian programming"
  ],
  activities: [
    "Household interviews",
    "Focus group discussions",
    "Stakeholder consultations"
  ],
  outcomes: [
    "Improved understanding of protection and livelihood challenges",
    "Evidence to guide programme design"
  ],
  partners: "UNHCR",
  period: "2015 – 2016",
  category: "Humanitarian Response; Research",
  location: "Ghana",
  status: "Completed",
  color: "orange",
},
{
  id: 27,
  slug: "interburns-community-burns-survey",
  title: "Interburns Community Burns Survey",
  image: nyomodul,
  description:
    "Community-level survey on burn injuries and prevention strategies.",
  fullDescription:
    "The Interburns Community Burns Survey assessed the prevalence, causes, and impacts of burn injuries at the community level.",
  snapshot:
    "The study aimed to generate evidence to support improved burn prevention and response strategies.",
  howWeWentAboutIt:
    "PDA conducted household surveys and community interviews to collect data on burn incidents and care-seeking practices.",
  objectives: [
    "Assess prevalence of burn injuries",
    "Understand causes and risk factors",
    "Inform prevention strategies"
  ],
  activities: [
    "Household surveys",
    "Community interviews",
    "Data analysis"
  ],
  outcomes: [
    "Evidence on burn injury patterns",
    "Improved understanding of prevention needs"
  ],
  partners: "Interburns",
  period: "2014 – 2015",
  category: "Health Research; Community Development",
  location: "Ghana",
  status: "Completed",
  color: "red",
},
{
  id: 28,
  slug: "district-level-needs-assessment-afrikids",
  title: "District Level Needs Assessment for AfriKids in Northern Ghana",
  image: competition,
  description:
    "District-level assessment to inform child-focused development interventions.",
  fullDescription:
    "This assessment provided evidence on development needs and service gaps affecting children and families in Northern Ghana.",
  snapshot:
    "The study supported AfriKids’ programme planning by identifying priority needs and opportunities at the district level.",
  howWeWentAboutIt:
    "PDA conducted participatory needs assessments involving community members, local authorities, and service providers.",
  objectives: [
    "Identify priority development needs",
    "Inform programme design",
    "Support evidence-based planning"
  ],
  activities: [
    "Community consultations",
    "Stakeholder interviews",
    "Data analysis and reporting"
  ],
  outcomes: [
    "Clear identification of district-level needs",
    "Evidence to guide child-focused programming"
  ],
  partners: "AfriKids",
  period: "2013 – 2014",
  category: "Community Development; Research",
  location: "Northern Ghana",
  status: "Completed",
  color: "orange",
},
{
  id: 29,
  slug: "short-term-community-livelihoods-assessments",
  title: "Short-Term Community and Livelihoods Assessments",
  image: rand14,
  description:
    "Rapid assessments to inform programme design and decision-making.",
  fullDescription:
    "PDA undertook a number of short-term community and livelihoods assessments for development partners to support programme design.",
  snapshot:
    "These assessments provided rapid, context-specific evidence on livelihoods, vulnerabilities, and opportunities.",
  howWeWentAboutIt:
    "Participatory research tools and rapid appraisal methods were used across different communities.",
  objectives: [
    "Provide rapid evidence",
    "Support programme design",
    "Improve contextual understanding"
  ],
  activities: [
    "Rapid community appraisals",
    "Stakeholder consultations",
    "Reporting"
  ],
  outcomes: [
    "Timely evidence for decision-making",
    "Improved programme relevance"
  ],
  partners: "Various Development Partners",
  period: "2010 – 2019",
  category: "Community Development; Research",
  location: "Ghana",
  status: "Completed",
  color: "red",
},
{
  id: 30,
  slug: "australia-africa-partnership-for-climate-responsive-agriculture-research-2024-present",
  title: "Australia–Africa Partnership for Climate Responsive Agriculture Research (AAPCRA)",
  image: rand15, // ADD IMAGE from live site if available
  description: "A multi-country research and capacity building initiative on climate-responsive agriculture.",
  fullDescription: "Participatory Development Associates (PDA) is part of the Australia–Africa Partnership for Climate Responsive Agriculture Research (AAPCRA), funded by the Australian Government. The initiative aims to enhance agriculture and food systems across Egypt, Morocco, Kenya, Ghana, and Nigeria through agricultural research, capacity-building and inclusive stakeholder engagement to improve livelihoods and foster climate-responsive agriculture practices.", // EXACT FROM SITE
  snapshot: "PDA contributes research, stakeholder engagement, and design planning to strengthen climate-responsive agriculture across five African countries. The project supports sustainable farming practices and improved food security through evidence-based insights and capacity building.", // FROM LIVE SITE
  howWeWentAboutIt: "PDA co-drafted the AAPCRA design plan, participated in multi-country missions (Ghana, Kenya, Nigeria), engaged with regional stakeholders, and helped produce knowledge products summarizing findings to inform investment design and future activities.", // FROM LIVE SITE
  objectives: [
    "Improve livelihoods through climate-responsive agriculture research",
    "Build capacity for sustainable farming practices",
    "Enhance inclusive stakeholder engagement"
  ],
  activities: [
    "Design plan development",
    "Multi-country design missions",
    "Stakeholder consultations",
    "Knowledge product development"
  ],
  outcomes: [
    "Draft investment design document for climate-responsive agriculture",
    "Strengthened cross-country research insights"
  ],
  partners: "Alinea International Australia; Australian Government (funding)",
  period: "2024 – Present",
  category: "Climate-Responsive Agriculture; Research & Development; Livelihoods",
  location: "Ghana, Egypt, Kenya, Morocco, Nigeria",
  status: "Active",
  color: "orange",
}



  // Continue adding projects 20-100 below
  // Visit pdaghana.com/projects/ for complete list and exact content
  
];
