import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import PropTypes from 'prop-types';

const ContriesListItem = ({
  country: {
    country,
    countryInfo: { flag },
    cases,
    todayCases,
    deaths,
    todayDeaths,
    recovered,
    tests
  }
}) => {
  return (
    <div className='CountryListItem'>
      <div className='flagAndTitle'>
        <img src={flag} alt={country} />
        <p className='CountryName'>{country}</p>
      </div>

      <div className='CDR'>
        <OverlayTrigger
          key='Cases'
          placement='bottom'
          overlay={
            <Tooltip className='myToolTip' id='tooltip-bottom'>
              Confirmed Cases
            </Tooltip>
          }>
          <div className='Cases'>
            <i className='fas fa-users'></i>
            {cases.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
            {todayCases > 0 && (
              <span className='todayResults'>
                +
                {todayCases
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
              </span>
            )}
          </div>
        </OverlayTrigger>

        <OverlayTrigger
          key='Deaths'
          placement='bottom'
          overlay={
            <Tooltip className='myToolTip' id='tooltip-bottom'>
              Confirmed Deaths
            </Tooltip>
          }>
          <div className='Deaths'>
            <i className='fas fa-skull'></i>
            {deaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
            {todayDeaths > 0 && (
              <span className='todayResults'>
                +
                {todayDeaths
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
              </span>
            )}
          </div>
        </OverlayTrigger>

        <OverlayTrigger
          key='Recovered'
          placement='bottom'
          overlay={
            <Tooltip className='myToolTip' id='tooltip-bottom'>
              Confirmed Recovered
            </Tooltip>
          }>
          <div className='Recovered'>
            <i className='fas fa-hospital-user'></i>
            {recovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
          </div>
        </OverlayTrigger>

        <OverlayTrigger
          key='Tests'
          placement='bottom'
          overlay={
            <Tooltip className='myToolTip' id='tooltip-bottom'>
              Confirmed Tests
            </Tooltip>
          }>
          <div className='Tests'>
            <i className='fas fa-vial'></i>
            {tests.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
          </div>
        </OverlayTrigger>
      </div>
    </div>
  );
};

ContriesListItem.propTypes = {
  updated: PropTypes.number,
  country: PropTypes.object,
  flag: PropTypes.string,
  cases: PropTypes.number,
  todayCases: PropTypes.number,
  deaths: PropTypes.number,
  todayDeaths: PropTypes.number,
  recovered: PropTypes.number,
  tests: PropTypes.number
};

export default ContriesListItem;
