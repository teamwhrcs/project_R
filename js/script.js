const data = {
  India: {
    AndhraPradesh: {
      Anantapur: {
        Block1: ["Gram1", "Gram2"]
      }
    },
    ArunachalPradesh: {},
    Assam: {},
    Bihar: {},
    Chhattisgarh: {},
    Goa: {},
    Gujarat: {},
    Haryana: {},
    HimachalPradesh: {},
    Jharkhand: {},
    Karnataka: {
      Bagalkot: {
        Bagalkot: ["Dodda Hulur", "Mugabala Panchayat", "Gram3"],
        Badami: ["Gram4", "Gram5"],
        Bilagi: ["Gram6", "Gram7"],
        Hunagund: ["Gram8", "Gram9"],
        Jamakhandi: ["Gram10", "Gram11"],
        Mudhol: ["Gram12", "Gram13"]
      },
      Ballari: {
        Ballari: ["Gram14", "Gram15"],
        Hospet: ["Gram16", "Gram17"],
        Hagaribommanahalli: ["Gram18", "Gram19"],
        Bellary: ["Gram20", "Gram21"]
      },
      Belagavi: {
        Belagavi: ["Gram22", "Gram23"],
        Bailhongal: ["Gram24", "Gram25"],
        Chikkodi: ["Gram26", "Gram27"],
        Gokak: ["Gram28", "Gram29"],
        Khanapur: ["Gram30", "Gram31"],
        Nippani: ["Gram32", "Gram33"],
        Raibag: ["Gram34", "Gram35"],
        Ramdurg: ["Gram36", "Gram37"],
        Saundatti: ["Gram38", "Gram39"]
      },
      BengaluruRural: {
        Devanahalli: ["Gram40", "Gram41"],
        Dodballapur: ["Gram42", "Gram43"],
        Hoskote: ["Gram44", "Gram45"],
        Nelamangala: ["Gram46", "Gram47"]
      },
      BengaluruUrban: {
        BangaloreNorth: ["Dodda Hulur", "Mugabala Panchayat"],
        BangaloreSouth: ["Gram48", "Gram49"],
        Anekal: ["Gram50", "Gram51"]
      },
      Bidar: {
        Bidar: ["Gram52", "Gram53"],
        Bhalki: ["Gram54", "Gram55"],
        Humnabad: ["Gram56", "Gram57"],
        Aurad: ["Gram58", "Gram59"]
      },
      Chamarajanagar: {
        Chamarajanagar: ["Gram60", "Gram61"],
        Yelandur: ["Gram62", "Gram63"],
        Kollegal: ["Gram64", "Gram65"]
      },
      Chikballapur: {
        Chikballapur: ["Gram66", "Gram67"],
        Bagepalli: ["Gram68", "Gram69"],
        Chintamani: ["Gram70", "Gram71"],
        Gauribidanur: ["Gram72", "Gram73"]
      },
      Chikkamagaluru: {
        Chikkamagaluru: ["Gram74", "Gram75"],
        Kadur: ["Gram76", "Gram77"],
        Tarikere: ["Gram78", "Gram79"],
        Aldur: ["Gram80", "Gram81"]
      },
      Chitradurga: {
        Chitradurga: ["Gram82", "Gram83"],
        Hiriyur: ["Gram84", "Gram85"],
        Holalkere: ["Gram86", "Gram87"],
        Molakalmuru: ["Gram88", "Gram89"]
      },
      DakshinaKannada: {
        Bantwal: ["Gram90", "Gram91"],
        Belthangady: ["Gram92", "Gram93"],
        Mangaluru: ["Gram94", "Gram95"],
        Moodbidri: ["Gram96", "Gram97"],
        Puttur: ["Gram98", "Gram99"],
        Sullia: ["Gram100", "Gram101"],
        Ullal: ["Gram102", "Gram103"]
      },
      Davanagere: {
        Davanagere: ["Gram104", "Gram105"],
        Harihar: ["Gram106", "Gram107"],
        Jagalur: ["Gram108", "Gram109"],
        Channagiri: ["Gram110", "Gram111"]
      },
      Dharwad: {
        Dharwad: ["Gram112", "Gram113"],
        Hubballi: ["Gram114", "Gram115"],
        Kalghatgi: ["Gram116", "Gram117"],
        Navalgund: ["Gram118", "Gram119"]
      },
      Gadag: {
        Gadag: ["Gram120", "Gram121"],
        Ron: ["Gram122", "Gram123"],
        Laxmeshwar: ["Gram124", "Gram125"],
        Shahapur: ["Gram126", "Gram127"]
      },
      Hassan: {
        Hassan: ["Gram128", "Gram129"],
        Alur: ["Gram130", "Gram131"],
        Arasikere: ["Gram132", "Gram133"],
        Channarayapatna: ["Gram134", "Gram135"]
      },
      Haveri: {
        Haveri: ["Gram136", "Gram137"],
        Ranebennur: ["Gram138", "Gram139"],
        Shiggaon: ["Gram140", "Gram141"],
        Byadgi: ["Gram142", "Gram143"]
      },
      Kalaburagi: {
        Kalaburagi: ["Gram144", "Gram145"],
        Afzalpur: ["Gram146", "Gram147"],
        Chincholi: ["Gram148", "Gram149"],
        Gulbarga: ["Gram150", "Gram151"]
      },
      Kodagu: {
        Kodagu: ["Gram152", "Gram153"],
        Madikeri: ["Gram154", "Gram155"],
        Virajpet: ["Gram156", "Gram157"]
      },
      Kolar: {
        Kolar: ["Gram158", "Gram159"],
        Bangarapet: ["Gram160", "Gram161"],
        Malur: ["Gram162", "Gram163"],
        Srinivaspur: ["Gram164", "Gram165"]
      },
      Koppal: {
        Koppal: ["Gram166", "Gram167"],
        Gangavati: ["Gram168", "Gram169"],
        Yelburga: ["Gram170", "Gram171"]
      },
      Mandya: {
        Mandya: ["Gram172", "Gram173"],
        KrishnaRajaPet: ["Gram174", "Gram175"],
        Malavalli: ["Gram176", "Gram177"],
        Nagamangala: ["Gram178", "Gram179"]
      },
      Mysuru: {
        Hunsur: ["Gram180", "Gram181"],
        KRNagar: ["Gram182", "Gram183"],
        Mysore: ["Gram184", "Gram185"],
        Nanjangud: ["Gram186", "Gram187"],
        Piriyapatna: ["Gram188", "Gram189"],
        TNarasipura: ["Gram190", "Gram191"]
      },
      Raichur: {
        Raichur: ["Gram192", "Gram193"],
        Sindhanur: ["Gram194", "Gram195"],
        Marthalli: ["Gram196", "Gram197"]
      },
      Ramanagara: {
        Ramanagara: ["Gram198", "Gram199"],
        Channapatna: ["Gram200", "Gram201"],
        Magadi: ["Gram202", "Gram203"]
      },
      Shivamogga: {
        Bhadravathi: ["Gram204", "Gram205"],
        Hosanagar: ["Gram206", "Gram207"],
        Sagar: ["Gram208", "Gram209"],
        Shivamogga: ["Gram210", "Gram211"],
        Soraba: ["Gram212", "Gram213"],
        Thirthahalli: ["Gram214", "Gram215"]
      },
      Tumakuru: {
        Tumakuru: ["Gram216", "Gram217"],
        Tiptur: ["Gram218", "Gram219"],
        Chikkanayakanahalli: ["Gram220", "Gram221"],
        Pavagada: ["Gram222", "Gram223"]
      },
      Udupi: {
        Brahmavar: ["Gram224", "Gram225"],
        Byndoor: ["Gram226", "Gram227"],
        Hebri: ["Gram228", "Gram229"],
        Kaup: ["Gram230", "Gram231"],
        Karkala: ["Gram232", "Gram233"]
      },
      UttaraKannada: {
        Karwar: ["Gram234", "Gram235"],
        Sirsi: ["Gram236", "Gram237"],
        Dandeli: ["Gram238", "Gram239"],
        Kumta: ["Gram240", "Gram241"]
      },
      Yadgir: {
        Yadgir: ["Gram242", "Gram243"],
        Shahpur: ["Gram244", "Gram245"],
        Gokak: ["Gram246", "Gram247"]
      }
    },
      
    Kerala: {},
    MadhyaPradesh: {},
    Maharashtra: {},
    Manipur: {},
    Meghalaya: {},
    Mizoram: {},
    Nagaland: {},
    Odisha: {},
    Punjab: {},
    Rajasthan: {},
    Sikkim: {},
    TamilNadu: {},
    Telangana: {},
    Tripura: {},
    UttarPradesh: {},
    Uttarakhand: {},
    WestBengal: {},
    // Union Territories
    AndamanAndNicobarIslands: {},
    Chandigarh: {},
    DadraAndNagarHaveliAndDamanAndDiu: {},
    Delhi: {},
    JammuAndKashmir: {},
    Ladakh: {},
    Lakshadweep: {},
    Puducherry: {}
  }
};

