import React from 'react';
import { MyCardStyle } from './styled';

export default function MyCard({ className, children }) {
  return <MyCardStyle className={className}>{children}</MyCardStyle>;
}
