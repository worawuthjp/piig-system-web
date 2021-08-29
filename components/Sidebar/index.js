import Link from 'next/link';
import React from 'react';
import { Image } from 'react-bootstrap';
import { SidebarStyle } from './styled';

export default function MySideBar() {
  return (
    <SidebarStyle>
      <Link href="#">
        <a className="text-sidebar col-md-12">
          <Image className="img" src="assets/images/profiles/profile1.svg" roundedCircle fluid />
          <span className="text-username">Admin0011</span>
        </a>
      </Link>
    </SidebarStyle>
  );
}