const countryDropdown = document.getElementById("countryDropdown");
const stateDropdown = document.getElementById("stateDropdown");
const districtDropdown = document.getElementById("districtDropdown");
const intermediateDropdown = document.getElementById("intermediateDropdown");
const gramDropdown = document.getElementById("gramDropdown");
const contactInfo = document.getElementById("contactInfo");

// Populate countries
for (let country in data) {
  const option = document.createElement("option");
  option.value = country;
  option.textContent = country;
  countryDropdown.appendChild(option);
}

// Event Listeners
countryDropdown.addEventListener("change", () => {
  populateDropdown(stateDropdown, data[countryDropdown.value]);
  clearDropdowns([districtDropdown, intermediateDropdown, gramDropdown]);
  contactInfo.innerHTML = "<h3>Point of Contact</h3><p>Select a Gram Panchayat to see contact information.</p>";
});

stateDropdown.addEventListener("change", () => {
  populateDropdown(districtDropdown, data[countryDropdown.value][stateDropdown.value]);
  clearDropdowns([intermediateDropdown, gramDropdown]);
});

districtDropdown.addEventListener("change", () => {
  populateDropdown(intermediateDropdown, data[countryDropdown.value][stateDropdown.value][districtDropdown.value]);
  clearDropdowns([gramDropdown]);
});

intermediateDropdown.addEventListener("change", () => {
  populateDropdown(gramDropdown, data[countryDropdown.value][stateDropdown.value][districtDropdown.value][intermediateDropdown.value]);
});

gramDropdown.addEventListener("change", () => {
  contactInfo.innerHTML = `<h3>Point of Contact</h3><p>Contact details for ${gramDropdown.value}.</p>`;
});

// Helper Functions
function populateDropdown(dropdown, items) {
  dropdown.innerHTML = '<option value="">Select</option>';
  if (Array.isArray(items)) {
    // Handle array items (e.g., Gram Panchayat)
    items.forEach(item => {
      const option = document.createElement("option");
      option.value = item;
      option.textContent = item;
      dropdown.appendChild(option);
    });
  } else {
    // Handle object keys (e.g., State, District, Intermediate Panchayat)
    for (let key in items) {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = key;
      dropdown.appendChild(option);
    }
  }
}

function clearDropdowns(dropdowns) {
  dropdowns.forEach(dropdown => {
    dropdown.innerHTML = '<option value="">Select</option>';
  });
}
