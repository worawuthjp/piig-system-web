import styled from 'styled-components';
import variables from 'theme/variables';

export const RegisterStyle = styled.div`
  background: ${variables.COLORS.BLACKTHEME};
  height: 100vh;
  width: 100%;
  display: flex;
  color: ${variables.COLORS.TEXTBLACKTHEME};
  .header {
    font-size: 35px;
    display: block;
    text-align: center;
  }

  .body {
    display: block;
  }
`;
