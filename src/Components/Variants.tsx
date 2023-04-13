import React from 'react';
import { motion } from 'framer-motion';

import gusirnik from '../assets/gusirnik.png';

import gusirnikOnWater from '../assets/gusirnik-on-water.png';
import gusirnikInCity from '../assets/gusirnik-in-city.png';
import gusirnikInArk from '../assets/gusirnik-in-ark.png';
import gusirnikInWinter from '../assets/gusirnik-in-winter.png';
import gusirnikInSummer from '../assets/gusirnik-in-summer.png';
import gusirnikInEvening from '../assets/gusirnik-in-evening.png';
import gusirnikInMorning from '../assets/gusirnik-in-morning.png';

import GusBlock from './GusBlock';

import styles from '../stylessheet/Variants.module.scss';

const Variants: React.FC = () => {
  return (
    <section>
      <div className={styles.title}>
        <h1>ГУСЫРНИК!!!!!</h1>
        <img src={gusirnik} alt="" />
      </div>
      <h1>ОН МОЖЕТ БЫТЬ РАЗНЫМ</h1>
      <GusBlock title="Например таким:">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.4 }}
        >
          <img src={gusirnikOnWater} alt="gus" />
        </motion.div>
      </GusBlock>

      <GusBlock title="Или таким:">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
        >
          <img src={gusirnikInCity} alt="gus" />
        </motion.div>
      </GusBlock>

      <GusBlock title="Либо таким:">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
        >
          <img src={gusirnikInArk} alt="gus" />
        </motion.div>
      </GusBlock>

      <GusBlock title="Зимним:">
        <motion.div
          initial={{ rotate: -100, y: 200, opacity: 0 }}
          whileInView={{ rotate: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
        >
          <img src={gusirnikInWinter} alt="gus" />
        </motion.div>
      </GusBlock>

      <GusBlock title="Летним:">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
        >
          <img src={gusirnikInSummer} alt="gus" />
        </motion.div>
      </GusBlock>

      <GusBlock title="Вечерним:">
        <motion.div
          initial={{ rotate: 180, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
        >
          <img src={gusirnikInEvening} alt="gus" />
        </motion.div>
      </GusBlock>

      <GusBlock title="Или утренним:">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img src={gusirnikInMorning} alt="gus" />
        </motion.div>
      </GusBlock>

      <h3>
        Выбери своего <b>ГУСЫРНИКА</b> и следуй за мечтой!
      </h3>
      <img
        src="https://media.tenor.com/YWHLhjz3QtIAAAAd/%D0%B3%D1%83%D1%81%D1%8C%D1%84%D0%BB%D0%B5%D0%BA%D1%81%D0%B8%D1%82-%D0%B3%D1%83%D1%81%D1%8C.gif"
        alt="DanceGus"
        style={{
          width: '50%',
        }}
      />
    </section>
  );
};
export default Variants;
