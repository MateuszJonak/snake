import styled from '@emotion/styled';

type Props = {
  isActive: boolean;
  isHead: boolean;
  isApple: boolean;
};
export const Tile = styled.div<Props>`
  width: 10px;
  height: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 1px;
  background-color: ${(props) =>
    props.isHead
      ? 'green'
      : props.isActive
      ? 'red'
      : props.isApple
      ? 'blue'
      : 'transparent'};
`;
