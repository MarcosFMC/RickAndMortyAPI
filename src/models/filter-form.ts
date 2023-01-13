export interface FilterForm {
  created: string;
  status: string;
  gender: string;
}

export const filterFormInitialState: FilterForm = {
  created: "",
  status: "",
  gender: "",
};
