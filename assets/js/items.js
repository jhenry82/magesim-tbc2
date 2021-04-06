var ids = {
    TIRISFAL_SET: 649,
    TEMPEST_SET: 671,
    SPELLFIRE_SET: 552,
    SPELLSTRIKE_SET: 559,
    SERPENT_COIL: 30720,
    SILVER_CRESCENT: 29370,
    EYE_OF_MAGTHERIDON: 28789,
    RESTRAINED_ESSENCE: 23046,
    QUAGMIRRANS_EYE: 27683,
    UNSTABLE_CURRENTS: 30626,
    LIGHTNING_CAPACITOR: 28785,
    CHAOTIC_SKYFIRE: 34220,
    EMBER_SKYFIRE: 35503,
    INSIGHTFUL_EARTHSTORM: 25901,
    MQG: 19339,
    BLUE_DRAGON: 19288,
    RUNED_LIVING_RUBY: 24030,
    BRILLIANT_DAWNSTONE: 24047,
    MARK_OF_DEFIANCE: 27924,
    SCRYERS_BLOODGEM: 29132,
    CRYSTAL_TALISMAN: 25620,
    PENDANT_VIOLET_EYE: 28727,
    VENGEANCE_ILLIDARI: 28040,
    ETERNAL_SAGE: 29305,
    WRATH_OF_CENARIUS: 21190,
    SKULL_GULDAN: 32483,
    SHRUNKEN_HEAD: 33829,
    SORCERERS_ALCHEMIST_STONE: 35749,
    ALCHEMIST_STONE: 13503,
    NAARU_SLIVER: 34429,
    STAT_WEIGHT_BASE: 99990,
    DARKMOON_CRUSADE: 31856,
    UDC_SET: 536,
};

