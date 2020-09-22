import React from "react";
import PropTypes from "prop-types";

import { Container, Title, Filter, Comment } from "./Filters.styles";

const Filters = (props) => {
  const { list, title, addFilter, removeFilter, filters } = props;

  const isChecked = (item) => {
    let checked = false;
    filters.forEach((element) => {
      if (element.value === item) checked = true;
    });

    return checked;
  };

  const actionsFilter = (filter) => {
    if (isChecked(filter)) removeFilter(filter);
    else addFilter(filter, title);
  };

  return (
    <Container>
      <Title>{title}</Title>
      {list.length ? (
        list.map((filter) => (
          <Filter onClick={() => actionsFilter(filter)}>
            <input type="checkbox" checked={isChecked(filter)} />
            <label>{filter}</label>
          </Filter>
        ))
      ) : (
        <Comment>No hay filtros</Comment>
      )}
    </Container>
  );
};

Filters.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  filters: PropTypes.arrayOf(PropTypes.string),
  addFilter: PropTypes.func,
  removeFilter: PropTypes.func,
};

export default Filters;
