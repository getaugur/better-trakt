/**
 * List of all certifications by country
 */
export interface CertificationList {
  us: Certification[];
}

/**
 * A certification
 */
export interface Certification {
  name: string;
  slug: string;
  description: string;
}
