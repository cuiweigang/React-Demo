import React from 'react';

class Header extends React.Component {
  render () {
    return (
      <header className="mini-header">
        <p id="headerMenu" className="mini-header-menu">
          <span className="mini-header-gback"></span>
        </p>
        <p id="headerDescribe" className="mini-header-describe">
          <span className="mini-header-center">我的店铺</span>
        </p>
        <p id="headerRtool" className="mini-header-rtool">
          <span className="mini-header-share"></span>
        </p>
      </header>
    );
  }
}

export default Header;
