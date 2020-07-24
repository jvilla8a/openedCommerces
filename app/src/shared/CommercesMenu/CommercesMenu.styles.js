import styled from "styled-components";

export const ContextMenu = styled.div`
  width: 550px;
  background-color: #282c34f5;
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 4px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  height: 600px;
  overflow: hidden;
  -webkit-box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);
`;

export const Menu = styled.ul`
  padding: 0px;
  width: 25%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin: 0px;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Option = styled.li`
  width: 100%;
  font-size: 13px;
  margin-bottom: 3px;

  &.Label {
    color: #ff861e;
    font-weight: bold;
  }
`;
