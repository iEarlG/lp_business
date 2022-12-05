import React from 'react';

import { stats } from '../constants';

import styles from '../style';
const Stats = () => (
  <section className={`${styles.flexCenter} flex-wrap flex-row sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
        <h4 className="font-poppins font-semibold md:text-[40px] text-[30px] sm:leading-[53px] leading-[43px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-semibold md:text-[20px] text-[15px] sm:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats