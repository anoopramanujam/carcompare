import React from 'react';
import * as Constants from '../../globals/Constants';

function FilterSteps({ selected, onSelect }) {
  return (
    <div className="ui three steps">
      <div
        className={`step ${selected === Constants.FilterSteps.Specs ? 'active' : 'cc-selector'}`}
        onClick={() => onSelect(Constants.FilterSteps.Specs)}
      >
        <i className="clipboard outline icon" />
        <div className="content">
          <div className="title">Specifications</div>
        </div>
      </div>
      <div
        className={`step ${selected === Constants.FilterSteps.Features ? 'active' : 'cc-selector'}`}
        onClick={() => onSelect(Constants.FilterSteps.Features)}
      >
        <i className="cogs icon" />
        <div className="content">
          <div className="title">Features</div>
        </div>
      </div>
      <div
        className={`step ${selected === Constants.FilterSteps.Prefs ? 'active' : 'cc-selector'}`}
        onClick={() => onSelect(Constants.FilterSteps.Prefs)}
      >
        <i className="sliders horizontal icon" />
        <div className="content">
          <div className="title">Preferences</div>
        </div>
      </div>
    </div>
  );
}

export default FilterSteps;
