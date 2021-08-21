import styled, { css } from 'styled-components';
import variables from 'theme/variables';

export const PiiGLogoStyle = styled.div`
  ${(props) => {
    return css`
      width: ${props.sm ? variables.ELEMENTSIZE.LOGO_SIZE_SM : props.xs ? variables.ELEMENTSIZE.LOGO_SIZE_XS : variables.ELEMENTSIZE.LOGO_SIZE};
    `;
  }};

  .image {
    width: 100%;
  }
`;
