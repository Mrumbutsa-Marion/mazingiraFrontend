import React from 'react';
import './App.css';

const TextWrapper = ({ className, children }) => <div className={className}>{children}</div>;

const OverlapGroup = ({ imgSrc, imgAlt, text, goal }) => (
  <div className="overlap-group">
    <img className="img" alt={imgAlt} src={imgSrc} />
    <TextWrapper className="text-wrapper">{text}</TextWrapper>
    <p className="GROUP-GOAL">{goal}</p>
  </div>
);

const LandingPage = () => {
  const overlapGroupsInfo = [
    {
      imgSrc: 'rectangle-51.png',
      imgAlt: 'Rectangle',
      text: 'Recycling is the Answer',
      goal: 'GROUP GOAL: 26000.00 USD\nRAISED: 11500.00 USD (44.23%)',
    },
    // Add more objects for other overlap groups if necessary
  ];

  return (
    <div className="landing-page">
      <TextWrapper className="text-wrapper">TRANSFORM THE WORLD</TextWrapper>
      {/* ... other content ... */}

      {overlapGroupsInfo.map((group, index) => (
        <OverlapGroup key={index} {...group} />
      ))}

      {/* ... other content ... */}

      <footer>
        <TextWrapper className="text-wrapper-35">
          Copyright ©2023 All rights reserved |
        </TextWrapper>
      </footer>
    </div>
  );
};

export default LandingPage;
