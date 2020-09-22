import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Container, Title, Tag, Icon } from "./CurrentFilters.styles";

const CurrentFilters = (props) => {
  const { filters, removeFilter } = props;

  const [innerFilters, setInnerFilters] = useState(filters);

  useEffect(() => {
    setInnerFilters(filters);
  }, [filters]);

  return (
    <Container>
      {innerFilters.length > 0 && <Title>Filtros Activos: </Title>}
      {innerFilters.map((item) => (
        <Tag onClick={() => removeFilter(item.value)} key={`F${item.value}`}>
          {item.value}
          <Icon className="fas fa-times" />
        </Tag>
      ))}
    </Container>
  );
};

CurrentFilters.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  removeFilter: PropTypes.func,
};

export default CurrentFilters;
