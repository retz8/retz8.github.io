export type MenuDate = {
  id: string;
  date: string;
};

export type Food = {
  id: string;
  korName: string;
  engName: string;
  description: string;
};

export type MenuDataItem = {
  id: string;
  date: string;
  description: React.ReactNode;
  menu: Food[];
};

export type MenuPreviewItem = {
  id: string;
  korName: string;
  engName: string;
};

export type MenuDetailItem = Food & {
  image: string;
};

export type MenuData = MenuDataItem[];
