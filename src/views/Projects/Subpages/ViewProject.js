import React from 'react';
import PropTypes from 'prop-types'

import '../styles/ViewProject.css';

const ViewProject = ({ live, code, disableView }) => {
    return (
      <div className="ViewProject">
        <h1 className="ViewProject__title">View Project</h1>
        <section className="ViewProject__buttons">
          <button onClick={disableView} className='viewButton'>Back</button>
          <a className='viewLink' href={live}>
            <button className='viewButton'>Live</button>
          </a>
          <a className='viewLink' href={code}>
            <button className='viewButton'>Code</button>
          </a>
        </section>
      </div>
    );
}

ViewProject.propTypes = {
    live : PropTypes.string,
    code : PropTypes.string,
    disableView : PropTypes.func
}

export { ViewProject };