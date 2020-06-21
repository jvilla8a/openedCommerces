import React from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

import { REGISTRY_URL } from "./registrySuccess.constants";

const registrySuccessPage = () => {
  const getInvitationCode = () => {
    return document.location.search.split("inv=")[1] || "";
  };

  return document.location.search.split("inv=")[1] ? (
    <RegistrySuccess>
      <Container>
        <h2>Gracias por registrarte</h2>
        <p>
          Recuerda que invitando personas puedes obtener beneficios al momento
          del lanzamiento de la página.
        </p>
        <p>Tu enlace de invitacion es: </p>
        <h3>{`${REGISTRY_URL}?inv=${getInvitationCode()}`}</h3>
        <p>Pronto podrás disfrutar de todas nuestras funcionalidades.</p>
      </Container>
    </RegistrySuccess>
  ) : (
    <Redirect to="/registro" />
  );
};

const RegistrySuccess = styled.div`
  height: 79vh;
  margin: 20px;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 800px;
  background-color: #ffffff;
  margin: 0px auto;
  padding: 50px;
  box-sizing: border-box;
  text-align: center;

  & p {
    font-size: 18px;
  }
  & p:last-of-type {
    margin-bottom: 0;
  }

  & h2 {
    margin-top: 0;
    margin-bottom: 50px;
    font-size: 28px;
    color: #ff861e;
  }

  & h3 {
    margin: 50px 0;
    font-size: 22px;
    color: #0072ff;
  }
`;

export default registrySuccessPage;
