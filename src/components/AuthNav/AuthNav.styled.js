import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  display: flex;
  gap: 30px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: greenyellow;
  font-weight: 400;
  font-size: 20px;
  &.active {
    color: yellow;
  }
`;
