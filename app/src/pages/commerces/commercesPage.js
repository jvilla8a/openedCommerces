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
  SubTitle,
  Header,
  CategoryInfo,
} from "./commercesPage.styles";
import firebase from "../../shared/Firebase";
import { FILTERS } from "./commercesPage.constants";
import * as COMMERCES from "../../app.constants";

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
  const [filteredData, setFilteredData] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [payments, setPayments] = useState([]);
  const [methods, setMethods] = useState([]);
  const [type, setType] = useState({});

  const applyFilter = (newFilters) => {
    let newData = [];
    if (newFilters.length < 1) {
      setFilteredData(commerces);
      return false;
    }

    newFilters
      .sort((a, b) => {
        if (a.filter > b.filter) return 1;
        if (a.filter < b.filter) return -1;
        return 0;
      })
      .forEach((filter) => {
        switch (filter.filter) {
          case "Departamentos":
            newData = [
              ...newData,
              ...commerces.filter((item) => item.department === filter.value),
            ];
            break;
          case "Ciudades":
            newData = [
              ...newData,
              ...commerces.filter((item) => item.city === filter.value),
            ];
            break;
          case "Tipos de Pago":
            if (newData.length > 0)
              newData = newData.filter((item) =>
                item.paymentType.includes(filter.value)
              );
            else
              newData = commerces.filter((item) =>
                item.paymentType.includes(filter.value)
              );
            break;
          case "Tipos de Venta":
            if (newData.length > 0)
              newData = newData.filter((item) =>
                item.salesMethods.includes(filter.value)
              );
            else
              newData = commerces.filter((item) =>
                item.salesMethods.includes(filter.value)
              );
            break;
          default:
            break;
        }
      });

    setFilteredData(newData);
  };

  const handleAddFilter = (newFilter, title) => {
    const checkedFilters = [...appliedFilters];

    checkedFilters.push({ filter: title, value: newFilter });
    setFilters(checkedFilters);
    applyFilter(checkedFilters);
  };

  const handleRemoveFilter = (removedFilter) => {
    let checkedFilters = [...appliedFilters];
    checkedFilters = checkedFilters.filter(
      (filter) => filter.value !== removedFilter
    );

    setFilters(checkedFilters);
    applyFilter(checkedFilters);
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
    setFilteredData(data);
    setLoaderOpen(false);
    getFilters(data);
  };

  const getCategoryName = () => {
    const commerce = COMMERCES[`${category[0].toUpperCase()}Options`].filter(
      (item) => item.value === category
    );

    setType(...commerce);
  };

  useEffect(() => {
    setLoaderOpen(true);
    getCommerces();
    getCategoryName();
  }, []);

  useEffect(() => {
    setLoaderOpen(true);
    getCommerces();
    getCategoryName();
  }, [category]);

  return (
    <Container>
      <Header>
        <CategoryInfo>
          <Title>{type.label}</Title>
          <SubTitle>
            {commerces.length}
            {commerces.length === 1 ? " Comercio" : " Comercios"}
          </SubTitle>
        </CategoryInfo>
        <CurrentFilters
          filters={appliedFilters}
          removeFilter={handleRemoveFilter}
        />
      </Header>
      <Content>
        <FiltersList>
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
          {filteredData.map((commerce) => {
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
