import { IconButton } from "@material-ui/core";
import styled from "styled-components";

export const CartItemCard = styled.div`
  position: relative;
  max-height: 150px;
  margin: 0 10px;
  padding: 5px 0;

  border-bottom: 1px solid darkGrey;
`;

export const CartItemPicture = styled.img`
  max-height: 75px;
  object-position: center;
  object-fit: scale-down;
`;

export const CartItemBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 5px;
`;

export const CartItemTitle = styled.h4`
  width: 100%;
  margin: 0;
`;

export const CartItemButtons = styled.div`
  display: flex;
  align-items: center;
`;

export const CartItemValue = styled.h4`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0px;
  margin-right: 5px;
  height: 100%;
  text-align: right;
`;

export const CartItemDelete = styled(IconButton)`
  position: absolute !important;
  top: 3px;
  right: 3px;
  width: 20px;
  height: 20px;
`;

export const QuantityButton = styled(IconButton)``;
