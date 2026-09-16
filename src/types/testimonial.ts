export interface Testimonial {
  /** The review text, as written by the couple. Do not paraphrase. */
  quote: string;
  /** Reviewer's display name, e.g. "Tabitha". */
  name: string;
  /** Month and year the review was left, e.g. "September 2025". */
  date: string;
  /** Where the review was originally published. */
  source?: "Google" | "Facebook" | "Direct";
}
