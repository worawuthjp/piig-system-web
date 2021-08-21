import styled from 'styled-components';
import variables from 'theme/variables';

export const NavbarStyle = styled.div`
  background: ${variables.COLORS.NAVBARCOLOR};
  position: fixed;
  width: 100vw;
  justify-content: space-between;
  z-index: 2;

  .text-nav {
    color: ${variables.COLORS.WHITECOLOR};
  }
`;
