import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import CurrentFilters from "../../shared/CurrentFilters";
import Filters from "../../shared/Filters";
import {
  Container,
  Content,
  FiltersList,
  Title,
  CardsHolder,
  Card,
} from "./commercesPage.styles";

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

  const [appliedFilters, setFilters] = useState([]);

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
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardsHolder>
      </Content>
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
