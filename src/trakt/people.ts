import { TraktApiIds } from "./traktTypes";

// ========================================
// Cast and Crew
// ========================================

export interface MoviePeople {
  cast?: MovieCastMember[];
  crew?: MovieCrew;
}

export interface ShowPeople {
  cast?: ShowCastMember[];
  crew?: ShowCrew;
}

// ========================================
// Crew jobs
// ========================================

export interface MovieCrew {
  production?: MovieCrewMember[];
  art?: MovieCrewMember[];
  crew?: MovieCrewMember[];
  "costume & make-up"?: MovieCrewMember[];
  directing?: MovieCrewMember[];
  writing?: MovieCrewMember[];
  sound?: MovieCrewMember[];
  camera?: MovieCrewMember[];
  "visual effects"?: MovieCrewMember[];
  lighting?: MovieCrewMember[];
  editing?: MovieCrewMember[];
}

export interface ShowCrew {
  art?: ShowCrewMember[];
  production?: ShowCrewMember[];
  sound?: ShowCrewMember[];
  "visual effects"?: ShowCrewMember[];
  "costume & make-up"?: ShowCrewMember[];
  writing?: ShowCrewMember[];
  directing?: ShowCrewMember[];
  camera?: ShowCrewMember[];
  lighting?: ShowCrewMember[];
  editing?: ShowCrewMember[];
  "created by"?: ShowCrewMember[];
}

// ========================================
// Cast Member
// ========================================

export interface MovieCastMember {
  characters: string[];
  person: Person;
}

// same as movie but with episode count
export interface ShowCastMember extends MovieCastMember {
  episode_count: number;
}

// ========================================
// Crew Member
// ========================================

export interface MovieCrewMember {
  jobs: string[];
  person: Person;
}

// same as movie but with episode count
export interface ShowCrewMember extends MovieCrewMember {
  episode_count: number;
}

// ========================================
// Generic Person obj
// ========================================
export interface Person {
  name: string;
  ids: TraktApiIds;
}
