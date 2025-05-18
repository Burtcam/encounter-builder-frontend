import { MonsterSheet } from './monsterSheetTypes';

const abbotOfAbadar: MonsterSheet = {
  name: "Abbot of Abadar",
  level: "Creature 1",
  size: "Medium",
  source: "NPC Core pg. 28",
  perception: "+7",
  languages: ["Common", "Empyrean", "Utopian"],
  traits:  ["Human", "Humanoid", "Holy"],
  skills: {
    deception: "+6",
    diplomacy: "+8 (+10 with members of own faith)",
    religion: "+21",
    society: "+7",
  },
  attributes: {
    str: "+1",
    dex: "+1",
    con: "-2",
    int: "+2",
    wis: "+4",
    cha: "+3",
  },
  defenses: {
    ac: "14",
    hp: "15",
  },
  saves: {
    fort: "+3",
    ref: "+4",
    will: "+11",
  },
  speed: "25 feet",
  image_link: "https://2e.aonprd.com/Images/Monsters/Abbot_of_Abadar.webp",
};

export default abbotOfAbadar