var equip = {
    weapon: [
        { id: 22589, title: "Atiesh, Greatstaff of the Guardian", twohand: true, int: 32, spi: 24, sp: 150, crit: 28, hit: 16, q: "legendary" },
        { id: 22807, title: "Wraith Blade", int: 8, sp: 95, hit: 8, crit: 14 },
        { id: 22803, title: "Midnight Haze", int: 12, sp: 85 },
        { id: 22800, title: "Brimstone Staff", int: 30, sp: 113, crit: 14, hit: 16, twohand: true },
        { id: 22799, title: "Soulseeker", int: 31, sp: 126, crit: 28, twohand: true },
        { id: 21622, title: "Sharpened Silithid Femur", int: 7, sp: 72, crit: 14 },
        { id: 19356, title: "Staff of the Shadow Flame", int: 29, sp: 84, crit: 28, twohand: true },
        { id: 21273, title: "Blessed Qiraji Acolyte Staff", int: 33, sp: 76, crit: 14, hit: 16, twohand: true },
        { id: 19347, title: "Claw of Chromaggus", int: 17, sp: 64, mp5: 4 },
        { id: 17103, title: "Azuresong Mageblade", int: 12, sp: 40, crit: 14 },
        { id: 21413, title: "Blade of Vaulted Secrets", int: 16, sp: 40, hit: 8 },
        { id: 21452, title: "Staff of the Ruins", int: 23, sp: 60, crit: 14, hit: 8, twohand: true },
    ],
    off_hand: [
        { id: 19311, title: "Tome of Fiery Arcana", sp_fire: 40 },
        { id: 23049, title: "Sapphiron's Left Eye", int: 8, sp: 26, crit: 14, hit: 8 },
        { id: 21597, title: "Royal Scepter of Vek'lor", int: 9, sp: 20, crit: 14, hit: 8 },
        { id: 22937, title: "Gem of Nerubis", int: 10, sp: 25 },
        { id: 22994, title: "Digested Hand of Power", int: 14, mp5: 10 },
        { id: 19891, title: "Jin'do's Bag of Whammies", int: 11, sp: 18, hit: 8 },
        { id: 21471, title: "Talon of Furious Concentration", int: 8, sp: 21, crit: 14 },
        { id: 19366, title: "Master Dragonslayer's Orb", int: 14, sp: 28 },
    ],
    ranged: [
        { id: 22821, title: "Doomfinger", sp: 16, crit: 14 },
        { id: 22820, title: "Wand of Fates", int: 7, sp: 12, hit: 8 },
        { id: 21603, title: "Wand of Qiraji Nobility", sp: 19 },
        { id: 19861, title: "Touch of Chaos", sp: 18 },
        { id: 11748, title: "Pyric Caduceus", sp_fire: 13, q: "rare" },
        { id: 13938, title: "Bonecreeper Stylus", sp: 11, int: 4, q: "rare" },
        
    ],
    head: [
        { id: 22498, title: "Frostfire Circlet", int: 23, sp: 35, crit: 28, hit: 8 },
        { id: 21347, title: "Enigma Circlet", int: 24, sp: 33, crit: 14, hit: 8 },
        { id: 19375, title: "Mish'undare, Circlet of the Mind Flayer", int: 24, sp: 35, crit: 28 },
        { id: 23035, title: "Preceptor's Hat", int: 24, sp: 51 },
    ],
    neck: [
        { id: 21608, title: "Amulet of Vek'nilash", int: 5, sp: 27, crit: 14 },
        { id: 23057, title: "Gem of Trapped Innocents", int: 7, sp: 15, crit: 28 },
        { id: 18814, title: "Choker of the Fire Lord", int: 7, sp: 34 },
    ],
    shoulder: [
        { id: 22983, title: "Rime Covered Mantle", int: 12, sp: 39, crit: 14 },
        { id: 22499, title: "Frostfire Shoulderpads", int: 18, spi: 9, sp: 36 },
        { id: 21345, title: "Enigma Shoulderpads", int: 12, mp5: 4, sp: 30 },
        { id: 21686, title: "Mantle of Phrenic Power", int: 20, sp_fire: 33 },
        { id: 19370, title: "Mantle of the Blackwing Cabal", int: 16, sp: 34 },
    ],
    back: [
        { id: 23050, title: "Cloak of the Necropolis", int: 11, sp: 26, crit: 14, hit: 8 },
        { id: 22731, title: "Cloak of the Devoured", int: 10, sp: 30, hit: 8 },
        { id: 19857, title: "Cloak of Consumption", int: 10, sp: 23, hit: 8 },
        { id: 19378, title: "Cloak of Brood Lord", int: 14, sp: 28 },
    ],
    chest: [
        { id: 23085, itemset: ids.UDC_SET, title: "Robe of Undead Cleansing", int: 13, sp: 48, q: "rare" },
        { id: 22496, title: "Frostfire Robe", int: 27, sp: 47, crit: 14, hit: 8 },
        { id: 21343, title: "Enigma Robes", int: 23, sp: 39, crit: 14 },
        { id: 23220, title: "Crystal Webbed Robe", int: 19, sp: 53 },
    ],
    wrist: [
        { id: 23091, itemset: ids.UDC_SET, title: "Bracers of Undead Cleansing", int: 7, sp: 26, q: "rare" },
        { id: 22503, title: "Frostfire Bindings", int: 15, sp: 27 },
        { id: 23021, title: "The Soul Harvester's Bindings", int: 11, sp: 21, crit: 14 },
        { id: 21186, title: "Rockfury Bracers", sp: 27, hit: 8 },
        { id: 21611, title: "Burrower Bracers", int: 13, sp: 28 },
        { id: 19374, title: "Bracers of Arcane Accuracy", int: 12, sp: 21, hit: 8 },
    ],
    hands: [
        { id: 23084, itemset: ids.UDC_SET, title: "Gloves of Undead Cleansing", int: 10, sp: 35, q: "rare" },
        { id: 22501, title: "Frostfire Gloves", int: 19, spi: 10, sp: 36 },
        { id: 21585, title: "Dark Storm Gauntlets", int: 15, sp: 37, hit: 8 },
        { id: 19929, title: "Bloodtinged Gloves", int: 10, spi: 10, sp: 19, hit: 8, q: "rare" },
        { id: 16913, title: "Netherwind Gloves", int: 16, spi: 6, sp: 20, crit: 14 },
    ],
    waist: [
        { id: 22730, title: "Eyestalk Waist Cord", int: 9, sp: 41, crit: 14 },
        { id: 22502, title: "Frostfire Belt", int: 21, spi: 10, sp: 28, hit: 8 },
        { id: 19136, title: "Mana Igniting Cord", int: 16, sp: 25, crit: 14 },
        { id: 19400, title: "Firemaw's Clutch", int: 12, sp: 35, mp5: 5 },
    ],
    legs: [
        { id: 22497, title: "Frostfire Leggings", int: 26, spi: 10, sp: 46, hit: 8 },
        { id: 23070, title: "Leggings of Polarity", int: 14, sp: 44, crit: 28 },
        { id: 21676, title: "Leggings of the Festering Swarm", int: 23, sp_fire: 57 },
        { id: 21461, title: "Leggings of the Black Blizzard", int: 16, spi: 8, sp: 41, crit: 14 },
        { id: 21346, title: "Enigma Leggings", int: 26, spi: 8, sp: 34, crit: 14, mp5: 5 },
    ],
    feet: [
        { id: 22500, title: "Frostfire Sandals", int: 18, spi: 10, sp: 28, crit: 14 },
        { id: 21344, title: "Enigma Boots", int: 15, spi: 6, sp: 28, hit: 8, mp5: 4 },
    ],
    finger: [
        { id: 23031, title: "Band of the Inevitable", sp: 36, hit: 8 },
        { id: 23025, title: "Seal of the Damned", sp: 21, crit: 14, hit: 8 },
        { id: ids.WRATH_OF_CENARIUS, title: "Wrath of Cenarius", },
        { id: 21709, title: "Ring of the Fallen God", int: 6, sp: 37, hit: 8 },
        { id: 23062, title: "Frostfire Ring", int: 10, sp: 30, crit: 14 },        
        { id: 23237, title: "Ring of the Eternal Flame", int: 10, sp_fire: 34, crit: 14 },
        { id: 21836, title: "Ritssyn's Ring of Chaos", sp: 25, crit: 14 },
        { id: 21210, title: "Signet Ring of the Bronze Dragonflight", int: 9, sp: 28, mp5: 5 },
        { id: 19403, title: "Band of Forced Cocentration", int: 12, sp: 21, hit: 8 },
        { id: 19147, title: "Ring of Spell Power", sp: 33 },
    ],
    trinket: [
        { id: 19379, title: "Neltharion's Tear", sp: 44, hit: 16 },
        { id: 23207, title: "Mark of the Champion", sp: 85 },
        { id: ids.RESTRAINED_ESSENCE, title: "The Restrained Essence of Sapphiron", sp: 40, use: true },
        { id: ids.MQG, title: "Mind Quickening Gem", use: true },
        { id: 19812, title: "Rune of the Dawn", sp: 48, q: "rare" },
        { id: 12930, title: "Briarwood Reed", sp: 29, q: "rare" },
    ],
    stat_weight: [
        { id: ids.STAT_WEIGHT_BASE, title: "Base"},
        { id: 99991, title: "+10 Intellect", int: 10},
        { id: 99992, title: "+10 Spell power", sp: 10},
        { id: 99993, title: "+10 Crit rating", crit: 10},
        { id: 99994, title: "+10 Hit rating", hit: 10},
        { id: 99995, title: "+10 Haste rating", haste: 10},
        { id: 99996, title: "+10 Spirit", spi: 10},
        { id: 99997, title: "+10 Mp5", mp5: 10},
        { id: 99998, title: "+10 Arcane spell power", sp_arcane: 10},
        { id: 99999, title: "+10 Fire spell power", sp_fire: 10},
        { id: 99900, title: "+10 Frost spell power", sp_frost: 10},
    ],
};

