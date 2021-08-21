import styled from 'styled-components';
import variables from 'theme/variables';

export const SidebarStyle = styled.div`
  background: ${variables.COLORS.SIDEBARCOLOR};
  width: ${variables.ELEMENTSIZE.SIDEBAR_WIDTH};
  max-width: ${variables.ELEMENTSIZE.SIDEBAR_WIDTH};
  flex: 0 0 ${variables.ELEMENTSIZE.SIDEBAR_WIDTH};
  height: 100vh;
  padding-top: 100px;
  //z-index: 1;
  overflow-y: auto;

  .img {
    height: 63px;
  }

  .text-sidebar {
    display: block;
    padding: 10px 10px 10px 10px;
    color: ${variables.COLORS.WHITECOLOR};
  }

  .text-username {
    margin-left: 10px;
  }
`;
