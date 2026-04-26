'use client'
import { useState } from 'react'

const LOCATIONS: Record<string, string[]> = {
  QLD: [
    'Ayr','Biloela','Bowen','Brisbane','Bundaberg','Cairns','Charleville','Charters Towers','Dalby','Emerald',
    'Gladstone','Gold Coast','Gympie','Hervey Bay','Innisfail','Kingaroy','Longreach','Mackay','Maryborough',
    'Moranbah','Mount Isa','Rockhampton','Roma','Sunshine Coast','Toowoomba','Townsville','Warwick','Yeppoon',
    'Alpha','Aurukun','Bamaga','Barcaldine','Blackall','Blackwater','Burketown','Camooweal','Cherbourg',
    'Chillagoe','Cloncurry','Collinsville','Cooktown','Doomadgee','Dysart','Hope Vale','Hughenden',
    'Julia Creek','Karumba','Kowanyama','Lockhart River','Mapoon','Middlemount','Mount Garnet','Napranum',
    'Normanton','Pormpuraaw','Richmond','Thursday Island','Tieri','Weipa','Winton','Woorabinda','Yarrabah',
  ],
  NSW: [
    'Albury','Armidale','Bathurst','Broken Hill','Central Coast','Coffs Harbour','Dubbo','Forbes','Goulburn',
    'Grafton','Griffith','Lismore','Maitland','Moree','Muswellbrook','Newcastle','Nowra','Orange','Parkes',
    'Port Macquarie','Queanbeyan','Singleton','Sydney','Tamworth','Taree','Ulladulla','Wagga Wagga','Wollongong',
    'Balranald','Boggabri','Bourke','Cobar','Condobolin','Gunnedah','Hay','Ivanhoe','Lightning Ridge','Lithgow',
    'Menindee','Mudgee','Narrabri','Narrandera','Nyngan','Walgett','Wentworth','West Wyalong','White Cliffs','Wilcannia',
  ],
  VIC: [
    'Ararat','Bairnsdale','Ballarat','Benalla','Bendigo','Castlemaine','Colac','Echuca','Geelong','Hamilton',
    'Horsham','Lakes Entrance','Melbourne','Mildura','Moe','Morwell','Portland','Sale','Shepparton','Swan Hill',
    'Traralgon','Wangaratta','Warrnambool','Wodonga','Birchip','Cann River','Charlton','Clunes','Corryong',
    'Dimboola','Donald','Dunolly','Hopetoun','Mallacoota','Maryborough','Nhill','Omeo','Ouyen','Rainbow',
    'Stawell','Walhalla','Wedderburn',
  ],
  WA: [
    'Albany','Boulder','Broome','Bunbury','Busselton','Carnarvon','Collie','Derby','Esperance','Exmouth',
    'Fremantle','Geraldton','Kalgoorlie','Karratha','Kununurra','Mandurah','Manjimup','Margaret River','Northam',
    'Perth','Port Hedland','Cue','Dampier','Fitzroy Crossing','Halls Creek','Laverton','Leinster','Leonora',
    'Marble Bar','Meekatharra','Menzies','Mount Magnet','Newman','Norseman','Nullagine','Onslow','Pannawonica',
    'Paraburdoo','Ravensthorpe','Roebourne','Sandstone','Tom Price','Wickham','Wiluna','Wyndham','Yalgoo',
  ],
  SA: [
    'Adelaide','Berri','Clare','Gawler','Kadina','Kingscote','Millicent','Mount Gambier','Murray Bridge',
    'Naracoorte','Nuriootpa','Port Augusta','Port Lincoln','Port Pirie','Renmark','Tanunda','Victor Harbor',
    'Whyalla','Andamooka','Ceduna','Coober Pedy','Glendambo','Hawker','Leigh Creek','Marla','Marree',
    'Oodnadatta','Penong','Pimba','Quorn','Roxby Downs','Streaky Bay','Tarcoola','Woomera','Yunta',
  ],
  TAS: [
    'Burnie','Deloraine','Devonport','George Town','Hobart','Huonville','Kingston','Launceston','New Norfolk',
    'Queenstown','Scottsdale','Smithton','Sorell','St Helens','Ulverstone','Wynyard','Bicheno','Bothwell',
    'Campbell Town','Corinna','Currie','Dover','Rosebery','Savage River','Strahan','Triabunna','Tullah',
    'Waratah','Whitemark','Zeehan',
  ],
  ACT: [
    'Belconnen','Canberra','Gungahlin','Tuggeranong','Weston Creek','Woden','Hall','Stromlo','Tharwa','Uriarra Village',
  ],
  NT: [
    'Alice Springs','Darwin','Katherine','Nhulunbuy','Palmerston','Tennant Creek','Yulara','Adelaide River',
    'Alyangula','Angurugu','Batchelor','Borroloola','Daguragu','Docker River','Elliott','Galiwinku','Gunbalanya',
    'Hermannsburg','Jabiru','Kalkarindji','Larrimah','Maningrida','Mataranka','Milingimbi','Ngukurr',
    'Numbulwar','Papunya','Pine Creek','Ramingining','Ti Tree','Wadeye','Yirrkala','Yuendumu',
  ],
}

