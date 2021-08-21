import styled, { css } from 'styled-components';
import variables from 'theme/variables';

export const LayoutStyle = styled.div`
  background: ${variables.COLORS.BLACKTHEME};
  height: 100vh;

  .main {
    flex: 1 1 auto;
    display: flex;
    ${(props) => {
      //console.log(props.navHeight);
      return css`
        max-height: calc((100%-${`${props.navHeight}px`}));
      `;
    }}
    max-width: calc((100%-${variables.ELEMENTSIZE.SIDEBAR_WIDTH}));
  }

  .main-content {
    ${(props) => {
      console.log(props.navHeight);
      return css`
        margin-top: calc((${`${props.navHeight}px`}));
      `;
    }}

    width: 500px;
    height: 500px;
  }
`;
