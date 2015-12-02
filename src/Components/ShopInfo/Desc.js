import React from 'react';

class Desc extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div className="mini-store-block">
        <article className="store-notice">
          <em className="hint"></em>
          <span>{this.props.desc}</span>
        </article>
      </div>
    )
  }
}

export default Desc;
