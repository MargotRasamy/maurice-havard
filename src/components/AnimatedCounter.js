import React from 'react';
import CountUp from 'react-countup';
import AnimatedSection from './AnimatedSection';

const getIconForTitle = (title) => {
  switch (title) {
    case "Clients Satisfaits":
      return "fa-users";
    case "Projets Réalisés":
      return "fa-check";
    case "Récompenses":
      return "fa-award";
    case "Membres de l'équipe":
      return "fa-user-tie";
    default:
      return "fa-check";
  }
};

const AnimatedCounter = ({ end, title, delay }) => {
  const iconClass = getIconForTitle(title);

  return (
    <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay={`${delay}s`}>
      <div className="fact-item bg-light rounded text-center h-100 p-5">
        <i className={`fa ${iconClass} fa-4x text-primary mb-4`}></i>
        <h5 className="mb-3">{title}</h5>
        <h1 className="display-5 mb-0">
          <CountUp
            end={end}
            duration={2.5}
            enableScrollSpy
            scrollSpyOnce
          />
        </h1>
      </div>
    </div>
  );
};

export default AnimatedCounter; 