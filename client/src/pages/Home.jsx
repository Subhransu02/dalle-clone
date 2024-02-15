import React from "react";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  background: ${({ theme }) => theme.bg};
  padding: 30px 30px;
  padding-botton: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media (max-width: 600px) {
    padding: 6px 10px;
  }
`;

const Headline = styled.h1`
  font-size: 34px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
const Span = styled.span`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.secondary};
`;
const Home = () => {
  return (
    <Container>
      <Headline>
        Explore popular posts in community!
        <Span>⦿ Generated with AI ⦿</Span>
      </Headline>
      <SearchBar />
    </Container>
  );
};

export default Home;