var gems = [
    { id: ids.CHAOTIC_SKYFIRE, title: "Chaotic Skyfire Diamond", color: "m", crit: 12, desc: "+3% crit dmg", phase: 4 },
    { id: ids.EMBER_SKYFIRE, title: "Ember Skyfire Diamond", color: "m", sp: 14, desc: "+2% int" },
    { id: ids.INSIGHTFUL_EARTHSTORM, title: "Insightful Earthstorm Diamond", color: "m", int: 12, desc: "Chance to restore mana" },
    { id: 25890, title: "Destructive Skyfire Diamond", color: "m", sp: 14, desc: "1% Spell reflect" },
    { id: 32641, title: "Imbued Unstable Diamond", color: "m", sp: 14, desc: "5% stun resist" },
    { id: 28557, title: "Swift Skyfire Diamond", color: "m", sp: 12, desc: "Minor run speed" },
    { id: 33133, title: "Don Julio's Heart", color: "r", sp: 14, unique: true, phase: 3 },
    { id: 28118, title: "Runed Ornate Ruby", color: "r", sp: 12, unique: true },
    { id: 32196, title: "Runed Crimson Spinel", color: "r", sp: 12, phase: 3 },
    { id: ids.RUNED_LIVING_RUBY, title: "Runed Living Ruby", color: "r", sp: 9 },
    { id: 35760, title: "Reckless Pyrestone", color: "o", sp: 6, haste: 5, phase: 5 },
    { id: 32221, title: "Veiled Pyrestone", color: "o", sp: 6, hit: 5, phase: 3 },
    { id: 32218, title: "Potent Pyrestone", color: "o", sp: 6, crit: 5, phase: 3 },
    { id: 30551, title: "Infused Fire Opal", color: "o", int: 4, sp: 6 },
    { id: 30564, title: "Shining Fire Opal", color: "o", sp: 6, hit: 5 },
    { id: 30588, title: "Potent Fire Opal", color: "o", sp: 6, crit: 4 },
    { id: 28123, title: "Potent Ornate Topaz", color: "o", sp: 6, crit: 5, unique: true },
    { id: 31867, title: "Veiled Noble Topaz", color: "o", sp: 5, hit: 4 },
    { id: 24059, title: "Potent Noble Topaz", color: "o", sp: 5, crit: 4 },
    { id: 32638, title: "Unstable Topaz", color: "o", sp: 5, int: 4, unique: true },
    { id: 33140, title: "Blood of Amber", color: "y", crit: 12, unique: true, phase: 3 },
    { id: 35761, title: "Quick Lionseye", color: "y", haste: 10, phase: 5 },
    { id: 32210, title: "Great Lionseye", color: "y", hit: 10, phase: 3 },
    { id: 32207, title: "Gleaming Lionseye", color: "y", crit: 10, phase: 3 },
    { id: 28120, title: "Gleaming Ornate Dawnstone", color: "y", crit: 10, unique: true },
    { id: 31861, title: "Great Dawnstone", color: "y", hit: 8 },
    { id: 24050, title: "Gleaming Dawnstone", color: "y", crit: 8 },
    { id: ids.BRILLIANT_DAWNSTONE, title: "Brilliant Dawnstone", color: "y", int: 8 },
    { id: 30600, title: "Fluorescent Tanzanite", color: "p", spi: 4, sp: 6 },
    { id: 30555, title: "Glowing Tanzanite", color: "p", sp: 6 },
    { id: 24056, title: "Glowing Nightseye", color: "p", sp: 5 },
    { id: 30586, title: "Seer's Chrysoprase", color: "g", int: 4, spi: 5 },
    { id: 30606, title: "Lambent Chrysoprase", color: "g", hit: 5, mp5: 2 },
    { id: 30560, title: "Rune Covered Chrysoprase", color: "g", crit: 5, mp5: 2 },
    { id: 30589, title: "Dazzling Chrysoprase", color: "g", int: 5, mp5: 2 },
    { id: 24065, title: "Dazzling Talasite", color: "g", int: 4, mp5: 2 },
    { id: 24035, title: "Sparkling Star of Elune", color: "b", spi: 8 },
    { id: 24037, title: "Lustrous Star of Elune", color: "b", mp5: 3 },
];

