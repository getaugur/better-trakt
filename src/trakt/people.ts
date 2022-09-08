import { TraktApiIds } from './traktTypes';

// ========================================
// Cast and Crew
// ========================================

/**
 * People who work on a movie
 */
export interface MoviePeople {
  cast?: MovieCastMember[];
  crew?: MovieCrew;
}

/**
 * People who work on a show
 */
export interface ShowPeople {
  cast?: ShowCastMember[];
  crew?: ShowCrew;
}

// ========================================
// Crew jobs
// ========================================

/**
 * Movie crew broken up by department
 */
export interface MovieCrew {
  production?: MovieCrewMember[];
  art?: MovieCrewMember[];
  crew?: MovieCrewMember[];
  'costume & make-up'?: MovieCrewMember[];
  directing?: MovieCrewMember[];
  writing?: MovieCrewMember[];
  sound?: MovieCrewMember[];
  camera?: MovieCrewMember[];
  'visual effects'?: MovieCrewMember[];
  lighting?: MovieCrewMember[];
  editing?: MovieCrewMember[];
}

/**
 * Show crew broken up by department
 */
export interface ShowCrew {
  art?: ShowCrewMember[];
  production?: ShowCrewMember[];
  sound?: ShowCrewMember[];
  'visual effects'?: ShowCrewMember[];
  'costume & make-up'?: ShowCrewMember[];
  writing?: ShowCrewMember[];
  directing?: ShowCrewMember[];
  camera?: ShowCrewMember[];
  lighting?: ShowCrewMember[];
  editing?: ShowCrewMember[];
  'created by'?: ShowCrewMember[];
}

// ========================================
// Cast Member
// ========================================

/**
 * Cast member in a movie
 */
export interface MovieCastMember {
  characters: string[];
  person: Person;
}

/**
 * Cast member in a show
 * @remarks
 * Same as MovieCastMember but with episode count
 */
export interface ShowCastMember extends MovieCastMember {
  episode_count: number;
}

// ========================================
// Crew Member
// ========================================

/**
 * Crew member in a movie
 */
export interface MovieCrewMember {
  jobs: string[];
  person: Person;
}

/**
 * Cew member in a show
 * @remarks
 * Same as MovieCrewMember but with episode count
 */
export interface ShowCrewMember extends MovieCrewMember {
  episode_count: number;
}

// ========================================
// Generic Person obj
// ========================================

/**
 * Just a generic person obj
 */
export interface Person {
  name: string;
  ids: TraktApiIds;
}
