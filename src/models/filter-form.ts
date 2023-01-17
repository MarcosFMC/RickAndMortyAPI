export interface FilterForm {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
}

export const filterFormInitialState: FilterForm = {
  name: "",
  status: "",
  species: "",
  type: "",
  gender: "",
};
