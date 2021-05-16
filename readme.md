# MageSim TBC

Fork of the original Mage DPS simulator for WoW TBC Classic. This version has been modified for the level 60 TBC pre-patch phase.<br>
[Launch sim](https://jhenry82.github.io/magesim-tbc2)

For level 70, use the upstream version of the [original sim](https://cheesehyvel.github.io/magesim-tbc2) [(Source code)](https://github.com/Cheesehyvel/magesim-tbc2)

Backend written in C++ and compiled with Emscripten into WebAssembly.\
Frontend written in Vue.js and SCSS and compiled with Laravel mix.

## Modifications for Pre-Patch
* Removed all gear, spells, buffs, gems, and so on that are not available til after level 60 and/or Outland
* Modified spells and formulas to use their level 60 values
* Added an assortment of level 60 endgame gear and enchants
* Added back Classic world buffs, foods, oils, potions
* Tweaked default Fire and Frost talent builds to be valid level 60 specs
* The Undead Cleansing (UDC) set has been simulated as double dipping (applying to base damage plus crit damage), based on reports from the beta. UDC and Mark of the Champion assume you are facing an Undead target
* Option to configure mana thresholds when fire rotation switches to pure scorch spam. This avoids long periods of idle waiting, and sims as a DPS increase

## Limitations
This sim is just a minor tweak of the level 70 TBC sim. It has the same basic features and limitations as the original version
* Water Elemental is not currently supported. Other frost talents such as Icy Veins and Cold Snap ARE supported
* Arcane Blast is not available at level 60, so the Arcane spec is just arcane missiles spam
* No attempt has been made to include every single Classic item, enchant, or buff. It's meant to be a representative sample of late phase 6 raiding

## Building the project
Requirements for backend
* Emscripten
* Make

Requirements for frontend
* npm

Standing in the root folder of the project.\
Build backend: `$ make`\
Build frontend: `$ npx mix`

## Common issues
Some browsers have issues with WebAssembly when simply opening the file in the browser. This is then the url is something like `C://Users/Name/Downloads/magesim-tbc/index.html`.\
To solve this, run the project through a web server. If you have Python3 installed you can simply run `$ python3 -m http.server` in the project folder to start a simple web server.

## Authors
Original Sim: [Cheesehyvel](https://github.com/Cheesehyvel/)<br>
Pre-Patch Fork: Docjowles of Pagle