import styled from '@emotion/styled';

type Props = {
  isActive: boolean;
};
export const Tile = styled.div<Props>`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  margin: 1px;
  background-color: ${props => (props.isActive ? 'yellow' : 'transparent')};
`;
