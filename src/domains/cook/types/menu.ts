import type { Localized } from "@/lib/locale";

// One course of a tasting dinner. Its photo is
// public/foods/<dinner id>/<course id>.webp. Each page leads with the name
// in its own language and shows the other beneath it.
export type Course = {
  id: string;
  engName: string;
  korName: string;
  description: Localized;
};

// One tasting dinner: its date is its title.
export type Dinner = {
  id: string;
  date: string;
  courses: Course[];
};
