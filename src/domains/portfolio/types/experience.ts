// One row of the Experience list.
export type Experience = {
  id: string;
  organization: string;
  role: string;
  // The work itself, shown after the role.
  link?: {
    label: string;
    url: string;
  };
  period: string;
};
