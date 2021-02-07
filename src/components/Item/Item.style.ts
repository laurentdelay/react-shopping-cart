import styled from "styled-components";

const radius = 10;

export const ItemCard = styled.div`
  border: 1px solid darkGrey;
  border-radius: ${radius}px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;
`;

export const ItemPicture = styled.img`
  display: block;
  max-height: 250px;
  height: 40%;
  object-fit: contain;

  margin-top: ${radius}px;
`;

export const ItemBody = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  height: 100%;
  padding: 1rem;
`;
