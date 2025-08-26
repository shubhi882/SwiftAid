const indiaLocationData = {
    "Andhra Pradesh": {
        districts: {
            "Anantapur": ["Anantapur City", "Dharmavaram", "Hindupur", "Guntakal", "Tadipatri", "Kadiri", "Rayadurg", "Kalyanadurg"],
            "Chittoor": ["Tirupati", "Chittoor City", "Madanapalle", "Srikalahasti", "Puttur", "Nagari", "Palamaner", "Punganur"],
            "East Godavari": ["Kakinada", "Rajahmundry", "Amalapuram", "Ramachandrapuram", "Tuni", "Mandapeta", "Peddapuram", "Samalkota"],
            "Guntur": ["Guntur City", "Tenali", "Narasaraopet", "Chilakaluripet", "Bapatla", "Ponnur", "Mangalagiri", "Vinukonda"],
            "Krishna": ["Vijayawada", "Machilipatnam", "Gudivada", "Nuzvid", "Jaggayyapeta", "Pedana", "Nandigama", "Vuyyuru"],
            "Kurnool": ["Kurnool City", "Nandyal", "Adoni", "Yemmiganur", "Dhone", "Atmakur", "Nandikotkur", "Allagadda"],
            "Prakasam": ["Ongole", "Markapur", "Chirala", "Kandukur", "Addanki", "Podili", "Darsi", "Kanigiri"],
            "Nellore": ["Nellore City", "Kavali", "Gudur", "Sullurpeta", "Naidupeta", "Venkatagiri", "Atmakur", "Buchireddypalem"],
            "Srikakulam": ["Srikakulam City", "Amadalavalasa", "Palasa", "Ichchapuram", "Rajam", "Narasannapeta", "Tekkali", "Palakonda"],
            "Visakhapatnam": ["Visakhapatnam City", "Gajuwaka", "Anakapalle", "Bheemunipatnam", "Narsipatnam", "Pendurthi", "Gopalapatnam", "Sabbavaram"],
            "Vizianagaram": ["Vizianagaram City", "Bobbili", "Parvathipuram", "Cheepurupalli", "Gajapathinagaram", "Nellimarla", "Salur", "Kurupam"],
            "West Godavari": ["Eluru", "Bhimavaram", "Tadepalligudem", "Tanuku", "Narsapur", "Palacole", "Kovvur", "Jangareddygudem"],
            "YSR Kadapa": ["Kadapa City", "Proddatur", "Rajampet", "Pulivendla", "Jammalamadugu", "Rayachoti", "Mydukur", "Badvel"]
        }
    },
    "Karnataka": {
        districts: {
            "Bagalkot": ["Bagalkot", "Badami", "Mudhol", "Jamkhandi", "Hungund", "Bilgi"],
            "Bangalore Rural": ["Doddaballapura", "Devanahalli", "Hosakote", "Nelamangala"],
            "Bangalore Urban": [
                "Bangalore City", "Electronic City", "Whitefield", "Koramangala", "Indiranagar",
                "JP Nagar", "Jayanagar", "Malleswaram", "Rajajinagar", "HSR Layout",
                "BTM Layout", "Banashankari", "Bannerghatta", "Hebbal", "Yelahanka",
                "Marathahalli", "Bellandur", "Sarjapur", "CV Raman Nagar", "RT Nagar",
                "Vijayanagar", "Basavanagudi", "Sadashivanagar", "Domlur", "Kalyan Nagar"
            ],
            "Bangalore Rural": [
                "Devanahalli", "Doddaballapur", "Hosakote", "Nelamangala",
                "Channapatna", "Ramanagara", "Magadi", "Kanakapura", "Anekal"
            ],
            "Belagavi": [
                "Belagavi City", "Bailhongal", "Saundatti", "Athani", "Chikkodi",
                "Raibag", "Gokak", "Hukkeri", "Khanapur", "Ramdurg"
            ],
            "Bellary": ["Bellary", "Hospet", "Sandur", "Siruguppa", "Kudligi"],
            "Bidar": ["Bidar", "Bhalki", "Aurad", "Basavakalyan", "Humnabad"],
            "Chamarajanagar": ["Chamarajanagar", "Gundlupet", "Kollegal", "Yelandur"],
            "Chikkaballapur": ["Chikkaballapur", "Gauribidanur", "Bagepalli", "Gudibande", "Sidlaghatta"],
            "Chikkamagaluru": ["Chikkamagaluru", "Mudigere", "Sringeri", "Koppa", "Narasimharajapura"],
            "Chitradurga": ["Chitradurga", "Challakere", "Hiriyur", "Hosadurga", "Holalkere"],
            "Dakshina Kannada": [
                "Mangaluru", "Bantwal", "Puttur", "Sullia", "Belthangady",
                "City Centre", "Hampankatta", "Bunder", "Kankanady", "Kadri"
            ],
            "Davanagere": ["Davanagere", "Harihara", "Jagalur", "Honnali", "Channagiri"],
            "Dharwad": [
                "Dharwad", "Hubballi", "Kalghatgi", "Kundgol", "Navalgund",
                "Vidyanagar", "Navanagar", "Unkal", "Sattur", "Malmaddi"
            ],
            "Gadag": ["Gadag", "Ron", "Nargund", "Mundargi", "Shirahatti"],
            "Hassan": ["Hassan", "Arkalgud", "Arsikere", "Channarayapatna", "Holenarasipura"],
            "Haveri": ["Haveri", "Ranebennur", "Savanur", "Hirekerur", "Byadgi"],
            "Kalaburagi": ["Kalaburagi", "Aland", "Afzalpur", "Chincholi", "Sedam"],
            "Kodagu": ["Madikeri", "Virajpet", "Somwarpet"],
            "Kolar": ["Kolar", "Bangarpet", "Malur", "Mulbagal", "Srinivaspur"],
            "Koppal": ["Koppal", "Gangavathi", "Kushtagi", "Yelbarga"],
            "Mandya": ["Mandya", "Maddur", "Malavalli", "Pandavapura", "Srirangapatna"],
            "Mysuru": [
                "Mysuru City", "Nanjangud", "T Narsipur", "H D Kote", "Hunsur",
                "Devaraja Mohalla", "Krishnamurthy Puram", "Lashkar Mohalla", "Mandi Mohalla", "Nazarbad"
            ],
            "Raichur": ["Raichur", "Lingsugur", "Manvi", "Sindhnur", "Devadurga"],
            "Ramanagara": ["Ramanagara", "Channapatna", "Kanakapura", "Magadi"],
            "Shivamogga": [
                "Shivamogga", "Bhadravati", "Sagar", "Shikaripura", "Soraba",
                "Durgigudi", "Gandhi Bazar", "Tilak Nagar", "Vinob Nagar"
            ],
            "Tumakuru": ["Tumakuru", "Tiptur", "Turuvekere", "Kunigal", "Gubbi"],
            "Udupi": [
                "Udupi", "Kundapura", "Karkala", "Brahmavara", "Kaup",
                "City Centre", "Manipal", "Malpe", "Diana Circle", "Court Road"
            ],
            "Uttara Kannada": ["Karwar", "Sirsi", "Dandeli", "Bhatkal", "Kumta"],
            "Vijayapura": ["Vijayapura", "Basavana Bagevadi", "Sindgi", "Indi", "Muddebihal"],
            "Yadgir": ["Yadgir", "Shahapur", "Shorapur", "Hunsagi", "Wadagera"]
        }
    },
    "Tamil Nadu": {
        districts: {
            "Ariyalur": ["Ariyalur Town", "Sendurai", "Jayankondam", "Andimadam", "T.Palur", "Udayarpalayam"],
            "Chengalpattu": ["Chengalpattu City", "Tambaram", "Maraimalai Nagar", "Thiruporur", "Tirukalukundram", "Vandalur"],
            "Chennai": [
                "Chennai Central", "T Nagar", "Adyar", "Anna Nagar", "Velachery",
                "Mylapore", "Tambaram", "Porur", "Guindy", "Egmore",
                "Royapettah", "Kilpauk", "Perambur", "Chromepet", "Vadapalani",
                "Nungambakkam", "Besant Nagar", "Kodambakkam", "Saidapet", "Washermenpet"
            ],
            "Coimbatore": [
                "Coimbatore City", "RS Puram", "Peelamedu", "Saibaba Colony", "Ganapathy",
                "Singanallur", "Ramanathapuram", "Gandhipuram", "Ukkadam", "Vadavalli",
                "Thudiyalur", "Saravanampatti", "Kovaipudur", "Kuniyamuthur", "Hopes"
            ],
            "Cuddalore": ["Cuddalore Town", "Chidambaram", "Panruti", "Virudhachalam", "Neyveli", "Kattumannarkoil"],
            "Dharmapuri": ["Dharmapuri Town", "Harur", "Palacode", "Pennagaram", "Karimangalam", "Nallampalli"],
            "Dindigul": ["Dindigul City", "Palani", "Oddanchatram", "Vedasandur", "Natham", "Kodaikanal"],
            "Erode": ["Erode City", "Gobichettipalayam", "Bhavani", "Sathyamangalam", "Perundurai", "Kodumudi"],
            "Kallakurichi": ["Kallakurichi Town", "Sankarapuram", "Ulundurpet", "Tirukoilur", "Chinnasalem"],
            "Kancheepuram": ["Kancheepuram City", "Walajabad", "Sriperumbudur", "Uthiramerur", "Kundrathur"],
            "Karur": ["Karur Town", "Kulithalai", "Krishnarayapuram", "Aravakurichi", "Kadavur", "Pugalur"],
            "Krishnagiri": ["Krishnagiri Town", "Hosur", "Denkanikottai", "Bargur", "Uthangarai", "Pochampalli"],
            "Madurai": [
                "Madurai City", "Anna Nagar", "KK Nagar", "SS Colony", "Goripalayam",
                "Thiruparankundram", "Vilangudi", "Anaiyur", "Palanganatham", "Tirunagar",
                "Arappalayam", "Bibikulam", "Chinthamani", "Durai Rasam", "Ellis Nagar"
            ],
            "Mayiladuthurai": ["Mayiladuthurai Town", "Sirkazhi", "Tharangambadi", "Kuthalam", "Poompuhar"],
            "Nagapattinam": ["Nagapattinam Town", "Vedaranyam", "Kilvelur", "Thirukkuvalai", "Thalainayar"],
            "Namakkal": ["Namakkal Town", "Rasipuram", "Tiruchengode", "Kolli Hills", "Paramathi-Velur"],
            "Nilgiris": ["Ooty", "Coonoor", "Kotagiri", "Gudalur", "Kundah", "Pandalur"],
            "Perambalur": ["Perambalur Town", "Kunnam", "Veppanthattai", "Alathur"],
            "Pudukkottai": ["Pudukkottai Town", "Aranthangi", "Alangudi", "Gandarvakottai", "Iluppur"],
            "Ramanathapuram": ["Ramanathapuram Town", "Paramakudi", "Rameswaram", "Kadaladi", "Mudukulathur"],
            "Ranipet": ["Ranipet Town", "Arcot", "Arakkonam", "Walajah", "Sholingur"],
            "Salem": [
                "Salem City", "Hasthampatti", "Fairlands", "Alagapuram", "Ammapet",
                "Kondalampatti", "Suramangalam", "Shevapet", "Kitchipalayam", "Kannankurichi"
            ],
            "Sivaganga": ["Sivaganga Town", "Karaikudi", "Devakottai", "Manamadurai", "Ilayangudi"],
            "Tenkasi": ["Tenkasi Town", "Kadayanallur", "Sankarankovil", "Sivagiri", "Veerakeralampudur"],
            "Thanjavur": ["Thanjavur City", "Kumbakonam", "Pattukottai", "Peravurani", "Orathanadu"],
            "Theni": ["Theni Town", "Periyakulam", "Andipatti", "Bodinayakanur", "Uthamapalayam"],
            "Thiruvallur": ["Thiruvallur Town", "Avadi", "Ponneri", "Tiruttani", "Gummidipoondi"],
            "Thiruvarur": ["Thiruvarur Town", "Mannargudi", "Thiruthuraipoondi", "Nannilam", "Kudavasal"],
            "Thoothukudi": ["Thoothukudi City", "Kovilpatti", "Tiruchendur", "Ettayapuram", "Srivaikuntam"],
            "Tiruchirappalli": ["Trichy City", "Srirangam", "Manapparai", "Musiri", "Thuraiyur", "Lalgudi"],
            "Tirunelveli": [
                "Tirunelveli City", "Palayamkottai", "Melapalayam", "Thatchanallur", "Vannarpettai",
                "Tirunelveli Junction", "Pettai", "Murugankurichi", "Rahmath Nagar", "Suthamalli"
            ],
            "Tirupathur": ["Tirupathur Town", "Vaniyambadi", "Ambur", "Natrampalli", "Jolarpet"],
            "Tiruppur": ["Tiruppur City", "Udumalaipettai", "Palladam", "Kangeyam", "Dharapuram"],
            "Tiruvannamalai": ["Tiruvannamalai Town", "Arni", "Chengam", "Polur", "Thandrampet"],
            "Vellore": ["Vellore City", "Katpadi", "Gudiyatham", "Anaicut", "Kaniyambadi"],
            "Viluppuram": ["Viluppuram Town", "Tindivanam", "Gingee", "Vanur", "Vikravandi"],
            "Virudhunagar": ["Virudhunagar Town", "Sivakasi", "Rajapalayam", "Aruppukottai", "Sattur"]
        }
    },
    "Kerala": {
        districts: {
            "Alappuzha": ["Alappuzha City", "Cherthala", "Kayamkulam", "Haripad", "Ambalappuzha", "Kuttanad"],
            "Ernakulam": [
                "Kochi", "Fort Kochi", "Mattancherry", "Edappally", "Kakkanad",
                "Aluva", "Tripunithura", "Kalamassery", "Vytilla", "Palarivattom",
                "Marine Drive", "Panampilly Nagar", "Kaloor", "Thevara", "Kadavanthra"
            ],
            "Idukki": ["Painavu", "Thodupuzha", "Munnar", "Adimali", "Kumily", "Nedumkandam", "Peermade"],
            "Kannur": ["Kannur City", "Thalassery", "Payyanur", "Mattannur", "Iritty", "Taliparamba"],
            "Kasaragod": ["Kasaragod Town", "Kanhangad", "Nileshwar", "Manjeshwar", "Uppala", "Cheruvathur"],
            "Kollam": ["Kollam City", "Karunagappally", "Punalur", "Kottarakkara", "Chavara", "Kundara"],
            "Kottayam": ["Kottayam City", "Pala", "Changanassery", "Vaikom", "Ettumanoor", "Kaduthuruthy"],
            "Kozhikode": [
                "Kozhikode City", "Nadakkavu", "Mavoor Road", "Beach Road", "Palayam",
                "Pushpa Junction", "Mananchira", "Thondayad", "Medical College", "Meenchanda"
            ],
            "Malappuram": ["Malappuram Town", "Manjeri", "Tirur", "Ponnani", "Perinthalmanna", "Kondotty"],
            "Palakkad": ["Palakkad City", "Ottapalam", "Mannarkkad", "Chittur", "Alathur", "Pattambi"],
            "Pathanamthitta": ["Pathanamthitta Town", "Thiruvalla", "Adoor", "Ranni", "Pandalam", "Konni"],
            "Thiruvananthapuram": [
                "Thiruvananthapuram City", "Kovalam", "Neyyattinkara", "Nedumangad", "Attingal",
                "Varkala", "Kazhakkoottam", "Sreekaryam", "Pattom", "Kesavadasapuram",
                "Palayam", "Thampanoor", "East Fort", "Vellayambalam", "Poojappura"
            ],
            "Thrissur": [
                "Thrissur City", "Ayyanthole", "Punkunnam", "Ollur", "Kuriachira",
                "East Fort", "Chembukkavu", "Koorkenchery", "Viyyur", "Thiruvambady"
            ],
            "Wayanad": ["Kalpetta", "Mananthavady", "Sulthan Bathery", "Meenangadi", "Pulpally", "Vythiri"]
        }
    },
    "Maharashtra": {
        districts: {
            "Ahmednagar": [
                "Ahmednagar City", "Sangamner", "Shirdi", "Shrirampur", "Kopargaon", "Rahuri",
                "Rahata", "Shevgaon", "Pathardi", "Nevasa", "Jamkhed", "Karjat",
                "Akole", "Parner", "Nagar Road", "Savedi", "Kedgaon", "Bhingar",
                "Tarakpur", "Nagapur", "Burudgaon", "Wadgaon Gupta", "Shastri Nagar",
                "MIDC Area", "Adarsh Nagar", "Visapur"
            ],
            "Akola": [
                "Akola City", "Akot", "Telhara", "Balapur", "Patur", "Murtajapur",
                "Malkapur", "Barshitakli", "Civil Lines", "Gandhi Chowk",
                "Khadan Area", "Market Yard", "Old City", "Railway Station Area",
                "Shivaji Nagar", "Tilak Nagar", "Akolkar Wadi", "Cotton Market", "Gorakshan Road",
                "Jatharpeth", "Kurha Road", "MIDC Area", "Pushpak Nagar", "Ratanlal Plot"
            ],
            "Amravati": [
                "Amravati City", "Achalpur", "Chandur Railway", "Daryapur", "Warud", "Morshi",
                "Anjangaon Surji", "Chikhaldara", "Dharni", "Nandgaon Khandeshwar",
                "Badnera", "Camp Area", "Chaprasi Pura", "Congress Nagar", "Dastur Nagar",
                "Gadge Nagar", "Jawahar Stadium", "Kamla Market", "Maine Point", "Masanganj",
                "New Cotton Market", "Rajapeth", "Rukhmini Nagar", "Sai Nagar", "Shyam Nagar"
            ],
            "Sambhaji Nagar": [
                "Railway Station Area", "City Chowk", "CIDCO", "Garkheda", "Jalna Road",
                "Mondha", "Paithan Gate", "Shahgunj", "TV Center", "Usmanpura",
                "Jatwada", "Padegaon", "Satara Area", "Waluj", "Chikalthana"
            ],
            "Beed": [
                "Beed City", "Georai", "Majalgaon", "Ambajogai", "Parli", "Ashti",
                "Kaij", "Patoda", "Shirur", "Wadwani", "Dharur", "Beed MIDC",
                "Khadkeshwar", "Market Yard", "New Mondha", "Old Mondha",
                "Railway Station Area", "Shivaji Nagar", "Subhash Nagar",
                "Civil Lines", "Gandhi Nagar", "Millind Nagar"
            ],
            "Bhandara": [
                "Bhandara City", "Tumsar", "Pauni", "Mohadi", "Sakoli", "Lakhani",
                "Lakhandur", "Adyal", "Civil Lines", "Gandhi Ward", "Gopal Nagar",
                "Jawahar Nagar", "Mahatma Phule Ward", "New Colony", "Old City",
                "Shastri Ward", "Station Road", "Subhash Ward", "Tilak Ward",
                "Vaishali Nagar", "Vinoba Nagar", "MIDC Area", "Market Area"
            ],
            "Buldhana": [
                "Buldhana City", "Chikhli", "Deulgaon Raja", "Malkapur", "Shegaon",
                "Khamgaon", "Jalgaon Jamod", "Lonar", "Motala", "Nandura", "Sindkhed Raja",
                "Civil Lines", "College Road", "Gandhi Chowk", "Jawahar Colony",
                "Market Yard", "New Town", "Old Town", "Railway Station Area",
                "Shivaji Nagar", "Tilak Nagar", "MIDC Area", "Bus Stand Area"
            ],
            "Chandrapur": [
                "Chandrapur City", "Ballarpur", "Warora", "Bhadravati", "Rajura", "Brahmapuri",
                "Chimur", "Nagbhir", "Saoli", "Sindewahi", "Civil Lines", "Coal Mines Area",
                "Gandhi Ward", "Indira Market", "Jatpura Gate", "Lalpeth", "Mahakali Ward",
                "Old City", "Pathanpura", "Ramnagar", "Shastri Ward", "Station Road",
                "Tukum", "MIDC Area", "Super Market", "Bangali Camp", "Binba Gate",
                "Durgapur", "Ganj Ward", "Hill Line"
            ],
            "Dhule": [
                "Dhule City", "Shirpur", "Sindkheda", "Sakri", "Shindkheda",
                "Deopur", "Walwadi", "Mohadi", "Nagav", "Songir",
                "Avdhan", "Civil Lines", "Khedi", "Model Colony", "Prabhat Colony",
                "Deopur MIDC", "Agra Road", "Mumbai Naka", "Vaibhav Nagar", "Malegaon Road"
            ],
            "Gadchiroli": [
                "Gadchiroli Town", "Armori", "Chamorshi", "Desaiganj", "Kurkheda", "Etapalli",
                "Aheri", "Bhamragad", "Dhanpur", "Mulchera", "Sironcha",
                "Civil Lines", "College Road", "Gandhi Ward", "Indira Nagar",
                "Jawahar Nagar", "Kasturba Ward", "Market Area", "Mission Compound",
                "Nehru Ward", "Old City", "Pratap Nagar", "Ramnagar", "Shastri Ward"
            ],
            "Gondia": [
                "Gondia City", "Tirora", "Goregaon", "Amgaon", "Salekasa", "Sadak Arjuni",
                "Deori", "Arjuni Morgaon", "Civil Lines", "Gandhi Nagar",
                "Gokulpeth", "Indira Nagar", "Jawahar Nagar", "Kasturba Nagar",
                "Model Colony", "New Colony", "Old City", "Panchsheel Nagar",
                "Railway Colony", "Shastri Ward", "Station Road", "Subhash Nagar"
            ],
            "Hingoli": [
                "Hingoli City", "Kalamnuri", "Sengaon", "Aundha Nagnath", "Basmath",
                "Vasmat", "Narsi", "Ardhapur", "Civil Lines", "Gandhi Chowk",
                "Gopal Nagar", "Indira Nagar", "Jawahar Colony", "Kasturba Road",
                "Main Road", "Market Yard", "New Area", "Old City", "Parbhani Road",
                "Railway Station Road", "Shivaji Nagar", "Subhash Road"
            ],
            "Jalgaon": [
                "Jalgaon City", "Bhusawal", "Chalisgaon", "Pernem", "Ponda",
                "Porvorim", "Aldona", "Siolim", "Saligao", "Calangute",
                "Candolim", "Anjuna", "Vagator", "Morjim", "Mandrem",
                "Arambol", "Assagao", "Colvale", "Tivim", "Salvador do Mundo",
                "Bardez", "Betim", "Ribandar", "Merces", "Old Goa"
            ],
            "Jalna": [
                "Jalna City", "Ambad", "Bhokardan", "Partur", "Mantha", "Badnapur",
                "Ghansawangi", "Jafrabad", "Civil Lines", "Gandhi Nagar",
                "Gopalnagar", "Indira Colony", "Jalna Road", "Kacheri Road",
                "Market Yard", "MIDC Area", "New Mondha", "Old Jalna",
                "Railway Station Area", "Shivaji Nagar", "Subhash Road",
                "Syndicate Colony", "Tembhurni Road", "University Road"
            ],
            "Kolhapur": [
                "Kolhapur City", "Ichalkaranji", "Gadhinglaj", "Kagal", "Panhala", "Shahuwadi",
                "Karvir", "Hatkanangle", "Shirol", "Radhanagari", "Bavda",
                "Rajarampuri", "Laxmipuri", "Shahupuri", "Tarabai Park",
                "Nagala Park", "Shivaji Peth", "Rankala", "Line Bazaar",
                "Mahadwar Road", "New Shahupuri", "Old Rajwada", "Ruikar Colony",
                "Shivaji University Area", "Udyamnagar"
            ],
            "Latur": [
                "Latur City", "Udgir", "Ahmedpur", "Nilanga", "Ausa", "Chakur",
                "Renapur", "Shirur Anantpal", "Jalkot", "Deoni",
                "MIDC Area", "Adarsh Nagar", "Barshi Road", "Civil Hospital Area",
                "Gandhi Chowk", "Ganjgolai", "Industrial Area", "Khardekar Marg",
                "Market Yard", "New Mondha", "Old City", "Peth Area",
                "Railway Station Road", "Shivaji Nagar", "Tilak Nagar"
            ],
            "Mumbai City": [
                "South Mumbai", "Colaba", "Churchgate", "Fort", "Marine Lines",
                "Nariman Point", "Cuffe Parade", "Malabar Hill", "Peddar Road", "Breach Candy",
                "Worli", "Prabhadevi", "Dadar", "Matunga", "Sion",
                "Bandra West", "Khar", "Santacruz", "Vile Parle", "Andheri"
            ],
            "Mumbai Suburban": [
                "Bandra East", "Kurla", "Chembur", "Ghatkopar", "Vikhroli",
                "Powai", "Mulund", "Borivali", "Kandivali", "Malad",
                "Goregaon", "Jogeshwari", "Andheri East", "Bhandup", "Kanjurmarg"
            ],
            "Nagpur": [
                "Nagpur City", "Civil Lines", "Sadar", "Dharampeth", "Sitabuldi",
                "Ramdaspeth", "Pratap Nagar", "Manish Nagar", "Nandanvan", "Hingna"
            ],
            "Nanded": ["Nanded City", "Deglur", "Mukhed", "Bhokar", "Kandhar"],
            "Nandurbar": ["Nandurbar", "Navapur", "Shahada", "Taloda", "Akrani"],
            "Nashik": [
                "Nashik City", "Malegaon", "Manmad", "Niphad", "Chandwad",
                "Sinnar", "Peth", "Trimbakeshwar", "Igatpuri", "Peint"
            ],
            "Osmanabad": ["Osmanabad", "Tuljapur", "Paranda", "Bhum", "Kalamb"],
            "Palghar": ["Palghar", "Dahanu", "Vikramgad", "Jawhar", "Mokhada"],
            "Parbhani": ["Parbhani", "Jintur", "Gangakhed", "Pathri", "Manwath"],
            "Pune": [
                "Pune City", "Shivajinagar", "Kothrud", "Hadapsar", "Baner",
                "Aundh", "Kalyani Nagar", "Koregaon Park", "Camp", "Deccan",
                "Kondhwa", "Viman Nagar", "Wakad", "Hinjewadi", "Pimpri-Chinchwad"
            ],
            "Raigad": ["Alibag", "Panvel", "Murud", "Pen", "Uran"],
            "Ratnagiri": ["Ratnagiri", "Sangameshwar", "Ratnagiri", "Lanja", "Rajapur"],
            "Sangli": ["Sangli", "Miraj", "Kavathe-Mahankal", "Jat", "Walwa"],
            "Satara": ["Satara", "Karad", "Wai", "Phaltan", "Mahabaleshwar"],
            "Sindhudurg": ["Oros", "Kudal", "Sawantwadi", "Vengurla", "Malvan"],
            "Solapur": ["Solapur City", "Barshi", "Mangalwedha", "Pandharpur", "Sangola"],
            "Thane": ["Thane City", "Ulhasnagar", "Kalyan", "Dombivli", "Bhiwandi"],
            "Wardha": ["Wardha", "Hinganghat", "Pulgaon", "Arvi", "Ashti"],
            "Washim": ["Washim", "Mangrulpir", "Malegaon", "Manora", "Karanja"],
            "Yavatmal": ["Yavatmal", "Wani", "Darwha", "Pusad", "Umarkhed"]
        }
    },
    "Gujarat": {
        districts: {
            "Ahmedabad": [
                "Ahmedabad City", "Sanand", "Daskroi", "Dholka", "Bavla",
                "Navrangpura", "Satellite", "Vastrapur", "Bodakdev", "Paldi",
                "Maninagar", "Ghatlodia", "CG Road", "Ellis Bridge", "Thaltej",
                "SG Highway", "Bopal", "Science City", "Chandkheda", "Motera"
            ],
            "Amreli": ["Amreli", "Rajula", "Savarkundla", "Lathi", "Dhari"],
            "Anand": ["Anand", "Khambhat", "Petlad", "Sojitra", "Borsad", "Tarapur"],
            "Aravalli": ["Modasa", "Bhiloda", "Meghraj", "Malpur", "Dhansura"],
            "Banaskantha": ["Palanpur", "Deesa", "Dhanera", "Tharad", "Danta"],
            "Bharuch": ["Bharuch", "Ankleshwar", "Jambusar", "Vagra", "Jhagadia"],
            "Bhavnagar": [
                "Bhavnagar City", "Sihor", "Talaja", "Mahuva", "Palitana",
                "Ghogha", "Vallabhipur", "Gariadhar", "Botad", "Umrala"
            ],
            "Botad": ["Botad", "Barwala", "Gadhada", "Ranpur"],
            "Chhota Udaipur": ["Chhota Udaipur", "Kavant", "Naswadi", "Bodeli", "Jetpur Pavi"],
            "Dahod": ["Dahod", "Garbada", "Limkheda", "Dhanpur", "Fatepura"],
            "Dang": ["Ahwa", "Waghai", "Subir", "Saputara"],
            "Devbhoomi Dwarka": ["Khambhalia", "Dwarka", "Kalyanpur", "Bhanvad", "Okha"],
            "Gandhinagar": [
                "Gandhinagar City", "Kalol", "Mansa", "Dehgam",
                "Sector 1-30", "GIFT City", "Infocity", "Sargasan", "Pethapur", "Adalaj",
                "Kudasan", "Raysan", "Koba", "Uvarsad", "Vavol",
                "Randesan", "Chiloda", "Indroda", "Valad", "Palaj"
            ],
            "Gir Somnath": ["Veraval", "Talala", "Sutrapada", "Kodinar", "Una"],
            "Jamnagar": [
                "Jamnagar City", "Dhrol", "Jamjodhpur", "Kalavad", "Lalpur",
                "Panchkoshi", "Ranjit Road", "Crystal Area", "Digvijay Plot"
            ],
            "Junagadh": ["Junagadh City", "Visavadar", "Mendarda", "Vanthali", "Manavadar"],
            "Kheda": ["Nadiad", "Kapadvanj", "Matar", "Mehmedabad", "Kathlal"],
            "Kutch": ["Bhuj", "Gandhidham", "Anjar", "Mandvi", "Mundra"],
            "Mahisagar": ["Lunavada", "Santrampur", "Kadana", "Khanpur", "Balasinor"],
            "Mehsana": ["Mehsana", "Visnagar", "Kadi", "Kheralu", "Unjha"],
            "Morbi": ["Morbi", "Tankara", "Halvad", "Maliya", "Wankaner"],
            "Narmada": ["Rajpipla", "Nandod", "Tilakwada", "Dediapada", "Sagbara"],
            "Navsari": ["Navsari", "Gandevi", "Chikhli", "Vansda", "Jalalpore"],
            "Panchmahal": ["Godhra", "Kalol", "Halol", "Jambughoda", "Morva Hadaf"],
            "Patan": ["Patan", "Sidhpur", "Chanasma", "Harij", "Radhanpur"],
            "Porbandar": ["Porbandar", "Ranavav", "Kutiyana"],
            "Rajkot": [
                "Rajkot City", "Gondal", "Jetpur", "Dhoraji", "Upleta",
                "Race Course", "Kalawad Road", "University Road", "Mavdi", "Amin Marg"
            ],
            "Sabarkantha": ["Himmatnagar", "Prantij", "Idar", "Khedbrahma", "Vadali"],
            "Surat": [
                "Surat City", "Olpad", "Mangrol", "Mandvi", "Kamrej",
                "Adajan", "Vesu", "Athwa", "Katargam", "Varachha",
                "Udhna", "Pandesara", "Sachin", "Dindoli", "Piplod"
            ],
            "Surendranagar": ["Surendranagar", "Wadhwan", "Limbdi", "Chotila", "Dhrangadhra"],
            "Tapi": ["Vyara", "Songadh", "Valod", "Uchchhal", "Nizar"],
            "Vadodara": [
                "Vadodara City", "Padra", "Savli", "Dabhoi", "Waghodia",
                "Alkapuri", "Fatehgunj", "Sayajigunj", "Karelibaug", "Manjalpur",
                "Gotri", "Akota", "Race Course", "Old Padra Road", "Vasna Road"
            ],
            "Valsad": ["Valsad", "Pardi", "Vapi", "Umargam", "Dharampur"]
        }
    },
    "Delhi": {
        districts: {
            "Central Delhi": [
                "Connaught Place", "Karol Bagh", "Paharganj", "Daryaganj", "Chandni Chowk",
                "Civil Lines", "Sadar Bazaar", "Pahar Ganj", "Rajinder Nagar", "Old Delhi",
                "New Delhi", "ITO", "Minto Road", "Kamla Market", "Ajmeri Gate"
            ],
            "East Delhi": [
                "Laxmi Nagar", "Preet Vihar", "Anand Vihar", "Shahdara", "Krishna Nagar",
                "Mayur Vihar", "Patparganj", "Dilshad Garden", "Vivek Vihar", "Geeta Colony",
                "Gandhi Nagar", "Nirman Vihar", "Mandawali", "Pandav Nagar", "Trilokpuri"
            ],
            "New Delhi": [
                "Parliament Street", "Chanakyapuri", "Barakhamba", "Mandi House", "India Gate",
                "Sarojini Nagar", "Lodi Colony", "Defence Colony", "Jor Bagh", "Khan Market",
                "Diplomatic Enclave", "Gole Market", "Sunder Nagar", "Bengali Market"
            ],
            "North Delhi": [
                "Model Town", "Kashmere Gate", "Timarpur", "Mukherjee Nagar", "Hudson Lines",
                "Kamla Nagar", "Shakti Nagar", "Ashok Vihar", "Shalimar Bagh", "GTB Nagar",
                "Maurice Nagar", "Vijay Nagar", "Roop Nagar", "Majnu ka Tila"
            ],
            "North East Delhi": [
                "Seelampur", "Yamuna Vihar", "Karawal Nagar", "Gokulpuri", "Seemapuri",
                "Nand Nagri", "Johripur", "Shastri Park", "Maujpur", "Bhajanpura",
                "Welcome", "Jaffrabad", "New Usmanpur", "Khajuri Khas"
            ],
            "North West Delhi": [
                "Pitampura", "Rohini", "Mangolpuri", "Sultanpuri", "Narela",
                "Bawana", "Jahangirpuri", "Adarsh Nagar", "Kanjhawala", "Saraswati Vihar",
                "Prashant Vihar", "Badli", "Samaypur Badli", "Rani Bagh"
            ],
            "South Delhi": [
                "Greater Kailash", "Hauz Khas", "Green Park", "South Extension", "Malviya Nagar",
                "Safdarjung", "Vasant Kunj", "Mehrauli", "Chhatarpur", "Sainik Farm",
                "Lajpat Nagar", "Nehru Place", "East of Kailash", "Kalkaji", "CR Park"
            ],
            "South East Delhi": [
                "Okhla", "Jamia Nagar", "New Friends Colony", "Kalkaji", "Govindpuri",
                "Tughlakabad", "Badarpur", "Sarita Vihar", "Jasola", "Alaknanda",
                "Sukhdev Vihar", "Ishwar Nagar", "Madanpur Khadar", "Aali"
            ],
            "South West Delhi": [
                "Dwarka", "Vasant Vihar", "Palam", "Najafgarh", "Kapashera",
                "Mahipalpur", "Rajokri", "Bijwasan", "Chhawla", "Dabri",
                "Sagarpur", "Dhul Siras", "Raj Nagar", "Matiala"
            ],
            "West Delhi": [
                "Rajouri Garden", "Punjabi Bagh", "Paschim Vihar", "Janakpuri", "Tilak Nagar",
                "Vikaspuri", "Uttam Nagar", "Kirti Nagar", "Moti Nagar", "Ramesh Nagar",
                "Subhash Nagar", "Tagore Garden", "Vishnu Garden", "Khyala"
            ],
            "Shahdara": [
                "Shahdara", "Vivek Vihar", "Jhilmil", "Dilshad Garden", "GTB Enclave",
                "Mansarovar Park", "Anand Vihar", "Karkardooma", "Vishwas Nagar", "Krishna Nagar",
                "Gandhi Nagar", "Geeta Colony", "Shahdara Mandi", "Usmanpur"
            ]
        }
    },
    "Andaman and Nicobar Islands": {
        districts: {
            "North and Middle Andaman": [
                "Mayabunder", "Diglipur", "Rangat", "Billyground", "Bakultala",
                "Nimbutala", "Kadamtala", "Webi", "Arial Bay", "Pahalgaon",
                "Tugapur", "Rampur", "Kalighat", "Kishori Nagar"
            ],
            "South Andaman": [
                "Port Blair", "Ferrargunj", "Little Andaman", "Bambooflat", "Garacharma",
                "Havelock Island", "Neil Island", "Wandoor", "Prothrapur", "Vizhinjam",
                "Aberdeen Bazaar", "Phoenix Bay", "Haddo", "Junglighat", "Marine Hill",
                "Shadipur", "Austinabad", "Manglutan", "Chouldari", "Humphrygunj"
            ],
            "Nicobar": [
                "Car Nicobar", "Campbell Bay", "Nancowry", "Kamorta", "Teressa",
                "Great Nicobar", "Little Nicobar", "Katchal", "Chowra", "Trinket"
            ]
        }
    },
    "Chandigarh": {
        districts: {
            "Chandigarh": [
                "Sector 17", "Sector 22", "Sector 35", "Industrial Area",
                "Manimajra", "Sector 8", "Sector 9", "Sector 10", "Sector 11",
                "Sector 15", "Sector 16", "Sector 18", "Sector 19", "Sector 20",
                "Sector 21", "Sector 27", "Sector 28", "Sector 29", "Sector 30"
            ]
        }
    },
    "Dadra and Nagar Haveli and Daman and Diu": {
        districts: {
            "Dadra and Nagar Haveli": [
                "Silvassa", "Amli", "Dadra", "Naroli", "Samarvarni",
                "Khanvel", "Dudhani", "Randha", "Athola", "Kilvani",
                "Luhari", "Mashat", "Rakholi", "Sindoni", "Velugam"
            ],
            "Daman": [
                "Daman", "Nani Daman", "Moti Daman", "Devka Beach", "Marwad",
                "Kadaiya", "Varkund", "Dabhel", "Kachigam", "Dunetha",
                "Patlara", "Bhimpore", "Jampore Beach", "Dalwada"
            ],
            "Diu": [
                "Diu City", "Ghoghla", "Vanakbara", "Fudam", "Saudwadi",
                "Nagaram", "Kanakalapeta", "Kanakalapeta", "Kothuru", "Mettakur"
            ]
        }
    },
    "Lakshadweep": {
        districts: {
            "Lakshadweep": [
                "Kavaratti", "Agatti", "Amini", "Andrott", "Bangaram",
                "Bitra", "Chetlat", "Kadmat", "Kalpeni", "Kiltan",
                "Minicoy", "Suheli", "Cheriyam", "Kalpitti", "Parali",
                "Thinnakara", "Vythiri", "Pitti"
            ]
        }
    },
    "Ladakh": {
        districts: {
            "Leh": ["Leh City", "Nubra", "Khaltsi", "Nyoma", "Durbuk"],
            "Kargil": ["Kargil City", "Zanskar", "Sankoo", "Taisuru", "Shargole"]
        }
    },
    "Puducherry": {
        districts: {
            "Puducherry": ["Puducherry City", "Ozhukarai", "Villianur", "Bahour", "Ariyankuppam"],
            "Karaikal": ["Karaikal", "Thirunallar", "Neravy", "Nedungadu", "Kottucherry"],
            "Mahe": ["Mahe", "Pandakkal", "Chalakara", "Palloor", "East Palloor"],
            "Yanam": ["Yanam", "Agraharam", "French Yanam", "Kanakalapeta", "Darialatippa"]
        }
    },
    "NCR (National Capital Region)": {
        districts: {
            "Gurgaon": [
                "DLF Phase 1", "DLF Phase 2", "DLF Phase 3", "DLF Phase 4", "DLF Phase 5",
                "Sushant Lok 1", "Sushant Lok 2", "Sushant Lok 3", "Sector 14", "Sector 15",
                "Sector 27", "Sector 28", "Sector 29", "Sector 30", "Sector 31", "Sector 32",
                "Golf Course Road", "MG Road", "Cyber City", "Udyog Vihar", "Palam Vihar",
                "South City", "Sohna Road", "Golf Course Extension Road", "Cyber Hub"
            ],
            "Noida": [
                "Sector 15", "Sector 16", "Sector 18", "Sector 25", "Sector 27", "Sector 29",
                "Sector 32", "Sector 34", "Sector 50", "Sector 51", "Sector 52", "Sector 62",
                "Sector 63", "Sector 71", "Sector 75", "Sector 76", "Sector 77", "Sector 78",
                "Greater Noida West", "Noida Extension", "Knowledge Park", "Alpha Commercial Belt",
                "Beta Commercial Belt", "Gamma Commercial Belt", "Delta Commercial Belt"
            ],
            "Ghaziabad": [
                "Indirapuram", "Vaishali", "Vasundhara", "Kaushambi", "Raj Nagar Extension",
                "Crossings Republik", "Loni", "Mohan Nagar", "Sahibabad", "Pratap Vihar",
                "Shalimar Garden", "Lajpat Nagar", "Rajendra Nagar", "Shastri Nagar",
                "Nehru Nagar", "Kavi Nagar", "Govindpuram", "Wave City"
            ],
            "Faridabad": [
                "Sector 15", "Sector 16", "Sector 21", "Sector 28", "Sector 29", "Sector 30",
                "Sector 31", "Sector 37", "Sector 48", "Sector 49", "NIT Faridabad",
                "Ballabhgarh", "Old Faridabad", "New Industrial Township", "Surajkund",
                "Greenfields Colony", "Jawahar Colony", "Dabua Colony"
            ]
        }
    },
    "West Bengal": {
        districts: {
            "Kolkata North": [
                "Shyambazar", "Hatibagan", "Maniktala", "Ultadanga", "Belgachia",
                "Chitpur", "Bagbazar", "Sovabazar", "College Street", "Beadon Street",
                "Amherst Street", "Girish Park", "Burrabazar", "Posta", "Jorasanko",
                "Nimtala", "Kumartuli", "Cossipur", "Sinthee", "Dum Dum"
            ],
            "Kolkata South": [
                "Park Street", "Ballygunge", "Bhowanipore", "Alipore", "Chetla",
                "Kalighat", "Rashbehari", "Gariahat", "Dhakuria", "Lake Gardens",
                "Golf Green", "Jadavpur", "Kasba", "Santoshpur", "Garia",
                "Tollygunge", "New Alipore", "Behala", "Thakurpukur", "Joka"
            ],
            "Kolkata Central": [
                "Esplanade", "Chanakyapuri", "Barakhamba", "Mandi House", "India Gate",
                "Sarojini Nagar", "Lodi Colony", "Defence Colony", "Jor Bagh", "Khan Market",
                "Diplomatic Enclave", "Gole Market", "Sunder Nagar", "Bengali Market"
            ],
            "Howrah": [
                "Howrah Maidan", "Salkia", "Golabari", "Belur", "Liluah",
                "Shibpur", "Santragachi", "Kadamtala", "Dasnagar", "Ramrajatala",
                "Botanical Garden", "Ghusuri", "Bally", "Uttarpara", "Konnagar"
            ],
            "North 24 Parganas": [
                "Salt Lake Sector 1", "Salt Lake Sector 2", "Salt Lake Sector 3", "Salt Lake Sector 5",
                "New Town Action Area 1", "New Town Action Area 2", "New Town Action Area 3",
                "Rajarhat", "Lake Town", "Kestopur", "Baguiati", "VIP Road",
                "Barasat", "Madhyamgram", "Basirhat", "Bangaon", "Barrackpore",
                "Khardah", "Dunlop", "Belgharia", "Sodepur", "Dumdum"
            ],
            "South 24 Parganas": [
                "Narendrapur", "Sonarpur", "Baruipur", "Rajpur", "Diamond Harbour",
                "Budge Budge", "Maheshtala", "Metiabruz", "Garden Reach", "Taratala",
                "Regent Park", "Kudghat", "Nampally", "Mukundapur", "Purba Putiary"
            ],
            "Hooghly": [
                "Chandannagar", "Chinsurah", "Serampore", "Rishra", "Konnagar",
                "Bandel", "Hugli-Chuchura", "Bhadreswar", "Champdani", "Singur",
                "Dankuni", "Arambagh", "Tarakeswar", "Pursurah", "Dhaniakhali"
            ],
            "Durgapur-Asansol": [
                "Durgapur Steel Township", "Benachity", "City Centre", "Bidhannagar Durgapur",
                "Asansol North", "Asansol South", "Burnpur", "Kulti", "Raniganj",
                "Andal", "Faridpur", "Pandaveswar", "Jamuria", "Barakar"
            ],
            "Siliguri": [
                "Hill Cart Road", "Sevoke Road", "Matigara", "Bagdogra", "Salugara",
                "Hakimpara", "Pradhan Nagar", "Khalpara", "College Para", "Bhaktinagar",
                "Ashram Para", "Shibmandir", "Dabgram", "Kawakhali", "Champasari"
            ]
        }
    },
    "Bihar": {
        districts: {
            "Araria": ["Araria", "Forbesganj", "Jokihat", "Raniganj", "Narpatganj"],
            "Arwal": ["Arwal", "Karpi", "Kaler", "Sarisab", "Kurtha"],
            "Aurangabad": [
                "Aurangabad", "Daudnagar", "Nabinagar", "Rafiganj", "Obra",
                "Goh", "Haspura", "Kutumba", "Madanpur", "Barun"
            ],
            "Banka": ["Banka", "Amarpur", "Barahat", "Katoria", "Belhar"],
            "Begusarai": [
                "Begusarai", "Barauni", "Teghra", "Bakhri", "Matihani",
                "Mansurchak", "Sahebpur Kamal", "Ballia", "Cheria Bariarpur"
            ],
            "Bhagalpur": [
                "Bhagalpur", "Naugachia", "Kahalgaon", "Sultanganj", "Nathnagar",
                "Sabour", "Goradih", "Pirpainti", "Rangra Chowk", "Tilkamanjhi"
            ],
            "Bhojpur": ["Ara", "Jagdishpur", "Shahpur", "Sandeshwar", "Udwantnagar"],
            "Buxar": ["Buxar", "Dumraon", "Rajpur", "Chausa", "Simri"],
            "Darbhanga": [
                "Darbhanga", "Benipur", "Bahadurpur", "Gaura Bauram", "Kusheshwar Asthan",
                "Lalganj", "Singhwara", "Tardih", "Ghanshyampur", "Keoti"
            ],
            "East Champaran": [
                "Motihari", "Raxaul", "Chakia", "Adapur", "Areraj",
                "Dhaka", "Kesaria", "Paharpur", "Pakridayal", "Sugauli"
            ],
            "Gaya": [
                "Gaya", "Bodh Gaya", "Sherghati", "Tekari", "Belaganj",
                "Manpur", "Wazirganj", "Atri", "Mohanpur", "Fatehpur"
            ],
            "Gopalganj": ["Gopalganj", "Hathua", "Baikunthpur", "Kuchaikote", "Thawe"],
            "Jamui": ["Jamui", "Jhajha", "Sikandra", "Chakai", "Laxmipur"],
            "Jehanabad": ["Jehanabad", "Ghosi", "Machhlishahr", "Kako", "Ratni Faridpur"],
            "Kaimur": ["Bhabua", "Mohania", "Durgawati", "Nuaon", "Ramgarh"],
            "Katihar": [
                "Katihar", "Barari", "Barsoi", "Manihari", "Pranpur",
                "Korha", "Kadwa", "Balrampur", "Amdabad", "Hasanganj"
            ],
            "Khagaria": ["Khagaria", "Gogri", "Beldaur", "Parbatta", "Alauli"],
            "Kishanganj": ["Kishanganj", "Thakurganj", "Bahadurganj", "Dighalbank", "Pothia"],
            "Lakhisarai": ["Lakhisarai", "Suryagarha", "Halsi", "Pipariya", "Ramgarh Chowk"],
            "Madhepura": ["Madhepura", "Murliganj", "Udakishunganj", "Gwalpara", "Bihariganj"],
            "Madhubani": [
                "Madhubani", "Jhanjharpur", "Benipatti", "Phulparas", "Laukaha",
                "Rajnagar", "Babubarhi", "Bisfi"
            ],
            "Munger": [
                "Munger", "Jamalpur", "Haveli Kharagpur", "Tarapur", "Dharhara",
                "Sangrampur", "Kharagpur", "Tetiha Bambor", "Asarganj"
            ],
            "Muzaffarpur": [
                "Muzaffarpur", "Sakra", "Gaighat", "Aurai", "Kanti",
                "Bochaha", "Kurhani", "Marwan", "Mushari", "Sahebganj"
            ],
            "Nalanda": [
                "Bihar Sharif", "Rajgir", "Hilsa", "Islampur", "Asthawan",
                "Biharsharif", "Nalanda", "Rahui", "Noorsarai", "Chandi"
            ],
            "Nawada": ["Nawada", "Warisaliganj", "Rajauli", "Nandgaon Khandeshwar",
            "Hisua"],
            "Patna": [
                "Patna City", "Danapur", "Phulwari", "Masaurhi", "Paliganj",
                "Patna Sahib", "Bankipur", "Digha", "Danapur Cantonment", "Khagaul",
                "Rajiv Nagar", "Kankarbagh", "Boring Road", "Bailey Road", "Gandhi Maidan"
            ],
            "Purnia": [
                "Purnia", "Banmankhi", "Kasba", "Dhamdaha", "Rupauli",
                "Barhara Kothi", "Krityanand Nagar", "Line Bazar", "Gulabbagh"
            ],
            "Rohtas": ["Sasaram", "Dehri", "Bikramganj", "Nasriganj", "Nokha"],
            "Saharsa": ["Saharsa", "Simri Bakhtiarpur", "Mahishi", "Patarghat", "Sonbarsa"],
            "Samastipur": [
                "Samastipur", "Dalsinghsarai", "Patori", "Rosera", "Bibhutipur",
                "Kalyanpur", "Mohiuddinnagar", "Sarairanjan", "Tajpur", "Vidyapati Nagar"
            ],
            "Saran": ["Chapra", "Marhaura", "Amnour", "Ekma", "Garkha"],
            "Sheikhpura": ["Sheikhpura", "Barbigha", "Ariari", "Sheikhpura Sadar", "Chewara"],
            "Sheohar": ["Sheohar", "Tariyani", "Piprahi", "Purnahiya", "Duddhi Katsari"],
            "Sitamarhi": [
                "Sitamarhi", "Belsand", "Pupri", "Sursand", "Bajpatti",
                "Dumra", "Parihar", "Raja", "Bathnaha", "Choraut"
            ],
            "Siwan": ["Siwan", "Maharajganj", "Mairwa", "Darauli", "Guthani"],
            "Supaul": ["Supaul", "Triveniganj", "Raghopur", "Pipra", "Nirmali"],
            "Vaishali": [
                "Hajipur", "Mahua", "Mahnar", "Raghopur", "Lalganj",
                "Vaishali", "Patepur", "Jandaha", "Bidupur", "Desri"
            ],
            "West Champaran": [
                "Bettiah", "Bagaha", "Narkatiaganj", "Lauriya", "Ramnagar",
                "Mainatand", "Chanpatia", "Madhubani", "Gaunaha", "Thakraha"
            ]
        }
    },
    "Jharkhand": {
        districts: {
            "Bokaro": [
                "Bokaro Steel City", "Chas", "Bermo", "Chandankiyari", "Jaridih",
                "Sector 1-12", "City Centre", "Cooperative Colony", "Steel Township"
            ],
            "Chatra": ["Chatra", "Hunterganj", "Itkhori", "Simaria", "Pratappur"],
            "Deoghar": ["Deoghar", "Madhupur", "Sarwan", "Mohanpur", "Jasidih"],
            "Dhanbad": [
                "Dhanbad City", "Jharia", "Sindri", "Katras", "Nirsa",
                "Bank More", "Steel Gate", "Hirapur", "Saraidhela", "Bartand",
                "Dhaiya", "Wasseypur", "Bhuli", "Govindpur"
            ],
            "Dumka": ["Dumka", "Jarmundi", "Kathikund", "Gopikandar", "Shikaripara"],
            "East Singhbhum": [
                "Jamshedpur", "Ghatshila", "Musabani", "Potka", "Baharagora",
                "Bistupur", "Sakchi", "Sonari", "Kadma", "Telco",
                "Parsudih", "Mango", "Jugsalai", "Golf Green", "Baridih"
            ],
            "Garhwa": ["Garhwa", "Ranka", "Nagar Untari", "Majhiaon", "Dandai"],
            "Giridih": ["Giridih", "Bengabad", "Gandey", "Jamua", "Bagodar"],
            "Godda": ["Godda", "Mahagama", "Pathargama", "Poreyahat", "Sundar Pahari"],
            "Gumla": ["Gumla", "Bishunpur", "Chainpur", "Ghaghra", "Sisai"],
            "Hazaribagh": [
                "Hazaribagh", "Barhi", "Barkagaon", "Ichak", "Padma",
                "Korrah", "Hurhuru", "Okni", "Keredari"
            ],
            "Jamshedpur": ["Jamshedpur City", "Mango", "Jugsalai", "Bistupur", "Sakchi"],
            "Jamtara": ["Jamtara", "Karmatanr", "Nala", "Narayanpur", "Fatehpur"],
            "Khunti": ["Khunti", "Torpa", "Murhu", "Karra", "Rania"],
            "Koderma": ["Koderma", "Jainagar", "Markacho", "Satgawan", "Domchanch"],
            "Latehar": ["Latehar", "Barwadih", "Manika", "Chandwa", "Balumath"],
            "Lohardaga": ["Lohardaga", "Kuru", "Bhandra", "Senga"],
            "Pakur": ["Pakur", "Maheshpur", "Pakuria", "Littipara", "Amrapara"],
            "Palamu": ["Medininagar", "Daltonganj", "Hussainabad", "Bishrampur", "Satbarwa"],
            "Ramgarh": ["Ramgarh", "Patratu", "Mandu", "Gola", "Dulmi"],
            "Ranchi": [
                "Ranchi City", "Bundu", "Kanke", "Ratu", "Ormanjhi",
                "Main Road", "Circular Road", "Harmu", "Doranda", "Morabadi",
                "Lalpur", "Hindpiri", "Bariatu", "Kokar", "Namkum"
            ],
            "Sahebganj": ["Sahebganj", "Rajmahal", "Barharwa", "Taljhari", "Borio"],
            "Seraikela Kharsawan": ["Seraikela", "Kharsawan", "Chandil", "Ichagarh", "Kuchai"],
            "Simdega": ["Simdega", "Bolba", "Kolebira", "Kurdeg", "Thethaitangar"],
            "West Singhbhum": ["Chaibasa", "Chakradharpur", "Jagannathpur", "Khuntpani", "Manjhari"]
        }
    },
    "Telangana": {
        districts: {
            "Adilabad": ["Adilabad City", "Mancherial", "Nirmal", "Bellampalle", "Kagaznagar", "Bhainsa", "Mudhole", "Utnoor"],
            "Bhadradri Kothagudem": ["Kothagudem", "Palvancha", "Yellandu", "Manuguru", "Bhadrachalam", "Pathargama", "Aswaraopeta"],
            "Hyderabad": [
                "Secunderabad", "Charminar", "Jubilee Hills", "Banjara Hills", "Kukatpally", "Gachibowli", "Madhapur", 
                "HITEC City", "Begumpet", "Ameerpet", "Dilsukhnagar", "LB Nagar", "Mehdipatnam", "Abids", "Koti",
                "Malakpet", "Nampally", "Khairatabad", "Panjagutta", "Himayatnagar"
            ],
            "Jagtial": ["Jagtial Town", "Korutla", "Metpalle", "Dharmapuri", "Raikal", "Sarangapur", "Mallapur"],
            "Jangaon": ["Jangaon Town", "Chilpur", "Devaruppula", "Ghanpur", "Kodakandla", "Narmetta", "Raghunathpalle"],
            "Jayashankar Bhupalpally": ["Bhupalpally", "Mahadevpur", "Mutharam", "Kataram", "Chityal", "Tekumatla"],
            "Jogulamba Gadwal": ["Gadwal", "Alampur", "Ieeja", "Manopad", "Dharur", "Ghattu", "Waddepalle"],
            "Kamareddy": ["Kamareddy Town", "Banswada", "Yellareddy", "Domakonda", "Bichkunda", "Machareddy"],
            "Karimnagar": ["Karimnagar City", "Huzurabad", "Choppadandi", "Manakondur", "Sircilla", "Jammikunta"],
            "Khammam": ["Khammam City", "Madhira", "Sathupalle", "Wyra", "Kallur", "Thirumalayapalem", "Kusumanchi"],
            "Kumuram Bheem": ["Asifabad", "Kagaznagar", "Sirpur", "Rebbena", "Koutala", "Wankdi", "Tiryani"],
            "Mahabubabad": ["Mahabubabad Town", "Dornakal", "Kuravi", "Kesamudram", "Thorrur", "Garla"],
            "Mahabubnagar": ["Mahabubnagar City", "Jadcherla", "Nawabpet", "Makthal", "Narayanpet", "Kosgi"],
            "Mancherial": ["Mancherial Town", "Bellampalle", "Naspur", "Chennur", "Mandamarri", "Luxettipet"],
            "Medak": ["Medak Town", "Narsapur", "Toopran", "Ramayampet", "Chegunta", "Papannapet"],
            "Medchal-Malkajgiri": ["Kompally", "Alwal", "Malkajgiri", "Quthbullapur", "Uppal", "Kapra", "Keesara"],
            "Mulugu": ["Mulugu Town", "Venkatapur", "Eturnagaram", "Tadvai", "Govindaraopet", "Mangapet"],
            "Nagarkurnool": ["Nagarkurnool Town", "Achampet", "Kalwakurthy", "Kollapur", "Kodair", "Peddakothapally"],
            "Nalgonda": ["Nalgonda City", "Miryalaguda", "Suryapet", "Devarakonda", "Nakrekal", "Chandur"],
            "Narayanpet": ["Narayanpet Town", "Makthal", "Dhanwada", "Kosgi", "Maganoor", "Krishna"],
            "Nirmal": ["Nirmal Town", "Bhainsa", "Khanapur", "Mudhole", "Mamda", "Sarangapur"],
            "Nizamabad": ["Nizamabad City", "Bodhan", "Armoor", "Balkonda", "Banswada", "Yellareddy"],
            "Peddapalli": ["Peddapalli Town", "Ramagundam", "Manthani", "Sulthanabad", "Dharmaram", "Eligaid"],
            "Rajanna Sircilla": ["Sircilla", "Vemulawada", "Rudrangi", "Gambhiraopet", "Konaraopet", "Mustabad"],
            "Rangareddy": ["Shamshabad", "Hayathnagar", "Ibrahimpatnam", "Kandukur", "Maheshwaram", "Saroornagar"],
            "Sangareddy": ["Sangareddy Town", "Zaheerabad", "Andole", "Narayankhed", "Patancheru", "Sadasivpet"],
            "Siddipet": ["Siddipet Town", "Gajwel", "Husnabad", "Dubbak", "Chinnakodur", "Koheda"],
            "Suryapet": ["Suryapet City", "Kodad", "Huzurnagar", "Nalgonda", "Thungathurthi", "Chilkur"],
            "Vikarabad": ["Vikarabad Town", "Parigi", "Tandur", "Kodangal", "Doma", "Peddemul"],
            "Wanaparthy": ["Wanaparthy Town", "Atmakur", "Gopalpeta", "Kothakota", "Pebbair", "Revally"],
            "Warangal Rural": ["Narsampet", "Parkal", "Wardhanapet", "Shayampet", "Chennaraopet", "Duggondi"],
            "Warangal Urban": ["Warangal City", "Hanamkonda", "Kazipet", "Dharmasagar", "Urus", "Hasanparthy"],
            "Yadadri Bhuvanagiri": ["Bhongir", "Alair", "Mothkur", "Ramannapet", "Valigonda", "Yadagirigutta"]
        }
    },
    "Uttar Pradesh": {
        districts: {
            "Agra": ["Agra City", "Fatehpur Sikri", "Kirawali", "Etmadpur", "Khairagarh", "Bah"],
            "Aligarh": ["Aligarh City", "Khair", "Atrauli", "Iglas", "Gabhana", "Koil"],
            "Allahabad": ["Prayagraj City", "Phulpur", "Soraon", "Handia", "Meja", "Karchhana"],
            "Ambedkar Nagar": ["Akbarpur", "Tanda", "Jalalpur", "Alapur", "Bhiti"],
            "Amethi": ["Gauriganj", "Amethi", "Musafirkhana", "Salon", "Tiloi"],
            "Amroha": ["Amroha City", "Hasanpur", "Dhanaura", "Gajraula"],
            "Auraiya": ["Auraiya City", "Bidhuna", "Ajitmal", "Achalda"],
            "Azamgarh": ["Azamgarh City", "Lalganj", "Mehnagar", "Phulpur", "Sagri"],
            "Baghpat": ["Baghpat City", "Baraut", "Khekada", "Chaprauli"],
            "Bahraich": ["Bahraich City", "Nanpara", "Kaiserganj", "Mahasi"],
            "Ballia": ["Ballia City", "Rasra", "Bansdih", "Belthara Road"],
            "Balrampur": ["Balrampur City", "Utraula", "Tulsipur", "Gainsari"],
            "Banda": ["Banda City", "Atarra", "Naraini", "Baberu"],
            "Barabanki": ["Barabanki City", "Ramsanehighat", "Fatehpur", "Haidergarh"],
            "Bareilly": ["Bareilly City", "Aonla", "Baheri", "Meerganj", "Nawabganj"],
            "Basti": ["Basti City", "Harraiya", "Rudhauli", "Bhanpur"],
            "Bhadohi": ["Gyanpur", "Bhadohi", "Aurai", "Suriyawan"],
            "Bijnor": ["Bijnor City", "Najibabad", "Nagina", "Chandpur", "Dhampur"],
            "Budaun": ["Budaun City", "Sahaswan", "Dataganj", "Bilsi"],
            "Bulandshahr": ["Bulandshahr City", "Khurja", "Sikandrabad", "Anupshahr"],
            "Chandauli": ["Chandauli", "Mughal Sarai", "Sakaldiha", "Chakiya"],
            "Chitrakoot": ["Karwi", "Mau", "Manikpur", "Chitrakoot Dham"],
            "Deoria": ["Deoria City", "Bhatpar Rani", "Gauri Bazar", "Rudrapur"],
            "Etah": ["Etah City", "Kasganj", "Aliganj", "Jalesar"],
            "Etawah": ["Etawah City", "Bharthana", "Chakarnagar", "Jaswantnagar"],
            "Faizabad": ["Faizabad City", "Bikapur", "Rudauli", "Milkipur"],
            "Farrukhabad": ["Farrukhabad City", "Fatehgarh", "Kaimganj", "Amritpur"],
            "Fatehpur": ["Fatehpur City", "Bindki", "Khaga", "Ayah Shah"],
            "Firozabad": ["Firozabad City", "Tundla", "Shikohabad", "Sirsaganj"],
            "Gautam Buddha Nagar": ["Noida", "Greater Noida", "Dadri", "Jewar"],
            "Ghaziabad": ["Ghaziabad City", "Modi Nagar", "Loni", "Muradnagar"],
            "Ghazipur": ["Ghazipur City", "Zamania", "Saidpur", "Mohammadabad"],
            "Gonda": ["Gonda City", "Colonelganj", "Mankapur", "Tarabganj"],
            "Gorakhpur": ["Gorakhpur City", "Chauri Chaura", "Sahjanwa", "Bansgaon"],
            "Hamirpur": ["Hamirpur City", "Rath", "Maudaha", "Sarila"],
            "Hapur": ["Hapur City", "Pilkhuwa", "Dhaulana", "Garh Mukteshwar"],
            "Hardoi": ["Hardoi City", "Sandila", "Bilgram", "Shahabad"],
            "Hathras": ["Hathras City", "Sadabad", "Sikandra Rao", "Sasni"],
            "Jalaun": ["Orai", "Kalpi", "Konch", "Madhogarh"],
            "Jaunpur": ["Jaunpur City", "Shahganj", "Mariahu", "Machhlishahr"],
            "Jhansi": ["Jhansi City", "Mauranipur", "Garautha", "Moth"],
            "Kannauj": ["Kannauj City", "Chhibramau", "Tirwa", "Kannauj"],
            "Kanpur Dehat": ["Akbarpur", "Rasulabad", "Derapur", "Bhognipur"],
            "Kanpur Nagar": ["Kanpur City", "Bilhaur", "Ghatampur", "Kalyanpur"],
            "Kasganj": ["Kasganj City", "Patiyali", "Sahawar", "Sidhpura"],
            "Kaushambi": ["Manjhanpur", "Sirathu", "Chail", "Kadaura"],
            "Kushinagar": ["Padrauna", "Kasya", "Hata", "Tamkuhi Raj"],
            "Lakhimpur Kheri": ["Lakhimpur", "Gola Gokarannath", "Mohammadi", "Palia"],
            "Lalitpur": ["Lalitpur City", "Talbehat", "Mahroni", "Mehroni"],
            "Lucknow": ["Lucknow City", "Bakshi Ka Talab", "Malihabad", "Mohanlalganj"],
            "Maharajganj": ["Maharajganj", "Nichlaul", "Nautanwa", "Pharenda"],
            "Mahoba": ["Mahoba City", "Chharkhari", "Kulpahar", "Kabrai"],
            "Mainpuri": ["Mainpuri City", "Bhogaon", "Karhal", "Kishni"],
            "Mathura": ["Mathura City", "Vrindavan", "Govardhan", "Chhata"],
            "Mau": ["Mau City", "Ghosi", "Muhammadabad", "Kopaganj"],
            "Meerut": ["Meerut City", "Sardhana", "Mawana", "Hastinapur"],
            "Mirzapur": ["Mirzapur City", "Chunar", "Lalganj", "Marihan"],
            "Moradabad": ["Moradabad City", "Bilari", "Chandausi", "Thakurdwara"],
            "Muzaffarnagar": ["Muzaffarnagar City", "Budhana", "Khatauli", "Jansath"],
            "Pilibhit": ["Pilibhit City", "Bisalpur", "Puranpur", "Barkhera"],
            "Pratapgarh": ["Pratapgarh City", "Kunda", "Patti", "Raniganj"],
            "Raebareli": ["Raebareli City", "Maharajganj", "Salon", "Dalmau"],
            "Rampur": ["Rampur City", "Bilaspur", "Swar", "Tanda"],
            "Saharanpur": ["Saharanpur City", "Deoband", "Nakur", "Behat"],
            "Sambhal": ["Sambhal City", "Chandausi", "Gunnaur", "Bahjoi"],
            "Sant Kabir Nagar": ["Khalilabad", "Mehdawal", "Dhanghata"],
            "Shahjahanpur": ["Shahjahanpur City", "Tilhar", "Powayan", "Jalalabad"],
            "Shamli": ["Shamli City", "Kairana", "Thana Bhawan", "Unn"],
            "Shravasti": ["Bhinga", "Ikauna", "Gilaula", "Sirsia"],
            "Siddharthnagar": ["Navgarh", "Domariyaganj", "Bansi", "Shohratgarh"],
            "Sitapur": ["Sitapur City", "Biswan", "Mahmudabad", "Laharpur"],
            "Sonbhadra": ["Robertsganj", "Obra", "Duddhi", "Ghorawal"],
            "Sultanpur": ["Sultanpur City", "Kadipur", "Lambhua", "Jaisinghpur"],
            "Unnao": ["Unnao City", "Purwa", "Bighapur", "Safipur"],
            "Varanasi": ["Varanasi City", "Pindra", "Rajatalab", "Sevapuri"]
        }
    },
    "Assam": {
        districts: {
            "Baksa": ["Mushalpur", "Tamulpur", "Salbari", "Barama", "Goreswar"],
            "Barpeta": ["Barpeta", "Howly", "Sarthebari", "Barpeta Road", "Pathsala"],
            "Biswanath": ["Biswanath Chariali", "Gohpur", "Behali", "Sootea", "Biswanath Ghat"],
            "Bongaigaon": ["Bongaigaon", "North Salmara", "Abhayapuri", "Manikpur", "Bijni"],
            "Cachar": ["Silchar", "Lakhipur", "Sonai", "Udharbond", "Katigorah"],
            "Charaideo": ["Sonari", "Mahmora", "Moran", "Lakhim", "Lachung"],
            "Chirang": ["Kajalgaon", "Bijni", "Sidli", "Amguri", "Bengtol"],
            "Darrang": ["Mangaldoi", "Sipajhar", "Dalgaon", "Kalaigaon", "Patharighat"],
            "Dhemaji": ["Dhemaji", "Jonai", "Gogamukh", "Silapathar", "Bordoloni"],
            "Dhubri": ["Dhubri", "Bilasipara", "Gauripur", "Golakganj", "Mankachar"],
            "Dibrugarh": [
                "Dibrugarh", "Naharkatia", "Tengakhat", "Chabua", "Duliajan",
                "Namrup", "Moran", "Tingkhong", "Lahowal", "Khowang"
            ],
            "Dima Hasao": ["Haflong", "Maibang", "Umrangso", "Mahur", "Langting"],
            "Goalpara": ["Goalpara", "Dudhnai", "Lakhipur", "Balijana", "Matia"],
            "Golaghat": ["Golaghat", "Bokakhat", "Dergaon", "Sarupathar", "Morongi"],
            "Hailakandi": ["Hailakandi", "Lala", "Katlicherra", "Algapur", "South Hailakandi"],
            "Hojai": ["Hojai", "Doboka", "Lanka", "Lumding", "Jugijan"],
            "Jorhat": ["Jorhat", "Titabor", "Teok", "Mariani", "Majuli"],
            "Kamrup": ["Rangia", "North Guwahati", "Hajo", "Palasbari", "Chamaria"],
            "Kamrup Metropolitan": [
                "Guwahati", "Dispur", "Fancy Bazar", "Zoo Road", "GS Road",
                "Paltan Bazar", "Maligaon", "Bharalumukh", "Chandmari", "Beltola",
                "Ganeshguri", "Khanapara", "Azara", "Sonapur"
            ],
            "Karbi Anglong": ["Diphu", "Bokajan", "Howraghat", "Dokmoka", "Hamren"],
            "Karimganj": ["Karimganj", "Badarpur", "Ratabari", "Patharkandi", "Nilambazar"],
            "Kokrajhar": ["Kokrajhar", "Gossaigaon", "Dotma", "Fakiragram", "Bhowraguri"],
            "Lakhimpur": ["North Lakhimpur", "Bihpuria", "Dhakuakhana", "Narayanpur", "Nowboicha"],
            "Majuli": ["Majuli", "Garmur", "Kamalabari", "Jengraimukh", "Kekuri Chapori"],
            "Morigaon": ["Morigaon", "Mayong", "Lalganj", "Bhuragaon", "Jagiroad"],
            "Nagaon": ["Nagaon", "Raha", "Dhing", "Hojai", "Kampur"],
            "Nalbari": ["Nalbari", "Tihu", "Barkhetri", "Barbhag", "Banekuchi"],
            "Sivasagar": ["Sivasagar", "Amguri", "Nazira", "Simaluguri", "Gaurisagar"],
            "Sonitpur": ["Tezpur", "Rangapara", "Dhekiajuli", "Biswanath Chariali", "Gohpur"],
            "South Salmara-Mankachar": ["Mankachar", "South Salmara", "Fekamari", "Saudwadi", "Mathanguri"],
            "Tinsukia": ["Tinsukia", "Digboi", "Margherita", "Doom Dooma", "Makum"],
            "Udalguri": ["Udalguri", "Tangla", "Kalaigaon", "Rowta", "Mazbat"],
            "West Karbi Anglong": ["Hamren", "Baithalangso", "Donka", "Jirikinding", "Langhin"]
        }
    },
    "Meghalaya": {
        districts: {
            "East Garo Hills": ["Williamnagar", "Rongjeng", "Samanda", "Songsak", "Dagal"],
            "East Jaintia Hills": ["Khliehriat", "Sutnga", "Saipung", "Dawki", "Byndihati"],
            "East Khasi Hills": [
                "Shillong", "Mawlai", "Madanrting", "Pynthorumkhrah", "Nongthymmai",
                "Police Bazar", "Laitumkhrah", "Lachumiere", "Malki", "Mawprem",
                "Laban", "Nongmynsong", "Rynjah", "Mawroh", "Nongkseh"
            ],
            "North Garo Hills": ["Resubelpara", "Mendipather", "Kharkutta", "Dainadubi", "Bajengdoba"],
            "Ri Bhoi": ["Nongpoh", "Umiam", "Byrnihat", "Umsning", "Bhoirymbong"],
            "South Garo Hills": ["Baghmara", "Gasuapara", "Chokpot", "Rongara", "Silkigre"],
            "South West Garo Hills": ["Ampati", "Betasing", "Zikzak", "Garobadha", "Mahendraganj"],
            "South West Khasi Hills": ["Mawkyrwat", "Rangblang", "Mawthadraishan", "Mawthawpdah", "Nongstoin"],
            "West Garo Hills": [
                "Tura", "Tikrikilla", "Phulbari", "Dadenggre", "Senga",
                "Dadengiri", "Dalu", "Gambegre", "Rangalgre", "Rangalgre"
            ],
            "West Jaintia Hills": ["Jowai", "Amlarem", "Laskein", "Thadlaskein", "Nartiang"],
            "West Khasi Hills": ["Nongstoin", "Mairang", "Mawshynrut", "Mawthadraishan", "Riangdo"]
        }
    },
    "Manipur": {
        districts: {
            "Bishnupur": ["Bishnupur", "Nambol", "Moirang", "Ningthoukhong", "Kumbi"],
            "Chandel": ["Chandel", "Chakpikarong", "Moreh", "Machi", "Tengnoupal"],
            "Churachandpur": [
                "Churachandpur", "Singngat", "Thanlon", "Tipaimukh", "Henglep",
                "Tuibong", "Lamka", "Saidan", "Mualnuam", "Saikot"
            ],
            "Imphal East": [
                "Porompat", "Sawombung", "Keirao", "Heingang", "Khundrakpam",
                "Irilbung", "Jiribam", "Andro", "Lamlai", "Kakoi"
            ],
            "Imphal West": [
                "Lamphel", "Patsoi", "Wangoi", "Mayang Imphal", "Lamsang",
                "Konthoujam", "Langthabal", "Sekmai", "Takyel", "Uripok"
            ],
            "Jiribam": ["Jiribam", "Borobekra", "Babukhal", "Kadamtala"],
            "Kakching": ["Kakching", "Sugnu", "Wabagai", "Pallel", "Hiyanglam"],
            "Kamjong": ["Kamjong", "Kasom", "Sahamphung", "Phungyar"],
            "Kangpokpi": ["Kangpokpi", "Saikul", "Saitu", "Gamnom", "Champhai"],
            "Noney": ["Noney", "Longmai", "Khoupum", "Nungba", "Haochong"],
            "Pherzawl": ["Pherzawl", "Thanlon", "Parbung", "Vangai Range", "Tipaimukh"],
            "Senapati": ["Senapati", "Mao", "Karong", "Purul", "Paomata"],
            "Tamenglong": ["Tamenglong", "Tousem", "Tamei", "Nungba", "Khoupum Valley"],
            "Tengnoupal": ["Tengnoupal", "Moreh", "Machi", "Chakpikarong", "Khudengthabi"],
            "Thoubal": [
                "Thoubal", "Lilong", "Yairipok", "Kakching", "Wangjing",
                "Heirok", "Khangabok", "Wabagai", "Sekmai", "Khongjom"
            ],
            "Ukhrul": ["Ukhrul", "Kamjong", "Phungyar", "Chingai", "Kasom Khullen"]
        }
    },
    "Tripura": {
        districts: {
            "Dhalai": [
                "Ambassa", "Kamalpur", "Gandacherra", "Longtharai Valley", "Chawmanu",
                "Salema", "Manu", "Dungtlang", "Raishyabari", "Kulai"
            ],
            "Gomati": [
                "Udaipur", "Amarpur", "Karbook", "Ompi", "Killa",
                "Tepania", "Kakraban", "Mabi", "Matabari", "Silachari",
                "Tilthai", "Uchchamati", "Kathalia", "Krishnapur", "Ranirbazar"
            ],
            "Khowai": [
                "Khowai", "Teliamura", "Padmabil", "Kalyanpur", "Tulashikhar",
                "Mungiakami", "Champahour", "Baijalbari", "Krishnapur", "Ramchandraghat"
            ],
            "North Tripura": [
                "Dharmanagar", "Kanchanpur", "Panisagar", "Damcherra", "Jampui Hills",
                "Kadamtala", "Kumarghat", "Laljuri", "Dasda", "Jubarajnagar"
            ],
            "Sepahijala": [
                "Bishramganj", "Sonamura", "Jampuijala", "Boxanagar", "Melaghar",
                "Kathalia", "Nalchar", "Madhupur", "Chandipur", "Bishalgarh"
            ],
            "South Tripura": [
                "Belonia", "Santirbazar", "Sabroom", "Rajnagar", "Hrishyamukh",
                "Jolaibari", "Rupaichari", "Satchand", "Bokafa", "Barpathari"
            ],
            "Unakoti": [
                "Kailashahar", "Kumarghat", "Gournagar", "Pecharthal", "Chandipur",
                "Kurti", "Jalebassa", "Rajbari", "Pabiacherra", "Fatikroy"
            ],
            "West Tripura": [
                "Agartala", "Mohanpur", "Bishalgarh", "Mandwi", "Jirania",
                "Lefunga", "Old Agartala", "Ranirbazar", "Amarpur", "Bardowali",
                "GB Bazar", "Battala", "Bodhjungnagar", "Krishna Nagar", "Lake Chowmuhani"
            ]
        }
    },
    "Mizoram": {
        districts: {
            "Aizawl": ["Aizawl", "Darlawn", "Phullen", "Thingsulthliah", "Chanmari", "Zarkawt", "Khatla", "Dawrpui", "Chaltlang", "Bawngkawn"],
            "Champhai": ["Champhai", "Khawzawl", "Ngopa", "Vaphai", "Dungtlang", "Khuangphah", "Mualkawi", "Zote", "Khawhai"],
            "Hnahthial": ["Hnahthial", "Sialhawk", "Pangzawl", "Lunglei", "Rawpui"],
            "Khawzawl": ["Khawzawl", "East Lungdar", "Ngopa", "Rabung", "Biate"],
            "Kolasib": ["Kolasib", "Bilkhawthlir", "Kawnpui", "Vairengte", "Bairabi", "North Thingdawl", "Saizawh", "Bualpui", "Thingdawl", "Lungdai"],
            "Lawngtlai": ["Lawngtlai", "Chawngte", "Bungtlang", "Sangau", "Vaseitlang", "Dagal", "Parva", "Kawrche"],
            "Lunglei": ["Lunglei", "Tlabung", "Hnahthial", "Bunghmun", "Lungsen", "Zobawk", "Theiret", "Saiha", "Rawpui", "Pukpui"],
            "Mamit": ["Mamit", "West Phaileng", "Kawrthah", "Zawlnuam", "Reiek", "Darlawn", "Sairang", "Sakawrtuichhun"],
            "Saiha": ["Saiha", "Tuipang", "Sangau", "Phura", "Lungbun", "Zawngling", "Siata", "Tuipang L", "Mawhre"],
            "Saitual": ["Saitual", "Ngopa", "Darlawn", "Keifang", "Aibawk"],
            "Serchhip": ["Serchhip", "Thenzawl", "East Lungdar", "North Vanlaiphai", "Chhingchhip", "Keitum", "Lungpho", "Bungtlang", "New Serchhip", "Khawlailung"]
        }
    },
    "Nagaland": {
        districts: {
            "Chümoukedima": [
                "Chümoukedima", "Seithekema", "Rüzaphema", "Medziphema", "Pherima",
                "Thilixu", "Sovima", "Tetiha Bambor", "Darogapathar", "Diphupar"
            ],
            "Dimapur": [
                "Dimapur", "Chumukedima", "Niuland", "Kuhuboto", "Dhobinala",
                "Bijari", "Diphupar", "Khatkhati", "Naginimora", "Nihokhu",
                "Rangapahar", "Thahekhu", "Zubza"
            ],
            "Kiphire": [
                "Kiphire", "Pungro", "Seyochung", "Sitimi", "Kiphere Town",
                "Amahator", "Longmatra", "Saptor", "Khongsa", "Likimro"
            ],
            "Kohima": [
                "Kohima", "Tseminyu", "Chiephobozou", "Sechu Zubza", "Jakhama",
                "Model Town", "BOC", "PR Hill", "High School", "Chandmari",
                "Lerie", "AG Colony", "Upper Agri", "Lower Agri", "Mohonkhola"
            ],
            "Longleng": [
                "Longleng", "Tamlu", "Sakshi", "Yongnyah", "Tangha",
                "Pongo", "Yachem", "Yongam", "Hukphang", "Bhumnyu"
            ],
            "Mokokchung": [
                "Mokokchung", "Tuli", "Changtongya", "Mangkolemba", "Longchem",
                "Aliba", "Ungma", "Chuchuyimlang", "Longkhum", "Impur",
                "Sungkomen", "Artang", "Marepkong", "Kubza", "Chungtia"
            ],
            "Mon": [
                "Mon Town", "Tizit", "Phomching", "Tobu", "Chen",
                "Wakching", "Longwa", "Aboi", "Monyakshu", "Tanhai"
            ],
            "Niuland": ["Niuland", "Nihokhu", "Shoxuvi", "Hovukhu", "Nihoto"],
            "Noklak": ["Noklak", "Thonoknyu", "Panso", "Nokhu", "Chingmei"],
            "Peren": [
                "Peren", "Jalukie", "Tening", "Athibung", "Nsong",
                "Achibung", "Kebai Khelma", "New Peren", "Mhainamtsi", "Samziuram"
            ],
            "Phek": [
                "Phek", "Meluri", "Chozuba", "Pfutsero", "Khezhakeno",
                "Porba", "Sakraba", "Losami", "Chetheba", "Zhavame"
            ],
            "Shamator": ["Shamator", "Chessore", "Sotokur", "Yangpi", "Kiusam"],
            "Tseminyü": ["Tseminyü", "Chunlikha", "Tesophenyu", "Sendenyu", "Beisumpui"],
            "Tuensang": [
                "Tuensang", "Noksen", "Shamator", "Chare", "Noklak",
                "Longkhim", "Sangsangyu", "Chendang", "Kingpong", "Chilise"
            ],
            "Wokha": [
                "Wokha", "Bhandari", "Sanis", "Ralan", "Wozhuro",
                "Chukitong", "Englan", "Longsa", "Mengkeng", "Empong"
            ],
            "Zünheboto": [
                "Zünheboto", "Aghunato", "Satakha", "Suruhuto", "Akuluto",
                "Satoi", "Saptiqa", "Kilomi", "V.K.", "Ghathashi"
            ]
        }
    },
    "Arunachal Pradesh": {
        districts: {
            "Anjaw": ["Hawai", "Walong", "Hayuliang", "Manchal", "Chaglagam"],
            "Changlang": [
                "Changlang", "Miao", "Bordumsa", "Kharsang", "Jairampur",
                "Manmao", "Namtok", "Khimiyang", "Yatdam", "Diyun"
            ],
            "Dibang Valley": ["Anini", "Etalin", "Mipi", "Anelih", "Arzoo"],
            "East Kameng": [
                "Seppa", "Chayangtajo", "Bameng", "Pakke-Kesang", "Pipu",
                "Lada", "Bana", "Riyo", "Sawa", "Khenewa"
            ],
            "East Siang": [
                "Pasighat", "Ruksin", "Mebo", "Bilat", "Yagrung",
                "Sille-Oyan", "Nari", "Koyu", "Rani", "Boleng"
            ],
            "Kamle": ["Raga", "Kamporijo", "Dollungmukh", "Pania", "Gepen"],
            "Kra Daadi": ["Palin", "Tali", "Pipsorang", "Yangte", "Chambang"],
            "Kurung Kumey": [
                "Koloriang", "Sarli", "Parsi-Parlo", "Nyapin", "Damin",
                "Chambang", "Sangram", "Gangte", "Tali", "Palin"
            ],
            "Lepa Rada": ["Basar", "Tirbin", "Dari", "Sago", "Yomcha"],
            "Lohit": [
                "Tezu", "Namsai", "Chowkham", "Wakro", "Sunpura",
                "Mahadevpur", "Lalganj", "Piyong", "Lekang", "Bordumsa"
            ],
            "Longding": [
                "Longding", "Kanubari", "Pongchau", "Wakka", "Pumao",
                "Lawnu", "Ranglua", "Konsa", "Nginu", "Khasa"
            ],
            "Lower Dibang Valley": [
                "Roing", "Dambuk", "Koronu", "Hunli", "Desali",
                "Achalghat", "Bijari", "Parbuk", "Bolung", "Jia"
            ],
            "Lower Siang": ["Nari-Koyu", "Likabali", "Kangku", "Gensi", "Sibe"],
            "Lower Subansiri": [
                "Ziro", "Hapoli", "Yachuli", "Yazali", "Pistana",
                "Joram", "Deed", "Raga", "Old Ziro", "Manipolyang"
            ],
            "Namsai": [
                "Namsai", "Chowkham", "Mahadevpur", "Lathao", "Piyong",
                "Lekang", "Mengkeng", "Empong", "Silatoo", "Jaipur"
            ],
            "Pakke-Kessang": ["Pakke-Kessang", "Seijosa", "Pijerang", "Dissing Passo", "Lemmi"],
            "Papum Pare": [
                "Yupia", "Doimukh", "Sagalee", "Balijan", "Kimin",
                "Banderdewa", "Naharlagun", "Nirjuli", "Gumto", "Kakoi"
            ],
            "Shi Yomi": ["Mechuka", "Monigong", "Pidi", "Tato", "Yapik"],
            "Siang": ["Pangin", "Boleng", "Rumgong", "Kaying", "Payum"],
            "Tawang": [
                "Tawang", "Lumla", "Jang", "Zemithang", "Bongkhar",
                "Kitpi", "Mukto", "Thingbu", "Lhou", "Bomdir"
            ],
            "Tirap": [
                "Khonsa", "Deomali", "Lazu", "Dadam", "Soha",
                "Borduria", "Noksa", "Tissa", "Bari", "Laptang"
            ],
            "Upper Dibang Valley": ["Anini", "Etalin", "Mipi", "Anelih", "Hunli"],
            "Upper Siang": [
                "Yingkiong", "Mariyang", "Geku", "Palling", "Tuting",
                "Singa", "Jengging", "Karko", "Simong", "Moying"
            ],
            "Upper Subansiri": [
                "Daporijo", "Dumporijo", "Taliha", "Siyum", "Nacho",
                "Limeking", "Giba", "Kodak", "Maro", "Dulla"
            ],
            "West Kameng": [
                "Bomdila", "Dirang", "Kalaktang", "Rupa", "Nafra",
                "Bhalukpong", "Singchung", "Thembang", "Jamiri", "Tengbang"
            ],
            "West Siang": [
                "Aalo", "Bagra", "Liang", "Yomcha", "Kamba",
                "Gensi", "Kangku", "Yomcha", "Sibe", "Kangku"
            ]
        }
    },
    "Chandigarh": {
        districts: {
            "Chandigarh": ["Sector 17", "Sector 22", "Sector 35", "Industrial Area", "Manimajra", "Sector 8", "Sector 11"]
        }
    },
    "Puducherry": {
        districts: {
            "Puducherry": ["White Town", "Heritage Town", "Rainbow Nagar", "Muthialpet", "Reddiarpalayam"],
            "Karaikal": ["Karaikal Town", "Nehru Nagar", "Kottucherry", "Thirunallar"],
            "Mahe": ["Mahe Town", "Pandakkal", "Chalakkara", "Palloor", "East Palloor"]
        }
    },
    "Goa": {
        districts: {
            "North Goa": [
                "Panaji", "Mapusa", "Calangute", "Candolim", "Anjuna",
                "Vagator", "Morjim", "Siolim", "Aldona", "Porvorim",
                "Baga", "Arpora", "Saligao", "Parra", "Assagao"
            ],
            "South Goa": [
                "Margao", "Colva", "Vasco da Gama", "Ponda", "Benaulim",
                "Majorda", "Varca", "Cavelossim", "Mobor", "Betalbatim",
                "Fatorda", "Navelim", "Cuncolim", "Quepem", "Sanguem"
            ]
        }
    },
    "Jharkhand": {
        districts: {
            "Ranchi": ["Harmu", "Doranda", "Lalpur", "Kanke", "Bariatu"],
            "Jamshedpur": ["Bistupur", "Sakchi", "Kadma", "Sonari", "Mango"],
            "Dhanbad": ["Bank More", "Steel Gate", "Hirapur", "Saraidhela", "Jharia"],
            "Bokaro": ["Sector 4", "City Center", "Chas", "Sector 9", "Sector 3"]
        }
    },
    "Chhattisgarh": {
        districts: {
            "Balod": ["Balod", "Gurur", "Dondi", "Lohara", "Gunderdehi"],
            "Baloda Bazar": ["Baloda Bazar", "Bhatapara", "Bilaigarh", "Kasdol", "Palari"],
            "Balrampur": ["Balrampur", "Ramanujganj", "Rajpur", "Wadrafnagar", "Kusmi"],
            "Bastar": [
                "Jagdalpur", "Bastar", "Tokapal", "Bakawand", "Lohandiguda",
                "Bastanar", "Darbha", "Chitrakot", "Kondagaon", "Narayanpur"
            ],
            "Bemetara": ["Bemetara", "Saja", "Berla", "Nawagarh", "Thankhamhariya"],
            "Bijapur": ["Bijapur", "Bhopalpattanam", "Usur", "Bhairamgarh", "Bhopalpatnam"],
            "Bilaspur": [
                "Bilaspur", "Ratanpur", "Kota", "Takhatpur", "Masturi",
                "Bilha", "Sipat", "Seepat", "Hirri", "Chakarbhata"
            ],
            "Dantewada": ["Dantewada", "Geedam", "Kuakonda", "Katekalyan", "Bade Bacheli"],
            "Dhamtari": ["Dhamtari", "Kurud", "Nagri", "Magarlod", "Bhakhara"],
            "Durg": [
                "Durg", "Bhilai", "Patan", "Utai", "Ahiwara",
                "Bhilai-3", "Power House", "Jamul", "Kumhari", "Risali"
            ],
            "Gariaband": ["Gariaband", "Mainpur", "Chhura", "Deobhog", "Rajim"],
            "Janjgir-Champa": [
                "Janjgir", "Champa", "Pamgarh", "Malkharoda", "Nawagarh",
                "Sakti", "Baloda", "Dabhra", "Jaijaipur", "Akaltara"
            ],
            "Jashpur": ["Jashpur", "Pathalgaon", "Kunkuri", "Bagicha", "Duldula"],
            "Kabirdham": ["Kawardha", "Bodla", "Pandariya", "Sahaspur Lohara", "Lohara"],
            "Kanker": ["Kanker", "Charama", "Narharpur", "Bhanupratappur", "Antagarh"],
            "Kondagaon": ["Kondagaon", "Keshkal", "Makdi", "Pharasgaon", "Baderajpur"],
            "Korba": [
                "Korba", "Katghora", "Pali", "Kartala", "Hardibazar",
                "Darri", "Korba West", "Balco Nagar", "Manikpur", "Bankimongra"
            ],
            "Korea": ["Baikunthpur", "Manendragarh", "Chirmiri", "Sonhat", "Bharatpur"],
            "Mahasamund": ["Mahasamund", "Basna", "Pithora", "Saraipali", "Bagbahra"],
            "Mungeli": ["Mungeli", "Lormi", "Patharia", "Sargaon", "Khairagarh"],
            "Narayanpur": ["Narayanpur", "Orchha", "Baberu", "Sonpur", "Chhote Dongar"],
            "Raigarh": [
                "Raigarh", "Gharghoda", "Tamnar", "Lailunga", "Dharamjaigarh",
                "Sarangarh", "Baramkela", "Pussor", "Kharsiya", "Kharsia"
            ],
            "Raipur": [
                "Raipur", "Arang", "Abhanpur", "Tilda", "Dharsiwa",
                "Mandirhasaud", "Kharora", "Aarang", "Urla", "Bhatagaon",
                "Tatibandh", "Mowa", "Saddu", "Telibandha", "Shankar Nagar"
            ],
            "Rajnandgaon": [
                "Rajnandgaon", "Dongargaon", "Khairagarh", "Dongargarh", "Chhuikhadan",
                "Mohla", "Ambagarh Chowki", "Manpur", "Churiya", "Lal Bahadur Nagar"
            ],
            "Sukma": ["Sukma", "Konta", "Chhindgarh", "Gadiras", "Tongpal"],
            "Surajpur": ["Surajpur", "Premnagar", "Odgi", "Ramanujnagar", "Pratappur"],
            "Surguja": [
                "Ambikapur", "Lundra", "Sitapur", "Udaipur",
                "Mainpat", "Bana", "Rajpur", "Kusmi", "Pratappur"
            ]
        }
    },
    "Jammu and Kashmir": {
        districts: {
            "Anantnag": [
                "Anantnag City", "Bijbehara", "Pahalgam", "Kokernag", "Dooru",
                "Shangus", "Qazigund", "Achabal", "Mattan", "Verinag"
            ],
            "Bandipora": ["Bandipora", "Gurez", "Sumbal", "Hajin", "Ajas"],
            "Baramulla": [
                "Baramulla", "Sopore", "Uri", "Pattan", "Tangmarg",
                "Gulmarg", "Rafiabad", "Watergam", "Kunzer", "Kreeri"
            ],
            "Budgam": [
                "Budgam", "Beerwah", "Chadoora", "Charar-i-Sharief", "Khansahib",
                "Magam", "Narbal", "B.K. Pora", "Nagam", "Khanda"
            ],
            "Doda": ["Doda", "Bhaderwah", "Thathri", "Gandoh", "Assar"],
            "Ganderbal": ["Ganderbal", "Kangan", "Lar", "Wakoora", "Shahpur"],
            "Jammu": [
                "Jammu City", "Akhnoor", "Bishnah", "R.S. Pura", "Bahu",
                "Gandhi Nagar", "Satwari", "Talab Tillo", "Narwal", "Channi Himmat",
                "Trikuta Nagar", "Shastri Nagar", "Bakshi Nagar", "Janipur"
            ],
            "Kathua": [
                "Kathua", "Bilaspur", "Bani", "Hiranagar", "Billawar",
                "Lakhanpur", "Nagri", "Marheen", "Barnoti"
            ],
            "Kishtwar": ["Kishtwar", "Chatroo", "Marwah", "Warwan", "Dachhan"],
            "Kulgam": ["Kulgam", "D.H. Pora", "Devsar", "Qaimoh", "Yaripora"],
            "Kupwara": [
                "Kupwara", "Handwara", "Langate", "Kralpora", "Trehgam",
                "Lolab", "Karnah", "Tangdar", "Drugmulla"
            ],
            "Poonch": ["Poonch", "Mendhar", "Surankote", "Mandi", "Buffliaz"],
            "Pulwama": [
                "Pulwama", "Tral", "Pampore", "Awantipora", "Kakapora",
                "Rajpora", "Litter", "Shadimarg"
            ],
            "Rajouri": [
                "Rajouri", "Nowshera", "Sunderbani", "Kalakote", "Darhal",
                "Thanamandi", "Manjakote", "Budhal"
            ],
            "Ramban": ["Ramban", "Banihal", "Batote", "Gool", "Ramsoo"],
            "Reasi": ["Reasi", "Katra", "Arnas", "Pouni", "Mahore"],
            "Samba": ["Samba", "Vijaypur", "Ghagwal", "Purmandal", "Bari Brahmana"],
            "Shopian": ["Shopian", "Zainapora", "Keller", "Imamsahib", "Hermain"],
            "Srinagar": [
                "Lal Chowk", "Dal Gate", "Hazratbal", "Khanyar", "Soura",
                "Shalimar", "Nishat", "Harwan", "Panthachowk", "Zainakote"
            ],
            "Udhampur": [
                "Udhampur", "Ramnagar", "Chenani", "Majalta", "Panchari",
                "Dudu", "Latti", "Moungri", "Basantgarh"
            ]
        }
    },
    "Sikkim": {
        districts: {
            "East Sikkim": [
                "Gangtok", "Pakyong", "Rangpo", "Rhenock", "Rongli",
                "MG Marg", "Deorali", "Tadong", "Ranka", "Sargasan",
                "Pethang", "Pelling", "Singtam", "Ravangla", "Namchi"
            ],
            "North Sikkim": [
                "Mangan", "Chungthang", "Lachen", "Lachung", "Dzongu",
                "Kabi", "Phodong", "Phensang", "Tingbong", "Shipgyer"
            ],
            "South Sikkim": [
                "Namchi", "Jorethang", "Ravangla", "Yangang", "Temi",
                "Namthang", "Melli", "Sumbuk", "Tarku", "Sikip",
                "Bhanjyang", "Damthang", "Turuk", "Nagri"
            ],
            "West Sikkim": [
                "Gyalshing", "Pelling", "Soreng", "Dentam", "Rinchenpong",
                "Yuksom", "Tashiding", "Legship", "Darap", "Bermiok",
                "Tingbong", "Mangalbaria", "Sombaria", "Kaluk"
            ]
        }
    },
    "Sikkim": {
        districts: {
            "East Sikkim": ["Gangtok", "Pakyong", "Rangpo", "Rhenock", "Rongli"],
            "West Sikkim": ["Gyalshing", "Soreng", "Dentam", "Yuksom", "Pelling"],
            "North Sikkim": ["Mangan", "Chungthang", "Lachen", "Lachung", "Dzongu"],
            "South Sikkim": ["Namchi", "Jorethang", "Ravangla", "Yangang", "Temi"]
        }
    },
    "Tripura": {
        districts: {
            "West Tripura": ["Agartala", "Mohanpur", "Jirania", "Bishalgarh", "Kathalia"],
            "South Tripura": ["Belonia", "Santirbazar", "Sabroom", "Amarpur", "Rajnagar"],
            "North Tripura": ["Dharmanagar", "Kanchanpur", "Panisagar", "Damcherra", "Jampui Hills"],
            "Dhalai": ["Ambassa", "Kamalpur", "Longtharai Valley", "Gandacherra", "Raishyabari"],
            "Khowai": ["Khowai", "Teliamura", "Padmabil", "Kalyanpur", "Mungiakami"],
            "Gomati": ["Udaipur", "Amarpur", "Karbook", "Ompi", "Killa"],
            "Unakoti": ["Kailashahar", "Kumarghat", "Gournagar", "Pecharthal", "Fatikroy"],
            "Sepahijala": ["Bishramganj", "Sonamura", "Jampuijala", "Boxanagar", "Melaghar"]
        }
    },
    "Gujarat": {
        districts: {
            "Ahmedabad": [
                "Ahmedabad City", "Maninagar", "Satellite", "Bopal", "Thaltej",
                "Navrangpura", "Vastrapur", "Paldi", "Ellis Bridge", "Naranpura",
                "Ghatlodia", "Sabarmati", "Chandkheda", "Motera", "Naroda",
                "Odhav", "Vatva", "Isanpur", "Lambha", "Narol"
            ],
            "Surat": [
                "Surat City", "Adajan", "Athwa", "Katargam", "Varachha",
                "Udhna", "Pandesara", "Limbayat", "Sachin", "Bhestan",
                "Dindoli", "Bamroli", "Godadara", "Vesu", "Althan"
            ],
            "Vadodara": [
                "Vadodara City", "Alkapuri", "Gotri", "Fatehgunj", "Manjalpur",
                "Sayajigunj", "Karelibaug", "Akota", "Waghodia Road", "Vasna",
                "Gorwa", "Subhanpura", "Makarpura", "Tandalja", "Sama"
            ],
            "Rajkot": [
                "Rajkot City", "Mavdi", "University Road", "Kalawad Road", "Race Course",
                "Gondal Road", "Amin Marg", "Dhebar Road", "Jamnagar Road", "Kuvadva Road"
            ]
        }
    },
    "Delhi": {
        districts: {
            "Central Delhi": [
                "Connaught Place", "Karol Bagh", "Paharganj", "Daryaganj", "Chandni Chowk",
                "Civil Lines", "Sadar Bazaar", "Rajinder Nagar", "Old Delhi", "Jhandewalan",
                "Patel Nagar", "Pusa Road", "Ajmeri Gate", "Kamla Nagar", "Model Town"
            ],
            "South Delhi": [
                "Greater Kailash", "Hauz Khas", "Defence Colony", "Lajpat Nagar", "Saket",
                "Malviya Nagar", "Green Park", "Safdarjung", "Vasant Kunj", "South Extension",
                "Chanakyapuri", "Mehrauli", "Chattarpur", "Sainik Farms", "Vasant Vihar"
            ],
            "North Delhi": [
                "Ashok Vihar", "Rohini", "Pitampura", "Shalimar Bagh", "Saraswati Vihar",
                "Mukherjee Nagar", "GTB Nagar", "Shakti Nagar", "Timarpur", "Hudson Lines"
            ],
            "East Delhi": [
                "Laxmi Nagar", "Preet Vihar", "Anand Vihar", "Shahdara", "Krishna Nagar",
                "Mayur Vihar", "Patparganj", "Dilshad Garden", "Vivek Vihar", "Geeta Colony"
            ]
        }
    },
    "Telangana": {
        districts: {
            "Hyderabad": [
                "Secunderabad", "Banjara Hills", "Jubilee Hills", "Kukatpally", "Gachibowli",
                "Madhapur", "HITEC City", "Begumpet", "Ameerpet", "Dilsukhnagar",
                "LB Nagar", "Mehdipatnam", "Abids", "Koti", "Panjagutta",
                "Somajiguda", "Himayat Nagar", "Khairatabad", "Lakdikapul", "Nampally"
            ],
            "Ranga Reddy": [
                "Shamshabad", "Kondapur", "Manikonda", "Uppal", "Nagole",
                "Ghatkesar", "Medchal", "Kompally", "Alwal", "Malkajgiri"
            ],
            "Warangal": [
                "Warangal City", "Hanamkonda", "Kazipet", "Pochamma Maidan", "Balasamudram",
                "Mahbubabad", "Narsampet", "Parkal", "Jangaon", "Station Ghanpur"
            ],
            "Karimnagar": [
                "Karimnagar City", "Satavahana University", "Kothirampur", "Mankammathota",
                "Rekurthi", "Bommakal", "Alugunur", "Chegurthi", "Manakondur", "Thimmapur"
            ]
        }
    },
    "West Bengal": {
        districts: {
            "Kolkata": [
                "Park Street", "Ballygunge", "Alipore", "Bhowanipore", "Salt Lake",
                "New Town", "Jadavpur", "Tollygunge", "Gariahat", "Behala",
                "Dum Dum", "Lake Town", "Kasba", "Ultadanga", "Shyambazar",
                "Esplanade", "Howrah Bridge", "Sealdah", "Kalighat", "Rabindra Sadan"
            ],
            "North 24 Parganas": [
                "Barrackpore", "Barasat", "Dum Dum", "Bidhannagar", "New Town",
                "Rajarhat", "Madhyamgram", "Basirhat", "Bongaon", "Habra"
            ],
            "South 24 Parganas": [
                "Alipore", "Behala", "Thakurpukur", "Garia", "Sonarpur",
                "Baruipur", "Diamond Harbour", "Budge Budge", "Maheshtala", "Joka"
            ]
        }
    },
    "Andhra Pradesh": {
        districts: {
            "Visakhapatnam": [
                "Visakhapatnam City", "MVP Colony", "Seethammadhara", "Dwaraka Nagar",
                "Madhurawada", "Gajuwaka", "Gopalapatnam", "Beach Road", "Rushikonda",
                "Pendurthi", "NAD Junction", "Arilova", "PM Palem", "Murali Nagar",
                "Akkayyapalem"
            ],
            "Vijayawada": [
                "Vijayawada City", "Benz Circle", "Governorpet", "Gandhinagar",
                "Gunadala", "Patamata", "Auto Nagar", "Ajit Singh Nagar", "Payakapuram",
                "Machavaram", "Labbipet", "Moghalrajpuram", "Krishnalanka", "Bhavanipuram"
            ],
            "Guntur": [
                "Guntur City", "Lakshmipuram", "Brodipet", "Arundelpet", "Amaravati Road",
                "Chandramouli Nagar", "Brindavan Gardens", "Vidya Nagar", "Pattabhipuram",
                "Nallapadu"
            ],
            "Tirupati": [
                "Tirupati City", "Tiruchanur", "Alipiri", "Tirumala", "Korlagunta",
                "Tata Nagar", "AIR Bypass Road", "Kakkanad", "Mangalam", "Padmavathi Nagar"
            ]
        }
    },
    "Rajasthan": {
        districts: {
            "Jaipur": [
                "Jaipur City", "Malviya Nagar", "Vaishali Nagar", "Mansarovar", "C-Scheme",
                "Raja Park", "Tonk Road", "Jawahar Nagar", "Bani Park", "Civil Lines",
                "Adarsh Nagar", "Gopalnagar", "Sanganer", "Pratap Nagar", "Vidhyadhar Nagar"
            ],
            "Jodhpur": [
                "Jodhpur City", "Sardarpura", "Ratanada", "Shastri Nagar", "Paota",
                "Chopasni Housing Board", "Residency Road", "Mandore", "Pal Road", "Mahamandir"
            ],
            "Udaipur": [
                "Udaipur City", "Lake Palace", "Hiran Magri", "Fatehpura", "Ambamata",
                "Bhupalpura", "Lake City Mall", "Surajpole", "Ashok Nagar", "Sector 14"
            ]
        }
    },
    "Madhya Pradesh": {
        districts: {
            "Bhopal": [
                "Bhopal City", "MP Nagar", "Arera Colony", "Shahpura", "Kolar Road",
                "Bairagarh", "TT Nagar", "New Market", "Habibganj", "Chunabhatti",
                "Govindpura", "Karond", "Ayodhya Nagar", "Awadhpuri", "Berasia Road"
            ],
            "Indore": [
                "Indore City", "Vijay Nagar", "Palasia", "Saket", "LIG Colony",
                "New Palasia", "Sapna Sangeeta", "Rajendra Nagar", "Scheme 78", "Annapurna Road",
                "South Tukoganj", "Geeta Bhawan", "Bhawarkuan", "Malwa Mill", "Cloth Market"
            ],
            "Gwalior": [
                "Gwalior City", "City Center", "Lashkar", "Thatipur", "Morar",
                "DD Nagar", "Maharaj Bada", "Phool Bagh", "Hazira", "Transport Nagar"
            ]
        }
    },
    "Bihar": {
        districts: {
            "Patna": [
                "Patna City", "Boring Road", "Bailey Road", "Patliputra Colony", "Kankarbagh",
                "Rajendra Nagar", "Kadamkuan", "Exhibition Road", "Fraser Road", "Gandhi Maidan",
                "Kurji", "Digha", "Danapur", "Phulwari Sharif", "Mainpura"
            ],
            "Gaya": [
                "Gaya City", "AP Colony", "Civil Lines", "Gandhi Maidan", "Chandauti",
                "Manpur", "Tekari Road", "Bodh Gaya", "Delha", "Buniyadganj"
            ],
            "Muzaffarpur": [
                "Muzaffarpur City", "Brahmpura", "Mithanpura", "Juran Chapra", "Saraiya",
                "Bela Industrial Area", "Maripur", "Ramdayalu Nagar", "Kalambagh", "Gannipur"
            ]
        }
    },
    "Haryana": {
        districts: {
            "Gurugram": [
                "DLF City", "Sushant Lok", "Sector 14", "Sector 29", "Cyber City",
                "Golf Course Road", "MG Road", "Sohna Road", "Udyog Vihar", "Palam Vihar",
                "South City", "New Colony", "Sector 45", "Sector 56", "Sector 82"
            ],
            "Faridabad": [
                "NIT Faridabad", "Sector 15", "Sector 21", "Old Faridabad", "Ballabhgarh",
                "Sector 28", "Sector 37", "Greenfields Colony", "Sector 48", "Sector 62"
            ],
            "Panchkula": [
                "Sector 5", "Sector 8", "Sector 10", "Sector 15", "Sector 20",
                "MDC", "Industrial Area", "Sector 25", "Sector 2", "Sector 12"
            ]
        }
    },
    "Punjab": {
        districts: {
            "Amritsar": [
                "Amritsar City", "Lawrence Road", "Mall Road", "Ranjit Avenue", "Green Avenue",
                "Putlighar", "Batala Road", "GT Road", "Majitha Road", "Civil Lines",
                "Court Road", "Queens Road", "Crystal Chowk", "Sultanwind", "Chheharta"
            ],
            "Ludhiana": [
                "Ludhiana City", "Civil Lines", "Sarabha Nagar", "BRS Nagar", "Model Town",
                "Dugri", "Focal Point", "Industrial Area", "Chandigarh Road", "Ferozepur Road",
                "Pakhowal Road", "Haibowal", "Jamalpur", "Gill Road", "Miller Ganj"
            ],
            "Jalandhar": [
                "Jalandhar City", "Model Town", "Urban Estate", "Adarsh Nagar", "Civil Lines",
                "Guru Nanak Pura", "New Jawahar Nagar", "Master Tara Singh Nagar", "Basti Sheikh",
                "Industrial Area"
            ]
        }
    },
    "Uttarakhand": {
        districts: {
            "Dehradun": [
                "Dehradun City", "Rajpur Road", "Clement Town", "Balliwala", "GMS Road",
                "Chakrata Road", "Sahastradhara Road", "Kanwali Road", "Nehru Colony", "Race Course",
                "Dalanwala", "Karanpur", "Hathibarkala", "Jakhan", "Vasant Vihar"
            ],
            "Haridwar": [
                "Haridwar City", "Har Ki Pauri", "BHEL Township", "Jwalapur", "Kankhal",
                "Shantikunj", "Ranipur", "Shivalik Nagar", "Bahadrabad", "Pathri"
            ],
            "Nainital": [
                "Nainital City", "Mall Road", "Tallital", "Mallital", "Ayarpatta",
                "Snow View", "Raj Bhavan Area", "Sukhatal", "Naina Peak Road", "Birla Vidya Mandir"
            ]
        }
    },
    "Odisha": {
        districts: {
            "Bhubaneswar": [
                "Bhubaneswar City", "Saheed Nagar", "Nayapalli", "Jaydev Vihar", "Chandrasekharpur",
                "Patia", "Khandagiri", "Mancheswar", "Old Town", "Rental Colony",
                "VSS Nagar", "Baramunda", "Acharya Vihar", "Rasulgarh", "Bomikhal"
            ],
            "Cuttack": [
                "Cuttack City", "College Square", "Mangalabag", "Badambadi", "Chandi Chowk",
                "Jobra", "Buxi Bazaar", "Shelter Chhak", "Mission Road", "Bajrakabati"
            ],
            "Rourkela": [
                "Rourkela City", "Sector 2", "Civil Township", "Udit Nagar", "Sector 19",
                "Sector 6", "Koel Nagar", "Chhend Colony", "Industrial Estate", "Jagda"
            ]
        }
    },
    "Assam": {
        districts: {
            "Guwahati": [
                "Guwahati City", "Zoo Road", "GS Road", "Fancy Bazar", "Paltan Bazar",
                "Maligaon", "Chandmari", "Silpukhuri", "Ganeshguri", "Dispur",
                "Six Mile", "Khanapara", "Beltola", "Kahilipara", "Panbazar"
            ],
            "Dibrugarh": [
                "Dibrugarh City", "Marwari Patty", "Amolapatty", "Graham Bazar", "Chiring Chapori",
                "Khalihamari", "New Market Area", "Naliapool", "Boiragimath", "Chowkidinghee"
            ],
            "Jorhat": [
                "Jorhat City", "AT Road", "KB Road", "Garali", "Tarajan",
                "Club Road", "Raja Maidam", "Jail Road", "Malow Ali", "Borabazar"
            ]
        }
    },
    "Himachal Pradesh": {
        districts: {
            "Shimla": [
                "Shimla City", "Mall Road", "Ridge", "Lower Bazaar", "Lakkar Bazaar",
                "Summer Hill", "Sanjauli", "Chhota Shimla", "Kasumpti", "Khalini",
                "New Shimla", "Vikasnagar", "Totu", "Boileauganj", "Dhalli"
            ],
            "Manali": [
                "Manali Town", "Old Manali", "Vashisht", "Aleo", "Prini",
                "Shanag", "Burwa", "Nasogi", "Solang Valley", "Palchan",
                "Jagatsukh", "Kulang", "Goshal", "Bahang", "Dhungri"
            ],
            "Dharamshala": [
                "Dharamshala City", "McLeodganj", "Bhagsu", "Naddi", "Forsyth Ganj",
                "Kotwali Bazaar", "Civil Lines", "Dari", "Sidhbari", "Khaniyara",
                "Gamru", "Khanyara", "Trilokpur", "Bhagsunag", "Dharamkot"
            ]
        }
    },
    "Jammu and Kashmir": {
        districts: {
            "Srinagar": [
                "Srinagar City", "Lal Chowk", "Rajbagh", "Jawahar Nagar", "Karan Nagar",
                "Dalgate", "Sonawar", "Nishat", "Hazratbal", "Rainawari",
                "Khanyar", "Hari Singh High Street", "Bemina", "Batamaloo", "Nowgam"
            ],
            "Jammu": [
                "Jammu City", "Gandhi Nagar", "Trikuta Nagar", "Channi Himmat", "Sainik Colony",
                "Shastri Nagar", "Janipur", "Bakshi Nagar", "Rehari Colony", "Nanak Nagar",
                "Talab Tillo", "Bohri", "Roop Nagar", "Bantalab", "Durga Nagar"
            ],
            "Leh": [
                "Leh City", "Main Bazaar", "Changspa", "Sankar", "Skara",
                "Tukcha", "Gompa", "Chubi", "Skalzangling", "Spituk",
                "Shey", "Thiksey", "Stok", "Choglamsar", "Saboo"
            ]
        }
    },
    "Goa": {
        districts: {
            "North Goa": [
                "Panaji", "Mapusa", "Calangute", "Candolim", "Anjuna",
                "Vagator", "Morjim", "Siolim", "Aldona", "Porvorim",
                "Baga", "Arpora", "Saligao", "Parra", "Assagao"
            ],
            "South Goa": [
                "Margao", "Colva", "Vasco da Gama", "Ponda", "Benaulim",
                "Majorda", "Varca", "Cavelossim", "Mobor", "Betalbatim",
                "Fatorda", "Navelim", "Cuncolim", "Quepem", "Sanguem"
            ]
        }
    }
};

// Helper functions
function getStates() {
    return Object.keys(indiaLocationData);
}

function getDistricts(state) {
    return state && indiaLocationData[state] ? Object.keys(indiaLocationData[state].districts) : [];
}

function getAreas(state, district) {
    return state && district && indiaLocationData[state]?.districts[district] || [];
}

export { indiaLocationData, getStates, getDistricts, getAreas };
export default indiaLocationData;
