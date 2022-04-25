import styled from "styled-components";

import { Colors } from "../../styles/Colors";

export const Container = styled.div`
  display: flex;
  padding: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: black 1px dashed;
`;

export const Title = styled.div`
  max-width: 240px;
  text-align: center;
  color: ${Colors.grey};
`;
