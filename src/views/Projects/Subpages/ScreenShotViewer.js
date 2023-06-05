import React from "react";
import PropTypes from 'prop-types';

const ScreenShotViewer = ({ image, imageRef, arrayOfId, id, changeImage }) => {
    return (
      <div className={`Project__content__info__screenShotViewer`}>
        <div ref={imageRef} className={`img ${image}`} />
        <div className="dots">
          {arrayOfId.map((item) => (
            <section
              key={item}
              className={item === id ? "dot on" : "dot off"}
              onClick={() => changeImage(item)}
            />
          ))}
        </div>
      </div>
    );
}

ScreenShotViewer.propTypes = {
    image: PropTypes.string,
    imageRef: PropTypes.object,
    arrayOfId: PropTypes.arrayOf(PropTypes.number),
    id: PropTypes.number,
    changeImage: PropTypes.func
}

export { ScreenShotViewer }