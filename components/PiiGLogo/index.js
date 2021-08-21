import classNames from 'classnames';
import React from 'react';
import { Image } from 'react-bootstrap';
import { PiiGLogoStyle } from './styled';

export default function PiiGLogo({ className, xs, sm, md, isCenter, ...props }) {
  return (
    <PiiGLogoStyle xs={xs} sm={sm} md={md} className={classNames({ 'ml-auto': isCenter, 'mr-auto': isCenter })}>
      <Image className={(className, 'image')} {...props} src="assets/images/logo/PiiGLogo.svg" />
    </PiiGLogoStyle>
  );
}
