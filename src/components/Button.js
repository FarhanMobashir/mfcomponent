import styled from "styled-components";
import React from "react";

const StyledButton = styled.button`
  border: none;
  padding: 10px 20px;
  color: white;
  background-color: red;

  border-radius: 10px;
`;

export const Button = ({ label }) => {
  return <StyledButton>{label}</StyledButton>;
};
