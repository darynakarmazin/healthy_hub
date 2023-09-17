import React from 'react';

import css from './weightChart.module.css';

const _ = require('lodash');

// const labels = [
//   '1',
//   '2',
//   '3',
//   '4',
//   '5',
//   '6',
//   '7',
//   '8',
//   '9',
//   '10',
//   '11',
//   '12',
//   '13',
//   '14',
//   '15',
//   '16',
//   '17',
//   '18',
//   '19',
//   '20',
//   '21',
//   '22',
//   '23',
//   '24',
//   '25',
//   '26',
//   '27',
//   '28',
//   '29',
//   '30',
// ];

const randomScaling = function () {
  return (
    (Math.random() > 0.5 ? 1.0 : 1.0) * Math.round(Math.random() * 10 + 60)
  );
};

const data = [
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
  randomScaling(),
];

const average = Math.round(_.mean(data));

const WeightChart = () => {
  return (
    <div className={css.weightChart}>
      <div className={css.dashboardTitle}>
        <p className={css.chartTitle}>Weight</p>
        <p className={css.chartSubtitle}>Average value: {average} kg</p>
      </div>
      <div className={css.chart}></div>
    </div>
  );
};

export default WeightChart;
