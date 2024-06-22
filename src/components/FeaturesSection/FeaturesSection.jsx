import React from 'react';
import FeatureBox from '../FeatureBox/FeatureBox';
import './FeaturesSection.css';
import supervisor from '/pictures/icon-supervisor.svg'
import karma from '/pictures/icon-karma.svg'
import builder from '/pictures/icon-team-builder.svg'
import calculator from '/pictures/icon-calculator.svg'
const FeaturesSection = () => {
  return (
    <div className="features-section">
      <h2>Reliable, efficient delivery</h2>
      <h2><strong>Powered by Technology</strong></h2>
      <p>
        Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful.
      </p>
      <div className="features-grid">
        <div className='boxEdgeSupervisor'>
        <FeatureBox
          title="Supervisor"
          description="Monitors activity to identify project roadblocks"
          icon={supervisor}
        />
        </div>
        <div className='boxEdgeBuilder'>
        <FeatureBox
          title="Team Builder"
          description="Scans our talent network to create the optimal team for your project"
          icon={builder}
        />
        </div>
        <div className='boxEdgeCalculator'>
        <FeatureBox
          title="Calculator"
          description="Uses data from past projects to provide better delivery estimates"
          icon={calculator}
        />
        </div>
        <div className='boxEdgeKarma'>
        <FeatureBox
          title="Karma"
          description="Regularly evaluates our talent to ensure quality"
          icon={karma}
        />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
