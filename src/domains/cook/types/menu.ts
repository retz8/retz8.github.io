// One course of a tasting dinner. Its photo is
// public/foods/<dinner id>/<course id>.webp.
export type Course = {
  id: string;
  engName: string;
  korName: string;
  description: string;
};

// One tasting dinner: its date is its title.
export type Dinner = {
  id: string;
  date: string;
  courses: Course[];
};
