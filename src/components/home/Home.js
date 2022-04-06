import React from 'react';
import { connect } from 'react-redux';
import Filters from '../filters/Filters';
import Result from '../results/Result';
import IntroMessage from './IntroMessage';

function Home(props) {
  // console.log(props);
  const globals = props.globalData;
  return (
    <div>
      {globals.wizardMode ? <IntroMessage /> : <Result /> }
      {!globals.searchTerm && <Filters /> }
    </div>
  );
}

const mapStateToProps = (state) => ({
  globalData: state.globalData,
});

export default connect(mapStateToProps)(Home);
