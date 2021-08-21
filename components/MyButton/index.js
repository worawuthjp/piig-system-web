import React from 'react';
import { ButtonStyle } from './styeld';

export default function MyButton({ children, className, ...props }) {
  return (
    <ButtonStyle className={className} {...props}>
      {children}
    </ButtonStyle>
  );
}
