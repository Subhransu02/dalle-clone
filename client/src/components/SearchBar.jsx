import React from "react";
import styled from "styled-components";
import { SearchOutlined } from "@mui/icons-material";

const SearchBarContainer = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.text_secondary + 90};
  color: ${({ theme }) => theme.text_primary};
  align-items: center;
  gap: 6px;
  padding: 12px 16px;
  border-radius: 10px;
  width: 90%;
  max-width: 550px;
  @media (max-width: 768px) {
    padding: 10px 10px;
  }
`;

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchOutlined />
      <input
        type="text"
        placeholder="Search with prompt or name..."
        style={{
          border: "none",
          outline: "none",
          background: "transparent",
          color: "inherit",
          fontSize: "16px",
          fontWeight: 500,
          width: "100%",
        }}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
