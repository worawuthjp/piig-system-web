import MyNavbar from 'components/Navbar';
import MySideBar from 'components/Sidebar';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { LayoutStyle } from './styled';

export default function Layout({ children, className }) {
  const [navRef, setNavRef] = useState(null);
  useEffect(() => {
    console.log(_.get(navRef, 'current.clientHeight', 100));
  }, [navRef]);
  return (
    <LayoutStyle navHeight={_.get(navRef, 'current.clientHeight', 100)} className={className}>
      <MyNavbar setRef={setNavRef} />

      <div className={'main'}>
        <MySideBar />
        <div className="main-content">{children}</div>
      </div>
    </LayoutStyle>
  );
}
