import { useForm } from "@/hooks";
import {
  apiCharacterAdapter,
  CreateForm,
  createFormInitialState,
} from "@/models";
import { ModalCharacterDescription } from "@/pages/Main";
import { SCForm } from "@/styled-components";
import React from "react";
import { apiURL, postCharacter } from "../service";
import { SCCreateForm, SCErrorValidation } from "../styled-components";
import { SCModalForm } from "../styled-components/SCModalForm";
export interface ICreateForm {}

const validateForm = (form: CreateForm) => {
  let errors: CreateForm = {
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    origin: "",
    location: "",
    image: "",
  };

  let ExpRegJustLetters = new RegExp(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/);
  var ExpRegURL = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);
  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  } else if (!ExpRegJustLetters.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' solo requiere letras sin espacios";
  }
  if (!form.status.trim()) {
    errors.status = "El campo 'Status' es requerido";
  }
  if (!form.species.trim()) {
    errors.species = "El campo 'Especies' es requerido";
  } else if (!ExpRegJustLetters.test(form.species.trim())) {
    errors.name = "El campo 'Nombre' solo requiere letras";
  }
  if (!form.type.trim()) {
    errors.type = "El campo 'Tipo' es requerido";
  } else if (!ExpRegJustLetters.test(form.type.trim())) {
    errors.name = "El campo 'Nombre' solo requiere letras";
  }
  if (!form.gender.trim()) {
    errors.gender = "El campo 'Genero' es requerido";
  }
  if (!form.origin.trim()) {
    errors.origin = "El campo 'Origen' es requerido";
  }
  if (!form.location.trim()) {
    errors.location = "El campo 'Localizacion' es requerido";
  }
  if (!form.image.trim()) {
    errors.image = "El campo 'Url de Imagen' es requerido";
  } else if (!ExpRegURL.test(form.image.trim())) {
    errors.image = "El campo 'Url de Imagen' requiere una URL valida";
  }

  return errors;
};

const FormCreateCharacter: React.FC<ICreateForm> = () => {
  const { form, errors, handleChange, handleBlur, handleSubmit } = useForm(
    createFormInitialState,
    validateForm
  );

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const data = await postCharacter(apiURL, form);
    console.log(data);
    alert("Datos subidos con exito en la api");
    handleSubmit();
  };

  return (
    <SCCreateForm onSubmit={onSubmit}>
      <SCForm>
        <h2>Create character</h2>
        <label>{"Name"}</label>
        <input
          type="text"
          name="name"
          placeholder="Enter a name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.name}
          maxLength={30}
          required
        />

        {errors.name && <SCErrorValidation>{errors.name}</SCErrorValidation>}
        <label>{"Status"} </label>
        <select
          name="status"
          placeholder="Enter a status"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.status}
          required
        >
          <option value="">---</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
        </select>

        {errors.status && (
          <SCErrorValidation>{errors.status}</SCErrorValidation>
        )}
        <label>{"Species"} </label>
        <input
          type="text"
          name="species"
          placeholder="Alien/Human/etc"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.species}
          required
        />

        {errors.species && (
          <SCErrorValidation>{errors.species}</SCErrorValidation>
        )}
        <label>{"Type"}</label>
        <input
          type="text"
          name="type"
          placeholder="Enter a type"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.type}
          required
        />

        {errors.type && <SCErrorValidation>{errors.type}</SCErrorValidation>}
        <label>{"Gender"} </label>
        <select
          name="gender"
          placeholder="Enter a gender"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.gender}
          required
        >
          <option value="">---</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Undefined">Undefined</option>
        </select>

        {errors.gender && (
          <SCErrorValidation>{errors.gender}</SCErrorValidation>
        )}
        <label>{"Origin"}</label>
        <input
          type="text"
          name="origin"
          placeholder="Enter a origin"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.origin}
          required
        />

        {errors.origin && (
          <SCErrorValidation>{errors.origin}</SCErrorValidation>
        )}
        <label>{"Location"} </label>
        <input
          type="text"
          name="location"
          placeholder="Enter a location"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.location}
          required
        />

        {errors.location && (
          <SCErrorValidation>{errors.location}</SCErrorValidation>
        )}
        <label>{"Image URL"} </label>
        <input
          type="text"
          name="image"
          placeholder="Enter a image URL"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.image}
          required
        />

        {errors.image && <SCErrorValidation>{errors.image}</SCErrorValidation>}
        <input type="submit" value="Create character" />
      </SCForm>
      <SCModalForm>
        <h2>Previsualization</h2>
        <ModalCharacterDescription {...apiCharacterAdapter(form)} />
      </SCModalForm>
    </SCCreateForm>
  );
};

export default FormCreateCharacter;
