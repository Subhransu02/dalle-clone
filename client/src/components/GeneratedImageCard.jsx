import { CircularProgress } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  gap: 16px;
  justify-content: center;
  padding: 16px;
  border: 2px dashed ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.arrow + 80};
  border-radius: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.black + 50};
  border-radius: 24px;
  object-fit: cover;
`;

const GeneratedImageCard = ({ src, loading }) => {
  return (
    <Container>
      {loading ? (
        <>
          <CircularProgress style={{color: "inherit", width: "24px"}} /> Generating Your Image...
        </>
      ) : (
        <>{src ? <Image src={src} /> : <>Write a prompt to generate image </>}</>
      )}
    </Container>
  );
};

export default GeneratedImageCard;