var enchants = {
    weapon: [
        { id: 22749, title: "Spell Power", sp: 30 },
    ],
    head: [
        { id: 24164, title: "Presence of Sight", sp: 18, hit: 8, q: "rare" },
    ],
    shoulder: [
        { id: 29467, title: "Power of the Scourge", sp: 15, crit: 14, q: "epic" },
        { id: 24421, title: "Zandalar Signet of Mojo", sp: 18, q: "rare" },
    ],
    chest: [
        { id: 20025, title: "Greater Stats", int: 4, spi: 4 },
        { id: 13941, title: "Stats", int: 3, spi: 3 },
    ],
    wrist: [
        { id: 20008, title: "Greater Intellect", int: 7 },
    ],
    hands: [
        { id: 25078, title: "Fire Power", sp: 20 },
    ],
    legs: [
        { id: 24164, title: "Presence of Sight", sp: 18, hit: 8, q: "rare" },
    ],
    feet: [

    ],
    finger: [
        
    ],
};

var itemsets = [
    { id: 667, title: "The Twin Stars", set2: { sp: 15 } }
];

var quicksets = {
    udcbis: {
        title: "UDC BIS + Atiesh",
        equip: {
            weapon: 22589,
            off_hand: null,
            ranged: 22820,
            head: 22498,
            neck: 23057,
            shoulder: 22983,
            back: 23050,
            chest: 23085,
            wrist: 23091,
            hands: 23084,
            waist: 22730,
            legs: 22497,
            feet: 21344,
            finger1: 21709,
            finger2: 23031,
            trinket1: 23207,
            trinket2: 19379,
        },
        enchants: {
            weapon: 22749,
            head: 24164,
            shoulder: 29467,
            chest: 20025,
            wrist: 20008,
            hands: 25078,
            legs: 24164,
        },
        gems: {

        }
    },
    udcbiswb: {
        title: "UDC BIS + Wraith Blade",
        equip: {
            weapon: 22807,
            off_hand: 23049,
            ranged: 22820,
            head: 22498,
            neck: 23057,
            shoulder: 22983,
            back: 23050,
            chest: 23085,
            wrist: 23091,
            hands: 23084,
            waist: 22730,
            legs: 22497,
            feet: 21344,
            finger1: 21709,
            finger2: 23031,
            trinket1: 23207,
            trinket2: 19379,
        },
        enchants: {
            weapon: 22749,
            head: 24164,
            shoulder: 29467,
            chest: 20025,
            wrist: 20008,
            hands: 25078,
            legs: 24164,
        },
        gems: {

        }
    },
    t3bis: {
        title: "T3 BIS + Atiesh",
        equip: {
            weapon: 22589,
            off_hand: null,
            ranged: 22820,
            head: 22498,
            neck: 23057,
            shoulder: 22983,
            back: 23050,
            chest: 22496,
            wrist: 21186,
            hands: 21585,
            waist: 22730,
            legs: 23070,
            feet: 21344,
            finger1: 21709,
            finger2: 23031,
            trinket1: 23207,
            trinket2: ids.MQG,
        },
        enchants: {
            weapon: 22749,
            head: 24164,
            shoulder: 29467,
            chest: 20025,
            wrist: 20008,
            hands: 25078,
            legs: 24164,
        },
        gems: {

        }
    },
    t3biswb: {
        title: "T3 BIS + Wraith Blade",
        equip: {
            weapon: 22807,
            off_hand: 23049,
            ranged: 22820,
            head: 22498,
            neck: 23057,
            shoulder: 22983,
            back: 23050,
            chest: 22496,
            wrist: 21186,
            hands: 21585,
            waist: 22730,
            legs: 23070,
            feet: 21344,
            finger1: 21709,
            finger2: 23031,
            trinket1: 23207,
            trinket2: ids.MQG,
        },
        enchants: {
            weapon: 22749,
            head: 24164,
            shoulder: 29467,
            chest: 20025,
            wrist: 20008,
            hands: 25078,
            legs: 24164,
        },
        gems: {

        }
    }
};

export default { ids, equip, gems, enchants, itemsets, quicksets };
