import React from 'react';

class Header extends React.Component {
  render() {
    return (
        <header className="mini-header">
          <p id="headerMenu" className="mini-header-menu">
            <span className="mini-header-gback"></span>
          </p>

          <p id="headerDescribe" className="mini-header-describe">
            <span className="mini-header-center">{this.props.title}</span>
          </p>

          <p id="headerRtool" className="mini-header-rtool">
            <span className="mini-header-share"></span>
          </p>
        </header>
    );
  }
}

export default Header;
