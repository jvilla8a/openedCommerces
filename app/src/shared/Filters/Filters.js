import React from "react";
import PropTypes from "prop-types";

import { Container, Title, Filter } from "./Filters.styles";

const Filters = (props) => {
  const { list, title, addFilter, removeFilter, filters } = props;

  const isChecked = (item) => {
    if (filters.includes(item)) return true;
    return false;
  };

  const actionsFilter = (filter) => {
    if (isChecked(filter)) removeFilter(filter);
    else addFilter(filter);
  };

  return (
    <Container>
      <Title>{title}</Title>
      {list.map((filter) => (
        <Filter onClick={() => actionsFilter(filter)}>
          <input type="checkbox" checked={isChecked(filter)} />
          <label>{filter}</label>
        </Filter>
      ))}
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
