export type Testimonial = {
  id: number;
  rating: number;
  text: string;
  author: string;
  role: string;
};

/**
 * Six client reviews, transcribed exactly — the Ilocano/Taglish wording and the
 * anonymised author initials are left as written on the original site.
 */
export const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    text: "Agyaman Kuya! Success and Finally passed our thesis defense. Thank you sa supporta",
    author: "Ka*** ****",
    role: "Student - Cagayan State University",
  },
  {
    id: 2,
    rating: 5,
    text: "Kuya Success ti Defense mi! Agyaman kami unay!",
    author: "Br*** ****",
    role: "Student - Cagayan State University",
  },
  {
    id: 3,
    rating: 5,
    text: "Kuya Thankyou ta tinulungan na kami nga agprepare para iti defense mi.",
    author: "Ma*** ****",
    role: "Student - Cagayan State University",
  },
  {
    id: 4,
    rating: 5,
    text: "Sika latta kuma inasitgan mi idin kuya, salamat ta na ipasa mi metla",
    author: "An*** ****",
    role: "Student - Cagayan State University",
  },
  {
    id: 5,
    rating: 5,
    text: "Salamat sa tulong kuya sa pag develop ti system mi, naipasa mi metla",
    author: "Ma*** ****",
    role: "Student - Cagayan State University",
  },
  {
    id: 6,
    rating: 5,
    text: "Buti nalang kuya sika naguide kanya mi, nalpas mi metla ti thesis",
    author: "Ni*** ****",
    role: "Student - Cagayan State University",
  },
];

export const averageRating =
  testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;
