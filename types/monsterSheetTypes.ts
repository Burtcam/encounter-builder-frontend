// monsterSheetTypes.ts

/**
 * Represents the set of skills for a monster/character.
 */
export interface Skills {
  deception: string;
  diplomacy: string;
  religion: string;
  society: string;
  // Extend with other skills if necessary
}

/**
 * Represents the ability modifiers (as strings, since they often include a plus/minus sign).
 */
export interface Attributes {
  str: string;
  dex: string;
  con: string;
  int: string;
  wis: string;
  cha: string;
}

/**
 * Represents the creature's defensive stats.
 */
export interface Defenses {
  ac: string;
  hp: string;
}
export interface Saves {
  fort: string
  ref: string
  will: string

}

export interface MonsterSheet {
  name: string;
  level: string;
  source: string;         // For example: "NPC Core pg. 28"
  perception: string;     // E.g., "+7"
  languages: string[];    // Ex: ["Common", "Empyrean", "Utopian"]
  skills: Skills;
  attributes: Attributes;
  items: string[];        // A list of items as strings.
  defenses: Defenses;
  speed: string;          // E.g., "25 feet"
  image_link: string;
  traits: string[]; 
  saves: Saves;
  size: string;    // A link to the image (e.g., https://example.com/path/to/image.jpg)
}