const STATE_LABELS: Record<string, string> = {
  QLD: 'Queensland',
  NSW: 'New South Wales',
  VIC: 'Victoria',
  WA: 'Western Australia',
  SA: 'South Australia',
  TAS: 'Tasmania',
  ACT: 'Australian Capital Territory',
  NT: 'Northern Territory',
}

const inputCls = 'w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#3e91ce] transition-colors bg-white'
const labelCls = 'block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5'

export default function LocationSelector() {
  const [state, setState] = useState('')
  const [suburb, setSuburb] = useState('')
  const [isOther, setIsOther] = useState(false)
  const [otherText, setOtherText] = useState('')

  const suburbs = state && LOCATIONS[state] ? LOCATIONS[state] : []

  function handleStateChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setState(e.target.value)
    setSuburb('')
    setIsOther(false)
    setOtherText('')
  }

  function handleSuburbChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const val = e.target.value
    if (val === '__other__') {
      setIsOther(true)
      setSuburb('__other__')
    } else {
      setIsOther(false)
      setSuburb(val)
    }
  }

  const finalLocation = isOther ? otherText : suburb

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {/* State selector */}
      <div>
        <label className={labelCls} htmlFor="loc-state">State / Territory</label>
        <select
          id="loc-state"
          value={state}
          onChange={handleStateChange}
          className={inputCls}
        >
          <option value="">Select state / territory...</option>
          {Object.keys(STATE_LABELS).map((s) => (
            <option key={s} value={s}>{STATE_LABELS[s]} ({s})</option>
          ))}
        </select>
        {/* Hidden input for form submission */}
        <input type="hidden" name="state" value={state} />
      </div>

      {/* Suburb / City selector */}
      <div>
        <label className={labelCls} htmlFor="loc-suburb">City / Town / Suburb</label>
        {state ? (
          <>
            <select
              id="loc-suburb"
              value={suburb}
              onChange={handleSuburbChange}
              className={inputCls}
            >
              <option value="">Select location...</option>
              {suburbs.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
              <option value="__other__">Other — specify below</option>
            </select>
            {isOther && (
              <input
                type="text"
                value={otherText}
                onChange={(e) => setOtherText(e.target.value)}
                placeholder="Enter your location..."
                className={`${inputCls} mt-2`}
              />
            )}
          </>
        ) : (
          <select disabled className={`${inputCls} opacity-50 cursor-not-allowed`}>
            <option>Select state first...</option>
          </select>
        )}
        {/* Hidden input for form submission */}
        <input type="hidden" name="location" value={finalLocation} />
      </div>
    </div>
  )
}
