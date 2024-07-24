import barbarian from "/src/assets/images/dnd-character-dwarf-female-barbarian-in-the-mountains.jpg";
import bard from "/src/assets/images/mythjourneys-dnd-character-harengon-female-bard.jpg";
import cleric from "/src/assets/images/dnd-character-dwarf-male-cleric-in-heavy-shiny-armor.jpg";
import druid from "/src/assets/images/dnd-character-elf-female-druid-in-a-green-forest.jpg";
import fighter from "/src/assets/images/dnd-character-human-black-female-fighter.jpg";
import monk from "/src/assets/images/mythjourneys-dnd-character-human-female-monk.jpg";
import paladin from "/src/assets/images/dnd-character-human-male-fighter-paladin-in-heavy-armor.jpg";
import ranger from "/src/assets/images/dnd-character-elf-male-ranger-in-the-woods-mythjourneys.jpg";
import rogue from "/src/assets/images/mythjourneys-dnd-character-human-male-rogue.jpg";
import sorcerer from "/src/assets/images/mythjourneys-dnd-character-dragonborn-male-wizard-sorcerer.jpg";
import warlock from "/src/assets/images/dnd-character-lizardfolk-female-warlock-in-a-swamp.jpg";
import wizard from "/src/assets/images/mythjourneys-dnd-character-human-female-wizard-sorcerer-2.jpg";

export default function getPicture(name) {
    switch(name) {
        case "barbarian":
            return barbarian;
        case "bard":
            return bard;
        case "cleric":
            return cleric;
        case "druid":
            return druid;
        case "fighter":
            return fighter;
        case "monk":
            return monk;
        case "paladin":
            return paladin;
        case "ranger":
            return ranger;
        case "rogue":
            return rogue;
        case "sorcerer":
            return sorcerer;
        case "warlock":
            return warlock;
        case "wizard":
            return wizard;
        default:
            return fighter;
    }
}





