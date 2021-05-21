import styled from '@emotion/styled';
import { TILE_SIZE } from '../utils/constants';

type Props = {
  isActive: boolean;
  isHead: boolean;
  isApple: boolean;
};
export const Tile = styled.div<Props>`
  width: ${TILE_SIZE}px;
  height: ${TILE_SIZE}px;
  margin: 1px;
  border-radius: 2px;
  background-color: ${(props) =>
    props.isHead
      ? '#69D2E7'
      : props.isActive
      ? '#A7DBD8'
      : props.isApple
      ? '#F38630'
      : 'transparent'};
`;
