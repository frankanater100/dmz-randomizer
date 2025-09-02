export const CATEGORIES = ["AR","SMG","Battle Rifle" ,"LMG","Melee","Shotgun","MarksmanRifle","SniperRifle","Pistol","Launchers"];
export const WEAPONS = [
  {
    name: "Chimera",
    category: "AR",
    image: "/images/weapons/Chimera_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["Bore-490", "Cronen Dark KX30", "Echoline GS-X", "Eight-Point Flash Hider", "FR Titan Silencer", "GL Clear Breach", "Husher-65 Silencer", "Kastovia DX90", "Lockshot KT85", "Polarfire-S", "SA Leveler 55", "Sakin Tread-40", "TA HUL-Breach KL", "Tempus GH50", "TY-LR8", "TZL-90 v3", "ZLR Talon 5", "Zulu-60"],
      Barrel: ["10\" SA Phoenix", "5.5\" EXF Op-40", "6.5\" EXF Vorpal"],
      Optic: ["3x RFL-Optic", "Aim Op-v4", "Angel-40 4.8x", "Ares Clear Shot", "BPZ40 Hybrid", "Corio Enforcer Optic", "Corio Reflex", "Corvus Downrange-00", "Corvus Sol-76", "Cronen Mini Dot", "Cronen Mini Pro", "Cronen Zero-P Optic", "DF105 Reflex Sight", "DR582 Hybrid Sight", "DrexSom Prime-90", "DS Farsight 11", "Forge Tac Delta 4", "FTac Charlie7", "HMW-20 Optic", "Hybrid FirePoint", "Kazan-Holo", "Luca Bandera Scope", "Monocle CT90", "Schlager 3.4x", "Schlager Night View", "Slimline Pro", "SZ Aggressor-IR Optic", "SZ Battle Optic", "SZ Bullseye Optic", "SZ HoloTherm", "SZ Lonewolf Optic", "SZ Mini", "SZ MiniTac-40", "SZ Oscar-9", "SZ Recharge-DX", "SZ Sigma-IV Optic", "SZ SRO-7", "SZ Vortex-90", "Teplo Clear Shot", "Teplo-OP3 Scope", "Thermo-Optic X9", "Vigilant-30 C-Iron", "VLK 4.0 Optic", "VX350 Thermal Optic", "XRK On-Point Optic", "XTen Angel-40"],
      UnderBarrel: ["Agent Grip", "Bruen Sync Shot Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Commando Foregrip", "Cronen Grooveshot Grip", "Demo Cleanshot 40", "Demo Firm Grip", "Demo Imp-44 Grip", "Edge-47 Grip", "EXF Backdraft Grip", "FR Avancer Bipod", "FSS Sharkfin 90", "FTAC Ripper 56", "FTAC Tiger Grip", "HEX-40 Grip", "Lockgrip Precision-40", "Merc Foregrip", "Op-X9 Foregrip", "Operator Foregrip", "Phase-3 Grip", "Schlager Tango", "TL40 Fire Drake", "TV Wrecker Grip", "VX Pineapple", "XTen Drop Grip", "XTen Gravedigger", "XTen Nexus Grip"],
      Magazine: ["20 Round Mag", "50 Round Drum"],
      Reargrip: ["Bruen GR-500", "D37 Grip", "Bruen Flash Grip"],
      Stock: ["TRX-56 Stock", "Ravage-10", "M13C Factory Stock", "M13C FS Collapsed"],
      Laser: ["1mW Artemis Laser", "1mW Laser Box", "1mW Quick Fire Laser", "7mW Canted Laser", "Accu-Shot 5mW Laser", "Corvus PEQ Beam-5", "DXS Flash 90", "EXF Solarflare", "FJX Ultrabeam XR", "FTAC Grimline Laser", "Hipshot L20", "Luminate-44", "Point-G3P 04", "Schlager ULO-66 Laser", "STOVL DR Laser Box", "STOVL Tac Laser"],
      Ammunition: [".300 BLK Overpressured +P", ".300 BLK High Velocity", ".300 BLK Hollow Point", ".300 BLK Armor Piercing", ".300 BLK Frangible"]
    }
  },
  {
    name: "FR Avancer",
    category: "AR",
    image: "/images/weapons/FR_Avancer_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["Broadhead-3DP", "C400 Door Knocker", "Corvus Slash Gen. 2", "Cronen MAW-86", "Cronen OP44", "Dark KX30", "Echoless-80", "Echoline GS-X", "FJX Fulcrum Pro", "FSS Covert V", "FTAC Castle Comp", "Gauge-9 Mono", "Harbinger D20", "JCZ-390 muzzle device", "Komodo Heavy", "RF Crown 50", "Sakin Tread-40", "Silentfire XG6", "VLK Koloss Flash Hider", "XTEN Havoc 90", "XTen Ported 290", "Zulu-60"],
      Barrel: ["600mm FR Longbore", "435mm FR435", "395mm FR Minibore"],
      Optic: ["3x RFL-Optic", "Aim Op-v4", "Angel-40 4.8x", "Ares Clear Shot", "BPZ40 Hybrid", "Corio Enforcer Optic", "Corio Reflex", "Corvus Downrange-00", "Corvus Sol-76", "Cronen Mini Dot", "Cronen Mini Pro", "Cronen Zero-P Optic", "DF105 Reflex Sight", "DR582 Hybrid Sight", "DrexSom Prime-90", "DS Farsight 11", "Forge Tac Delta 4", "FTac Charlie7", "HMW-20 Optic", "Hybrid FirePoint", "Kazan-Holo", "Luca Bandera Scope", "Monocle CT90", "Schlager 3.4x", "Schlager Night View", "Slimline Pro", "SZ Aggressor-IR Optic", "SZ Battle Optic", "SZ Bullseye Optic", "SZ HoloTherm", "SZ Lonewolf Optic", "SZ Mini", "SZ MiniTac-40", "SZ Oscar-9", "SZ Recharge-DX", "SZ Sigma-IV Optic", "SZ SRO-7", "SZ Vortex-90", "Teplo Clear Shot", "Teplo-OP3 Scope", "Thermo-Optic X9", "VLK 4.0 Optic", "VX350 Thermal Optic", "XRK On-Point Optic", "XTen Angel-40"],
      UnderBarrel: ["Agent Grip", "Bruen Sync Shot Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Commando Foregrip", "Cronen Grooveshot Grip", "Demo Cleanshot 40", "Demo Firm Grip", "Demo Imp-44 Grip", "Edge-47 Grip", "EXF Backdraft Grip", "FR Avancer Bipod", "FSS Sharkfin 90", "FTAC Ripper 56", "FTAC Tiger Grip", "HEX-40 Grip", "Lockgrip Precision-40", "Merc Foregrip", "Op-X9 Foregrip", "Operator Foregrip", "Phase-3 Grip", "Schlager Tango", "TL40 Fire Drake", "TV Wrecker Grip", "VX Pineapple", "XTen Drop Grip", "XTen Gravedigger", "XTen Nexus Grip"],
      Magazine: ["45 Round Mag", "60 Round Mag"],
      Reargrip: ["SA lon", "FR Tack-3", "RMT Grip"],
      Stock: ["FR Sprinter", "WMG-Tac"],
      Laser: ["1mW Laser Box", "Canted Vibro-Dot 7", "Corio LAZ-44 v3", "Corvus PEQ Beam-5", "DXS Flash 90", "FSS OLE-V Laser", "FTAC Grimline Laser", "Luminate-44", "Schlager PEQ Box IV", "STOVL DR Laser Box", "SZ 1mW PEQ"],
      Ammunition: ["5.45 Overpressured +P", "5.45 High Velocity", "5.45 Hollow Point", "5.45 Armor Piercing", "5.45 Frangible"],
      Comb: ["FR Anchor", "FR Ton-618", "FR Giga"]
    }
  },
  {
    name: "ISO Hemlock",
    category: "AR",
    image: "/images/weapons/ISO_Hemlock_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["Broadhead-3DP", "C400 Door Knocker", "Corvus Slash Gen. 2", "Cronen MAW-86", "Cronen OP44", "Dark KX30", "Echoless-80", "Echoline GS-X", "FJX Fulcrum Pro", "FSS Covert V", "FTAC Castle Comp", "Gauge-9 Mono", "Harbinger D20", "JCZ-390 muzzle device", "Komodo Heavy", "RF Crown 50", "Sakin Tread-40", "Silentfire XG6", "VLK Koloss Flash Hider", "XTEN Havoc 90", "XTen Ported 290", "Zulu-60"],
      Barrel: ["RCQ-7", "Series 4-MR", "Cipher-121", "LR-30/56", "Fielder-T50"],
      Optic: ["3x RFL-Optic", "Aim Op-v4", "Angel-40 4.8x", "Ares Clear Shot", "BPZ40 Hybrid", "Corio Enforcer Optic", "Corio Reflex", "Corvus Downrange-00", "Corvus Sol-76", "Cronen Mini Pro", "Cronen Mini Dot", "Cronen Zero-P Optic", "DF105 Reflex Sight", "DR582 Hybrid Sight", "DrexSom Prime-90", "DS Farsight 11", "Forge Tac Delta 4", "FTac Charlie7", "HMW-20 Optic", "Hybrid FirePoint", "Kazan-Holo", "Luca Bandera Scope", "Monocle CT90", "Schlager 3.4x", "Schlager Night View", "Slimline Pro", "SZ Aggressor-IR Optic", "SZ Battle Optic", "SZ Bullseye Optic", "SZ HoloTherm", "SZ Lonewolf Optic", "SZ Mini", "SZ MiniTac-40", "SZ Oscar-9", "SZ Recharge-DX", "SZ Sigma-IV Optic", "SZ SRO-7", "SZ Vortex-90", "Teplo Clear Shot", "Teplo-OP3 Scope", "Thermo-Optic X9", "Vigilant-30 C-Iron", "VLK 4.0 Optic", "VX350 Thermal Optic", "XRK On-Point Optic", "XTen Angel-40"],
      UnderBarrel: ["Agent Grip", "Bipod v9 Grip", "Bruen Sync Shot Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Commando Foregrip", "Core BP2", "Cornerstone Bipod", "Corvus Masterkey", "Cronen Grooveshot Grip", "Demo Cleanshot 40", "Demo Firm Grip", "Demo Imp-44 Grip", "Edge-47 Grip", "EXF Backdraft Grip", "FSS Sharkfin 90", "FTAC Ripper 56", "FTAC Tiger Grip", "HEX-40 Grip", "Level Aim Bipod", "Lockgrip Precision-40", "Merc Foregrip", "Op-X9 Foregrip", "Operator Foregrip", "Phase-3 Grip", "Schlager Tango", "TL40 Fire Drake", "TV Wrecker Grip", "VX Pineapple", "XTen Drop Grip", "XTen Gravedigger", "XTen Nexus Grip", "XTen Stable Shot"],
      Magazine: ["20 Round Mag", "45 Round Mag"],
      Reargrip: ["Sakin ZX Grip", "XTEN Grip", "Phantom Grip", "Support CP90 Grip"],
      Stock: ["R-Com S4", "Raid 90", "Mace 600", "RES-2", "ISO Stockless Mod"],
      Laser: ["1mW Laser Box", "Canted Vibro-Dot 7", "Corio LAZ-44 v3", "Corvus PEQ Beam-5", "DXS Flash 90", "FSS OLE-V Laser", "FTAC Grimline Laser", "Luminate-44", "Schlager PEQ Box IV", "STOVL DR Laser Box", "SZ 1mW PEQ"],
      Ammunition: ["5.45 Overpressured +P", "5.45 High Velocity", "5.45 Hollow Point", "5.45 Armor Piercing", "5.45 Frangible"]

    }
  },
  {
   name: "Kastov 545",
   category: "AR",
   image: "/images/weapons/Kastov_545_Gunsmith_MWII.webp",
       //no (no leading "/")
   slots: {
    Muzzle: ["Broadhead-3DP", "C400 Door Knocker", "Corvus Slash Gen. 2", "Cronen MAW-86", "Cronen OP44", "Dark KX30", "Echoless-80", "Echoline GS-X", "FJX Fulcrum Pro", "FSS Covert V", "FTAC Castle Comp", "Gauge-9 Mono", "Harbinger D20", "JCZ-390 muzzle device", "Komodo Heavy", "RF Crown 50", "Sakin Tread-40", "Silentfire XG6", "VLK Koloss Flash Hider", "XTEN Havoc 90", "XTen Ported 290", "Zulu-60"],
    Barrel: ["KAS-7 406mm", "Kastovia 406", "IG-K30 406mm", "342mm Sakin KL"],
    Optic: ["3x RFL-Optic", "Aim Op-v4", "Angel-40 4.8x", "Ares Clear Shot", "BPZ40 Hybrid", "Corio Enforcer Optic", "Corio Reflex", "Corvus Downrange-00", "Corvus Sol-76", "Cronen Mini Dot", "Cronen Mini Pro", "Cronen Zero-P Optic", "DF105 Reflex Sight", "DR582 Hybrid Sight", "DrexSom Prime-90", "DS Farsight 11", "Forge Tac Delta 4", "FTac Charlie7", "HMW-20 Optic", "Hybrid FirePoint", "Kazan-Holo", "Luca Bandera Scope", "Monocle CT90", "Schlager 3.4x", "Schlager Night View", "Slimline Pro", "SZ Aggressor-IR Optic", "SZ Battle Optic", "SZ Bullseye Optic", "SZ HoloTherm", "SZ Lonewolf Optic", "SZ Mini", "SZ MiniTac-40", "SZ Oscar-9", "SZ Recharge-DX", "SZ Sigma-IV Optic", "SZ SRO-7", "SZ Vortex-90", "Teplo Clear Shot", "Teplo-OP3 Scope", "Thermo-Optic X9", "VLK 4.0 Optic", "VX350 Thermal Optic", "XRK On-Point Optic", "XTen Angel-40"],
    UnderBarrel: ["Agent Grip", "Bipod v9 Grip", "Bruen Sync Shot Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Commando Foregrip", "Core BP2", "Cornerstone Bipod", "Corvus Masterkey", "Cronen Grooveshot Grip", "Demo Cleanshot 40", "Demo Firm Grip", "Demo Imp-44 Grip", "Edge-47 Grip", "EXF Backdraft Grip", "FSS Sharkfin 90", "FTAC Ripper 56", "FTAC Tiger Grip", "HEX-40 Grip", "KL40-M2", "Level Aim Bipod", "Lockgrip Precision-40", "Merc Foregrip", "Op-X9 Foregrip", "Operator Foregrip", "Phase-3 Grip", "Schlager Tango", "TV Wrecker Grip", "VX Pineapple", "XTen Drop Grip", "XTen Gravedigger", "XTen Nexus Grip", "XTen Stable Shot"],
    Magazine: ["20 Round Mag", "45 Round Mag", "60 Round Mag"],
    Reargrip: ["Ivanov ST-70 Grip", "Demo-X2 Grip", "True-Tac Grip"],
    Stock: ["KSTV-RPK Factory", "Ivanov Wood Stock", "FT Tac-Elite Stock", "Markeev R7 Stock", "Kastov-Rama"],
    Laser: ["1mW Laser Box", "Canted Vibro-Dot 7", "Corio LAZ-44 v3", "Corvus PEQ Beam-5", "DXS Flash 90", "FSS OLE-V Laser", "FTAC Grimline Laser", "Luminate-44", "Schlager PEQ Box IV", "STOVL DR Laser Box", "SZ 1mW PEQ"],
    Ammunition: ["5.45 Overpressured +P", "5.45 High Velocity", "5.45 Hollow Point", "5.45 Armor Piercing", "5.45 Frangible"]
   } 
  },
  {
    name: "Kastov 762",
    category: "AR",
    image: "/images/weapons/Kastov_762_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["Bore-490", "Cronen Dark KX30", "Echoline GS-X", "Eight-PointFlash Hider", "FR Titan Silencer", "GL Clear Breach", "Husher-65 Silencer", "Kastovia DX90", "Lockshot KT85", "Polarfire-S", "SA Leveler 5b", "Sakin Tread-40", "TA HUL-Breach", "Tempus GH50", "TY-LR8", "TZL-90 V3", "ZLR Talon 5", "Zulo-60"],
      Barrel: ["KAS-10 584mm Barrel", "KAS-7 406mm", "IG-K30 406mm", "Kastovia 343", "342mm Sakin KL"],
      Optic: ["3x RFL-Optic", "Aim Op-v4", "Angel-40 4.8x", "Ares Clear Shot", "BPZ40 Hybrid", "Corio Enforcer Optic", "Corio Reflex", "Corvus Downrange-00", "Corvus Sol-76", "Cronen Mini Dot", "Cronen Mini Pro", "Cronen Zero-P Optic", "DF105 Reflex Sight", "DR582 Hybrid Sight", "DrexSom Prime-90", "DS Farsight 11", "Forge Tac Delta 4", "FTac Charlie7", "HMW-20 Optic", "Hybrid FirePoint", "Kazan-Holo", "Luca Bandera Scope", "Monocle CT90", "Schlager 3.4x", "Schlager Night View", "Slimline Pro", "SZ Aggressor-IR Optic", "SZ Battle Optic", "SZ Bullseye Optic", "SZ HoloTherm", "SZ Lonewolf Optic", "SZ Mini", "SZ MiniTac-40", "SZ Oscar-9", "SZ Recharge-DX", "SZ Sigma-IV Optic", "SZ SRO-7", "SZ Vortex-90", "Teplo Clear Shot", "Teplo-OP3 Scope", "Thermo-Optic X9", "VLK 4.0 Optic", "VX350 Thermal Optic", "XRK On-Point Optic", "XTen Angel-40"],
      UnderBarrel: ["Agent Grip", "Bipod v9 Grip", "Bruen Sync Shot Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Commando Foregrip", "Core BP2", "Cornerstone Bipod", "Corvus Masterkey", "Cronen Grooveshot Grip", "Demo Cleanshot 40", "Demo Firm Grip", "Demo Imp-44 Grip", "Edge-47 Grip", "EXF Backdraft Grip", "FSS Sharkfin 90", "FTAC Ripper 56", "FTAC Tiger Grip", "HEX-40 Grip", "KL40-M2", "Level Aim Bipod", "Lockgrip Precision-40", "Merc Foregrip", "Op-X9 Foregrip", "Operator Foregrip", "Phase-3 Grip", "Schlager Tango", "TV Wrecker Grip", "VX Pineapple", "XTen Drop Grip", "XTen Gravedigger", "XTen Nexus Grip", "XTen Stable Shot"],
      Magazine: ["20 Round Mag", "45 Round Mag"],
      Reargrip: ["Ivanov ST-70 Grip", "Demo-X2 Grip", "True-Tac Grip", "Brace LS"],
      Stock: ["KSTV-RPK Factory", "Ivanov Wood Stock", "FT Tac-Elite Stock", "Markeev R7 Stock", "Kastov-Rama"],
      Laser: ["1mW Laser Box", "Canted Vibro-Dot 7", "Corio LAZ-44 v3", "Corvus PEQ Beam-5", "DXS Flash 90", "FSS OLE-V Laser", "FTAC Grimline Laser", "Luminate-44", "Schlager PEQ Box IV", "STOVL DR Laser Box", "SZ 1mW PEQ"],
      Ammunition: ["7.62 Overpressured +P", "7.62 High Velocity", "7.62 Hollow Point", "7.62 Armor Piercing", "7.62 Frangible"]
    }
  },
  {
    name: "Kastov 74U",
    category: "AR",
    image: "/images/weapons/Kastov-74u_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["Bore-490", "Cronen Dark KX30", "Echoline GS-X", "Eight-PointFlash Hider", "FR Titan Silencer", "GL Clear Breach", "Husher-65 Silencer", "Kastovia DX90", "Lockshot KT85", "Polarfire-S", "SA Leveler 5b", "Sakin Tread-40", "TA HUL-Breach", "Tempus GH50", "TY-LR8", "TZL-90 V3", "ZLR Talon 5", "Zulo-60"],
      Barrel: ["SA Ultra III", "ShortTac 190mm", "BR209 Barrel", "KSTV-17"],
      Optic: ["3x RFL-Optic", "Aim Op-v4", "Angel-40 4.8x", "Ares Clear Shot", "BPZ40 Hybrid", "Corio Enforcer Optic", "Corio Reflex", "Corvus Downrange-00", "Corvus Sol-76", "Cronen Mini Dot", "Cronen Mini Pro", "Cronen Zero-P Optic", "DF105 Reflex Sight", "DR582 Hybrid Sight", "DrexSom Prime-90", "DS Farsight 11", "Forge Tac Delta 4", "FTac Charlie7", "HMW-20 Optic", "Hybrid FirePoint", "Kazan-Holo", "Luca Bandera Scope", "Monocle CT90", "Schlager 3.4x", "Schlager Night View", "Slimline Pro", "SZ Aggressor-IR Optic", "SZ Battle Optic", "SZ Bullseye Optic", "SZ HoloTherm", "SZ Lonewolf Optic", "SZ Mini", "SZ MiniTac-40", "SZ Oscar-9", "SZ Recharge-DX", "SZ Sigma-IV Optic", "SZ SRO-7", "SZ Vortex-90", "Teplo Clear Shot", "Teplo-OP3 Scope", "Thermo-Optic X9", "VLK 4.0 Optic", "VX350 Thermal Optic", "XRK On-Point Optic", "XTen Angel-40"],
      UnderBarrel: ["Agent Grip", "Bipod v9 Grip", "Bruen Sync Shot Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Core BP2", "Cornerstone Bipod", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "FSS Sharkfin 90", "FTAC Tiger Grip", "HEX-40 Grip", "Kasto", "Kastov-7", "Level Aim Bipod", "Loadd", "Lockgrip Precision-40", "Merc Foregrip", "Op-X9 Foregrip", "Operator Foregrip", "Phase-3 Grip", "Schlager Tango", "TV Wrecker Grip", "VX Pineapple", "XTen Drop Grip", "XTen Nexus Grip", "XTen Stable Shot"],
      Magazine: ["20 Round Mag", "45 Round Mag"],
      Reargrip: ["Ivanov ST-70 Grip", "Demo-X2 Grip", "True-Tac Grip"],
      Stock: ["KSTV-RPK Factory", "Ivanov Wood Stock", "FT Tac-Elite Stock", "Markeev R7 Stock"],
      Laser: ["1mW Laser Box", "Canted Vibro-Dot 7", "Corio LAZ-44 v3", "Corvus PEQ Beam-5", "DXS Flash 90", "FSS OLE-V Laser", "FTAC Grimline Laser", "Luminate-44", "Schlager PEQ Box IV", "STOVL DR Laser Box", "SZ 1mW PEQ"],
      Ammunition: ["5.45 Overpressured +P", "5.45 High Velocity", "5.45 Hollow Point", "5.45 Armor Piercing", "5.45 Frangible"]
    }
  },
  {
    name: "Lachmann-556",
    category: "AR",
    image: "/images/weapons/Lachmann-556_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["Broadhead-3DP", "C400 Door Knocker", "Corvus Slash Gen. 2", "Cronen MAW-86", "Cronen OP44", "Dark KX30", "Echoless-80", "Echoline GS-X", "FJX Fulcrum Pro", "FSS Covert V", "FTAC Castle Comp", "Gauge-9 Mono", "Harbinger D20", "JCZ-390 muzzle device", "Komodo Heavy", "RF Crown 50", "Sakin Tread-40", "Silentfire XG6", "VLK Koloss Flash Hider", "XTEN Havoc 90", "XTen Ported 290", "Zulu-60"],
      Barrel: ["15.9\" Lachmann RAPP Barrel", "Lachmann Nova", "LM Aurora 90 Barrel", "10.6\" Lachstrike Barrel"],
      Optic: ["3x RFL-Optic", "Aim Op-v4", "Angel-40 4.8x", "Ares Clear Shot", "BPZ40 Hybrid", "Corio Enforcer Optic", "Corio Reflex", "Corvus Downrange-00", "Corvus Sol-76", "Cronen Mini Dot", "Cronen Mini Pro", "Cronen Zero-P Optic", "DF105 Reflex Sight", "DR582 Hybrid Sight", "DrexSom Prime-90", "DS Farsight 11", "Forge Tac Delta 4", "FTac Charlie7", "HMW-20 Optic", "Hybrid FirePoint", "Kazan-Holo", "Luca Bandera Scope", "Monocle CT90", "Schlager 3.4x", "Schlager Night View", "Slimline Pro", "SZ Aggressor-IR Optic", "SZ Battle Optic", "SZ Bullseye Optic", "SZ HoloTherm", "SZ Lonewolf Optic", "SZ Mini", "SZ MiniTac-40", "SZ Oscar-9", "SZ Recharge-DX", "SZ Sigma-IV Optic", "SZ SRO-7", "SZ Vortex-90", "Teplo Clear Shot", "Teplo-OP3 Scope", "Thermo-Optic X9", "VLK 4.0 Optic", "VX350 Thermal Optic", "XRK On-Point Optic", "XTen Angel-40"],
      UnderBarrel: ["Agent Grip", "Bipod v9 Grip", "Bruen Sync Shot Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Commando Foregrip", "Core BP2", "Cornerstone Bipod", "Corvus Masterkey", "Cronen Grooveshot", "Demo Cleanshot 40", "Demo Firm Grip", "Demo Imp-44 Grip", "Edge-47 Grip", "EXF Backdraft Grip", "FSS Sharkfin 90", "FTAC Ripper 56", "FTAC Tiger Grip", "HEX-40 Grip", "Level Aim Bipod", "Lockgrip Precision-40", "Merc Foregrip", "Op-X9 Foregrip", "Operator Foregrip", "Phase-3 Grip", "Schlager Tango", "TL40 Fire Drake", "TV Wrecker Grip", "VX Pineapple", "XTen Drop Grip", "XTen Gravedigger", "XTen Nexus Grip", "XTen Stable Shot"],
      Magazine: ["15 Round Mag", "40 Round Mag", "60 Round Mag"],
      Reargrip: ["S-Grip Zero", "LM Cronus Grip", "LMK64 Grip"],
      Stock: ["LM-S Factory G79 Stock", "RAPP-762 Factory", "Lachmann S76 Factory Stock", "FT Mobile Stock"],
      Laser: ["1mW Laser Box", "Canted Vibro-Dot 7", "Corio LAZ-44 v3", "Corvus PEQ Beam-5", "DXS Flash 90", "FSS OLE-V Laser", "FTAC Grimline Laser", "Luminate-44", "Schlager PEQ Box IV", "STOVL DR Laser Box", "SZ 1mW PEQ"],
      Ammunition: ["5.45 Overpressured +P", "5.45 High Velocity", "5.45 Hollow Point", "5.45 Armor Piercing", "5.45 Frangible"]
    }
  },
  {
    name: "M13B",
    category: "AR",
    image: "/images/weapons/M13B_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["Broadhead-3DP", "C400 Door Knocker", "Corvus Slash Gen. 2", "Cronen MAW-86", "Cronen OP44", "Dark KX30", "Echoless-80", "Echoline GS-X", "FJX Fulcrum Pro", "FSS Covert V", "FTAC Castle Comp", "Gauge-9 Mono", "Harbinger D20", "JCZ-390 muzzle device", "Komodo Heavy", "RF Crown 50", "Sakin Tread-40", "Silentfire XG6", "VLK Koloss Flash Hider", "XTEN Havoc 90", "XTen Ported 290", "Zulu-60"],
      Barrel: ["14\" Bruen Echelon", "7\" Bruen B-M20", "M13C Factory Barrel"],
      Optic: ["3x RFL-Optic", "Aim Op-v4", "Angel-40 4.8x", "Ares Clear Shot", "BPZ40 Hybrid", "Corio Enforcer Optic", "Corio Reflex", "Corvus Downrange-00", "Corvus Sol-76", "Cronen Mini Dot", "Cronen Mini Pro", "Cronen Zero-P Optic", "DF105 Reflex Sight", "DR582 Hybrid Sight", "DrexSom Prime-90", "DS Farsight 11", "Forge Tac Delta 4", "FTac Charlie7", "HMW-20 Optic", "Hybrid FirePoint", "Kazan-Holo", "Luca Bandera Scope", "Monocle CT90", "Schlager 3.4x", "Schlager Night View", "Slimline Pro", "SZ Aggressor-IR Optic", "SZ Battle Optic", "SZ Bullseye Optic", "SZ HoloTherm", "SZ Lonewolf Optic", "SZ Mini", "SZ MiniTac-40", "SZ Oscar-9", "SZ Recharge-DX", "SZ Sigma-IV Optic", "SZ SRO-7", "SZ Vortex-90", "Teplo Clear Shot", "Teplo-OP3 Scope", "Thermo-Optic X9", "Vigilant-30 C-Iron", "VLK 4.0 Optic", "VX350 Thermal Optic", "XRK On-Point Optic", "XTen Angel-40"],
      UnderBarrel: ["Agent Grip", "Bipod v9 Grip", "Bruen Sync Shot Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Commando Foregrip", "Core BP2", "Cornerstone Bipod", "Corvus Masterkey", "Cronen Grooveshot", "Demo Cleanshot 40", "Demo Firm Grip", "Demo Imp-44 Grip", "Edge-47 Grip", "EXF Backdraft Grip", "FSS Sharkfin 90", "FTAC Ripper 56", "FTAC Tiger Grip", "HEX-40 Grip", "Level Aim Bipod", "Lockgrip Precision-40", "Merc Foregrip", "Op-X9 Foregrip", "Operator Foregrip", "oullage lanyo", "Phase-3 Grip", "Schlager Tango", "SPW 40mm HE", "TV Wrecker Grip", "VX Pineapple", "XTen Drop Grip", "XTen Gravedigger", "XTen Nexus Grip", "XTen Stable Shot"],
      Magazine: ["45 Round Mag", "60 Round Mag"],
      Reargrip: ["Bruen GR-500", "D37 Grip", "Bruen Flash Grip"],
      Stock: ["Ravage-10", "Bruen R90 Factory", "Bruen Flash v4 Stock", "M13C FS Collapsed", "M13C Factory Stock"],
      Laser: ["1mW Artemis Laser", "1mW Laser Box", "1mW Quick Fire Laser", "7mW Canted Laser", "Accu-Shot 5mW Laser", "Corvus PEQ Beam-5", "DXS Flash 90", "EXF Solarflare", "FJX Ultrabeam XR", "FTAC Grimline Laser", "Hipshot L20", "Luminate-44", "Point-G3P 04", "Schlager ULO-66 Laser", "STOVL DR Laser Box", "STOVL Tac Laser"],
      Ammunition: ["5.45 Overpressured +P", "5.45 High Velocity", "5.45 Hollow Point", "5.45 Armor Piercing", "5.45 Frangible"]
    }
  },
  {
    name: "M13C",
    category: "AR",
    image: "/images/weapons/M13C_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["Broadhead-3DP", "C400 Door Knocker", "Corvus Slash Gen. 2", "Cronen MAW-86", "Cronen OP44", "Dark KX30", "Echoless-80", "Echoline GS-X", "FJX Fulcrum Pro", "FSS Covert V", "FTAC Castle Comp", "Gauge-9 Mono", "Harbinger D20", "JCZ-390 muzzle device", "Komodo Heavy", "RF Crown 50", "Sakin Tread-40", "Silentfire XG6", "VLK Koloss Flash Hider", "XTEN Havoc 90", "XTen Ported 290", "Zulu-60"],
      Barrel: ["10\" Bruen FCT-6", "7\" Bruen C-M20", "14\" Bruen Echelon"],
      Optic: ["3x RFL-Optic", "Aim Op-v4", "Angel-40 4.8x", "Ares Clear Shot", "BPZ40 Hybrid", "Corio Enforcer Optic", "Corio Reflex", "Corvus Downrange-00", "Corvus Sol-76", "Cronen Mini Dot", "Cronen Mini Pro", "Cronen Zero-P Optic", "DF105 Reflex Sight", "DR582 Hybrid Sight", "DrexSom Prime-90", "DS Farsight 11", "Forge Tac Delta 4", "FTac Charlie7", "HMW-20 Optic", "Hybrid FirePoint", "Kazan-Holo", "Luca Bandera Scope", "Monocle CT90", "Schlager 3.4x", "Schlager Night View", "Slimline Pro", "SZ Aggressor-IR Optic", "SZ Battle Optic", "SZ Bullseye Optic", "SZ HoloTherm", "SZ Lonewolf Optic", "SZ Mini", "SZ MiniTac-40", "SZ Oscar-9", "SZ Recharge-DX", "SZ Sigma-IV Optic", "SZ SRO-7", "SZ Vortex-90", "Teplo Clear Shot", "Teplo-OP3 Scope", "Thermo-Optic X9", "Vigilant-30 C-Iron", "VLK 4.0 Optic", "VX350 Thermal Optic", "XRK On-Point Optic", "XTen Angel-40"],
      UnderBarrel: ["Agent Grip", "Bipod v9 Grip", "Bruen Sync Shot Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Commando Foregrip", "Core BP2", "Cornerstone Bipod", "Corvus Masterkey", "Cronen Grooveshot", "Demo Cleanshot 40", "Demo Firm Grip", "Demo Imp-44 Grip", "Edge-47 Grip", "EXF Backdraft Grip", "FSS Sharkfin 90", "FTAC Ripper 56", "FTAC Tiger Grip", "HEX-40 Grip", "Level Aim Bipod", "Lockgrip Precision-40", "Merc Foregrip", "Op-X9 Foregrip", "Operator Foregrip", "oullage lanyu", "Phase-3 Grip", "Schlager Tango", "SPW 40mm HE", "TV Wrecker Grip", "VX Pineapple", "XTen Drop Grip", "XTen Gravedigger", "XTen Nexus Grip", "XTen Stable Shot"],
      Magazine: ["45 Round Mag", "60 Round Mag"],
      Reargrip: ["Bruen GR-500", "D37 Grip", "Bruen Flash Grip"],
      Stock: ["TRX-56 Stock", "Ravage-10", "Bruen Flash v4 Stock", "Bruen R90 Factory", "M13C FS Collapsed"],
      Laser: ["1mW Artemis Laser", "1mW Laser Box", "1mW Quick Fire Laser", "7mW Canted Laser", "Accu-Shot 5mW Laser", "Corvus PEQ Beam-5", "DXS Flash 90", "EXF Solarflare", "FJX Ultrabeam XR", "FTAC Grimline Laser", "Hipshot L20", "Luminate-44", "Point-G3P 04", "Schlager ULO-66 Laser", "STOVL DR Laser Box", "STOVL Tac Laser"],
      Ammunition: [".300 BLK Overpressured +P", ".300 BLK High Velocity", ".300 BLK Hollow Point", ".300 BLK Armor Piercing", ".300 BLK Frangible"]
    }
  },
  {
    name: "M16",
    category: "AR",
    image: "/images/weapons/M16_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["Corvus Slash Gen. 2", "Cronen MAW-86", "Cronen OP44", "Dark KX30", "Echoless-80", "Echoline GS-X", "FJX Fulcrum Pro", "FSS Covert V", "FTAC Castle Comp", "Gauge-9 Mono", "Harbinger D20", "JCZ-390 muzzle device", "Komodo Heavy", "RF Crown 50", "Sakin Tread-40", "Silentfire XG6", "VLK Koloss Flash Hider", "XTEN Havoc 90", "XTen Ported 290", "Zulu-60"],
      Barrel: ["14\" Carbine Shroud", "Demo 501 Factory", "11.5\" T-H4 Barrel", "11.5\" Carbine Shroud"],
      Optic: ["3x RFL-Optic", "Aim Op-v4", "Angel-40 4.8x", "Ares Clear Shot", "BPZ40 Hybrid", "Corio Enforcer Optic", "Corio Reflex", "Corvus Downrange-00", "Corvus Sol-76", "Cronen Mini Pro", "Cronen Zero-P Optic", "DF105 Reflex Sight", "DR582 Hybrid Sight", "DrexSom Prime-90", "DS Farsight 11", "Forge Tac Delta 4", "FTac Charlie7", "HMW-20 Optic", "Hybrid FirePoint", "Kazan-Holo", "Luca Bandera Scope", "Monocle CT90", "Schlager 3.4x", "Schlager Night View", "Slimline Pro", "SZ Aggressor-IR Optic", "SZ Battle Optic", "SZ Bullseye Optic", "SZ HoloTherm", "SZ Lonewolf Optic", "SZ Mini", "SZ MiniTac-40", "SZ Oscar-9", "SZ Recharge-DX", "SZ Sigma-IV Optic", "SZ Vortex-90", "Teplo Clear Shot", "Teplo-OP3 Scope", "Thermo-Optic X9", "Vigilant-30 C-Iron", "VLK 4.0 Optic", "VX350 Thermal Optic", "XRK On-Point Optic", "XTen Angel-40"],
      UnderBarrel: ["Agent Grip", "Bipod v9 Grip", "Bruen Sync Shot Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Commando Foregrip", "Core BP2", "Cornerstone Bipod", "Corvus Masterkey", "Cronen Grooveshot", "Demo Cleanshot 40", "Demo Firm Grip", "Demo Imp-44 Grip", "Edge-47 Grip", "EXF Backdraft Grip", "FSS Sharkfin 90", "FTAC Ripper 56", "FTAC Tiger Grip", "HEX-40 Grip", "Level Aim Bipod", "Lockgrip Precision-40", "Merc Foregrip", "Op-X9 Foregrip", "Operator Foregrip", "Phase-3 Grip", "Schlager Tango", "SPW 40mm HE", "TV Wrecker Grip", "up-avroep", "VX Pineapple", "XTen Drop Grip", "XTen Gravedigger", "XTen Nexus Grip", "XTen Stable Shot"],
      Magazine: ["15 Round Mag", "45 Round Mag", "60 Round Mag"],
      Reargrip: ["D15 Grip", "Sakin ZX Grip", "XTEN Grip", "Support CP90 Grip"],
      Stock: ["Ravage-8", "Demo Fade Pro Stock", "Tempus P80 Strike stock", "Demo Precision Elite Factory", "Corio Precio Factory", "Demo D50 Buffer Tube", "Torrent Span-9", "PSO Heavy"],
      Laser: ["1mW Laser Box", "Canted Vibro-Dot 7", "Corio LAZ-44 v3", "Corvus PEQ Beam-5", "DXS Flash 90", "FSS OLE-V Laser", "FTAC Grimline Laser", "Luminate-44", "Schlager PEQ Box IV", "STOVL DR Laser Box", "SZ 1mW PEQ"],
      Ammunition: ["5.45 Overpressured +P", "5.45 High Velocity", "5.45 Hollow Point", "5.45 Armor Piercing", "5.45 Frangible"]
    }
  },
  {
    name: "M4",
    category: "AR",
    image: "/images/weapons/M4_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["Broadhead-3DP", "C400 Door Knocker", "Corvus Slash Gen. 2", "Cronen MAW-86", "Cronen OP44", "Dark KX30", "Echoless-80", "Echoline GS-X", "FJX Fulcrum Pro", "FSS Covert V", "FTAC Castle Comp", "Gauge-9 Mono", "Harbinger D20", "JCZ-390 muzzle device", "Komodo Heavy", "RF Crown 50", "Sakin Tread-40", "Silentfire XG6", "VLK Koloss Flash Hider", "XTEN Havoc 90", "XTen Ported 290", "Zulu-60"],
      Barrel: ["Hightower 20\" Barrel", "419mm EXF Barrel", "14\" Carbine Shroud", "11.5\" T-H4 Barrel", "11.5\" Carbine Shroud"],
      Optic: ["3x RFL-Optic", "Aim Op-v4", "Angel-40 4.8x", "Ares Clear Shot", "BPZ40 Hybrid", "Corio Enforcer Optic", "Corio Reflex", "Corvus Downrange-00", "Corvus Sol-76", "Cronen Mini Pro", "Cronen Zero-P Optic", "DF105 Reflex Sight", "DR582 Hybrid Sight", "DrexSom Prime-90", "DS Farsight 11", "Forge Tac Delta 4", "FTac Charlie7", "HMW-20 Optic", "Hybrid FirePoint", "Kazan-Holo", "Luca Bandera Scope", "Monocle CT90", "Schlager 3.4x", "Schlager Night View", "Slimline Pro", "SZ Aggressor-IR Optic", "SZ Battle Optic", "SZ Bullseye Optic", "SZ HoloTherm", "SZ Lonewolf Optic", "SZ Mini", "SZ MiniTac-40", "SZ Oscar-9", "SZ Recharge-DX", "SZ Sigma-IV Optic", "SZ Vortex-90", "Teplo Clear Shot", "Teplo-OP3 Scope", "Thermo-Optic X9", "Vigilant-30 C-Iron", "VLK 4.0 Optic", "VX350 Thermal Optic", "XRK On-Point Optic", "XTen Angel-40"],
      UnderBarrel: ["Agent Grip", "Bipod v9 Grip", "Bruen Sync Shot Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Commando Foregrip", "Core BP2", "Cornerstone Bipod", "Corvus Masterkey", "Cronen Grooveshot", "Demo Cleanshot 40", "Demo Firm Grip", "Demo Imp-44 Grip", "Edge-47 Grip", "EXF Backdraft Grip", "FSS Sharkfin 90", "FTAC Ripper 56", "FTAC Tiger Grip", "HEX-40 Grip", "Level Aim Bipod", "Lockgrip Precision-40", "Merc Foregrip", "Op-X9 Foregrip", "Operator Foregrip", "Phase-3 Grip", "Schlager Tango", "SPW 40mm HE", "TV Wrecker Grip", "up-au roregrip", "VX Pineapple", "XTen Drop Grip", "XTen Gravedigger", "XTen Nexus Grip", "XTen Stable Shot"],
      Magazine: ["45 Round Mag", "60 Round Mag"],
      Reargrip: ["D15 Grip", "Sakin ZX Grip", "XTEN Grip", "Support CP90 Grip", "Phantom Grip"],
      Stock: ["Assault-60 Stock Factory", "Ravage-8", "Demo Fade Pro Stock", "Corio Precio Factory", "Torrent Span-9", "PSO Heavy"],
      Laser: ["1mW Laser Box", "Canted Vibro-Dot 7", "Corio LAZ-44 v3", "Corvus PEQ Beam-5", "DXS Flash 90", "FSS OLE-V Laser", "FTAC Grimline Laser", "Luminate-44", "Schlager PEQ Box IV", "STOVL DR Laser Box", "SZ 1mW PEQ"],
      Ammunition: ["5.45 Overpressured +P", "5.45 High Velocity", "5.45 Hollow Point", "5.45 Armor Piercing", "5.45 Frangible"]
    }
  },
  {
    name: "STB-556",
    category: "AR",
    image: "/images/weapons/STB_556_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["Broadhead-3DP", "C400 Door Knocker", "Corvus Slash Gen. 2", "Cronen MAW-86", "Cronen OP44", "Dark KX30", "Echoless-80", "Echoline GS-X", "FJX Fulcrum Pro", "FSS Covert V", "FTAC Castle Comp", "Gauge-9 Mono", "Harbinger D20", "JCZ-390 muzzle device", "Komodo Heavy", "RF Crown 50", "Sakin Tread-40", "Silentfire XG6", "VLK Koloss Flash Hider", "XTEN Havoc 90", "XTen Ported 290", "Zulu-60"],
      Barrel: ["Bruen Turaco 686mm", "FTAC FB20", "18\" Bruen Guerilla", "20\" Bruen S-620", "508mm Rear Guard"],
      Optic: ["3x RFL-Optic", "Aim Op-v4", "Angel-40 4.8x", "Ares Clear Shot", "BPZ40 Hybrid", "Corio Enforcer Optic", "Corio Reflex", "Corvus Downrange-00", "Corvus Sol-76", "Cronen Mini Dot", "Cronen Mini Pro", "Cronen Zero-P Optic", "DF105 Reflex Sight", "DR582 Hybrid Sight", "DrexSom Prime-90", "DS Farsight 11", "Forge Tac Delta 4", "FTac Charlie7", "HMW-20 Optic", "Hybrid FirePoint", "Kazan-Holo", "Luca Bandera Scope", "Monocle CT90", "Schlager 3.4x", "Schlager Night View", "Slimline Pro", "SZ Aggressor-IR Optic", "SZ Battle Optic", "SZ Bullseye Optic", "SZ HoloTherm", "SZ Lonewolf Optic", "SZ Mini", "SZ MiniTac-40", "SZ Oscar-9", "SZ Recharge-DX", "SZ Sigma-IV Optic", "SZ SRO-7", "SZ Vortex-90", "Teplo Clear Shot", "Teplo-OP3 Scope", "Thermo-Optic X9", "Vigilant-30 C-Iron", "VLK 4.0 Optic", "VX350 Thermal Optic", "XRK On-Point Optic", "XTen Angel-40",],
      UnderBarrel: ["Bipod v9 Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Core BP2", "Cornerstone Bipod", "Cronen Grooveshot", "EXF Backdraft Grip", "FSS Sharkfin 90", "FTAC Tiger Grip", "HEX-40 Grip", "Level Aim Bipod", "Operator Foregrip", "SPW 40mm HE", "TV Wrecker Grip", "up-au roregrip", "up-no ruregrip", "VX Pineapple", "XTen Stable Shot"],
      Magazine: ["42 Round Mag", "Single Tap Mod"],
      Reargrip: ["Bruen G305 Grip Wrap", "STIP-40 Grip", "Bruen Q900 Grip"],
      Stock: ["Bruen MX9 Stock", "Bruen HCR 56 Stock"],
      Laser: ["1mW Artemis Laser", "1mW Laser Box", "1mW Quick Fire Laser", "7mW Canted Laser", "Accu-Shot 5mW Laser", "Corvus PEQ Beam-5", "DXS Flash 90", "EXF Solarflare", "FJX Ultrabeam XR", "FTAC Grimline Laser", "Hipshot L20", "Luminate-44", "Point-G3P 04", "Schlager ULO-66 Laser", "STOVL DR Laser Box", "STOVL Tac Laser"],
      Ammunition: ["5.45 Overpressured +P", "5.45 High Velocity", "5.45 Hollow Point", "5.45 Armor Piercing", "5.45 Frangible"],
      Comb: ["Schlager TTF3 Riser", "Bruen TS-30 Comb", "FTAC C11 Riser"]
    }
  },
  {
    name: "TAQ-56",
    category: "AR",
    image: "/images/weapons/TAQ-56_Gunsmith_MWII.webp",
        //no (no leading "/")
  slots: {
    Muzzle: ["Broadhead-3DP", "C400 Door Knocker", "Corvus Slash Gen. 2", "Cronen MAW-86", "Cronen OP44", "Dark KX30", "Echoless-80", "Echoline GS-X", "FJX Fulcrum Pro", "FSS Covert V", "FTAC Castle Comp", "Gauge-9 Mono", "Harbinger D20", "JCZ-390 muzzle device", "Komodo Heavy", "RF Crown 50", "Sakin Tread-40", "Silentfire XG6", "VLK Koloss Flash Hider", "XTEN Havoc 90", "XTen Ported 290", "Zulu-60"],
    Barrel: ["12\" TacShort Barrel", "17.5\" Tundra Pro Barrel"],
    Optic: ["3x RFL-Optic", "Aim Op-v4", "Angel-40 4.8x", "Ares Clear Shot", "BPZ40 Hybrid", "Corio Enforcer Optic", "Corio Reflex", "Corvus Downrange-00", "Corvus Sol-76", "Cronen Mini Dot", "Cronen Mini Pro", "Cronen Zero-P Optic", "DF105 Reflex Sight", "DR582 Hybrid Sight", "DrexSom Prime-90", "DS Farsight 11", "Forge Tac Delta 4", "FTac Charlie7", "HMW-20 Optic", "Hybrid FirePoint", "Kazan-Holo", "Luca Bandera Scope", "Monocle CT90", "Schlager 3.4x", "Schlager Night View", "Slimline Pro", "SZ Aggressor-IR Optic", "SZ Battle Optic", "SZ Bullseye Optic", "SZ HoloTherm", "SZ Lonewolf Optic", "SZ Mini", "SZ MiniTac-40", "SZ Oscar-9", "SZ Recharge-DX", "SZ Sigma-IV Optic", "SZ SRO-7", "SZ Vortex-90", "Teplo Clear Shot", "Teplo-OP3 Scope", "Thermo-Optic X9", "Vigilant-30 C-Iron", "VLK 4.0 Optic", "VX350 Thermal Optic", "XRK On-Point Optic", "XTen Angel-40"],
    UnderBarrel: ["Agent Grip", "Bipod v9 Grip", "Bruen Sync Shot Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Commando Foregrip", "Core BP2", "Cornerstone Bipod", "Cronen Grooveshot", "Demo Cleanshot 40", "Demo Firm Grip", "Demo Imp-44 Grip", "Edge-47 Grip", "EXF Backdraft Grip", "FSS Sharkfin 90", "FTAC Ripper 56", "FTAC Tiger Grip", "HEX-40 Grip", "Level Aim Bipod", "Lockgrip Precision-40", "Merc Foregrip", "Op-X9 Foregrip", "Operator Foregrip", "Phase-3 Grip", "schlager lango", "Schlager Tango", "TL40 Fire Drake", "TV Wrecker Grip", "VX Pineapple", "XTen Drop Grip", "XTen Gravedigger", "XTen Nexus Grip", "XTen Stable Shot"],
    Magazine: ["40 Round Mag", "60 Round Mag"],
    Reargrip: ["XRK Response Grip", "FSS Combat Grip", "Demo Cleanshot Grip"],
    Stock: ["TV LPX-434", "Tactique Brute Stock", "TV XLine Pro", "TV Cardinal Stock"],
    Laser: ["1mW Laser Box", "Canted Vibro-Dot 7", "Corio LAZ-44 v3", "Corvus PEQ Beam-5", "DXS Flash 90", "FSS OLE-V Laser", "FTAC Grimline Laser", "Luminate-44", "Schlager PEQ Box IV", "STOVL DR Laser Box", "SZ 1mW PEQ"],
    Ammunition: ["5.45 Overpressured +P", "5.45 High Velocity", "5.45 Hollow Point", "5.45 Armor Piercing", "5.45 Frangible"]
    }
  },
  {
    name: "Tempus RazerBack",
    category: "AR",
    image: "/images/weapons/Tempus_Razorback_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["Broadhead-3DP", "C400 Door Knocker", "Corvus Slash Gen. 2", "Cronen MAW-86", "Cronen OP44", "Dark KX30", "Echoless-80", "Echoline GS-X", "FJX Fulcrum Pro", "FSS Covert V", "FTAC Castle Comp", "Gauge-9 Mono", "Harbinger D20", "JCZ-390 muzzle device", "Komodo Heavy", "RF Crown 50", "Sakin Tread-40", "Silentfire XG6", "VLK Koloss Flash Hider", "XTEN Havoc 90", "XTen Ported 290", "Zulu-60"],
      Barrel: ["18\" TACK-2L", "13\" Frenzy IX", "16\" TANKR-V", "17\" 1O-XL"],
      Optic: ["3x RFL-Optic", "Aim Op-v4", "Angel-40 4.8x", "Ares Clear Shot", "BPZ40 Hybrid", "Corio Enforcer Optic", "Corio Reflex", "Corvus Downrange-00", "Corvus Sol-76", "Cronen Mini Dot", "Cronen Mini Pro", "Cronen Zero-P Optic", "DF105 Reflex Sight", "DR582 Hybrid Sight", "DrexSom Prime-90", "DS Farsight 11", "Forge Tac Delta 4", "FTac Charlie7", "HMW-20 Optic", "Hybrid FirePoint", "Kazan-Holo", "Luca Bandera Scope", "Monocle CT90", "Schlager 3.4x", "Schlager Night View", "Slimline Pro", "SZ Aggressor-IR Optic", "SZ Battle Optic", "SZ Bullseye Optic", "SZ HoloTherm", "SZ Lonewolf Optic", "SZ Mini", "SZ MiniTac-40", "SZ Oscar-9", "SZ Recharge-DX", "SZ Sigma-IV Optic", "SZ SRO-7", "SZ Vortex-90", "Teplo Clear Shot", "Teplo-OP3 Scope", "Thermo-Optic X9", "Vigilant-30 C-Iron", "VLK 4.0 Optic", "VX350 Thermal Optic", "XRK On-Point Optic", "XTen Angel-40"],
      UnderBarrel: ["Agent Grip", "Bipod v9 Grip", "Bruen Sync Shot Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Commando Foregrip", "Core BP2", "Cornerstone Bipod", "Cronen Grooveshot", "Demo Cleanshot 40", "Demo Firm Grip", "Demo Imp-44 Grip", "DM Proto-Grip", "Edge-47 Grip", "EXF Backdraft Grip", "FSS Sharkfin 90", "FTAC Ripper 56", "FTAC Tiger Grip", "HEX-40 Grip", "Level Aim Bipod", "Lockgrip Precision-40", "Merc Foregrip", "Op-X9 Foregrip", "Operator Foregrip", "Phase-3 Grip", "Schlager Tango", "TL40 Fire Drake", "TV Wrecker Grip", "VX Pineapple", "XTen Drop Grip", "XTen Gravedigger", "XTen Nexus Grip", "XTen Stable Shot"],
      Magazine: ["45 Round Mag", "60 Round Mag"],
      Reargrip: ["Casus X", "FLT-22", "ERG-X1"],
      Stock: ["TR Preamble", "OPR Threat", "TA Ergo"],
      Laser: ["1mW Laser Box", "Canted Vibro-Dot 7", "Corio LAZ-44 v3", "Corvus PEQ Beam-5", "DXS Flash 90", "FSS OLE-V Laser", "FTAC Grimline Laser", "Luminate-44", "Schlager PEQ Box IV", "STOVL DR Laser Box", "SZ 1mW PEQ"],
      Ammunition: ["5.45 Overpressured +P", "5.45 High Velocity", "5.45 Hollow Point", "5.45 Armor Piercing", "5.45 Frangible"]
    }
  },
  {
    name: "TR-76",
    category: "AR",
    image: "/images/weapons/TR-76_Geist_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["Bore-490", "Cronen Dark KX30", "Echoline GS-X", "Eight-PointFlash Hider", "FR Titan Silencer", "GL Clear Breach", "Husher-65 Silencer", "Kastovia DX90", "Lockshot KT85", "Polarfire-S", "SA Leveler 5b", "Sakin Tread-40", "TA HUL-Breach", "Tempus GH50", "TY-LR8", "TZL-90 V3", "ZLR Talon 5", "Zulo-60"],
      Barrel: ["Bruen Bridle 60", "LOC.5 Long Barrel", "LOC.2 Short Barrel", "Bruen Bridle Heavy", "Freight-40 Barrel"],
      Optic: ["3x RFL-Optic", "Aim Op-v4", "Angel-40 4.8x", "Ares Clear Shot", "BPZ40 Hybrid", "Corio Enforcer Optic", "Corio Reflex", "Corvus Downrange-00", "Corvus Sol-76", "Cronen Mini Pro", "Cronen Zero-P Optic", "DF105 Reflex Sight", "DR582 Hybrid Sight", "DrexSom Prime-90", "DS Farsight 11", "Forge Tac Delta 4", "FTac Charlie7", "HMW-20 Optic", "Hybrid FirePoint", "Kazan-Holo", "Luca Bandera Scope", "Monocle CT90", "Schlager 3.4x", "Schlager Night View", "Slimline Pro", "SZ Aggressor-IR Optic", "SZ Battle Optic", "SZ Bullseye Optic", "SZ HoloTherm", "SZ Lonewolf Optic", "SZ Mini", "SZ MiniTac-40", "SZ Oscar-9", "SZ Recharge-DX", "SZ Sigma-IV Optic", "SZ Vortex-90", "Teplo Clear Shot", "Teplo-OP3 Scope", "Thermo-Optic X9", "Vigilant-30 C-Iron", "VLK 4.0 Optic", "VX350 Thermal Optic", "XRK On-Point Optic", "XTen Angel-40"],
      UnderBarrel: ["Agent Grip", "Bipod v9 Grip", "Bruen Sync Shot Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Commando Foregrip", "Core BP2", "Cornerstone Bipod", "Cronen Grooveshot", "Demo Cleanshot 40", "Demo Firm Grip", "Demo Imp-44 Grip", "Edge-47 Grip", "EXF Backdraft Grip", "FSS Sharkfin 90", "FTAC Ripper 56", "HEX-40 Grip", "Level Aim Bipod", "Lockgrip Precision-40", "Merc Foregrip", "Op-X9 Foregrip", "Operator Foregrip", "Phase-3 Grip", "Schlager Tango", "TV Wrecker Grip", "VX Pineapple", "XTen Drop Grip", "XTen Gravedigger", "XTen Nexus Grip", "XTen Stable Shot"],
      Magazine: ["45 Round Mag", "60 Round Mag"],
      Reargrip: ["STIP-66 Grip", "Cronen Resistor Grip", "Tactical Grip Tape"],
      Stock: ["Scout-LD Stock Pad", "Expedite Grid Pad", "Demo Tac Pad"],
      Laser: ["1mW Laser Box", "Canted Vibro-Dot 7", "Corio LAZ-44 v3", "Corvus PEQ Beam-5", "DXS Flash 90", "FSS OLE-V Laser", "FTAC Grimline Laser", "Luminate-44", "Schlager PEQ Box IV", "STOVL DR Laser Box", "SZ 1mW PEQ"],
      Ammunition: ["5.45 Overpressured +P", "5.45 High Velocity", "5.45 Hollow Point", "5.45 Armor Piercing", "5.45 Frangible"],
      Comb: ["LTX Eclipse", "SL-K Trim", "H1 Precision"]
    }
  },
  {
    name: "BAS-P",
    category: "SMG",
    image: "/images/weapons/BAS-P_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["AVR-T90 Comp", "Bruen Cubic Comp", "Bruen Pendulum", "EXF Huntress-90", "Forge DX90-F", "Fox-202 Flash Hider", "FSS Covert IV", "FTAC Castle Comp", "Lacerta Compensator", "Lockshot KT85", "SA Schalldämpfer 99", "Singuard MKV", "Spiral v3.5 Flash Hider", "TA HUL-Breach", "XRK Knockout Breach", "XRK Sandstorm", "XTen Black Kite", "XTen Razor Comp", "XTEN RR-40"],
      Barrel: [ "10.5\" Bruen Typhon", "12\" Bruen SZ-36", "4\" Thunderfire", "6.5\" Bruen Drake"],
      Optic: ["Aim Op-v4", "BPZ40 Hybrid", "Corio Enforcer Optic", "Corio Reflex", "Corvus Downrange-00", "Corvus Sol-76", "Cronen Mini Dot", "Cronen Mini Pro", "Cronen Zero-P Optic", "DF105 Reflex Sight", "DR582 Hybrid Sight", "Forge Tac Delta 4", "Hybrid FirePoint", "Kazan-Holo", "Monocle CT90", "Schlager 3.4x", "Schlager Night View", "Slimline Pro", "SZ Aggressor-IR Optic", "SZ Battle Optic", "SZ Bullseye Optic", "SZ HoloTherm", "SZ Lonewolf Optic", "SZ Mini", "SZ MiniTac-40", "SZ Oscar-9", "SZ Recharge-DX", "SZ Sigma-IV Optic", "SZ SRO-7", "SZ Vortex-90", "Teplo Clear Shot", "Teplo-OP3 Scope", "Thermo-Optic X9", "VLK 4.0 Optic", "VX350 Thermal Optic", "XRK On-Point Optic", "XTen Angel-40"],
      UnderBarrel: ["Agent Grip", "Bruen Sync Shot Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Cronen Grooveshot Grip", "Demo Cleanshot 40", "EXF Backdraft Grip", "FSS Sharkfin 90", "FTAC Tiger Grip", "HEX-40 Grip", "Lockgrip Precision-40", "Merc Foregrip", "Op-X9 Foregrip", "Operator Foregrip", "Phase-3 Grip", "Schlager Tango", "TV Wrecker Grip", "VX Pineapple", "XTen Drop Grip", "XTen Nexus Grip"],
      Magazine: ["20 Round Mag", "50 Round Drum"],
      Reargrip: ["Bruen Flash Grip", "Bruen GR-500", "D37 Grip"],
      Stock: ["BR Stockless Mod", "Bruen Flash v4 Stock", "Ravage-10"],
      Laser: ["1mW Artemis Laser", "1mW Quick Fire Laser", "7mW Canted Laser", "Accu-Shot 5mW Laser", "EXF Solarflare", "FJX Ultrabeam XR", "Hipshot L20", "Point-G3P 04", "Schlager ULO-66 Laser", "STOVL Tac Laser", "VLK LZR 7mW"],
      Ammunition: ["9mm Armor Piercing", "9mm Frangible", "9mm High Velocity", "9mm Hollow Point", "9mm Overpressured +P"]
    }
  },
  {
    name: "Fennec",
    category: "SMG",
    image: "/images/weapons/Fennec_45_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["AVR-T90 Comp", "Bruen Cubic Comp", "Bruen Pendulum", "EXF Huntress-90", "Forge DX90-F", "Fox-202 Flash Hider", "FSS Covert IV", "FTAC Castle Comp", "Lacerta Compensator", "Lockshot KT85", "SA Schalldämpfer 99", "Shikra Silencer", "Singuard MKV", "Spiral v3.5 Flash Hider", "TA HUL-Breach", "XRK Knockout Breach", "XRK Sandstorm", "XTen Black Kite", "XTen Razor Comp", "XTEN RR-40"],
      Barrel: ["5.5\" Fennec MiniTac", "Fennec Covert Force", "Forge Tac Ninja", "FTac 8.5\" Recon", "ZLR 16.5\" Ignition Barrel"],
      Optic: ["Aim Op-v4", "BPZ40 Hybrid", "Corio Enforcer Optic", "Corio Reflex", "Corvus Downrange-00", "Corvus Sol-76", "Cronen Mini Dot", "Cronen Mini Pro", "Cronen Zero-P Optic", "DF105 Reflex Sight", "DR582 Hybrid Sight", "Forge Tac Delta 4", "Hybrid FirePoint", "Kazan-Holo", "Monocle CT90", "Schlager 3.4x", "Schlager Night View", "Slimline Pro", "SZ Aggressor-IR Optic", "SZ Battle Optic", "SZ Bullseye Optic", "SZ HoloTherm", "SZ Lonewolf Optic", "SZ Mini", "SZ MiniTac-40", "SZ Oscar-9", "SZ Recharge-DX", "SZ Sigma-IV Optic", "SZ SRO-7", "SZ Vortex-90", "Teplo Clear Shot", "Teplo-OP3 Scope", "Thermo-Optic X9", "VLK 4.0 Optic", "VX350 Thermal Optic", "XRK On-Point Optic", "XTen Angel-40"],
      UnderBarrel: [ "Agent Grip", "Bruen Sync Shot Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "FSS Sharkfin 90", "FTAC Tiger Grip", "HEX-40 Grip", "Lockgrip Precision-40", "Merc Foregrip", "Op-X9 Foregrip", "Operator Foregrip", "Phase-3 Grip", "Schlager Tango", "TV Wrecker Grip", "VX Pineapple", "XTen Drop Grip", "XTen Nexus Grip"],
      Magazine: ["Fennec Double Tap Mod", "45 Round Drum"],
      Reargrip: ["Fennec Stippled Grip", "Fennec Textured Grip", "Fennec Rubber Grip"],
      Stock: ["Agile Assault-7 Stock", "Fennec Bullfighter", "FTAC Command Stock", "FTAC Locktight Stock", "FTAC Stock Cap"],
      Laser: ["1mW Artemis Laser", "1mW Quick Fire Laser", "7mW Canted Laser", "Accu-Shot 5mW Laser", "EXF Solarflare", "FJX Ultrabeam XR", "Hipshot L20", "Point-G3P 04", "Schlager ULO-66 Laser", "STOVL Tac Laser", "VLK LZR 7mW"],
      Ammunition: [".45 Auto Frangible", ".45 Auto Hollowpoint", ".45 Auto Armor Piercing", ".45 Auto Overpressured =+P"]
    }
  },
  {
    name: "FSS Hurricane",
    category: "SMG",
    image: "/images/weapons/FSS_Hurricane_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["AVR-T90 Comp", "Bruen Cubic Comp", "Bruen Pendulum", "EXF Huntress-90", "Forge DX90-F", "Fox-202 Flash Hider", "FSS Covert IV", "FTAC Castle Comp", "Lacerta Compensator", "Lockshot KT85", "SA Schalldämpfer 99", "Singuard MKV", "Spiral v3.5 Flash Hider", "TA HUL-Breach", "XRK Knockout Breach", "XRK Sandstorm", "XTen Black Kite", "XTen Razor Comp", "XTEN RR-40"],
      Barrel: ["FSS-X7 Barrel", "FSS Cannonade 16\""],
      Optic: ["Aim Op-v4", "Corio Enforcer Optic", "Corvus Downrange-00", "Corvus Sol-76", "Cronen Mini Dot", "Cronen Mini Pro", "Slimline Pro", "SZ Mini", "SZ MiniTac-40", "SZ Recharge-DX", "SZ Sigma-IV Optic", "XRK On-Point Optic"],
      UnderBarrel: [ "Commando Foregrip", "Edge-47 Grip", "Demo Firm Grip", "XTen Gravedigger", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo Imp-44 Grip", "Agent Grip", "Bruen Sync Shot Grip", "XTen Drop Grip", "XTen Nexus Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "Op-X9 Foregrip", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bruen Warrior Grip", "HEX-40 Grip", "FTAC Tiger Grip", "FSS Sharkfin 90", "VX Pineapple"],
      Reargrip: ["D15 Grip", "Sakin ZX Grip", "XTEN Grip", "Phantom Grip"],
      Stock: ["Assault-60 Stock Factory", "Ravage-8", "Demo Quicksilver Stock", "Demo Fade Pro Stock", "Demo Quicksilver Collapsed", "Torrent Span-9"],
      Laser: ["1mW Artemis Laser", "1mW Quick Fire Laser", "7mW Canted Laser", "Accu-Shot 5mW Laser", "EXF Solarflare", "FJX Ultrabeam XR", "Hipshot L20", "Point-G3P 04", "Schlager ULO-66 Laser", "STOVL Tac Laser", "VLK LZR 7mW"],
      Ammunition: ["5.7x28mm Frangible", "5.7x28mm Hollow Point", "5.7x28mm Armor Piercing", "5.7x28mm Overpressured =+P"]
    }
  },
  {
    name: "ISO 45",
    category: "SMG",
    image: "/images/weapons/ISO_45_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["AVR-T90 Comp", "Bruen Cubic Comp", "Bruen Pendulum", "EXF Huntress-90", "Forge DX90-F", "Fox-202 Flash Hider", "FSS Covert IV", "FTAC Castle Comp", "Lacerta Compensator", "Lockshot KT85", "SA Schalldämpfer 99", "Singuard MKV", "Spiral v3.5 Flash Hider", "TA HUL-Breach", "XRK Knockout Breach", "XRK Sandstorm", "XTen Black Kite", "XTen Razor Comp", "XTEN RR-40"],
      Barrel: ["4\" Frame S-1", "7\" EX Raptor-V2", "9\" PTX Trainer", "16\" XLB-S", "6\” Axeblade"],
      Optic: ["Aim Op-v4", "BPZ40 Hybrid", "Corio Enforcer Optic", "Corio Reflex", "Corvus Downrange-00", "Corvus Sol-76", "Cronen Mini Dot", "Cronen Mini Pro", "Cronen Zero-P Optic", "DF105 Reflex Sight", "DR582 Hybrid Sight", "Forge Tac Delta 4", "Hybrid FirePoint", "Kazan-Holo", "Monocle CT90", "Schlager 3.4x", "Schlager Night View", "Slimline Pro", "SZ Aggressor-IR Optic", "SZ Battle Optic", "SZ Bullseye Optic", "SZ HoloTherm", "SZ Lonewolf Optic", "SZ Mini", "SZ MiniTac-40", "SZ Oscar-9", "SZ Recharge-DX", "SZ Sigma-IV Optic", "SZ SRO-7", "SZ Vortex-90", "Teplo Clear Shot", "Teplo-OP3 Scope", "Thermo-Optic X9", "VLK 4.0 Optic", "VX350 Thermal Optic", "XRK On-Point Optic", "XTen Angel-40"],
      UnderBarrel: ["Agent Grip", "Bruen Sync Shot Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Commando Foregrip", "Cronen Grooveshot Grip", "Demo Cleanshot 40", "Demo Firm Grip", "Demo Imp-44 Grip", "Edge-47 Grip", "EXF Backdraft Grip", "FSS Sharkfin 90", "FTAC Ripper 56", "FTAC Tiger Grip", "HEX-40 Grip", "Lockgrip Precision-40", "Merc Foregrip", "Op-X9 Foregrip", "Operator Foregrip", "Phase-3 Grip", "Schlager Tango", "TV Wrecker Grip", "VX Pineapple", "XTen Drop Grip", "XTen Gravedigger", "XTen Nexus Grip" ],
      Magazine: ["12 Round Mag", "45 Round Mag"],
      Reargrip: ["A30 Stout", "EXP Shear", "Stalwart GX"],
      Stock: ["SK-3 Cheetah", "Mace 650", "DEMO Fade Tac", "Torrent Span-9", "Collapsed Stock", "RES2"],
      Laser: ["1mW Artemis Laser", "1mW Quick Fire Laser", "7mW Canted Laser", "Accu-Shot 5mW Laser", "EXF Solarflare", "FJX Ultrabeam XR", "Hipshot L20", "Point-G3P 04", "Schlager ULO-66 Laser", "STOVL Tac Laser", "VLK LZR 7mW"],
      Ammunition: ["•45 Auto Frangible", ".45 Auto Hollowpoint", ".45 Auto Armor Piercing", ".45 Auto Overpressured =+P"]
    }
  },
  {
    name: "ISO 9mm",
    category: "SMG",
    image: "/images/weapons/ISO_9mm_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["AVR-T90 Comp", "Bruen Cubic Comp", "Bruen Pendulum", "EXF Huntress-90", "Forge DX90-F", "Fox-202 Flash Hider", "FSS Covert IV", "FTAC Castle Comp", "Lacerta Compensator", "Lockshot KT85", "SA Schalldämpfer 99", "Singuard MKV", "Spiral v3.5 Flash Hider", "TA HUL-Breach", "XRK Knockout Breach", "XRK Sandstorm", "XTen Black Kite", "XTen Razor Comp", "XTEN RR-40"],
      Barrel: ["16\" XLB-S", "6\" Axeblade", "7\" EX Raptor-V2", "9\" PTX Trainer", "ISO 45 Factory"],
      Optic: ["Aim Op-v4", "BPZ40 Hybrid", "Corio Enforcer Optic", "Corio Reflex", "Corvus Downrange-00", "Corvus Sol-76", "Cronen Mini Dot", "Cronen Mini Pro", "Cronen Zero-P Optic", "DF105 Reflex Sight", "DR582 Hybrid Sight", "Forge Tac Delta 4", "Hybrid FirePoint", "Kazan-Holo", "Monocle CT90", "Schlager 3.4x", "Schlager Night View", "Slimline Pro", "SZ Aggressor-IR Optic", "SZ Battle Optic", "SZ Bullseye Optic", "SZ HoloTherm", "SZ Lonewolf Optic", "SZ Mini", "SZ MiniTac-40", "SZ Oscar-9", "SZ Recharge-DX", "SZ Sigma-IV Optic", "SZ SRO-7", "SZ Vortex-90", "Teplo Clear Shot", "Teplo-OP3 Scope", "Thermo-Optic X9", "VLK 4.0 Optic", "VX350 Thermal Optic", "XRK On-Point Optic", "XTen Angel-40"],
      UnderBarrel: [ "Agent Grip", "Bruen Sync Shot Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Commando Foregrip", "Cronen Grooveshot Grip", "Demo Cleanshot 40", "Demo Firm Grip", "Demo Imp-44 Grip", "Edge-47 Grip", "EXF Backdraft Grip", "FSS Sharkfin 90", "FTAC Ripper 56", "FTAC Tiger Grip", "HEX-40 Grip", "Lockgrip Precision-40", "Merc Foregrip", "Op-X9 Foregrip", "Operator Foregrip", "Phase-3 Grip", "Schlager Tango", "TV Wrecker Grip", "VX Pineapple", "XTen Drop Grip", "XTen Gravedigger", "XTen Nexus Grip"],
      Magazine: ["20 Round Mag", "50 Round Drum"],
      Reargrip: ["Stalwart GX", "EXP Shear", "A30 Stout"],
      Stock: ["Mace 650", "DEMO Fade Tac", "Torrent Span-9", "Collapsed Stock", "RES 2"],
      Laser: ["1mW Artemis Laser", "1mW Quick Fire Laser", "7mW Canted Laser", "Accu-Shot 5mW Laser", "EXF Solarflare", "FJX Ultrabeam XR", "Hipshot L20", "Point-G3P 04", "Schlager ULO-66 Laser", "STOVL Tac Laser", "VLK LZR 7mW"],
      Ammunition: ["9mm Frangible", "9mm Hollow Point", "9mm Armor Piercing", "9mm Overpressured +P", "9mm High Velocity"]
    }
  },
  {
    name: "Lachmann Shroud",
    category: "SMG",
    image: "/images/weapons/Lachmann_Shroud_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Barrel: ["170mm Grapple VI", "114mm Darkstar"],
      Optic: ["Aim Op-v4", "BPZ40 Hybrid", "Corio Enforcer Optic", "Corio Reflex", "Corvus Downrange-00", "Corvus Sol-76", "Cronen Mini Dot", "Cronen Mini Pro", "Cronen Zero-P Optic", "DF105 Reflex Sight", "DR582 Hybrid Sight", "Forge Tac Delta 4", "Hybrid FirePoint", "Kazan-Holo", "Monocle CT90", "Schlager 3.4x", "Schlager Night View", "Slimline Pro", "SZ Aggressor-IR Optic", "SZ Battle Optic", "SZ Bullseye Optic", "SZ HoloTherm", "SZ Lonewolf Optic", "SZ Mini", "SZ MiniTac-40", "SZ Oscar-9", "SZ Recharge-DX", "SZ Sigma-IV Optic", "SZ SRO-7", "SZ Vortex-90", "Teplo Clear Shot", "Teplo-OP3 Scope", "VLK 4.0 Optic", "XRK On-Point Optic", "XTen Angel-40"],
      UnderBarrel: ["Agent Grip", "Bruen Sync Shot Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "FSS Sharkfin 90", "FTAC Tiger Grip", "HEX-40 Grip", "Lockgrip Precision-40", "Merc Foregrip", "Op-X9 Foregrip", "Operator Foregrip", "Phase-3 Grip", "Schlager Tango", "v TV Wrecker Grip", "VX Pineapple", "XTen Drop Grip", "XTen Nexus Grip"],
      Magazine: ["15 Round Mag", "40 Round Mag", "50 Round Drum"],
      Reargrip: ["Lachmann TCG-10", "LM Cronus Grip"],
      Stock: ["Factory Stock", "FT Mobile Stock", "Lachmann S76", "LM Stockless Mod", "Meer Recoil-56"],
      Laser: ["1mW Artemis Laser", "1mW Quick Fire Laser", "7mW Canted Laser", "Accu-Shot 5mW Laser", "EXF Solarflare", "FJX Ultrabeam XR", "Hipshot L20", "Point-G3P 04", "Schlager ULO-66 Laser", "STOVL Tac Laser", "VLK LZR 7mW"],
      Ammunition: ["9mm Sub FR", "9mm Sub HP", "9mm Sub AP", "9mm Sub OP"]
    }
  },
  {
    name: "Lachmann Sub",
    category: "SMG",
    image: "/images/weapons/Lachmann_Sub_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["AVR-T90 Comp", "Bruen Cubic Comp", "Bruen Pendulum", "EXF Huntress-90", "Forge DX90-F", "Fox-202 Flash Hider", "FSS Covert IV", "FTAC Castle Comp", "Lacerta Compensator", "Lockshot KT85", "SA Schalldämpfer 99", "Singuard MKV", "Spiral v3.5 Flash Hider", "TA HUL-Breach", "XRK Knockout Breach", "XRK Sandstorm", "XTen Black Kite", "XTen Razor Comp", "XTEN RR-40"],
      Barrel: ["FTac M-SUB 12\"", "L38 Falcon 226mm", "Lachmann Pulsar"],
      Optic: ["Aim Op-v4", "BPZ40 Hybrid", "Corio Enforcer Optic", "Corio Reflex", "Corvus Downrange-00", "Corvus Sol-76", "Cronen Mini Dot", "Cronen Mini Pro", "Cronen Zero-P Optic", "DF105 Reflex Sight", "DR582 Hybrid Sight", "Forge Tac Delta 4", "Hybrid FirePoint", "Kazan-Holo", "Monocle CT90", "Schlager 3.4x", "Schlager Night View", "Slimline Pro", "SZ Aggressor-IR Optic", "SZ Battle Optic", "SZ Bullseye Optic", "SZ HoloTherm", "SZ Lonewolf Optic", "SZ Mini", "SZ MiniTac-40", "SZ Oscar-9", "SZ Recharge-DX", "SZ Sigma-IV Optic", "SZ SRO-7", "SZ Vortex-90", "Teplo Clear Shot", "Teplo-OP3 Scope", "VLK 4.0 Optic", "XRK On-Point Optic", "XTen Angel-40"],
      UnderBarrel: ["Agent Grip", "Bruen Sync Shot Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "FSS Sharkfin 90", "FTAC Tiger Grip", "HEX-40 Grip", "Lockgrip Precision-40", "Merc Foregrip", "Op-X9 Foregrip", "Operator Foregrip", "Phase-3 Grip", "Schlager Tango", "TV Wrecker Grip", "VX Pineapple", "XTen Drop Grip", "XTen Nexus Grip"],
      Magazine: ["15 Round Mag", "40 Round Mag", "50 Round Drum"],
      Reargrip: ["Lachmann TCG-10", "LM Cronus Grip"],
      Stock: ["Factory Stock", "FT Mobile Stock", "Lachmann S76", "LM Stockless Mod", "Meer Recoil-56"],
      Laser: ["1mW Artemis Laser", "1mW Quick Fire Laser", "7mW Canted Laser", "Accu-Shot 5mW Laser", "EXF Solarflare", "FJX Ultrabeam XR", "Hipshot L20", "Point-G3P 04", "Schlager ULO-66 Laser", "STOVL Tac Laser", "VLK LZR 7mW"],
      Ammunition: ["9mm Armor Piercing", "9mm Frangible", "9mm High Velocity", "9mm Hollow Point", "9mm Overpressured +P"]
    }
  },
  {
    name: "Minibak",
    category: "SMG",
    image: "/images/weapons/Minibak_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["AVR-T90 Comp", "Bruen Cubic Comp", "Bruen Pendulum", "EXF Huntress-90", "Forge DX90-F", "Fox-202 Flash Hider", "FSS Covert IV", "FTAC Castle Comp", "Lacerta Compensator", "Lockshot KT85", "SA Schalldämpfer 99", "Singuard MKV", "Spiral v3.5 Flash Hider", "TA HUL-Breach", "XRK Knockout Breach", "XRK Sandstorm", "XTen Black Kite", "XTen Razor Comp", "XTEN RR-40"],
      Barrel: ["Bak-9 279mm Barrel"],
      Optic: ["Aim Op-v4", "BPZ40 Hybrid", "Corio Enforcer Optic", "Corio Reflex", "Corvus Downrange-00", "Corvus Sol-76", "Cronen Mini Dot", "Cronen Mini Pro", "Cronen Zero-P Optic", "DF105 Reflex Sight", "DR582 Hybrid Sight", "Forge Tac Delta 4", "Hybrid FirePoint", "Kazan-Holo", "Monocle CT90", "Schlager 3.4x", "Schlager Night View", "Slimline Pro", "SZ Aggressor-IR Optic", "SZ Battle Optic", "SZ Bullseye Optic", "SZ HoloTherm", "SZ Lonewolf Optic", "SZ Mini", "SZ MiniTac-40", "SZ Oscar-9", "SZ Recharge-DX", "SZ Sigma-IV Optic", "SZ SRO-7", "SZ Vortex-90", "Teplo Clear Shot", "Teplo-OP3 Scope", "Thermo-Optic X9", "VLK 4.0 Optic", "VX350 Thermal Optic", "XRK On-Point Optic", "XTen Angel-40"],
      Magazine: ["Minibak Grip Mag"],
      Reargrip: ["Demo-X2 Grip", "Ivanov ST-70 Grip", "True-Tac Grip"],
      Stock: ["Broadside FCT", "FT Tac-Elite Stock", "Markeev R7 Stock", "Otrezat Stock", "Spetsnaz S10 Stock", "VLK Stockless"],
      Laser: ["1mW Artemis Laser", "1mW Quick Fire Laser", "7mW Canted Laser", "Accu-Shot 5mW Laser", "EXF Solarflare", "FJX Ultrabeam XR", "Hipshot L20", "Point-G3P 04", "Schlager ULO-66 Laser", "STOVL Tac Laser", "VLK LZR 7mW"],
      Ammunition: ["9mm Frangible", "9mm Hollowpoint", "9mm Armor Piercing", "9mm Overpressured +P"]
    }
  },
  {
    name: "MX9",
    category: "SMG",
    image: "/images/weapons/MX9_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["AVR-T90 Comp", "Bruen Cubic Comp", "Bruen Pendulum", "EXF Huntress-90", "Forge DX90-F", "Fox-202 Flash Hider", "FSS Covert IV", "FTAC Castle Comp", "Lacerta Compensator", "Lockshot KT85", "SA Schalldämpfer 99", "Singuard MKV", "Spiral v3.5 Flash Hider", "TA HUL-Breach", "XRK Knockout Breach", "XRK Sandstorm", "XTen Black Kite", "XTen Razor Comp", "XTEN RR-40"],
      Barrel: ["16.5\" Bruen S901", "16.5\" STB Factory", "508mm Rear Guard"],
      Optic: ["Aim Op-v4", "BPZ40 Hybrid", "Corio Enforcer Optic", "Corio Reflex", "Corvus Downrange-00", "Corvus Sol-76", "Cronen Mini Dot", "Cronen Mini Pro", "Cronen Zero-P Optic", "DF105 Reflex Sight", "DR582 Hybrid Sight", "Forge Tac Delta 4", "Hybrid FirePoint", "Kazan-Holo", "Luca Canis 4x Optic", "Monocle CT90", "Schlager 3.4x", "Schlager Night View", "Slimline Pro", "SZ Aggressor-IR Optic", "SZ Battle Optic", "SZ Bullseye Optic", "SZ HoloTherm", "SZ Lonewolf Optic", "SZ Mini", "SZ MiniTac-40", "SZ Oscar-9", "SZ Recharge-DX", "SZ Sigma-IV Optic", "SZ SRO-7", "SZ Vortex-90", "Teplo Clear Shot", "Teplo-OP3 Scope", "Thermo-Optic X9", "VLK 4.0 Optic", "VX350 Thermal Optic", "XRK On-Point Optic", "XTen Angel-40"],
      Magazine: ["32 Round Mag"],
      Reargrip: ["Bruen G305 Grip Wrap", "Bruen Q900 Grip", "STIP-40 Grip"],
      Stock: ["Bruen HCR 56 Stock", "Bruen STB 556 Stock"],
      Laser: ["1mW Artemis Laser", "1mW Quick Fire Laser", "7mW Canted Laser", "Accu-Shot 5mW Laser", "EXF Solarflare", "FJX Ultrabeam XR", "Hipshot L20", "Point-G3P 04", "Schlager ULO-66 Laser", "STOVL Tac Laser", "VLK LZR 7mW"],
      Ammunition: ["9mm Sub AP", "9mm Sub FR", "9mm Sub HP", "9mm Sub OP"],
      Comb: ["Bruen TS-30 Comb", "FTAC C11 Riser", "Schlager TTF3 Riser"]
    }
  },
  {
    name: "PDSW 528",
    category: "SMG",
    image: "/images/weapons/PDSW_528_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["AVR-T90 Comp", "Bruen Cubic Comp", "Bruen HCR 56 Stock", "Bruen Pendulum", "Bruen STB 556 Stock", "EXF Huntress-90", "Forge DX90-F", "Fox-202 Flash Hider", "FSS Covert IV", "FTAC Castle Comp", "Lacerta Compensator", "Lockshot KT85", "SA Schalldämpfer 99", "Singuard MKV", "Spiral v3.5 Flash Hider", "TA HUL-Breach", "XRK Knockout Breach", "XRK Sandstorm", "XTen Black Kite", "XTen Razor Comp", "XTEN RR-40"],
      Barrel: ["9.5\" Duke-30", "FTac Series IX 14.5\"", "FTac Defense 14.5\"", "17\" Corvus ProRange", "16\" Cloak 90", "18.75\" Cloak 90"],
      Optic: ["Slimline Pro", "SZ Mini", "Cronen Mini Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "SZ MiniTac-40", "XRK On-Point Optic", "Aim Op-v4", "DF105 Reflex Sight", "Monocle CT90", "Corvus Sol-76", "SZ Recharge-DX", "SZ SRO-7", "Corio Reflex", "Corio Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Battle Optic", "Corvus Downrange-00", "SZ HoloTherm", "XTen Angel-40", "VLK 4.0 Optic", "Schlager 3.4x", "Forge Tac Delta 4", "Cronen Zero-P Optic", "SZ Bullseye Optic", "SZ Aggressor-IR Optic", "Schlager Night View", "VX350 Thermal Optic", "Teplo-OP3 Scope", "DR582 Hybrid Sight", "Hybrid FirePoint", "SZ Vortex-90", "BPZ40 Hybrid", "SZ Oscar-9", "Thermo-Optic X9", "Teplo Clear Shot"],
      UnderBarrel: [ "Agent Grip", "Bruen Sync Shot Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Commando Foregrip", "Cronen Grooveshot Grip", "Demo Cleanshot 40", "Demo Firm Grip", "Demo Imp-44 Grip", "Edge-47 Grip", "EXF Backdraft Grip", "FSS Sharkfin 90", "FTAC Ripper 56", "FTAC Tiger Grip", "HEX-40 Grip", "Lockgrip Precision-40", "Merc Foregrip", "Op-X9 Foregrip", "Operator Foregrip", "Phase-3 Grip", "Schlager Tango", "TV Wrecker Grip", "VX Pineapple", "XTen Drop Grip", "XTen Gravedigger", "XTen Nexus Grip"],
      Reargrip: ["Bruen G305 Grip Wrap", "STIP-40 Grip", "Bruen Q900 Grip"],
      Stock: ["Hollow Extended Stock", "CQB Stock", "Guard Duty Stock", "FSS Heavy Stock Pro"],
      Laser: ["1mW Artemis Laser", "1mW Quick Fire Laser", "7mW Canted Laser", "Accu-Shot 5mW Laser", "EXF Solarflare", "FJX Ultrabeam XR", "Hipshot L20", "Point-G3P 04", "Schlager ULO-66 Laser", "STOVL Tac Laser", "VLK LZR 7mW"],
      Ammunition: ["5.7x28mm Frangible", "5.7x28mm Hollow Point", "5.7x28mm Armor Piercing", "5.7x28mm Overpressured"],
      Comb: ["Mack 8 Ontrak Comb", "FTAC H86 Cheek Rest", "TV TacComb"],
      Rail: ["Integrated Reflex Rail", "GR33 Light Rail"]
    }
  },
  {
    name: "Vaznev-9K",
    category: "SMG",
    image: "/images/weapons/Vaznev-9K_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: [ "XTen Razor Comp", "TA HUL-Breach", "XTEN RR-40", "Forge DX90-F", "SA Schalldämpfer 99", "Singuard MKV", "EXF Huntress-90", "XTen Black Kite", "FSS Covert IV", "Bruen Pendulum", "AVR-T90 Comp", "Lacerta Compensator", "FTAC Castle Comp", "XRK Sandstorm", "Lockshot KT85", "Bruen Cubic Comp", "Spiral v3.5 Flash Hider", "Fox-202 Flash Hider", "XRK Knockout Breach"],
      Barrel: ["KAS-1 254mm", "SA Response III"],
      Optic: ["Slimline Pro", "SZ Mini", "Cronen Mini Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "SZ MiniTac-40", "XRK On-Point Optic", "Aim Op-v4", "DF105 Reflex Sight", "Monocle CT90", "Corvus Sol-76", "SZ Recharge-DX", "SZ SRO-7", "Corio Reflex", "Corio Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Battle Optic", "Corvus Downrange-00", "SZ HoloTherm", "XTen Angel-40", "VLK 4.0 Optic", "Schlager 3.4x", "Forge Tac Delta 4", "Cronen Zero-P Optic", "SZ Bullseye Optic", "SZ Aggressor-IR Optic", "Schlager Night View", "VX350 Thermal Optic", "Teplo-OP3 Scope", "DR582 Hybrid Sight", "Hybrid FirePoint", "SZ Vortex-90", "BPZ40 Hybrid", "SZ Oscar-9", "Thermo-Optic X9", "Teplo Clear Shot"],
      UnderBarrel: ["Commando Foregrip", "Edge-47 Grip", "Demo Firm Grip", "XTen Gravedigger", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo Imp-44 Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTen Drop Grip", "XTen Nexus Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Op-X9 Foregrip", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bruen Warrior Grip", "HEX-40 Grip", "FTAC Tiger Grip"],
      Magazine: ["45 Round Mag"],
      Reargrip: ["Ivanov ST-70 Grip", "Demo-X2 Grip", "True-Tac Grip"],
      Stock: ["Spetsnaz S10 Stock", "FT Tac-Elite Stock", "Markeev R7 Stock", "Otrezat Stock", "Broadside FCT", "VLK Stockless"],
      Laser: ["1mW Artemis Laser", "1mW Quick Fire Laser", "7mW Canted Laser", "Accu-Shot 5mW Laser", "EXF Solarflare", "FJX Ultrabeam XR", "Hipshot L20", "Point-G3P 04", "Schlager ULO-66 Laser", "STOVL Tac Laser", "VLK LZR 7mW"],
      Ammunition: ["9mm Frangible", "9mm Hollow Point", "9mm Armor Piercing", "9mm Overpressured +P", "9mm High Velocity"]
    }
  },
  {
    name: "VEL 46",
    category: "SMG",
    image: "/images/weapons/VEL_46_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["XTEN RR-40", "Forge DX90-F", "SA Schalldämpfer 99", "Singuard MKV", "EXF Huntress-90", "XTen Black Kite", "FSS Covert IV", "Bruen Pendulum", "AVR-T90 Comp", "Lacerta Compensator", "FTAC Castle Comp", "XRK Sandstorm", "Lockshot KT85", "Bruen Cubic Comp", "Spiral v3.5 Flash Hider", "Fox-202 Flash Hider", "XRK Knockout Breach", "XTen Razor Comp", "TA HUL-Breach"],
      Barrel: ["Tango 228 Barrel", "Schlager RV-B", "Schlager L203 Barrel", "Lach-DX 203mm", "Lachmann Dart 165mm", "Lach-152 Zulu", "LM Series-7"],
      Optic: ["Slimline Pro", "SZ Mini", "Cronen Mini Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "SZ MiniTac-40", "XRK On-Point Optic", "Aim Op-v4", "DF105 Reflex Sight", "Monocle CT90", "Corvus Sol-76", "SZ Recharge-DX", "SZ SRO-7", "Corio Reflex", "Corio Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Battle Optic", "Corvus Downrange-00", "SZ HoloTherm", "XTen Angel-40", "VLK 4.0 Optic", "Schlager 3.4x", "Forge Tac Delta 4", "Cronen Zero-P Optic", "SZ Bullseye Optic", "SZ Aggressor-IR Optic", "Schlager Night View", "VX350 Thermal Optic", "Teplo-OP3 Scope", "DR582 Hybrid Sight", "Hybrid FirePoint", "SZ Vortex-90", "BPZ40 Hybrid", "SZ Oscar-9", "Thermo-Optic X9", "Teplo Clear Shot"],
      UnderBarrel: ["Commando Foregrip", "Edge-47 Grip", "Demo Firm Grip", "XTen Gravedigger", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo Imp-44 Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTen Drop Grip", "XTen Nexus Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Op-X9 Foregrip", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bruen Warrior Grip", "HEX-40 Grip", "FTAC Tiger Grip"],
      Magazine: ["30 Round Mag", "50 Round Mag", "60 Round Mag"],
      Reargrip: ["Sakin Rubber Grip", "ZLR Combat Grip", "Schlager Soldier Grip"],
      Stock: ["LM Precision Stock", "Assault-60 Stock", "Demo RXT Stock", "VEL A-568 Collapsed"],
      Later: ["1mW Artemis Laser", "1mW Quick Fire Laser", "7mW Canted Laser", "Accu-Shot 5mW Laser", "EXF Solarflare", "FJX Ultrabeam XR", "Hipshot L20", "Point-G3P 04", "Schlager ULO-66 Laser", "STOVL Tac Laser", "VLK LZR 7mW"],
      Ammunition: ["4.6mm Frangible", "4.6mm Hollowpoint", "4.6mm Armor Piercing", "4.6mm Overpressured +P"]
    }
  },
  {
    name: "556 Icarus",
    category: "LMG",
    image: "/images/weapons/556_Icarus_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["JCZ-390", "muzzle device", "Corvus Slash Gen. 2", "Cronen MAW-86", "Dark KX30", "VLK Koloss Flash Hider", "Broadhead-3DP", "Zulu-60", "Harbinger D20", "Echoless-80", "FSS Covert V", "Gauge-9 Mono", "RF Crown 50", "Komodo Heavy", "XTen Ported 290", "FJX Fulcrum Pro", "XTEN Havoc 90", "Sakin Tread-40", "C400 Door Knocker", "Echoline GS-X", "FTAC Castle Comp", "Silentfire XG6", "Cronen OP44"],
      Barrel: ["FTac Coldforge", "16\" Barrel", "FTac SB"],
      Optic: ["Slimline Pro", "SZ Mini", "Cronen Mini Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "SZ MiniTac-40", "XRK On-Point Optic", "Aim Op-v4", "DF105 Reflex Sight", "Monocle CT90", "Corvus Sol-76", "SZ Recharge-DX", "Corio Reflex", "Corio Enforcer Optic", "Kazan-Holo", "SZ Battle Optic", "Corio Reflex", "Corio Enforcer Optic", "Kazan-Holo", "SZ Battle Optic", "Corvus Downrange-00", "SZ HoloTherm", "XTen Angel-40", "VLK 4.0 Optic", "Schlager 3.4x", "Cronen Zero-P Optic", "SZ Bullseye Optic", "Teplo-OP3 Scope", "DR582 Hybrid Sight", "Hybrid FirePoint", "SZ Vortex-90", "BPZ40 Hybrid", "SZ Oscar-9", "SZ SRO-7", "SZ Lonewolf Optic", "Forge Tac Delta 4"],
      UnderBarrel: ["Commando Foregrip", "Edge-47 Grip", "Demo Firm Grip", "XTen Gravedigger", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo Imp-44 Grip", "Agent Grip", "Bruen Sync Shot Grip", "XTen Drop Grip", "XTen Nexus Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "Op-X9 Foregrip", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Cronen Grooveshot", "EXF Backdraft Grip", "Bipod v9 Grip", "Level Aim Bipod", "Cornerstone Bipod", "XTen Stable Shot", "Bruen Warrior Grip", "HEX-40 Grip", "Core BP2", "FTAC Tiger Grip", "FSS Sharkfin 90", "VX Pineapple"],
      Magazine: ["100 Round Box Mag"],
      Reargrip: ["D15 Grip", "Sakin ZX Grip", "XTEN Grip"],
      Stock: ["Ravage-8", "Demo Fade Pro Stock", "Demo Precision", "Elite Factory", "Corio Precio Factory", "Torrent Span-9", "PSO Heavy"],
      Laser: ["SZ 1mW PEQ", "Schlager PEQ Box IV", "Corio LAZ-44 v3", "FSS OLE-V Laser", "Canted Vibro-Dot 7", "STOVL DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90", "1mW Laser Box"],
      Ammunition: ["5.56 Frangible", "5.56 Hollowpoint", "5.56 Armor Piercing", "5.56 Overpressured +P", "5.56 High Velocity", "5.56 Incendiary"] 
    }
  },
  {
    name: "HCR-56",
    category: "LMG",
    image: "/images/weapons/HCR_56_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["C400 Door Knocker", "JCZ-390 muzzle device", "Corvus Slash Gen. 2", "Cronen MAW-86", "Dark KX30", "VLK Koloss Flash Hider", "Broadhead-3DP", "Echoline GS-X", "Zulu-60", "Harbinger D20", "Echoless-80", "FSS Covert V", "Gauge-9 Mono", "RF Crown 50", "Komodo Heavy", "XTen Ported 290", "FJX Fulcrum Pro", "FTAC Castle Comp", "XTEN Havoc 90", "Sakin Tread-40", "Silentfire XG6", "Cronen OP44"],
      Barrel: ["Bruen Turaco 686mm", "FTac Hornet 20\" Barrel", "18\" Bruen Guerilla", "20\" Bruen S-620"],
      Optic: ["Slimline Pro", "SZ Mini", "Cronen Mini Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "SZ MiniTac-40", "XRK On-Point Optic", "Aim Op-v4", "DF105 Reflex Sight", "Monocle CT90", "Corvus Sol-76", "SZ Recharge-DX", "SZ SRO-7", "Corio Reflex", "Corio Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Battle Optic", "Corvus Downrange-00", "SZ HoloTherm", "XTen Angel-40", "VLK 4.0 Optic", "Schlager 3.4x", "Forge Tac Delta 4", "Cronen Zero-P Optic", "SZ Bullseye Optic", "SZ Aggressor-IR Optic", "Schlager Night View", "VX350 Thermal Optic", "Teplo-OP3 Scope", "DR582 Hybrid Sight", "Hybrid FirePoint", "Sz Vortex-90", "BPZ40 Hybrid", "SZ Oscar-9", "Thermo-Optic X9", "Teplo Clear Shot", "FTac Charlie7", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "3x RFL-Optic", "DrexSom Prime-90", "Ares Clear Shot", "Luca Canis 4x Optic"],
      UnderBarrel: ["Commando Foregrip", "Edge-47 Grip", "Demo Firm Grip", "XTen Gravedigger", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo Imp-44 Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTen Drop Grip", "XTen Nexus Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Op-X9 Foregrip", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Cronen Grooveshot", "Grip", "EXF Backdraft Grip", "Bipod v9 Grip", "Bruen Warrior Grip", "HEX-40 Grip", "Core BP2", "FTAC Tiger Grip", "Bruen Heavy Bipod"],
      Magazine: ["100 Round Mag", "42 Round Mag", "30 Round Mag"],
      Reargrip: ["Bruen G305 Grip Wrap", "STIP-40 Grip", "Bruen Q900 Grip"],
      Stock: ["Bruen STB 556 Stock", "Bruen MX9 Stock"],
      Laser: ["1mW Artemis Laser", "1mW Quick Fire Laser", "Accu-Shot 5mW Laser", "VLK LZR 7mW", "7mW Canted Laser", "Schlager ULO-66 Laser", "STOVL Tac Laser", "Hipshot L20", "Point-G3P 04", "FJX Ultrabeam XR", "EXF Solarflare"],
      Ammunition: ["5.56 Frangible", "5.56 Hollowpoint", "5.56 Armor Piercing", "5.56 Overpressured +P", "5.56 High Velocity", "5.56 Incendiary"],
      Comb: ["Schlager TTF3 Riser", "Bruen TS-30 Comb", "FTAC C11 Riser"]
    }
  },
  {
    name: "RALL MG",
    category: "LMG",
    image: "/images/weapons/RAAL_MG_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["AP-390 Flash Hide", "Ported DZ38", "Dark KX50 Flash Hi", "Nilsound 90", "FTac Reaper", "Bruen Agent 90", "Talon Sixteen", "EXF Relentless-40", "BVM-338", "Cronen DM338", "XRK Kraken", "TA CG76", "FTAC Dreadnought", "Shred CP90", "Demon Helix T7"],
      Barrel: ["EXF Gulf-16 Barrel", "21\" EXF Rhino Barrel", "26.5\" Demo Field", "Pro Barrel"],
      Optic: ["Slimline Pro", "SZ Mini", "Cronen Mini Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "SZ Mini Tac-40", "XRK On-Point Optic", "Aim Op-v4", "DF105 Reflex Sight", "Monocle CT90", "Corvus Sol-76", "SZ Recharge-DX", "SZ SRO-7", "Corio Reflex", "Corio Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "Sz Battle Optic", "Corvus Downrange-00", "SZ HoloTherm", "XTen Angel-40", "VLK 4.0 Optic", "Schlager 3.4x", "Forge Tac Delta 4", "Cronen Zero-P Optic", "SZ Bullseye Optic", "SZ Aggressor-IR Optic", "Schlager Night View", "Teplo-OP3 Scope", "DR582 Hybrid Sight", "Hybrid FirePoint", "SZ Vortex-90", "BPZ40 Hybrid", "SZ Oscar-9", "Thermo-Optic X9", "Teplo Clear Shot"],
      UnderBarrel: ["Demo Narrow Grip", "XRK Dune Grip", "SA Side Grip", "RAAL Bipod"],
      Magazine: ["100 Round Belt Mag", "50 Round Belt Mag"],
      Reargrip: ["Bruen G305 Grip Wrap", "STIP-40 Grip", "Bruen Q900 Grip Wrap"],
      Stock: ["Demo H-40", "Demo Nimble Stock", "FSS Riot Stock", "Demo Folding Stock"],
      Laser: ["SZ 1mW PEQ", "Schlager PEQ Box IV", "Corio LAZ-44 v3", "FSS OLE-V Laser", "Canted Vibro-Dot 7", "1mW Laser Box", "STOVL DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90"],
      Ammunition: ["338 Mag Frangible", "338 Mag Hollowpoint", ".338 Mag", "Armor Piercing", "338 Mag Overpres-sured +P", ".338 Mag High Velocity", ".338 Mag Incendiary"]
    }
  },
  {
    name: "RAPP H",
    category: "LMG",
    image: "/images/weapons/RAPP_H_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["GL Clear Breach", "TA HUL-Breach KL", "Eight-Point Flash Hider", "TZL-90 v3", "Cronen Dark KX30", "Husher-65 Silencer", "FR Titan Silencer", "Polarfire-S", "ZLR Talon 5", "Echoline GS-X", "Zulu-60", "Kastovia DX90", "Tempus GH50", "TY-LR8", "Lockshot KT85", "SA Leveler 55", "Bore-490", "Sakin Tread-40"],
      Barrel: ["Romeo FT 16\" Barrel", "Meer-76 449mm", "Factory", "Lachmann Nova", "10.6\" Lachstrike Barrel"],
      Optic: ["Slimline Pro", "SZ Mini", "Cronen Mini Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "SZ Mini Tac-40", "XRK On-Point Optic", "Aim Op-v4", "DF105 Reflex Sight", "Monocle CT90", "Corvus Sol-76", "SZ Recharge-DX", "SZ SRO-7", "Corio Reflex", "Corio Enforcer Optic", "SZ Lonewolf Optic", "XTen Angel-40", "VLK 4.0 Optic", "Schlager 3.4x", "Forge Tac Delta 4", "Cronen Zero-P Optic", "SZ Bullseye Optic", "SZ Aggressor-IR Optic", "Schlager Night View", "Kazan-Holo", "SZ Battle Optic", "Corvus Downrange-00", "SZ HoloTherm", "VX350 Thermal Optic", "Teplo-OP3 Scope", "DR582 Hybrid Sight", "Hybrid FirePoint", "SZ Vortex-90", "BPZ40 Hybrid", "SZ Oscar-9", "Thermo-Optic X9", "Teplo Clear Shot", "FTac Charlie7", "HMW-20 Optic", "DS Farsight 11", "3x RFL-Optic", "DrexSom Prime-90"],
      UnderBarrel: ["Commando Foregrip", "Edge-47 Grip", "Demo Firm Grip", "XTen Gravedigger", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo Imp-44 Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTen Drop Grip", "XTen Nexus Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "Op-X9 Foregrip", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Grip", "Cronen Grooveshot", "EXF Backdraft Grip", "Bipod v9 Grip", "Level Aim Bipod", "Cornerstone Bipod", "XTen Stable Shot", "Bruen Warrior Grip", "HEX-40 Grip", "Core BP2", "FTAC Tiger Grip", "Di-Grip 4.5", "Hound-9G Grip", "B052 grip", "VX Pinaaple"],
      Magazine: ["100 Round Mag"],
      Reargrip: ["Lachmann TCG-10", "LMK64 Grip"],
      Stock: ["Lachmann S76", "Factory Stock", "Meer Recoil-56", "Factory Stock", "FT Mobile Stock"],
      Laser: ["SZ 1mW PEQ", "Schlager PEQ Box IV", "Corio LAZ-44 v3", "FSS OLE-V Laser", "Canted Vibro-Dot 7", "1mW Laser Box", "STOVL DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90"],
      Ammunition: ["7.62 Frangible", "7.62 Hollowpoint", "7.62 Armor Piercing", "7.62 Overpressured +P", "7.62 High velocity", "7.62 Incendiary"]
    }
  },
  {
    name: "RPK",
    category: "LMG",
    image: "/images/weapons/RPK_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["GL Clear Breach", "TA HUL-Breach KL", "Eight-Point Flash Hider", "TZL-90 v3", "Cronen Dark KX30", "Husher-65 Silencer", "FR Titan Silencer", "Polarfire-S", "ZLR Talon 5", "Echoline GS-X", "Zulu-60", "Kastovia DX90", "Tempus GH50", "TY-LR8", "Lockshot KT85", "SA Leveler 55", "Bore-490", "Sakin Tread-40"],
      Barrel: ["Tac 597 Barrel", "KAS-10 584mm Barrel", "KAS-7 406mm Barrel"],
      Optic: ["Slimline Pro", "SZ Mini", "Cronen Mini Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "SZ MiniTac-40", "XRK On-Point Optic", "Aim Op-v4", "DF105 Reflex Sight", "Monocle CT90", "Corvus Sol-76", "SZ Recharge-DX", "SZ SRO-7", "Corio Reflex", "Corio Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Battle Optic", "Corvus Downrange-00", "SZ HoloTherm", "XTen Angel-40", "VLK 4.0 Optic", "Schlager 3.4x", "Forge Tac Delta 4", "Cronen Zero-P Optic", "SZ Bullseye Optic", "SZ Aggressor-IR Optic", "Schlager Night View", "Teplo-OP3 Scope", "DR582 Hybrid Sight", "Hybrid FirePoint", "SZ Vortex-90", "BPZ40 Hybrid", "SZ Oscar-9", "Thermo-Optic X9", "Teplo Clear Shot", "FTac Charlie7", "HMW-20 Optic", "3x RFL-Optic"],
      UnderBarrel: ["Commando Foregrip", "Edge-47 Grip", "Demo Firm Grip", "XTen Gravedigger", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo Imp-44 Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTen Drop Grip", "XTen Nexus Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Op-X9 Foregrip", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bipod v9 Grip", "Bruen Warrior Grip", "HEX-40 Grip", "Core BP2", "FTAC Tiger Grip", "RPK Bipod"],
      Magazine: ["30 Round Mag", "40 Round Mag", "100 Round Drum"],
      Reargrip: ["Ivanov ST-70 Grip", "Demo-X2 Grip", "True-Tac Grip", "Brace LS"],
      Stock: ["Heavy Support Stock", "Ivanov Wood Stock", "Spetsnaz S10 Stock", "FT Tac-Elite Stock", "ProLite TL3 Stock", "Broadside FCT", "EXO-Tac"],
      Laser: ["SZ 1mW PEQ", "Schlager PEQ Box IV", "Corio LAZ-44 v3", "FSS OLE-V Laser", "Canted Vibro-Dot 7", "1mW Laser Box", "STOVL DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90"],
      Ammunition: ["7.62 Frangible", "7.62 Hollowpoint", "7.62 Armor Piercing", "7.62 Overpressured +P", "7.62 High Velocity", "7.62 Incendiary"]
    }
  },
  {
    name: "Sakin MG38",
    category: "LMG",
    image: "/images/weapons/SAKIN_MG38_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["GL Clear Breach", "TA HUL-Breach KL", "Eight-Point Flash Hider", "TZL-90 v3", "Cronen Dark KX30", "Husher-65 Silencer", "FR Titan Silencer", "Polarfire-S", "ZLR Talon 5", "Echoline GS-X", "Zulu-60", "Kastovia DX90", "Tempus GH50", "TY-LR8", "Lockshot KT85", "SA Leveler 55", "Bore-490", "Sakin Tread-40"],
      Barrel: ["355mm HGS-55", "Kyzyl Dawn Barrel", "20\" Bruen Silver", "Series Barrel"],
      Optic: ["Slimline Pro", "SZ Mini", "Cronen Mini Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "SZ MiniTac-40", "XRK On-Point Optic", "Aim Op-v4", "DF105 Reflex Sight", "Monocle CT90", "Corvus Sol-76", "SZ Recharge-DX", "SZ SRO-7", "Corio Reflex", "Corio Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Battle Optic", "Corvus Downrange-00", "SZ HoloTherm", "XTen Angel-40", "VLK 4.0 Optic", "Schlager 3.4x", "Forge Tac Delta 4", "Cronen Zero-P Optic", "50", "SZ HoloTherm", "XTen Angel-40", "VLK 4.0 Optic", "Schlager 3.4x", "Forge Tac Delta 4", "Cronen Zero-P Optic", "SZ Bullseye Optic", "SZ Aggressor-IR Optic", "Teplo-OP3 Scope", "DR582 Hybrid Sight", "Hybrid FirePoint", "SZ Vortex-90", "BPZ40 Hybrid", "SZ Oscar-9", "Thermo-Optic X9", "Teplo Clear Shot"],
      UnderBarrel: ["Commando Foregrip", "Edge-47 Grip", "Demo Firm Grip", "XTen Gravedigger", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo Imp-44 Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTen Drop Grip", "XTen Nexus Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Op-X9 Foregrip", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bruen Warrior Grip", "HEX-40 Grip", "FTAC Tiger Grip", "Sakin Side grip", "Cronen WL55", "Bruen Warrior LMG"],
      Magazine: ["125 Round Belt Mag", "150-Round Box Magazine"],
      Reargrip: ["STIP-40 Grip", "Bruen G305 Grip Wrap", "Bruen Q900 Grip Wrap"],
      Stock: ["Sakin Riptide Stock", "FTAC Condor Stock", "Cheetah STM stock"],
      Laser: ["SZ 1mW PEQ", "Schlager PEQ Box IV", "Corio LAZ-44 v3", "FSS OLE-V Laser", "Canted Vibro-Dot 7", "1mW Laser Box", "STOVL DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90"],
      Ammunition: ["7.62 Frangible", "7.62 Hollowpoint", "7.62 Armor Piercing", "7.62 Overpressured +P", "7.62 High velocity", "7.62 Incendiary"]
    }
  },
  {
    name: "Bryson 800",
    category: "Shotgun",
    image: "/images/weapons/Bryson_800_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["Vulture Claw Breacher", "Mack8 Frost Bite", "SA Schweigen DX", "SA Schweigen XS", "FTac Tridentcore", "SA MX-50", "RMGE-7", "Lockwood Smoothfire 12", "OVL-70 Comp", "Flash Twist-90", "XTen Quadflash", "XTEN Full Choke", "XTEN Modified Choke", "Bryson Improved Choke", "Bryson Choke", "Long Haul 50", "Wolfcall 300"],
      Barrel: ["29.5\" Rifled Barrel", "21.5\" Bryson Shredder", "21\" Recourse Barrel", "18\" Demo Firewall", "16\" Bryson Factory Barrel", "16\" Bryson Shockwave", "8\" XRK CQB Barrel"],
      Optic: ["Slimline Pro", "SZ Mini", "Cronen Mini Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "SZ MiniTac-40", "XRK On-Point Optic", "Aim Op-v4", "DF105 Reflex Sight", "Monocle CT90", "Corvus Sol-76", "SZ Recharge-DX", "SZ SRO-7", "Corio Reflex", "Corio Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Battle Optic", "Corvus Downrange-00", "SZ HoloTherm", "XTen Angel-40", "VLK 4.0 Optic", "Schlager 3.4x", "Forge Tac Delta 4", "Cronen Zero-P Optic", "SZ HoloTherm", "XTen Angel-40", "VLK 4.0 Optic", "Schlager 3.4x", "Forge Tac Delta 4", "Cronen Zero-P Optic", "SZ Bullseye Optic", "SZ Aggressor-IR Optic", "Schlager Night View", "VX350 Thermal Optic", "Teplo-OP3 Scope", "DR582 Hybrid Sight", "Hybrid FirePoint", "SZ Vortex-90", "BPZ40 Hybrid", "SZ Oscar-9", "Thermo-Optic X9", "Teplo Clear Shot", "Corio CQC Scope", "Daunt-C80"],
      UnderBarrel: ["Commando Foregrip", "Edge-47 Grip", "Demo Firm Grip", "XTen Gravedigger", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo Imp-44 Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTen Drop Grip", "XTen Nexus Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Op-X9 Foregrip", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bruen Warrior Grip", "HEX-40 Grip", "FTAC Tiger Grip"],
      Stock: ["FTAC Apollo Stock", "FSS Guardian Stock", "FSS Watchman", "XTen Ripcord Stock", "Stockless Pistol Grip", "Sawed Off Mod"],
      Laser: ["1mW Artemis Laser", "1mW Quick Fire Laser", "Accu-Shot 5mW Laser", "VLK LZR 7mW", "7mW Canted Laser", "Schlager ULO-66 Laser", "STOVL Tac Laser", "Hipshot L20", "Point-G3P 04", "FJX Ultrabeam XR", "EXF Solarflare"],
      Ammunition: ["12 Gauge Explosive", "12 Gauge Slug", "12 Gauge Dragon's Breath"],
      Guard: ["Demo X50 Tactical Pump", "Lockwood Series lI", "Demo Dropzone Pump"]
    }
  },
  {
    name: "Bryson 890",
    category: "Shotgun",
    image: "/images/weapons/Bryson_890_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["Vulture Claw Breacher", "Mack8 Frost Bite", "SA Schweigen DX", "SA Schweigen XS", "FTac Tridentcore", "SA MX-50", "RMGE-7", "Lockwood Smoothfire 12", "OVL-70 Comp", "Flash Twist-90", "XTen Quadflash", "XTEN Full Choke", "XTEN Modified Choke", "Bryson Improved Choke", "Bryson Choke", "Long Haul 50", "Wolfcall 300"],
      Barrel: ["21.5\" Bryson Shredder", "21.5\" Recourse", "21.5\" Bryson TacFire", "18\" Demo Firewall", "16\" Bryson Shockwave"],
      Optic: ["Slimline Pro", "SZ Mini", "Cronen Mini Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "SZ MiniTac-40", "XRK On-Point Optic", "Aim Op-v4", "DF105 Reflex Sight", "Monocle CT90", "Corvus Sol-76", "SZ Recharge-DX", "SZ SRO-7", "Corio Reflex", "Corio Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Battle Optic", "Corvus Downrange-00", "SZ HoloTherm", "XTen Angel-40", "VLK 4.0 Optic", "Schlager 3.4x", "Forge Tac Delta 4", "Cronen Zero-P Optic", "SZ HoloTherm", "XTen Angel-40", "VLK 4.0 Optic", "Schlager 3.4x", "Forge Tac Delta 4", "Cronen Zero-P Optic", "SZ Bullseye Optic", "SZ Aggressor-IR Optic", "Schlager Night View", "VX350 Thermal Optic", "Teplo-OP3 Scope", "DR582 Hybrid Sight", "Hybrid FirePoint", "SZ Vortex-90", "BPZ40 Hybrid", "SZ Oscar-9", "Thermo-Optic X9", "Teplo Clear Shot", "Corio CQC Scope", "Daunt-C80"],
      UnderBarrel: ["Bruen Warrior Grip", "HEX-40 Grip", "FTAC Tiger Grip", "Commando Foregrip", "Edge-47 Grip", "Demo Firm Grip", "XTen Gravedigger", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo Imp-44 Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTen Drop Grip", "XTen Nexus Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Op-X9 Foregrip", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Cronen Grooveshot Grip", "EXF Backdraft Grip"],
      Magazine: ["5 Shell Mag", "12 Shell Mag"],
      Stock: ["FTAC Apollo Stock", "FSS Guardian Stock", "Bryson 800 Factory Stock", "XTen Ripcord Stock", "Stockless Pistol Grip", "Sawed Off Mod"],
      Laser: ["1mW Artemis Laser", "1mW Quick Fire Laser", "Accu-Shot 5mW Laser", "VLK LZR 7mW", "7mW Canted Laser", "Schlager ULO-66 Laser", "STOVL Tac Laser", "Hipshot L20", "Point-G3P 04", "FJX Ultrabeam XR", "EXF Solarflare"],
      Ammunition: ["12 Gauge Explosive", "12 Gauge Slug", "12 Gauge Dragon's Breath"],
      Guard: ["Demo X50 Tactical Pump", "Lockwood Series lI", "Demo Dropzone Pump"]
    }
  },
  {
    name: "Expedite 12",
    category: "Shotgun",
    image: "/images/weapons/Expedite_12_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["Vulture Claw Breacher", "Mack8 Frost Bite", "SA Schweigen DX", "SA Schweigen XS", "FTac Tridentcore", "SA MX-50", "RMGE-7", "Lockwood Smoothfire 12", "OVL-70 Comp", "Flash Twist-90", "XTen Quadflash", "XTEN Full Choke", "XTEN Modified Choke", "Bryson Improved Choke", "Bryson Choke", "Long Haul 50", "Wolfcall 300"],
      Barrel: ["18.5\" Emperor Barrel", "14\" Polarize Barrel", "14\" Shorty Barrel", "18.5\" Battlemaster", "419mm Schlager Salvo"],
      Optic: ["Slimline Pro", "SZ Mini", "Cronen Mini Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "SZ MiniTac-40", "XRK On-Point Optic", "Aim Op-v4", "DF105 Reflex Sight", "Monocle CT90", "Corvus Sol-76", "SZ Recharge-DX", "SZ SRO-7", "Corio Reflex", "Corio Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Battle Optic", "Corvus Downrange-00", "SZ HoloTherm", "XTen Angel-40", "VLK 4.0 Optic", "Schlager 3.4x", "Forge Tac Delta 4", "Cronen Zero-P Optic", "SZ Bullseye Optic", "SZ Aggressor-IR Optic", "Schlager Night View", "VX350 Thermal Optic", "Teplo-OP3 Scope", "DR582 Hybrid Sight", "Hybrid FirePoint", "SZ Vortex-90", "BPZ40 Hybrid", "SZ Oscar-9", "Thermo-Optic X9", "Teplo Clear Shot", "Corio CQC Scope", "Daunt-C80"],
      UnderBarrel: ["FTAC Tiger Grip", "Commando Foregrip", "Edge-47 Grip", "Demo Firm Grip", "XTen Gravedigger", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo Imp-44 Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTen Drop Grip", "XTen Nexus Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Op-X9 Foregrip", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bruen Warrior Grip", "HEX-40 Grip"],
      Reargrip: ["Goliath 77 Grip", "Schlager Fang Grip", "Schlager Void Grip"],
      Stock: ["Bryson Reverb-55 Stock", "Schlager Resonance", "FSS Frame Stock", "Resonance", "Stock Collapsed"],
      Laser: ["1mW Artemis Laser", "1mW Quick Fire Laser", "Accu-Shot 5mW Laser", "VLK LZR 7mW", "7mW Canted Laser", "Schlager ULO-66 Laser", "STOVL Tac Laser", "Hipshot L20", "Point-G3P 04", "FJX Ultrabeam XR", "EXF Solarflare"],
      Ammunition: ["12 Gauge Explosive", "12 Gauge Slug", "12 Gauge Dragon's Breath"],
      Comb: ["Padded Shotgun Comb", "FSS Ammunition Sleeve"],
      Guard: ["TV CF40 Guard", "AZ-40 Shotguard", "Azarov T15"],
      Bolt: ["Expedite L-Bolt", "Expedite HZ3 Bolt"]
    }
  },
  {
    name: "KV Broadside",
    category: "Shotgun",
    image: "/images/weapons/KV_Broadside_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["Vulture Claw Breacher", "Mack8 Frost Bite", "SA Schweigen DX", "SA Schweigen XS", "FTac Tridentcore", "SA MX-50", "RMGE-7", "Lockwood Smoothfire 12", "OVL-70 Comp", "Flash Twist-90", "XTen Quadflash", "XTEN Full Choke", "XTEN Modified Choke", "Bryson Improved Choke", "Bryson Choke", "Long Haul 50", "Wolfcall 300"],
      Barrel: ["LTC-B", "Warrior Wolf", "Range Twelve", "Deadsight 90", "Velocious 40", "Gunner D20", "ZLR Sport XT", "ZLR Sport-8"],
      Optic: ["Cronen Zero-P Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "SZ MiniTac-40", "XRK On-Point Optic", "Aim Op-v4", "DF105 Reflex Sight", "Monocle CT90", "Corvus Sol-76", "SZ Recharge-DX", "SZ SRO-7", "Corio Reflex", "Corio Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Battle Optic", "Corvus Downrange-00", "SZ HoloTherm", "XTen Angel-40", "VLK 4.0 Optic", "Schlager 3.4x", "Forge Tac Delta 4", "SZ HoloTherm", "XTen Angel-40", "VLK 4.0 Optic", "Schlager 3.4x", "Forge Tac Delta 4", "Cronen Zero-P Optic", "SZ Bullseye Optic", "SZ Aggressor-IR Optic", "Schlager Night View", "VX350 Thermal Optic", "Teplo-OP3 Scope", "DR582 Hybrid Sight", "Hybrid FirePoint", "SZ Vortex-90", "BPZ40 Hybrid", "SZ Oscar-9", "Thermo-Optic X9", "Teplo Clear Shot", "Corio CQC Scope", "Daunt-C80"],
      UnderBarrel: ["Bipod v9 Grip", "Level Aim Bipod", "Cornerstone Bipod", "XTen Stable Shot", "Bruen Warrior Grip", "HEX-40 Grip", "FTAC Tiger Grip", "KL40-M2", "Corvus Masterkey", "Commando Foregrip", "Edge-47 Grip", "Demo Firm Grip", "XTen Gravedigger", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo Imp-44 Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTen Drop Grip", "XTen Nexus Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Op-X9 Foregrip", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Cronen Grooveshot Grip", "EXF Backdraft Grip"],
      Magazine: ["12 Shell Mag", "25 Shell Drum"],
      Reargrip: ["Ivanov ST-70 Grip", "Demo-X2 Grip", "True-Tac Grip", "Brace LS"],
      Stock: ["Spetsnaz S10 Stock", "FT Tac-Elite Stock", "Markeev R7 Stock", "EXO-Tac", "K-Bloc Stock", "Otrezat Stock", "VLK Stockless"],
      Laser: ["1mW Artemis Laser", "1mW Quick Fire Laser", "Accu-Shot 5mW Laser", "VLK LZR 7mW", "7mW Canted Laser", "Schlager ULO-66 Laser", "STOVL Tac Laser", "Hipshot L20", "Point-G3P 04", "FJX Ultrabeam XR", "EXF Solarflare"],
      Ammunition: ["12 Gauge Slug", "12 Gauge Dragon's Breath", "12 Gauge Explosive"],
      Bolt: ["Hardbolt 2.1", "Dashbolt 60"]
    }
  },
  {
    name: "Lockwood 300",
    category: "Shotgun",
    image: "/images/weapons/Lockwood_300_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["Mack8 Shotgun Breach", "Sakin DB107", "Tempus Vox", "GW Max-99", "DB-Big Bore Comp", "DB-Dread Comp", "XTEN v1.3 Choke", "XTEN v2.0 Choke", "Bryson Series IX Choke", "Bryson Series XII Choke", "Reckoner Comp"],
      Barrel: ["Matuzek 812 Barrel", "711mm Matuzek D50", "597mm Matuzek Inferno", "11\" Bryson Special"],
      Optic: ["Slimline Pro", "SZ Mini", "Cronen Mini Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "SZ MiniTac-40", "XRK On-Point Optic", "Aim Op-v4", "DF105 Reflex Sight", "Monocle CT90", "Corvus Sol-76", "SZ Recharge-DX", "SZ SRO-7", "Corio Reflex", "Corio Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Battle Optic", "Corvus Downrange-00", "SZ HoloTherm", "XTen Angel-40", "VLK 4.0 Optic", "Schlager 3.4x", "Forge Tac Delta 4", "Cronen Zero-P Optic", "SZ Bullseye Optic", "SZ Aggressor-IR Optic", "Schlager Night View", "VX350 Thermal Optic", "Teplo-OP3 Scope", "DR582 Hybrid Sight", "Hybrid FirePoint", "SZ Vortex-90", "BPZ40 Hybrid", "SZ Oscar-9", "Thermo-Optic X9", "Teplo Clear Shot", "Corio CQC Scope", "Daunt-C80"],
      UnderBarrel: ["Commando Foregrip", "Edge-47 Grip", "Demo Firm Grip", "XTen Gravedigger", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo Imp-44 Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTen Drop Grip", "XTen Nexus Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Op-X9 Foregrip", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bruen Warrior Grip", "HEX-40 Grip", "FTAC Tiger Grip"],
      Stock: ["Sweetspot Stock", "Cronen Marshal Stock", "Bryson Natural", "Series Stock", "Heist Stock Mod"],
      Laser: ["1mW Artemis Laser", "1mW Quick Fire Laser", "Accu-Shot 5mW Laser", "VLK LZR 7mW", "7mW Canted Laser", "Schlager ULO-66 Laser", "STOVL Tac Laser", "Hipshot L20", "Point-G3P 04", "FJX Ultrabeam XR", "EXF Solarflare"],
      Ammunition: ["12 Gauge Slug", "12 Gauge Explosive", "12 Gauge Dragon's Breath"],
      Guard: ["Bryson Natural", "Series Handguard", "Demo Carbon Guard", "Buck-Pro"]
    }
  },
  {
    name: "MX Guardian",
    category: "Shotgun",
    image: "/images/weapons/MX_Guardian_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["Vulture Claw Breacher", "Mack8 Frost Bite", "SA Schweigen DX", "SA Schweigen XS", "FTac Tridentcore", "SA MX-50", "RMGE-7", "Lockwood Smoothfire 12", "OVL-70 Comp", "Flash Twist-90", "XTen Quadflash", "XTEN Full Choke", "XTEN Modified Choke", "Bryson Improved Choke", "Bryson Choke", "Long Haul 50", "Wolfcall 300"],
      Barrel: ["MX-G Short", "MX-G Mobile", "HYP-LM"],
      Optic: ["Cronen Zero-P Optic", "Slimline Pro", "SZ Mini", "Cronen Mini Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "SZ MiniTac-40", "XRK On-Point Optic", "Aim Op-v4", "DF105 Reflex Sight", "Monocle CT90", "Corvus Sol-76", "SZ Recharge-DX", "SZ SRO-7", "Corio Reflex", "Corio Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Battle Optic", "Corvus Downrange-00", "SZ HoloTherm", "XTen Angel-40", "VLK 4.0 Optic", "Schlager 3.4x", "Forge Tac Delta 4", "SZ HoloTherm", "XTen Angel-40", "VLK 4.0 Optic", "Schlager 3.4x", "Forge Tac Delta 4", "Cronen Zero-P Optic", "SZ Bullseye Optic", "SZ Aggressor-IR Optic", "Hybrid FirePoint", "SZ Vortex-90", "BPZ40 Hybrid", "SZ Oscar-9", "Thermo-Optic X9", "Teplo Clear Shot", "Corio CQC Scope", "Schlager Night View", "VX350 Thermal Optic", "Teplo-OP3 Scope", "DR582 Hybrid Sight", "Daunt-C80"],
      UnderBarrel: ["Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Op-X9 Foregrip", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bruen Warrior Grip", "HEX-40 Grip"],
      Magazine: ["MX Pro Mag"],
      Reargrip: ["Cronen ERGO", "Bruen B60", "XRK Rush", "Stream-SK"],
      Stock: ["EXF Impact Pad", "Rustler Pad", "MX DCP-0"],
      Laser: ["1mW Artemis Laser", "1mW Quick Fire Laser", "Accu-Shot 5mW Laser", "VLK LZR 7mW", "7mW Canted Laser", "Schlager ULO-66 Laser", "STOVL Tac Laser", "Hipshot L20", "Point-G3P 04", "FJX Ultrabeam XR", "EXF Solarflare"],
      Trigger: ["Semi-Auto Trigger", "Burst-Fire Trigger"]
    }
  },
  {
    name: "Crossbow",
    category: "MarksmanRifle",
    image: "/images/weapons/Crossbow_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Cable: ["28-Strand Cable", "16-Strand Cable"],
      Barrel: ["Thunder 200 Lb", "Carbon Elite v3", "SO Momenti", "Quill XE 100 Lb"],
      Optic: ["Slimline Pro", "SZ Mini", "Cronen Mini Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "SZ MiniTac-40", "XRK On-Point Optic", "Aim Op-v4", "DF105 Reflex Sight", "Monocle CT90", "Corvus Sol-76", "SZ Recharge-DX", "SZ SRO-7", "Corio Reflex", "Corio Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Battle Optic", "Corvus Downrange-00", "SZ HoloTherm", "XTen Angel-40", "VLK 4.0 Optic", "Schlager 3.4x", "Forge Tac Delta 4", "Cronen Zero-P Optic", "SZ Bullseye Optic", "SZ Aggressor-IR Optic", "Schlager Night View", "VX350 Thermal Optic", "Teplo-OP3 Scope", "DR582 Hybrid Sight", "Hybrid FirePoint", "SZ Vortex-90", "BPZ40 Hybrid", "SZ Oscar-9", "Thermo-Optic X9", "Teplo Clear Shot", "FTac Charlie7", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "3x RFL-Optic", "DrexSom Prime-90", "Ares Clear Shot", "DS Coriolis v4", "Lachmann Impact 9", "FTAC Locus SP", "SP-X 80 6.6x", "Luca Field-6"],
      UnderBarrel: ["Bruen Warrior Grip", "Commando Foregrip", "Edge-47 Grip", "Demo Firm Grip", "XTen Gravedigger", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo Imp-44 Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTen Drop Grip", "XTen Nexus Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Op-X9 Foregrip", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bipod v9 Grip", "HEX-40 Grip", "Core BP2", "FTAC Tiger Grip"],
      Stock: ["FT Apex 1.5", "FT Dart CB", "FTAC Piercer", "SpeedTrak Echo"],
      Laser: ["1mW Artemis Laser", "1mW Quick Fire Laser", "Accu-Shot 5mW Laser", "VLK LZR 7mW", "7mW Canted Laser", "Schlager ULO-66 Laser", "STOVL Tac Laser", "Hipshot L20", "Point-G3P 04", "FJX Ultrabeam XR", "EXF Solarflare"],
      Ammunition: ["Brightblaze 20\" Bolts", "Blastcap 20\" Bolts", "FTAC Caustic 20\" Bolts"]
    }
  },
  {
    name: "ERB-14",
    category: "MarksmanRifle",
    image: "/images/weapons/EBR-14_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["GL Clear Breach", "TA HUL-Breach KL", "Eight-Point Flash Hider", "TZL-90 v3", "Cronen Dark KX30", "Husher-65 Silencer", "FR Titan Silencer", "Polarfire-S", "ZLR Talon 5", "Echoline GS-X", "Zulu-60", "Kastovia DX90", "Tempus GH50", "TY-LR8", "Lockshot KT85", "SA Leveler 55", "Bore-490", "Sakin Tread-40"],
      Barrel: ["22\" Boremaster Barrel", "18\" Lonestar Barrel", "18\" T300 Barrel", "16\" Chrome-lined", "RFX40 Barrel"],
      Optic: ["Slimline Pro", "SZ Mini", "Cronen Mini Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "SZ MiniTac-40", "XRK On-Point Optic", "Aim Op-v4", "DF105 Reflex Sight", "Monocle CT90", "Corvus Sol-76", "SZ Recharge-DX", "SZ SRO-7", "Corio Reflex", "Corio Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Battle Optic", "Corvus Downrange-00", "SZ HoloTherm", "XTen Angel-40", "VLK 4.0 Optic", "Schlager 3.4x", "Forge Tac Delta 4", "Cronen Zero-P Optic", "SZ Bullseye Optic", "SZ Aggressor-IR Optic", "Schlager Night View", "VX350 Thermal Optic", "Teplo-OP3 Scope", "DR582 Hybrid Sight", "Hybrid FirePoint", "SZ Vortex-90", "BPZ40 Hybrid", "SZ Oscar-9", "Thermo-Optic X9", "Teplo Clear Shot", "FTac Charlie7", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "3x RFL-Optic", "DrexSom Prime-90", "Ares Clear Shot", "DXS Coriolis v4", "Lachmann Impact 9", "FTAC Locus SP", "SZ Heatsource 800", "SP-X 80 6.6x", "Luca Field-6"],
      UnderBarrel: ["Commando Foregrip", "Edge-47 Grip", "Demo Firm Grip", "XTen Gravedigger", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo Imp-44 Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTen Drop Grip", "XTen Nexus Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Op-X9 Foregrip", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bipod v9 Grip", "Level Aim Bipod", "Cornerstone Bipod", "XTen Stable Shot", "Bruen Warrior Grip", "HEX-40 Grip", "Core BP2", "FTAC Tiger Grip"],
      Magazine: ["15 Round Mag", "20 Round Mag"],
      Reargrip: ["Cronen EM55 Grip", "FSS Gen. 7 Grip", "FSS Spider Grip"],
      Stock: ["FTAC Valor Stock", "SO R55 Adaptor", "SO-90 Factory Stock"],
      Laser: ["SZ 1mW PEQ", "Schlager PEQ Box IV", "Corio LAZ-44 v3", "FSS OLE-V Laser", "Canted Vibro-Dot 7", "1mW Laser Box", "STOVL DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90"],
      Ammunition: ["7.62 Frangible", "7.62 Hollowpoint", "7.62 Armor Piercing", "7.62 Overpressured +P", "7.62 High velocity", "7.62 Incendiary"],
      Comb: ["PD-A40 Sleeve", "5GN Tac-Comb", "FSS LS-3 Comb"],
    }
  },
  {
    name: "LM-S",
    category: "MarksmanRifle",
    image: "/images/weapons/LM-S_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["GL Clear Breach", "TA HUL-Breach KL", "Eight-Point Flash Hide", "TZL-90 v3", "Cronen Dark KX30", "", "Husher-65 Silencer", "", "FR Titan Silencer", "", "Polarfire-S", "", "ZLR Talon 5", "", "Echoline GS-X", "Zulu-60", "", "", "Kastovia DX90", "", "Tempus GH50", "TY-LR8", "Lockshot KT85", "SA Leveler 55", "Bore-490"],
      Barrel: ["Meer-76 449mm Factory", "Lachmann Nova"],
      Optic: ["Slimline Pro", "SZ Mini", "Cronen Mini Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "SZ MiniTac-40", "XRK On-Point Optic", "Aim Op-v4", "DF105 Reflex Sight", "Monocle CT90", "Corvus Sol-76", "SZ Recharge-DX", "SZ SRO-7", "Corio Reflex", "Corio Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Battle Optic", "Corvus Downrange-00", "SZ HoloTherm", "XTen Angel-40", "VLK 4.0 Optic", "Schlager 3.4x", "Forge Tac Delta 4", "Cronen Zero-P Optic", "SZ Bullseye Optic", "SZ Aggressor-IR Optic", "Schlager Night View", "VX350 Thermal Optic", "Teplo-OP3 Scope", "Hybrid FirePoint", "SZ Vortex-90", "BPZ40 Hybrid", "SZ Oscar-9", "Thermo-Optic X9", "Teplo Clear Shot", "FTac Charlie7", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "3x RFL-Optic", "DrexSom Prime-90", "Ares Clear Shot", "DXS Coriolis v4", "FTAC Locus SP", "SZ Heatsource 800", "SP-X 80 6.6x", "Lachmann Impact 9", "Luca Field-6", "DR582 Hybrid Sight"],
      UnderBarrel: ["Commando Foregrip", "Edge-47 Grip", "Demo Firm Grip", "XTen Gravedigger", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo Imp-44 Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTen Drop Grip", "XTen Nexus Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Op-X9 Foregrip", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Cronen Grooveshot", "EXF Backdraft Grip", "Bipod v9 Grip", "Level Aim Bipod", "Cornerstone Bipod", "XTen Stable Shot", "Bruen Warrior Grip", "HEX-40 Grip", "Core BP2", "FTAC Tiger Grip"],
      Magazine: ["20 Round Mag", "15 Round Mag"],
      Reargrip: ["Lachmann TCG-10", "LM Cronus Grip", "LMK64 Grip"],
      Stock: ["RAPP-762 Factory", "Lachmann S76 Factory Stock", "Meer Recoil-56 Factory Stock", "FT Mobile Stock"],
      Laser: ["SZ 1mW PEQ", "Schlager PEQ Box IV", "Corio LAZ-44 v3", "FSS OLE-V Laser", "Canted Vibro-Dot 7", "1mW Laser Box", "STOVL DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90"],
      Ammunition: ["7.62 Frangible", "7.62 Hollowpoint", "7.62 Armor Piercing", "7.62 Overpressured +P", "7.62 High velocity", "7.62 Incendiary"]
    }
  },
  {
    name: "Lockwood Mk2",
    category: "MarksmanRifle",
    image: "/images/weapons/Lockwood_Mk2_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["AP-390 Flash Hider", "Ported DZ38", "Dark KX50 Flash Hid", "Nilsound 90", "FTac Reaper", "Bruen Agent 90", "Talon Sixteen", "EXF Relentless-40", "BVM-338", "Cronen DM338", "XRK Kraken", "TA CG76", "FTAC Dreadnought", "Shred CP90", "Demon Helix T7"],
      Barrel: ["13.5\" Lonestar Barrel", "Lockwood Frontiersman", "21\" Coyote Barrel", "25\" Buffalo Barrel", "22.5\" EXF Alamo"],
      Optic: ["Slimline Pro", "SZ Mini", "Cronen Mini Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "SZ MiniTac-40", "XRK On-Point Optic", "Aim Op-v4", "DF105 Reflex Sight", "Monocle CT90", "Corvus Sol-76", "SZ Recharge-DX", "SZ SRO-7", "Corio Reflex", "Corio Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Battle Optic", "Corvus Downrange-00", "SZ HoloTherm", "XTen Angel-40", "VLK 4.0 Optic", "Schlager 3.4x", "Forge Tac Delta 4", "Cronen Zero-P Optic", "SZ Bullseye Optic", "SZ Aggressor-IR Optic", "Schlager Night View", "VX350 Thermal Optic", "Teplo-OP3 Scope", "Hybrid FirePoint", "SZ Vortex-90", "BPZ40 Hybrid", "SZ Oscar-9", "Thermo-Optic X9", "Teplo Clear Shot", "FTac Charlie7", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "3x RFL-Optic", "DrexSom Prime-90", "Ares Clear Shot", "DXS Coriolis v4", "FTAC Locus SP", "SZ Heatsource 800", "SP-X 80 6.6x", "Lachmann Impact 9", "Luca Field-6"],
      UnderBarrel: ["Commando Foregrip", "Edge-47 Grip", "Demo Firm Grip", "XTen Gravedigger", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo Imp-44 Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTen Drop Grip", "XTen Nexus Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Op-X9 Foregrip", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Cronen Grooveshot", "EXF Backdraft Grip", "Bipod v9 Grip", "Level Aim Bipod", "Cornerstone Bipod", "XTen Stable Shot", "Bruen Warrior Grip", "HEX-40 Grip", "Core BP2", "FTAC Tiger Grip"],
      Stock: ["Demo VX509 Stock", "Lockwood", "Bullseye Stock", "Cut Off Stock Mod"],
      Laser: ["1mW Artemis Laser", "1mW Quick Fire Laser", "Accu-Shot 5mW Laser", "VLK LZR 7mW", "7mW Canted Laser", "Schlager ULO-66 Laser", "STOVL Tac Laser", "Hipshot L20", "Point-G3P 04", "FJX Ultrabeam XR", "EXF Solarflare"],
      Ammunition: [".45 GVT Frangible", "45 GVT Hollowpoint", "45 GVT Armor Piercing", ".45 GVT Overpressured=+P", "45 GVT High Velocity", "45 GVT Incendiary"],
      Comb: ["Lockwood", "Defender Comb", "Wingman Comb", "Lockwood Merciless"],
      Lever: ["Stallion Lever", "Longhorn Lever"],
      Rail: ["Lockwood Combat Guard", "Lockwood Saddle Guard", "Lockwood Commando Guard"]
    }
  },
  {
    name: "SA-B 50",
    category: "MarksmanRifle",
    image: "/images/weapons/SA-B_50_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["GL Clear Breach", "TA HUL-Breach KL", "Eight-Point Flash Hid", "TZL-90 v3", "Cronen Dark KX30", "Husher-65 Silencer", "FR Titan Silencer", "Polarfire-S", "ZLR Talon 5", "Echoline GS-X", "Zulu-60", "Kastovia DX90", "Tempus GH50", "TY-LR8", "Lockshot KT85", "SA Leveler 55", "Bore-490", "Sakin Tread-40"],
      Barrel: ["18.5\" XRK Resonate", "18.5\" Bryson", "LR Factory", "12.5\" Carbon Barrel", "9\" Tac-CB 55"],
      Optic: ["Slimline Pro", "SZ Mini", "Cronen Mini Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "SZ MiniTac-40", "XRK On-Point Optic", "Aim Op-v4", "DF105 Reflex Sight", "Monocle CT90", "Corvus Sol-76", "SZ Recharge-DX", "SZ SRO-7", "Corio Reflex", "Corio Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Battle Optic", "Corvus Downrange-00", "SZ HoloTherm", "XTen Angel-40", "VLK 4.0 Optic", "Schlager 3.4x", "Forge Tac Delta 4", "Cronen Zero-P Optic", "SZ Bullseye Optic", "SZ Aggressor-IR Optic", "Schlager Night View", "VX350 Thermal Optic", "Teplo-OP3 Scope", "Hybrid FirePoint", "SZ Vortex-90", "BPZ40 Hybrid", "SZ Oscar-9", "Thermo-Optic X9", "Teplo Clear Shot", "FTac Charlie7", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "3x RFL-Optic", "DrexSom Prime-90", "Ares Clear Shot", "DXS Coriolis v4", "FTAC Locus SP", "SZ Heatsource 800", "SP-X 80 6.6x", "Lachmann Impact 9", "Luca Field-6", "DR582 Hybrid Sight", "C7 Dallanun Antia"],
      UnderBarrel: ["Commando Foregrip", "Edge-47 Grip", "Demo Firm Grip", "XTen Gravedigger", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo Imp-44 Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTen Drop Grip", "XTen Nexus Grip", "Phase-3 Grip", "Level Aim Bipod", "Cornerstone Bipod", "XTen Stable Shot", "FTAC Tiger Grip"],
      Magazine: ["5 Round Mag", "15 Round Mag"],
      Reargrip: ["Schlager Match Grip", "Cronen Grip Wrap", "Bruen Lynx Grip"],
      Stock: ["FTAC EZX-Pro", "Assault-60 Stock", "XRK Specter Mod"],
      Laser: ["1mW Artemis Laser", "1mW Quick Fire Laser", "Accu-Shot 5mW Laser", "VLK LZR 7mW", "7mW Canted Laser", "Schlager ULO-66 Laser", "STOVL Tac Laser", "Hipshot L20", "Point-G3P 04", "FJX Ultrabeam XR", "EXF Solarflare"],
      Ammunition: [".308 Frangible", ".308 Hollowpoint", ".308 Armor Piercing", ".308 Overpressured +P", ".308 High Velocity", ".308 Incendiary"],
      Bolt: ["ZLR Reinforced", "Lockbolt", "FSS ST87 Bolt"]
    }
  },
  {
    name: "SP-R 208",
    category: "MarksmanRifle",
    image: "/images/weapons/SP-R_208_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["GL Clear Breach", "TA HUL-Breach KL", "Eight-Point Flash Hider", "TZL-90 v3", "Cronen Dark KX30", "Husher-65 Silencer", "FR Titan Silencer", "Polarfire-S", "ZLR Talon 5", "Echoline GS-X", "Zulu-60", "Kastovia DX90", "Tempus GH50", "TY-LR8", "Lockshot KT85", "SA Leveler 55", "Bore-490", "Sakin Tread-40"],
      Barrel: ["22.5\" Elevate-11", "23.5\" Fluted R-67", "18.5\" XRK Resonate", "16\" ZLR Executor", "80 Barrel", "12.5\" Carbon Barrel"],
      Optic: ["Slimline Pro", "SZ Mini", "Cronen Mini Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "SZ MiniTac-40", "XRK On-Point Optic", "Aim Op-v4", "DF105 Reflex Sight", "Monocle CT90", "Corvus Sol-76", "SZ Recharge-DX", "SZ SRO-7", "Corio Reflex", "Corio Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Battle Optic", "Corvus Downrange-00", "SZ HoloTherm", "XTen Angel-40", "VLK 4.0 Optic", "Schlager 3.4x", "Forge Tac Delta 4", "Cronen Zero-P Optic", "SZ Bullseye Optic", "SZ Aggressor-IR Optic", "Schlager Night View", "VX350 Thermal Optic", "Teplo-OP3 Scope", "Hybrid FirePoint", "SZ Vortex-90", "BPZ40 Hybrid", "SZ Oscar-9", "Thermo-Optic X9", "Teplo Clear Shot", "FTac Charlie7", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "3x RFL-Optic", "DrexSom Prime-90", "Ares Clear Shot", "DXS Coriolis v4", "FTAC Locus SP", "SZ Heatsource 800", "SP-X 80 6.6x", "Lachmann Impact 9", "Luca Field-6", "DR582 Hybrid Sight"],
      UnderBarrel: ["Level Aim Bipod", "Cornerstone Bipod", "XTen Stable Shot"],
      Magazine: ["10 Round Mag", "15 Round Mag"],
      Stock: ["Bryson Inforcer Stock", "ZRL T70 Pad Extension"],
      Laser: ["SZ 1mW PEQ", "Schlager PEQ Box IV", "Corio LAZ-44 v3", "FSS OLE-V Laser", "Canted Vibro-Dot 7", "1mW Laser Box", "STOVL DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90"],
      Ammunition: ["7.62 Frangible", "7.62 Hollowpoint", "7.62 Armor Piercing", "7.62 Overpressured +P", "7.62 High velocity", "7.62 Incendiary"],
      Comb: ["Cronen GI40", "Cheek Riser", "Aim-Assist 406", "FSS EL-T Pouch"],
      Bolt: ["ZLR Reinforced", "Lockbolt", "FSS ST87 Bolt"]
    }
  },
  {
    name: "TAQ-M",
    category: "MarksmanRifle",
    image: "/images/weapons/TAQ-M_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["GL Clear Breach", "TA HUL-Breach KL", "Eight-Point Flash Hider", "TZL-90 v3", "Cronen Dark KX30", "Husher-65 Silencer", "FR Titan Silencer", "Polarfire-S", "ZLR Talon 5", "Echoline GS-X", "Zulu-60", "Kastovia DX90", "Tempus GH50", "TY-LR8", "Lockshot KT85", "SA Leveler 55", "Bore-490", "Sakin Tread-40"],
      Barrel: ["15.5\" Theta-X13", "LR1:7 20.5\" Barrel"],
      Optic: ["Slimline Pro", "SZ Mini", "Cronen Mini Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "SZ MiniTac-40", "XRK On-Point Optic", "Aim Op-v4", "DF105 Reflex Sight", "Monocle CT90", "Corvus Sol-76", "SZ Recharge-DX", "SZ SRO-7", "Corio Reflex", "Corio Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Battle Optic", "Corvus Downrange-00", "SZ HoloTherm", "XTen Angel-40", "VLK 4.0 Optic", "Schlager 3.4x", "Forge Tac Delta 4", "Cronen Zero-P Optic", "SZ Bullseye Optic", "SZ Aggressor-IR Optic", "Schlager Night View", "VX350 Thermal Optic", "Teplo-OP3 Scope", "Hybrid FirePoint", "SZ Vortex-90", "BPZ40 Hybrid", "SZ Oscar-9", "Thermo-Optic X9", "Teplo Clear Shot", "FTac Charlie7", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "3x RFL-Optic", "DrexSom Prime-90", "Ares Clear Shot", "DXS Coriolis v4", "FTAC Locus SP", "SZ Heatsource 800", "SP-X 80 6.6x", "Lachmann Impact 9", "Luca Field-6", "DR582 Hybrid Sight"],
      UnderBarrel: ["Commando Foregrip", "Edge-47 Grip", "Demo Firm Grip", "XTen Gravedigger", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo Imp-44 Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTen Drop Grip", "XTen Nexus Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Cronen Grooveshot", "EXF Backdraft Grip", "Bipod v9 Grip", "Level Aim Bipod", "Cornerstone Bipod", "XTen Stable Shot", "Bruen Warrior Grip", "HEX-40 Grip", "Core BP2", "FTAC Tiger Grip"],
      Magazine: ["15 Round Mag", "20 Round Mag"],
      Reargrip: ["XRK Response Grip", "FSS Combat Grip", "Demo Cleanshot Grip", "TV Ergo Grip"],
      Stock: ["TV Ballast Stock", "Tactique Brute Stock", "TacVerte Core Stock", "TV XLine Pro"],
      Laser: ["SZ 1mW PEQ", "Schlager PEQ Box IV", "Corio LAZ-44 v3", "FSS OLE-V Laser", "Canted Vibro-Dot 7", "1mW Laser Box", "STOVL DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90"],
      Ammunition: ["6.5mm Hollowpoint", "6.5mm Armor Piercing", "6.5mm Frangible", "6.5mm Overpressured=+P", "6.5mm High Velocity", "6.5mm Incendiary"]
    }
  },
  {
    name: "Tempus Torrent",
    category: "MarksmanRifle",
    image: "/images/weapons/Tempus_Torrent_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["GL Clear Breach", "TA HUL-Breach KL", "Eight-Point Flash Hider", "TZL-90 v3", "Cronen Dark KX30", "Husher-65 Silencer", "FR Titan Silencer", "Polarfire-S", "ZLR Talon 5", "Echoline GS-X", "Zulu-60", "Kastovia DX90", "Tempus GH50", "TY-LR8", "Lockshot KT85", "SA Leveler 55", "Bore-490", "Sakin Tread-40"],
      Barrel: ["Chroma LRS", "16\" Tour RP", "24\" Outreach 4", "12.5\" Rugged ZN"],
      Optic: ["Slimline Pro", "SZ Mini", "Cronen Mini Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "SZ MiniTac-40", "XRK On-Point Optic", "Aim Op-v4", "DF105 Reflex Sight", "Monocle CT90", "Corvus Sol-76", "SZ Recharge-DX", "SZ SRO-7", "Corio Reflex", "Corio Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Battle Optic", "Corvus Downrange-00", "SZ HoloTherm", "XTen Angel-40", "VLK 4.0 Optic", "Schlager 3.4x", "Forge Tac Delta 4", "Cronen Zero-P Optic", "SZ Bullseye Optic", "SZ Aggressor-IR Optic", "Schlager Night View", "VX350 Thermal Optic", "Teplo-OP3 Scope", "Hybrid FirePoint", "SZ Vortex-90", "BPZ40 Hybrid", "SZ Oscar-9", "Thermo-Optic X9", "Teplo Clear Shot", "FTac Charlie7", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "3x RFL-Optic", "DrexSom Prime-90", "Ares Clear Shot", "DXS Coriolis v4", "FTAC Locus SP", "SZ Heatsource 800", "SP-X 80 6.6x", "Lachmann Impact 9", "Luca Field-6", "DR582 Hybrid Sight", "DXS Coriolis v4"],
      UnderBarrel: ["Corvus Masterkey", "Commando Foregrip", "Edge-47 Grip", "Demo Firm Grip", "XTen Gravedigger", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo Imp-44 Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTen Drop Grip", "XTen Nexus Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Op-X9 Foregrip", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Cronen Grooveshot", "EXF Backdraft Grip", "Bipod v9 Grip", "Level Aim Bipod", "Cornerstone Bipod", "XTen Stable Shot", "Bruen Warrior Grip", "HEX-40 Grip", "Core BP2", "FTAC Tiger Grip", "SPW 40mm HE"],
      Magazine: ["30 Round Mag", "50 Round Drum"],
      Reargrip: ["D15 Grip", "Sakin ZX Grip", "XTEN Grip", "Support CP90 Grip", "Phantom Grin"],
      Stock: ["Assault-60", "Stock Factory", "Ravage-8", "Demo Fade Pro Stock", "Demo Precision", "Elite Factory", "Corio Precio Factory", "PSO Heavy"],
      Laser: ["SZ 1mW PEQ", "Schlager PEQ Box IV", "Corio LAZ-44 v3", "FSS OLE-V Laser", "Canted Vibro-Dot 7", "1mW Laser Box", "STOVL DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90"],
      Ammunition: ["7.62 Frangible", "7.62 Hollowpoint", "7.62 Armor Piercing", "7.62 Overpressured +P", "7.62 High velocity", "7.62 Incendiary"],
      Guard: ["TT-HG 40", "Torrent MOC-IV", "Torrent Tac Guard"]
    }
  },
  {
    name: "Cronon Squall",
    category: "Battle Rifle" ,
    image: "/images/weapons/Cronen_Squall_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["Bore-490", "Cronen Dark KX30", "Echoline GS-X", "Eight-Point Flash Hider", "FR Titan Silencer", "GL Clear Breach", "Husher-65 Silencer", "Kastovia DX90", "Lockshot KT85", "Polarfire-S", "SA Leveler 55", "Sakin Tread-40", "TA HUL-Breach KL", "Tempus GH50", "TY-LR8", "TZL-90 v3", "ZLR Talon 5", "Zulu-60"],
      Barrel: ["10.6\" Lachstrike Barrel", "15.9\" Lachmann", "Lachmann Nova", "LM Aurora 90 Barrel", "Meer-56 11\" Factory Barrel", "RAPP Barrel", "Romeo FT 16\" Barrel"],
      Optic: ["3x RFL-Optic", "Aim Op-v4", "Angel-40 4.8x", "Ares Clear Shot", "BPZ40 Hybrid", "Corio Enforcer Optic", "Corio Reflex", "Corvus Downrange-00", "Corvus Sol-76", "Cronen Mini Dot", "Cronen Mini Pro", "Cronen Zero-P Optic", "DF105 Reflex Sight", "DR582 Hybrid Sight", "DrexSom Prime-90", "DS Farsight 11", "Forge Tac Delta 4", "FTac Charlie7", "HMW-20 Optic", "Hybrid FirePoint", "Kazan-Holo", "Luca Bandera Scope", "Monocle CT90", "Schlager 3.4x", "Schlager Night View", "Slimline Pro", "SZ Aggressor-IR Optic", "SZ Battle Optic", "SZ Bullseye Optic", "SZ HoloTherm", "SZ Lonewolf Optic", "SZ Mini", "SZ MiniTac-40", "SZ Oscar-9", "SZ Recharge-DX", "SZ Sigma-IV Optic", "SZ SRO-7", "SZ Vortex-90", "Teplo Clear Shot", "Teplo-OP3 Scope", "Thermo-Optic X9", "VLK 4.0 Optic", "VX350 Thermal Optic", "XRK On-Point Optic", "XTen Angel-40"],
      UnderBarrel: ["Agent Grip", "Bipod v9 Grip", "Bruen Sync Shot Grip", "Bruen Tilt Grip", "Bruen Warrior Grip", "Commando Foregrip", "Core BP2", "Cornerstone Bipod", "Cronen Grooveshot Grip", "Demo Cleanshot 40", "Demo Firm Grip", "Demo Imp-44 Grip", "Edge-47 Grip", "EXF Backdraft Grip", "FSS Sharkfin 90", "FTAC Ripper 56", "FTAC Tiger Grip", "HEX-40 Grip", "Level Aim Bipod", "Lockgrip Precision-40", "Merc Foregrip", "Op-X9 Foregrip", "Operator Foregrip", "Phase-3 Grip", "Schlager Tango", "TL40 Fire Drake", "TV Wrecker Grip", "VX Pineapple", "XTen Drop Grip", "XTen Gravedigger", "XTen Nexus Grip", "XTen Stable Shot"],
      Magazine: ["30 Round Mag", "50 Round Drum"],
      Reargrip: ["D15 Grip", "XTEN Grip", "Phantom Grip", "Sakin ZX Grip"],
      Stock: ["B13 Pad", "B66 Pad", "FJX Z-Pad 9"],
      Laser: ["SZ 1mW PEQ", "Schlager PEQ Box IV", "Corio LAZ-44 v3", "FSS OLE-V Laser", "Canted Vibro-Dot 7", "1mW Laser Box", "STOVL DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90"],
      Ammunition: ["6.8 Armor Piercing", "6.8 Composite", "6.8 Frangible", "6.8 Hollowpoint", "6.8 High Velocity", "6.8 Overpressured +P", "6.8 Incendiary"],
      Comb: ["Demo Flak Comb", "SAB Comb"]
    }
  },
  {
    name: "FTAC Recon",
    category: "Battle Rifle" ,
    image: "/images/weapons/FTac_Recon_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["GL Clear Breach", "TA HUL-Breach KL", "Sakin Tread-40", "FTAC Dreadnought", "FTac Reaper", "Bruen Agent 90", "Talon Sixteen", "EXF Relentless-40", "BVM-338", "Cronen DM338", "Shred CP90", "XRK Kraken", "TA CG76", "AP-390 Flash Hider", "Ported DZ38", "Dark KX50 Flash Hider", "Demon Helix T7", "Nilsound 90"],
      Barrel: ["419mm EXF Barrel", "Bull Rider 16.5\"", "Tempus Trench Pro", "7.5\" Tempus Firebrand"],
      Optic: ["Slimline Pro", "SZ Mini", "Cronen Mini Pro", "SZ Sigma-IV Optic", "SZ MiniTac-40", "XRK On-Point Optic", "Aim Op-v4", "DF105 Reflex Sight", "Monocle CT90", "Corvus Sol-76", "SZ Recharge-DX", "Corio Reflex", "Corio Enforcer Optic", "Kazan-Holo", "SZ Battle Optic", "Corvus Downrange-00", "SZ HoloTherm", "XTen Angel-40", "VLK 4.0 Optic", "Schlager 3.4x", "Cronen Zero-P Optic", "SZ Bullseye Optic", "SZ Aggressor-IR Optic", "Schlager Night View", "VX350 Thermal Optic", "Teplo-OP3 Scope", "DR582 Hybrid Sight", "Hybrid FirePoint", "SZ Vortex-90", "BPZ40 Hybrid", "SZ Oscar-9", "Angel-40 4.8x", "Thermo-Optic X9", "Teplo Clear Shot", "FTac Charlie7", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "3x RFL-Optic", "Ares Clear Shot", "Cronen Mini Dot", "SZ SRO-7", "SZ Lonewolf Optic", "Forge Tac Delta 4", "DrexSom Prime-90"],
      UnderBarrel: ["Corvus Masterkey", "Commando Foregrip", "Edge-47 Grip", "Demo Firm Grip", "XTen Gravedigger", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo Imp-44 Grip", "Agent Grip", "Bruen Sync Shot Grip", "XTen Drop Grip", "XTen Nexus Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "Op-X9 Foregrip", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bipod v9 Grip", "Level Aim Bipod", "Cornerstone Bipod", "XTen Stable Shot", "Bruen Warrior Grip", "HEX-40 Grip", "Core BP2", "FTAC Tiger Grip", "SPW 40mm HE", "FSS Sharkfin 90", "VX Pineapple"],
      Magazine: ["25 Round Mag", "50 Round Drum"],
      Reargrip: ["D15 Grip", "Sakin ZX Grip", "XTEN Grip", "Support CP90 Grip"],
      Stock: ["Assault-60 Stock Factory", "Ravage-8", "Demo Fade Pro Stock", "Demo Precision", "Elite Factory", "Torrent Span-9", "PSO Heavy"],
      Laser: ["SZ 1mW PEQ", "Schlager PEQ Box IV", "Corio LAZ-44 v3", "FSS OLE-V Laser", "Canted Vibro-Dot 7", "STOVL DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90", "1mW Laser Box"],
      Ammunition: [".458 Frangible", ".458 Hollow Point", ".458 Armor Piercing", ".458 Overpressured +P", ".458 High velocity"]
    }
  },
  {
    name: "Lachmann-765",
    category: "Battle Rifle" ,
    image: "/images/weapons/Lachmann-762_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["GL Clear Breach", "TA HUL-Breach KL", "Eight-Point Flash Hider", "TZL-90 v3", "Cronen Dark KX30", "Husher-65 Silencer", "FR Titan Silencer", "Polarfire-S", "ZLR Talon 5", "Echoline GS-X", "Zulu-60", "Kastovia DX90", "Tempus GH50", "TY-LR8", "Lockshot KT85", "SA Leveler 55", "Bore-490"],
      Barrel: ["Romeo FT 16\" Barrel", "15.9\" Lachmann RAPP Barrel", "Lachmann Nova", "LM Aurora 90 Barrel", "10.6\" Lachstrike Barrel", "Meer-56 11\" Factory Barrel"],
      Optic: ["Slimline Pro", "SZ Mini", "Cronen Mini Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "SZ MiniTac-40", "XRK On-Point Optic", "Aim Op-v4", "DF105 Reflex Sight", "Monocle CT90", "Corvus Sol-76", "SZ Recharge-DX", "SZ SRO-7", "Corio Reflex", "Corio Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Battle Optic", "Corvus Downrange-00", "SZ HoloTherm", "XTen Angel-40", "VLK 4.0 Optic", "Schlager 3.4x", "Forge Tac Delta 4", "Cronen Zero-P Optic", "SZ Aggressor-IR Optic", "Schlager Night View", "VX350 Thermal Optic", "Teplo-OP3 Scope", "DR582 Hybrid Sight", "Hybrid FirePoint", "SZ Vortex-90", "BPZ40 Hybrid", "SZ Oscar-9", "Angel-40 4.8x", "Thermo-Optic X9", "Teplo Clear Shot", "FTac Charlie7", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "3x RFL-Optic", "SZ Bullseye Optic", "DrexSom Prime-90", "Ares Clear Shot"],
      UnderBarrel: ["Commando Foregrip", "Edge-47 Grip", "Demo Firm Grip", "XTen Gravedigger", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo Imp-44 Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTen Drop Grip", "XTen Nexus Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Op-X9 Foregrip", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bipod v9 Grip", "Level Aim Bipod", "Cornerstone Bipod", "XTen Stable Shot", "Bruen Warrior Grip", "HEX-40 Grip", "Core BP2", "FTAC Tiger Grip", "TL40 Fire Drake"],
      Magazine: ["15 Round Mag", "10 Round Mag", "50 Round Drum", "30 Round Mag"],
      Reargrip: ["Lachmann TCG-10", "S-Grip Zero", "LM Cronus Grip", "LMK64 Grip"],
      Stock: ["LM-S Factory G79 Stock", "RAPP-762 Factory", "Meer Recoil-56", "Factory Stock", "FT Mobile Stock", "Lachmann S9 Factory"],
      Laser: ["SZ 1mW PEQ", "Schlager PEQ Box IV", "Corio LAZ-44 v3", "FSS OLE-V Laser", "Canted Vibro-Dot 7", "1mW Laser Box", "STOVL DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90"],
      Ammunition: ["7.62 Frangible", "7.62 Hollowpoint", "7.62 Armor Piercing", "7.62 Overpressured +P", "7.62 High velocity", "7.62 Incendiary"]
    }
  },
  {
    name: "SO-14",
    category: "Battle Rifle" ,
    image: "/images/weapons/SO-14_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["GL Clear Breach", "TA HUL-Breach KL", "Eight-Point Flash Hider", "TZL-90 v3", "Cronen Dark KX30", "Husher-65 Silencer", "FR Titan Silencer", "Polarfire-S", "ZLR Talon 5", "Echoline GS-X", "Zulu-60", "Kastovia DX90", "Tempus GH50", "TY-LR8", "Lockshot KT85", "SA Leveler 55", "Bore-490", "Sakin Tread-40"],
      Barrel: ["22\" Factory Fourteen Barrel", "22\" Boremaster Barrel", "18\" T300 Barrel", "16\" Chrome-lined RFX40 Barrel"],
      Optic: ["Slimline Pro", "SZ Mini", "Cronen Mini Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "SZ MiniTac-40", "XRK On-Point Optic", "Aim Op-v4", "DF105 Reflex Sight", "Monocle CT90", "Corvus Sol-76", "SZ Recharge-DX", "SZ SRO-7", "Corio Reflex", "Corio Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Battle Optic", "Corvus Downrange-00", "SZ HoloTherm", "XTen Angel-40", "VLK 4.0 Optic", "Schlager 3.4x", "Forge Tac Delta 4", "Cronen Zero-P Optic", "Cronen Zero-P Optic", "SZ Bullseye Optic", "SZ Aggressor-IR Optic", "Schlager Night View", "VX350 Thermal Optic", "Teplo-OP3 Scope", "DR582 Hybrid Sight", "Hybrid FirePoint", "SZ Vortex-90", "BPZ40 Hybrid", "SZ Oscar-9", "Angel-40 4.8x", "Thermo-Optic X9", "Teplo Clear Shot", "FTac Charlie7", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "3x RFL-Optic", "DrexSom Prime-90", "Ares Clear Shot"],
      UnderBarrel: ["Commando Foregrip", "Edge-47 Grip", "Demo Firm Grip", "XTen Gravedigger", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo Imp-44 Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTen Drop Grip", "XTen Nexus Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Op-X9 Foregrip", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bipod v9 Grip", "Level Aim Bipod", "Cornerstone Bipod", "XTen Stable Shot", "Bruen Warrior Grip", "HEX-40 Grip", "Core BP2", "FTAC Tiger Grip"],
      Magazine: ["5 Round Mag", "15 Round Mag"],
      Reargrip: ["Cronen EM55 Grip", "FSS Gen. 7 Grip", "FSS Spider Grip"],
      Stock: ["FTAC RTP-40 Stock", "SO R55 Adaptor", "Model 1957 Stock"],
      Laser: ["SZ 1mW PEQ", "Schlager PEQ Box IV", "Corio LAZ-44 v3", "FSS OLE-V Laser", "Canted Vibro-Dot 7", "1mW Laser Box", "STOVL DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90"],
      Ammunition: ["7.62 Frangible", "7.62 Hollowpoint", "7.62 Armor Piercing", "7.62 Overpressured +P", "7.62 High velocity", "7.62 Incendiary"],
      Comb: ["PD-A40 Sleeve", "5GN Tac-Comb", "FSS LS-3 Comb"]
    }
  },
  {
    name: "TAQ-V",
    category: "Battle Rifle" ,
    image: "/images/weapons/TAQ-V_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["GL Clear Breach", "TA HUL-Breach KL", "Eight-Point Flash Hider", "TZL-90 v3", "Cronen Dark KX30", "Husher-65 Silencer", "FR Titan Silencer", "Polarfire-S", "ZLR Talon 5", "Echoline GS-X", "Zulu-60", "Kastovia DX90", "Tempus GH50", "TY-LR8", "Lockshot KT85", "SA Leveler 55", "Bore-490", "Sakin Tread-40"],
      Barrel: ["Lance-50 12\" Barrel", "18\" Precision-6 Barrel"],
      Optic: ["Slimline Pro", "SZ Mini", "Cronen Mini Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "SZ MiniTac-40", "XRK On-Point Optic", "Aim Op-v4", "DF105 Reflex Sight", "Monocle CT90", "Corvus Sol-76", "SZ Recharge-DX", "SZ SRO-7", "Corio Reflex", "Corio Enforcer Optic", "SZ Lonewolf Optic", "Cronen Zero-P Optic", "Kazan-Holo", "SZ Battle Optic", "Corvus Downrange-00", "SZ HoloTherm", "XTen Angel-40", "VLK 4.0 Optic", "Schlager 3.4x", "Forge Tac Delta 4", "SZ Bullseye Optic", "SZ Aggressor-IR Optic", "Schlager Night View", "VX350 Thermal Optic", "Teplo-OP3 Scope", "DR582 Hybrid Sight", "Hybrid FirePoint", "SZ Vortex-90", "BPZ40 Hybrid", "SZ Oscar-9", "Angel-40 4.8x", "Thermo-Optic X9", "Teplo Clear Shot", "FTac Charlie7", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "3x RFL-Optic", "DrexSom Prime-90", "Ares Clear Shot", "Vigilant-30 C-Iron"],
      UnderBarrel: ["Corvus Masterkey", "Commando Foregrip", "Edge-47 Grip", "Demo Firm Grip", "XTen Gravedigger", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo Imp-44 Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTen Drop Grip", "XTen Nexus Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Op-X9 Foregrip", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bipod v9 Grip", "Level Aim Bipod", "Cornerstone Bipod", "XTen Stable Shot", "Bruen Warrior Grip", "HEX-40 Grip", "Core BP2", "FTAC Tiger Grip", "Hellscream 40mm"],
      Magazine: ["30 Round Mag", "50 Round Drum"],
      Reargrip: ["XRK Response Grip", "FSS Combat Grip", "Demo Cleanshot Grio"],
      Stock: ["TV LPX-434", "Tactique Brute Stock", "TV XLine Pro", "TV Cardinal Stock"],
      Laser: ["SZ 1mW PEQ", "Schlager PEQ Box IV", "Corio LAZ-44 v3", "FSS OLE-V Laser", "Canted Vibro-Dot 7", "1mW Laser Box", "STOVL DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90"],
      Ammunition: ["7.62 Frangible", "7.62 Hollowpoint", "7.62 Armor Piercing", "7.62 Overpressured +P", "7.62 High velocity", "7.62 Incendiary"]
    }
  },
  {
    name: "Carrack .300",
    category: "SniperRifle",
    image: "/images/weapons/Carrack_.300_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["AP-390 Flash Hider", "Ported DZ38", "Dark KX50 Flash Hider", "Nilsound 90", "FTac Reaper", "Bruen Agent 90", "Talon Sixteen", "EXF Relentless-40", "BVM-338", "Cronen DM338", "XRK Kraken", "TA CG76", "FTAC Dreadnought", "Shred CP90", "Demon Helix T7"],
      Barrel: ["26\" CF-Bipod Barrel", "30\" Flintline", "30\" Flintfire Bipod", "Heavy-Tac 80", "300 Subsound", "300 Subsound Bipod"],
      Optic: ["VLK 4.0 Optic", "Schlager 3.4x", "Forge Tac Delta 4", "Cronen Zero-P Optic", "SZ Bullseye Optic", "SZ Aggressor-IR Optic", "Schlager Night View", "VX350 Thermal Optic", "Teplo-OP3 Scope", "DR582 Hybrid Sight", "Hybrid FirePoint", "SZ Vortex-90", "BPZ40 Hybrid", "SZ Oscar-9", "Angel-40 4.8x", "Thermo-Optic X9", "Teplo Clear Shot", "FTac Charlie7", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "3x RFL-Optic", "DrexSom Prime-90", "Ares Clear Shot", "DXS Coriolis v4", "Lachmann Impact 9", "FTAC Locus SP", "SZ Heatsource 800", "SZ Ultra 11.5x", "MCPR-300 9.5x", "Victus 13x", "Signal 50 8x", "Corio 13x VRS", "Corio SZ-HS 800", "Raptor-FVM40", "SP-X 80 6.6x", "Luca Field-6", "Imperium 12x", "6.3x-14x Carrack"],
      UnderBarrel: ["Level Aim Bipod", "Cornerstone Bipod", "XTen Stable Shot"],
      Magazine: ["10 Round Mag", "15 Round Mag"],
      Reargrip: ["TV Nought Grip", "Engage-20 Grip", "Carrack Palm"],
      Stock: ["Carrack Ops Stock", "LEX V14 Stock"],
      Laser: ["1mW Artemis Laser", "1mW Quick Fire Laser", "Accu-Shot 5mW Laser", "VLK LZR 7mW", "Schlager ULO-66 Laser", "STOVL Tac Laser", "Hipshot L20", "Point-G3P 04", "FJX Ultrabeam XR", "EXF Solarflare"],
      Ammunition: [".300 Armor Piercing", ".300 Incendiary", ".300 Frangible", "•300 Hollowpoint", "•300 High Velocity", ".300 Overpressured +P"]
    }
  },
  {
    name: "FJX Imperium",
    category: "SniperRifle",
    image: "/images/weapons/FJX_Imperium_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["AP-390 Flash Hider", "Ported DZ38", "Dark KX50 Flash Hider", "Nilsound 90", "FTac Reaper", "Bruen Agent 90", "Talon Sixteen", "EXF Relentless-40", "BVM-338", "Cronen DM338", "XRK Kraken", "TA CG76", "FTAC Dreadnought", "Shred CP90", "Demon Helix T7"],
      Barrel: ["LR-Retort 29", "Fahrenheit 29", "Tac-Command 19", "Ceros 22", "Ceros 29"],
      Optic: ["VLK 4.0 Optic", "Schlager 3.4x", "Forge Tac Delta 4", "Cronen Zero-P Optic", "SZ Bullseye Optic", "SZ Aggressor-IR Optic", "Schlager Night View", "VX350 Thermal Optic", "Teplo-OP3 Scope", "DR582 Hybrid Sight", "Hybrid FirePoint", "SZ Vortex-90", "SZ Oscar-9", "Angel-40 4.8x", "Thermo-Optic X9", "FTac Charlie7", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "3x RFL-Optic", "DrexSom Prime-90", "Ares Clear Shot", "BPZ40 Hybrid", "Teplo Clear Shot", "DS Coriolis v4", "Lachmann Impact 9", "FTAC Locus SP", "SZ Heatsource 800", "SZ Ultra 11.5x", "MCPR-300 9.5x", "Victus 13x", "Sightmax Clear Shot", "Signal 50 8x", "Corio 13x VRS", "Corio SZ-HS 800", "Raptor-FVM40", "SP-X 80 6.6x", "Luca Field-6", "6.3x-14x Carrack"],
      Magazine: ["7 Round Mag"],
      Reargrip: ["CP60 Grip", "Skull-40"],
      Stock: ["FJX Lux-7", "RIB400", "FJX Kilo-Tac"],
      Laser: ["1mW Artemis Laser", "1mW Quick Fire Laser", "Accu-Shot 5mW Laser", "VLK LZR 7mW", "Schlager ULO-66 Laser", "STOVL Tac Laser", "Hipshot L20", "Point-G3P 04", "FJX Ultrabeam XR", "EXF Solarflare"],
      Ammunition: [".408 Armor Piercing", ".408 Incendiary", ".408 Frangible", ".408 Hollowpoint", ".408 High Velocity", ".408 Overpressured +P", ".408 Explosive"],
      Guard: ["Field-Wrapped Handle", "Keystone Handle"],
      Bolt: ["FJX Blast", "FJX H-Bolt"]
    }
  },
  {
    name: "LA-B 300",
    category: "SniperRifle",
    image: "/images/weapons/LA-B_330_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["AP-390 Flash Hider", "Ported DZ38", "Dark KX50 Flash Hider", "Nilsound 90", "FTac Reaper", "Bruen Agent 90", "Talon Sixteen", "EXF Relentless-40", "BVM-338", "Cronen DM338", "XRK Kraken", "TA CG76", "FTAC Dreadnought", "Shred CP90", "Demon Helix T7"],
      Barrel: ["22\" Cavalry Barrel", "23.5\" Fluted R-67", "18.5\" Bryson LR Factory", "16\" ZLR Executor", "80 Barrel"],
      Optic: ["VLK 4.0 Optic", "Schlager 3.4x", "Forge Tac Delta 4", "Cronen Zero-P Optic", "SZ Bullseye Optic", "SZ Aggressor-IR Optic", "Schlager Night View", "VX350 Thermal Optic", "Teplo-OP3 Scope", "DR582 Hybrid Sight", "Hybrid FirePoint", "SZ Vortex-90", "SZ Oscar-9", "Angel-40 4.8x", "Thermo-Optic X9", "FTac Charlie7", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "3x RFL-Optic", "DrexSom Prime-90", "Ares Clear Shot", "BPZ40 Hybrid", "Teplo Clear Shot", "DS Coriolis v4", "Lachmann Impact 9", "FTAC Locus SP", "SZ Heatsource 800", "SZ Ultra 11.5x", "MCPR-300 9.5x", "Victus 13x", "Sightmax Clear Shot", "Signal 50 8x", "Corio 13x VRS", "Corio SZ-HS 800", "Raptor-FVM40", "Luca Field-6", "Imperium 12x", "6.3x-14x Carrack"],
      UnderBarrel: ["Level Aim Bipod", "Cornerstone Bipod", "XTen Stable Shot"],
      Magazine: ["8-Round Magazine"],
      Stock: ["Bryson Streamline", "ZLR T70 Pad Extension"],
      Laser: ["SZ 1mW PEQ", "Schlager PEQ Box IV", "Corio LAZ-44 v3", "FSS OLE-V Laser", "1mW Laser Box", "STOVL DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90"],
      Ammunition: [".300 Armor Piercing", ".300 Incendiary", ".300 Frangible", ".300 Hollowpoint", ".300 High Velocity", ".300 Overpressured +P"],
      Comb: ["Cronen GI40 Cheek Riser", "Aim-Assist 406", "FSS EL-T Pouch"],
      Bolt: ["ZLR Reinforced Lockbolt", "FSS ST87 Bolt"]
    }
  },
  {
    name: "MCPR-300",
    category: "SniperRifle",
    image: "/images/weapons/MCPR_300_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["AP-390 Flash Hider", "Ported DZ38", "Dark KX50 Flash Hider", "Nilsound 90", "FTac Reaper", "Bruen Agent 90", "Talon Sixteen", "EXF Relentless-40", "BVM-338", "Cronen DM338", "XRK Kraken", "TA CG76", "FTAC Dreadnought", "Shred CP90", "Demon Helix T7"],
      Barrel: ["22\" OMX-456", "17.5\" Orca Barrel", "19\" Silentfire Barrel"],
      Optic: ["VLK 4.0 Optic", "Schlager 3.4x", "Forge Tac Delta 4", "Cronen Zero-P Optic", "SZ Bullseye Optic", "SZ Aggressor-IR Optic", "Schlager Night View", "VX350 Thermal Optic", "Teplo-OP3 Scope", "Hybrid FirePoint", "SZ Vortex-90", "SZ Oscar-9", "Angel-40 4.8x", "Thermo-Optic X9", "FTac Charlie7", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "3x RFL-Optic", "DrexSom Prime-90", "Ares Clear Shot", "DXS Coriolis v4", "Lachmann Impact 9", "FTAC Locus SP", "SZ Heatsource 800", "SZ Ultra 11.5x", "Victus 13x", "Signal 50 8x", "Corio 13x VRS", "Corio SZ-HS 800", "Raptor-FVM40", "SP-X 80 6.6x", "BPZ40 Hybrid", "Teplo Clear Shot", "Sightmax Clear Shot", "Cronen Irons", "Luca Field-6", "Imperium 12x", "6.3x-14x Carrack"],
      UnderBarrel: ["Level Aim Bipod", "Cornerstone Bipod", "XTen Stable Shot"],
      Magazine: ["5 Round Mag", "15 Round Mag"],
      Reargrip: ["Cronen Zero Grip", "Cronen RFX-300", "Cronen Cheetah Grip"],
      Stock: ["Cronen Lion Stock", "Cronen LW-88 Stock", "FSS Merc Stock"],
      Laser: ["SZ 1mW PEQ", "Schlager PEQ Box IV", "Corio LAZ-44 v3", "FSS OLE-V Laser", "1mW Laser Box", "STOVL DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90", "Canted Vibro-Dot 7"],
      Ammunition: [".300 Mag Armor Piercing", ".300 Mag Incendiary", ".300 Mag Frangible", ".300 Mag Hollowpoint", ".300 Mag High Velocity", ".300 Mag Overpressured", ".300 Mag Explosive"],
      Bolt: ["Cronen B85 Bolt", "Cronen Smooth Bolt"]
    }
  },
  {
    name: "Signal 50",
    category: "SniperRifle",
    image: "/images/weapons/Signal_50_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["Bruen L40 Kobra", "Talon Sixteen Silencer", "Bruen Agent 90", "Nilsound 90 Silencer", "Bruen Counter-Ops", "H26 Ported Comp", "Vigilante Comp", "Legion Fire Comp", "SA Shroud Flash Hider", "Demon Helix XL"],
      Barrel: ["29\" TV Kilo-50", "FSS Jetstream", "23.5\" SA Fifty-H7", "21.5\" Fluted Fifty"],
      Optic: ["XRK On-Point Optic", "Aim Op-v4", "DF105 Reflex Sight", "Monocle CT90", "Corvus Sol-76", "SZ Recharge-DX", "SZ SRO-7", "Corio Reflex", "Corio Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Battle Optic", "Corvus Downrange-00", "SZ HoloTherm", "XTen Angel-40", "VLK 4.0 Optic", "Schlager 3.4x", "Forge Tac Delta 4", "Cronen Zero-P Optic", "SZ Bullseye Optic", "SZ Aggressor-IR Optic", "Schlager Night View", "VX350 Thermal Optic", "Teplo-OP3 Scope", "DR582 Hybrid Sight", "Hybrid FirePoint", "SZ Vortex-90", "SZ Oscar-9", "Angel-40 4.8x", "Thermo-Optic X9", "FTac Charlie7", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "3x RFL-Optic", "DrexSom Prime-90", "Ares Clear Shot", "BPZ40 Hybrid", "Teplo Clear Shot", "DXS Coriolis v4", "Lachmann Impact 9", "FTAC Locus SP", "SZ Heatsource 800", "SZ Ultra 11.5x", "MCPR-300 9.5x", "Victus 13x", "Sightmax Clear Shot", "Corio 13x VRS", "Corio SZ-HS 800", "Raptor-FVM40", "SP-X 80 6.6x", "Luca Field-6", "Imperium 12x", "6.3x-14x Carrack"],
      UnderBarrel: ["Commando Foregrip", "Edge-47 Grip", "Demo Firm Grip", "XTen Gravedigger", "FTAC Ripper 56", "Demo Cleanshot 40", "Demo Imp-44 Grip", "FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTen Drop Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Op-X9 Foregrip", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Level Aim Bipod", "Cornerstone Bipod", "XTen Stable Shot", "Bruen Warrior Grip", "HEX-40 Grip", "FTAC Tiger Grip"],
      Magazine: ["7 Round Magazine"],
      Reargrip: ["Stalwart Grip", "Cronen Blockade Grip", "SA Finesse Grip"],
      Stock: ["FSS Echo Stock", "SO Inline Stock", "FTAC Invisi-670 Stock"],
      Laser: ["SZ 1mW PEQ", "Schlager PEQ Box IV", "Corio LAZ-44 v3", "FSS OLE-V Laser", "1mW Laser Box", "STOVL DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90"],
      Ammunition: [".50 Cal Frangible", ".50 Cal Armor Piercing", ".50 Cal High Velocity", ".50 Cal Incendiary", ".50 Cal Explosive"]
    }
  },
  {
    name: "SP-X 80",
    category: "SniperRifle",
    image: "/images/weapons/SP-X_80_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["AP-390 Flash Hider", "Ported DZ38", "Dark KX50 Flash Hider", "Nilsound 90", "FTac Reaper", "Bruen Agent 90", "Talon Sixteen", "EXF Relentless-40", "BVM-338", "Cronen DM338", "XRK Kraken", "TA CG76", "FTAC Dreadnought", "Shred CP90", "Demon Helix T7"],
      Barrel: ["22\" Cavalry Barrel", "22.5\" Elevate-11", "18.5\" Bryson LR Factory", "16\" ZLR Executor", "80 Barrel"],
      Optic: ["VLK 4.0 Optic", "Schlager 3.4x", "Forge Tac Delta 4", "Cronen Zero-P Optic", "SZ Bullseye Optic", "SZ Aggressor-IR Optic", "Schlager Night View", "VX350 Thermal Optic", "Teplo-OP3 Scope", "DR582 Hybrid Sight", "Hybrid FirePoint", "SZ Vortex-90", "SZ Oscar-9", "Angel-40 4.8x", "Thermo-Optic X9", "FTac Charlie7", "HMW-20 Optic", "Luca Bandera Scope", "DS Farsight 11", "3x RFL-Optic", "DrexSom Prime-90", "Ares Clear Shot", "DXS Coriolis v4", "Lachmann Impact 9", "FTAC Locus SP", "SZ Heatsource 800", "SZ Ultra 11.5x", "MCPR-300 9.5x", "Victus 13x", "Signal 50 8x", "Corio 13x VRS", "Corio SZ-HS 800", "Raptor-FVM40", "BPZ40 Hybrid", "Teplo Clear Shot", "Sightmax Clear Shot", "Luca Field-6", "Imperium 12x", "6.3x-14x Carrack"],
      UnderBarrel: ["Level Aim Bipod", "Cornerstone Bipod", "XTen Stable Shot"],
      Magazine: ["8-Round Magazine"],
      Reargrip: ["Schlager Match Grip", "Cronen Grip Wrap", "Bruen Lynx Grip"],
      Stock: ["MAX DMR Precision", "PVZ-890 Tac Stock"],
      Laser: ["SZ 1mW PEQ", "Schlager PEQ Box IV", "Corio LAZ-44 v3", "FSS OLE-V Laser", "1mW Laser Box", "STOVL DR Laser Box", "Corvus PEQ Beam-5", "FTAC Grimline Laser", "Luminate-44", "DXS Flash 90"],
      Ammunition: [".300 Armor Piercing", ".300 Incendiary", ".300 Frangible", "•300 Hollowpoint", ".300 High Velocity", ".300 Overpressured +P"],
      Bolt: ["ZLR Reinforced Lockbolt", "FSS ST87 Bolt"]
    }
  },
  {
    name: "Victus XMR",
    category: "SniperRifle",
    image: "/images/weapons/Victus_XMR_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["Bruen L40 Kobra", "Talon Sixteen Silencer", "Bruen Agent 90", "Nilsound 90 Silencer", "Bruen Counter-Ops", "H26 Ported Comp", "Vigilante Comp", "Legion Fire Comp", "SA Shroud Flash Hider", "Demon Helix XL"],
      Barrel: ["Mack 8 33.5 Super", "Mack 8 21.5 Short", "26\" MAmmunitionth HB50", "Executor 546"],
      Optic: ["Corio Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Battle Optic", "Corvus Downrange-00", "SZ HoloTherm", "XTen Angel-40", "VLK 4.0 Optic", "Schlager 3.4x", "Forge Tac Delta 4", "Cronen Zero-P Optic", "SZ Bullseye Optic", "SZ Aggressor-IR Optic", "Schlager Night View", "VX350 Thermal Optic", "Teplo-OP3 Scope", "DR582 Hybrid Sight", "Hybrid FirePoint", "SZ Vortex-90", "SZ Oscar-9", "Angel-40 4.8x", "Thermo-Optic X9", "FTac Charlie7", "HMW-20 Optic", "Luca Bandera Scope", "FTAC Locus SP", "SZ Heatsource 800", "SZ Ultra 11.5x", "MCPR-300 9.5x", "Sightmax Clear Shot", "Signal 50 8x", "Corio 13x VRS", "Corio SZ-HS 800", "Raptor-FVM40", "SP-X 80 6.6x", "Luca Field-6", "Imperium 12x", "6.3x-14x Carrack"],
      UnderBarrel: ["Level Aim Bipod", "Cornerstone Bipod", "XTen Stable Shot"],
      Magazine: ["7 Round Mag", "9 Round Mag"],
      Reargrip: [".50 Cal Frangible", ".50 Cal Armor Piercing", ".50 Cal High Velocity", ".50 Cal Incendiary", ".50 Cal Explosive"],
      Stock: ["FTAC Homeland", "XRK Bullseye", "XRK Rise 50", "EXF Colonel"],
      Laser: ["1mW Artemis Laser", "1mW Quick Fire Laser", "Accu-Shot 5mW Laser", "VLK LZR 7mW", "Schlager ULO-66 Laser", "STOVL Tac Laser", "Hipshot L20", "Point-G3P 04", "FJX Ultrabeam XR", "EXF Solarflare"],
      Ammunition: [".50 Cal Frangible", ".50 Cal Armor Piercing", ".50 Cal High Velocity", ".50 Cal Incendiary", ".50 Cal Explosive"],
      Guard: ["Corvus Responder"]
    }
  },
  {
    name: ".50 GS",
    category: "Pistol",
    image: "/images/weapons/50GS_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["EXF Fifty GS", "Matuzek Crown", "FTac Fifty Comp", "Potato Masher", "SA Peak-77", "GW Flash Fifty", "v --- Barrel ---", "SA Brake Barrel", "SA Comp Barrel", "SA Longshot-50", "SA Tyrant Fifty"],
      Optic: ["Corio Enforcer Optic", "SZ Lonewolf Optic", "SZ Battle Optic", "Corvus Downrange-00", "SZ HoloTherm", "Slimline Pro", "SZ Mini", "Cronen Mini Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "SZ MiniTac-40", "XRK On-Point Optic", "Aim Op-v4", "DF105 Reflex Sight", "Monocle CT90", "Corvus Sol-76", "SZ Recharge-DX", "SZ SRO-7", "Corio RE-X Pro", "XTen Angel-40"],
      Magazine: ["10 Round Mag", "13 Round Mag"],
      Reargrip: ["EXF Shoreline Grip", "EXF Resistance Grip", "GS.50 Wood Grain", "Akimbo .50 GS"],
      Laser: ["Series 710 Pistol Laser", "FJX Diod-70", "XTEN Sidearm-L400", "1mW Pistol Laser", "DZM-1000 L", "FTAC Vortex 200"],
      Ammunition: [".50 Pistol Frangible", ".50 Pistol Hollowpoint", ".50 Pistol Armor Piercing", ".50 Pistol Overpressured"],
      Trigger: ["SA Competition Trigger", "SA Fifty Trigger", "SA Hare Trigger"]
    }
  },
  {
    name: "9mm Daemon",
    category: "Pistol",
    image: "/images/weapons/9mm_Daemon_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["Hole Punch Breacher", "CN30 Suppressor", "Forge DX90-F", "FT Steel Fire", "Forge DX30-S", "DZS Open Comp", "Slab-10 Comp", "XRK Ventor-900", "Comp 905F Pistol", "Bruen Tri-Port", "Corvus Series-D", "XRK QZ-105", "SA GF90 Flash Hider"],
      Barrel: ["EXF Opal-9", "EXF Trope-H", "FT Competition", "XTEN Windfall", "SA Longfire"],
      Optic: ["Slimline Pro", "SZ Mini", "Cronen Mini Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "SZ MiniTac-40"],
      Magazine: ["20 Round Mag", "26 Round Mag"],
      Reargrip: ["Razorleaf Grip", "Magwell Grip", "Daemon Hand", "SGT Grip", "Akimbo 9mm Daemon"],
      Laser: ["Series 710 Pistol Laser", "FJX Diod-70", "XTEN Sidearm-L400", "1mW Pistol Laser", "DZM-1000 L", "FTAC Vortex 200"],
      Ammunition: ["9mm Frangible", "9mm Hollow Point", "9mm Armor Piercing", "9mm Overpressured +P", "9mm High Velocity"],
      Trigger: ["Precision Trigger", "DEX8 Trigger", "Rapid 30 Trigger"]
    }
  },
  {
    name: "Basilisk",
    category: "Pistol",
    image: "/images/weapons/Basilisk_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["RVS607 Comepensator", "FSS KL30", "FTAC H50 Ported", "FSS VMW Flash Hider"],
      Barrel: ["Bryson Snubby", "FTAC Fang Ported", "6.75\" Corvus Cougar 500", "10.5\" FTAC Arrow", "FTac Carnivora 7\""],
      Optic: ["Corio Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Battle Optic", "Corvus Downrange-00", "SZ HoloTherm", "Slimline Pro", "SZ Mini", "Cronen Mini Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "Corio RV500 Optic", "SZ MiniTac-40", "XRK On-Point Optic", "Aim Op-v4", "DF105 Reflex Sight", "Monocle CT90", "Corvus Sol-76", "SZ Recharge-DX", "SZ SRO-7", "Corio RE-X Pro", "XTen Angel-40"],
      Loader: ["S40 Rapid Loader", "B-3ST Loader"],
      Reargrip: ["Bryson WD-85 Grip", "Bryson Duel Grip", "SO RO-99 Grip", "Akimbo Basilisk"],
      Laser: ["Basilisk Grip Laser", "Revo-LSD 7mW", "Corvus LZR-790"],
      Ammunition: [".500 Armor Piercing", ".500 Frangible", ".500 Hollowpoint", ".500 Overpressured +P", ".500 Snakeshot"],
      Trigger: ["Bryson HTA", "Basilisk HT-7", "Bryson Match Grade"]
    }
  },
  {
    name: "FTAC Siege",
    category: "Pistol",
    image: "/images/weapons/FTAC_Siege_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["XTEN RR-40", "Forge DX90-F", "SA Schalldämpfer 99", "Singuard MKV", "EXF Huntress-90", "FSS Covert IV", "Bruen Pendulum", "AVR-T90 Comp", "Lacerta Compensator", "FTAC Castle Comp", "XRK Sandstorm", "Bruen Cubic Comp", "Spiral v3.5 Flash Hider", "Fox-202 Flash Hider", "XRK Knockout Breach", "TA HUL-Breach", "FT Siege Control"],
      Barrel: ["Mouse 40", "RN5-XV 9mm", "CMRN-50", "Ratchet BE", "SuperTac-VI", "NST-81", "Ratchet BE Tac"],
      Optic: ["Slimline Pro", "SZ Mini", "Cronen Mini Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "SZ MiniTac-40", "XRK On-Point Optic", "Aim Op-v4", "Corvus Sol-76", "SZ Recharge-DX"],
      UnderBarrel: ["Rebel-HX", "S40-H Grip", "Wedge Grip"],
      Magazine: ["20 Round Mag", "50 Round Drum", "72 Round Drum"],
      Reargrip: ["FTAC Hold", "FTAC Stead", "SUR-160", "Akimbo FTAC Siege"],
      Stock: ["Siege Wire Stock", "Heist-LW", "FTAC Folder", "FTAC Siege Stock"],
      Laser: ["Series 710 Pistol Laser", "FJX Diod-70", "XTEN Sidearm-L400", "1mW Pistol Laser", "DZM-1000 L", "FTAC Vortex 200"],
      Ammunition: ["9mm Frangible", "9mm Hollow Point", "9mm Armor Piercing", "9mm Overpressured +P", "9mm High Velocity"]
    }
  },
  {
    name: "GS Magna",
    category: "Pistol",
    image: "/images/weapons/GS_Magna_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["EXF Fifty GS", "Matuzek Crown", "FTac Fifty Comp", "Potato Masher", "SA Peak-77", "GW Flash Fifty"],
      Barrel: ["SA Brake Barrel", "SA Comp Barrel", "SA Longshot-50", "SA Tyrant Fifty"],
      Optic: ["Corio Enforcer Optic", "SZ Lonewolf Optic", "SZ Battle Optic", "Corvus Downrange-00", "SZ HoloTherm", "Slimline Pro", "SZ Mini", "Cronen Mini Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "SZ MiniTac-40", "XRK On-Point Optic", "Aim Op-v4", "DF105 Reflex Sight", "Monocle CT90", "Corvus Sol-76", "SZ Recharge-DX", "SZ SRO-7", "Corio RE-X Pro", "XTen Angel-40"],
      UnderBarrel: ["Op-X9 Foregrip", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bruen Warrior Grip"],
      Magazine: ["10 Round Mag", "13 Round Mag"],
      Reargrip: ["EXF Shoreline Grip", "EXF Resistance Grip", "GS.50 Wood Grain", "GS Magna Akimbo"],
      Ammunition: [".50 Pistol Frangible", "50 Pistol Hollowpoint", ".50 Pistol Armor Piercing", ".50 Pistol Overpressured"]
    }
  },
  {
    name: "P890",
    category: "Pistol",
    image: "/images/weapons/P890_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["Hole Punch Breacher", "CN30 Suppressor", "Forge DX90-F", "FT Steel Fire", "Forge DX30-S", "DZS Open Comp", "Slab-10 Comp", "XRK Ventor-900", "Comp 905F Pistol", "Bruen Tri-Port", "Corvus Series-D", "XRK QZ-105", "SA GF90 Flash Hider"],
      Barrel: ["Matuzek Cottonmouth", "Barrel", "XRK TacOps Barrel", "Matuzek Venom", "XTEN Harbinger"],
      Optic: ["Slimline Pro", "SZ Mini", "Cronen Mini Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "SZ MiniTac-40"],
      Magazine: ["10 Round Mag", "12 Round Mag"],
      Reargrip: ["FJX DVF60 Grip", "Bruen RSH-80 Grip", "BP-Grain Grip", "Akimbo P890"],
      Laser: ["Series 710 Pistol Laser", "FJX Diod-70", "XTEN Sidearm-L400", "1mW Pistol Laser", "DZM-1000 L", "FTAC Vortex 200"],
      Ammunition: [".45 Auto Frangible", ".45 Auto Hollowpoint", ".45 Auto Armor Piercing", ".45 Auto Overpressured"],
      Trigger: ["P890 Double Action", "Bruen MG80 Trigger", "XRK Heavy v3", "Bruen Express"]
    }
  },
  {
    name: "X12",
    category: "Pistol",
    image: "/images/weapons/X12_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["Hole Punch Breacher", "CN30 Suppressor", "Forge DX90-F", "FT Steel Fire", "Forge DX30-S", "DZS Open Comp", "Slab-10 Comp", "XRK Ventor-900", "Comp 905F Pistol", "Bruen Tri-Port", "Corvus Series-D", "XRK QZ-105", "SA GF90 Flash Hider"],
      Barrel: ["XRK Sidewinder-6 Slide", "XRK LUC-9"],
      Optic: ["Slimline Pro", "SZ Mini", "Cronen Mini Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "SZ MiniTac-40"],
      Magazine: ["24 Round Mag", "33 Round Mag", "50 Round Drum"],
      Reargrip: ["XRK Field Grip", "FTAC OL-Z Grip", "Cronen Lima-6", "Akimbo X12"],
      Stock: ["XRK Pistol Stock"],
      Laser: ["Series 710 Pistol Laser", "FJX Diod-70", "XTEN Sidearm-L400", "1mW Pistol Laser", "DZM-1000 L", "FTAC Vortex 200"],
      Ammunition: ["9mm Frangible", "9mm Hollow Point", "9mm Armor Piercing", "9mm Overpressured +", "9mm High Velocity"],
      Trigger: ["XRK Lighting Fire", "XRK TR9 Trigger", "XRK v6 Match"]
    }
  },
  {
    name: "X13 Auto",
    category: "Pistol",
    image: "/images/weapons/X13_Auto_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {
      Muzzle: ["Hole Punch Breacher", "CN30 Suppressor", "Forge DX90-F", "FT Steel Fire", "Forge DX30-S", "DZS Open Comp", "Slab-10 Comp", "XRK Ventor-900", "Comp 905F Pistol", "Bruen Tri-Port", "Corvus Series-D", "XRK QZ-105", "SA GF90 Flash Hider"],
      Barrel: ["XRK Sidewinder-6 Slide", "XRK LUC-9", "Impact Point"],
      Optic: ["Corio Enforcer Optic", "SZ Lonewolf Optic", "Kazan-Holo", "SZ Battle Optic", "Corvus Downrange-00", "SZ HoloTherm", "XTen Angel-40", "Slimline Pro", "SZ Mini", "Cronen Mini Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "SZ MiniTac-40", "XRK On-Point Optic", "Aim Op-v4", "DF105 Reflex Sight", "Monocle CT90", "Corvus Sol-76", "SZ Recharge-DX", "SZ SRO-7", "Corio RE-X Pro", "Slimline Pro", "SZ Mini", "Cronen Mini Dot", "Cronen Mini Pro", "SZ Sigma-IV Optic", "SZ MiniTac-40"],
      UnderBarrel: ["FSS Sharkfin 90", "Agent Grip", "Bruen Sync Shot Grip", "XTen Drop Grip", "XTen Nexus Grip", "Phase-3 Grip", "Merc Foregrip", "Lockgrip Precision-40", "Schlager Tango", "VX Pineapple", "Op-X9 Foregrip", "Operator Foregrip", "TV Wrecker Grip", "Bruen Tilt Grip", "Cronen Grooveshot Grip", "EXF Backdraft Grip", "Bruen Warrior Grip", "HEX-40 Grip", "FTAC Tiger Grip"],
      Magazine: ["24 Round Mag", "33 Round Mag", "50 Round Drum"],
      Reargrip: ["XRK Field Grip", "FTAC OL-Z Grip", "Cronen Lima-6", "Akimbo X13"],
      Stock: ["XRK Dynamic", "Precision stock", "XRK Bar Stock", "X13 Coachwhip Stock"],
      Laser: ["Series 710 Pistol Laser", "FJX Diod-70", "XTEN Sidearm-L400", "1mW Pistol Laser", "DZM-1000 L", "FTAC Vortex 200"],
      Ammunition: ["9mm Frangible", "9mm Hollow Point", "9mm Armor Piercing", "9mm Overpressured +P", "9mm High Velocity"]
    }
  },
  {
    name: "Combat Knife",
    category: "Melee",
    image: "/images/weapons/Combat_Knife_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: []
  },
  {
    name: "Dual Kamas",
    category: "Melee",
    image: "/images/weapons/Dual_Kamas_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {}
  },
  {
    name: "Dual Kodachis",
    category: "Melee",
    image: "/images/weapons/Dual_Kodachis_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {}
  },
  {
    name: "Pickaxe",
    category: "Melee",
    image: "/images/weapons/Pickaxe_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {}
  },
  {
    name: "Riot Shield",
    image: "/images/weapons/RiotShield_Gunsmith_MWII.webp",
        //no (no leading "/")
    category: "Melee",
    slots: {}
  },
  {
    name: "Tonfa",
    category: "Melee",
    image: "/images/weapons/Tonfa_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {}
  },
  {
    name: "JOKR",
    category: "Launchers",
    image: "/images/weapons/JOKR_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {}
  },
  {
    name: "PILA",
    category: "Launchers",
    image: "/images/weapons/PILA_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {}
  },
  {
    name: "RPG-7",
    category: "Launchers",
    image: "/images/weapons/RPG-7_Gunsmith_MWII.webp",
        //no (no leading "/")
    slots: {}
  },
  {
    name: "STRELA-P",
    category: "Launchers",
    image: "/images/weapons/Strela-P_model_MW.webp",
        //no (no leading "/")
    slots: {}
  }
];
export const ALL_SLOTS = [
  "Muzzle","Barrel","Optic","UnderBarrel","Magazine","Reargrip","Stock","Laser", "Ammunition","Comb","Rail","Trigger","Bolt","Lever","Loader"
];