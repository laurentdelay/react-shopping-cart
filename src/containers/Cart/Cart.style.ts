import { IconButton } from "@material-ui/core";
import styled from "styled-components";

export const CartContent = styled.div`
  min-width: 300px;
`;

export const CartButton = styled(IconButton)`
  position: fixed !important;
  right: 5px;
  top: 5px;
  z-index: 100;
`;

export const CloseButton = styled(IconButton)`
  float: right;
  width: 30px;
  height: 30px;
`;

export const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;
