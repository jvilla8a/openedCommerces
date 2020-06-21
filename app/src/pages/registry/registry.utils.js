import {
  DATA_BASE_URL,
  SUCCESSFUL_REGISTRATION_URL,
} from "./registry.constants";

// eslint-disable-next-line import/prefer-default-export
export const createCitiesURL = (state) => {
  const URL = `${DATA_BASE_URL}?$query=select*, :id where( upper(\`departamento\`) = upper('${state}'))`;

  return URL;
};

export const getSuccessfulRegistration = (id) => {
  const URL = `${SUCCESSFUL_REGISTRATION_URL}${id}`;

  return URL;
};
