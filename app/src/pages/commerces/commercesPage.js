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
import { FILTERS } from "./commercesPage.constants";

const DB = firebase.firestore();

const CommercesPage = (props) => {
  const {
    match: {
      params: { category },
    },
  } = props;

  const [loaderOpen, setLoaderOpen] = useState(false);
  const [appliedFilters, setFilters] = useState([]);
  const [commerces, setCommerces] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [payments, setPayments] = useState([]);
  const [methods, setMethods] = useState([]);

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

  const selectFilter = (filter) => {
    if (filter === "Departamentos") return states;
    if (filter === "Ciudades") return cities;
    if (filter === "Tipos de Pago") return payments;
    if (filter === "Tipos de Venta") return methods;
  };

  const getFilters = (data) => {
    setStates([...new Set(data.map((item) => item.department).sort())]);
    setCities([...new Set(data.map((item) => item.city).sort())]);
    setPayments([
      ...new Set(
        data
          .map((item) => item.paymentType)
          .sort()
          .flat(2)
      ),
    ]);
    setMethods([
      ...new Set(
        data
          .map((item) => item.salesMethods)
          .sort()
          .flat(2)
      ),
    ]);
  };

  const getCommerces = async () => {
    const query = await DB.collection("shops")
      .where("commerceTypes", "array-contains", `${category}`)
      .get();
    const data = query.docs.map((doc) => doc.data());

    setCommerces(data);
    setLoaderOpen(false);

    if (data.length > 1) getFilters(data);
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
          {FILTERS.map((filter) => (
            <Filters
              title={filter.title}
              list={selectFilter(filter.title)}
              filters={appliedFilters}
              addFilter={handleAddFilter}
              removeFilter={handleRemoveFilter}
            />
          ))}
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
