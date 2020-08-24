import styled from "styled-components";

export const Card = styled.div`
  width: 30%;
  max-width: 350px;
  background-color: #ffffff;
  margin: 5px 5px 10px 5px;
  border-radius: 10px;
  overflow: hidden;
`;
export const Avatar = styled.img`
  height: 100px;
  width: 100px;
  position: absolute;
  bottom: -30px;
  left: calc(50% - 50px);
  z-index: 1;
  border-radius: 999px;
  box-shadow: 0px 4px 10px 0px;
`;

export const Title = styled.h3`
  margin: 0;
`;

export const Header = styled.div`
  position: relative;
`;

export const Body = styled.div`
  text-align: center;
  margin: 40px 0 20px;
`;

export const Subtitle = styled.span`
  text-align: center;
  font-size: 14px;
  color: #cccccc;
  font-weight: 500;
`;

export const Banner = styled.img`
  max-width: 100%;
`;

export const Action = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const TagsContainer = styled.div`
  margin: 15px 0;
`;

export const Tag = styled.span`
  font-size: 12px;
  padding: 1px 8px;
  border-radius: 99px;
  border: 1px solid #000;
  margin: 0 2px;
  background: #000;
  color: #fff;
`;
