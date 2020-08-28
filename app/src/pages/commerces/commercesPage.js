import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import CurrentFilters from "../../shared/CurrentFilters";
import Filters from "../../shared/Filters";
import Card from "../../shared/CommerceCard";
import Loader from "../../shared/Loader";
import {
  Container,
  Content,
  FiltersList,
  Title,
  CardsHolder,
} from "./commercesPage.styles";
import firebase from "../../shared/Firebase";

const DB = firebase.firestore();

const filter1 = [
  "Antioquia",
  "Cundinamarca",
  "Bolivar",
  "Atlantico",
  "Amazonas",
];
const filter2 = ["Medellín", "Bogotá", "Cartagena", "Barranquilla", "Leticia"];
const filter3 = ["Papeleria", "Bar", "Heladeria", "Abogados"];
const filter4 = ["Consultoria", "Restaurante"];

const CommercesPage = (props) => {
  const {
    match: {
      params: { category },
    },
  } = props;

  const [loaderOpen, setLoaderOpen] = useState(false);
  const [appliedFilters, setFilters] = useState([]);
  const [commerces, setCommerces] = useState([]);

  const handleAddFilter = (newFilter) => {
    const checkedFilters = [...appliedFilters];

    checkedFilters.push(newFilter);
    setFilters(checkedFilters);
  };

  const handleRemoveFilter = (removedFilter) => {
    let checkedFilters = [...appliedFilters];
    checkedFilters = checkedFilters.filter(
      (filter) => filter !== removedFilter
    );

    setFilters(checkedFilters);
  };

  const getCommerces = async () => {
    const query = await DB.collection("shops")
      .where("commerceTypes", "array-contains", `${category}`)
      .get();
    const data = query.docs.map((doc) => doc.data());

    setCommerces(data);
    setLoaderOpen(false);
  };

  useEffect(() => {
    setLoaderOpen(true);
    getCommerces();
  }, []);

  useEffect(() => {
    setLoaderOpen(true);
    getCommerces();
  }, [category]);

  return (
    <Container>
      <Content>
        <FiltersList>
          <Title>{category.replace("-", " ")}</Title>
          <CurrentFilters
            filters={appliedFilters}
            removeFilter={handleRemoveFilter}
          />
          <Filters
            title="Departamentos"
            list={filter1}
            filters={appliedFilters}
            addFilter={handleAddFilter}
            removeFilter={handleRemoveFilter}
          />
          <Filters
            title="Ciudades"
            list={filter2}
            filters={appliedFilters}
            addFilter={handleAddFilter}
            removeFilter={handleRemoveFilter}
          />
          <Filters
            title="Categorias"
            list={filter3}
            filters={appliedFilters}
            addFilter={handleAddFilter}
            removeFilter={handleRemoveFilter}
          />
          <Filters
            title="Especialidad"
            list={filter4}
            filters={appliedFilters}
            addFilter={handleAddFilter}
            removeFilter={handleRemoveFilter}
          />
        </FiltersList>
        <CardsHolder>
          {commerces.map((commerce) => {
            const {
              img,
              name,
              commerceTypes,
              salesMethods,
              paymentType,
            } = commerce;

            return (
              <Card
                avatar={img}
                title={name}
                category={commerceTypes ? commerceTypes[0] : ""}
                tags={[salesMethods[0], paymentType[0]]}
              />
            );
          })}
        </CardsHolder>
      </Content>
      <Loader open={loaderOpen} />
    </Container>
  );
};

CommercesPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      category: PropTypes.string,
    }),
  }),
};

export default withRouter(CommercesPage);
