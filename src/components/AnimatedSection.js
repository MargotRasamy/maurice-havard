import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { WOW } from 'wowjs';

const AnimatedSection = ({ children, delay = '0.1s', animation = 'fadeIn' }) => {
  useEffect(() => {
    new WOW().init();
  }, []);

  return (
    <div className={`wow ${animation}`} data-wow-delay={delay}>
      {children}
    </div>
  );
};

AnimatedSection.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.string,
  animation: PropTypes.string,
};

export default AnimatedSection; 