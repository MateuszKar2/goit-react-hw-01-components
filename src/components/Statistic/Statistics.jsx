import css from './Statistic.module.css';
import PropTypes from "prop-types";
import { getRandomHexColor } from 'utils/getRandomHexColor';

export const Statistics = ({ title, stats }) => {
  return (
      <section className={css.statistics}>
          {title && <h2 className={css.title}>{title}</h2>}
          <ul className={css.statList}>
              {stats.map(el => {
                  const listItemStyle = {
                      backgroundColor: getRandomHexColor(),
                  };
                  return (
                      <li
                          className={css.item} style={listItemStyle} key={el.id}>
                          <span className={css.label}>{el.label}</span>
                          <span className={css.percentage}>{el.percentage}%</span>
                      </li>
                  );
              })}
          </ul>
      </section>
  )
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  })),
};