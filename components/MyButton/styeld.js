import styled from 'styled-components';
import variables from 'theme/variables';

export const ButtonStyle = styled.button`
  border-radius: 4px;
  border: none;

  &.danger {
    background: ${variables.COLORS.REDCOLOR};
    color: ${variables.COLORS.WHITECOLOR};
  }

  &.success {
    background: ${variables.COLORS.SUCCESSCOLOR};
    color: ${variables.COLORS.WHITECOLOR};
  }
`;
