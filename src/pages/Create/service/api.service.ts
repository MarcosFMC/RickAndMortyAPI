import { CreateForm } from "@/models";

export const apiURL = "http://localhost:8080/api/character";

export const postCharacter = async (url: string, data: CreateForm) => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => res.json());
};
