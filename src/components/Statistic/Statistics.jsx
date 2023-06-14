import css from './Statistic.module.css';
import PropTypes from "prop-types";

export const Statistics = ({ title, stats }) => {

  return (
<section className={css.statistics}>
  <h2 className={css.title}>Upload stats</h2>

  <ul className={css.statlist}>
    <li className={css.item}>
      <span className={css.label}>.docx</span>
      <span className={css.percentage}>4%</span>
    </li>
    <li  className={css.item}>
      <span className={css.label}>.mp3</span>
      <span className={css.percentage}>14%</span>
    </li>
    <li  className={css.item}>
      <span className={css.label}>.pdf</span>
      <span className={css.percentage}>41%</span>
    </li>
    <li  className={css.item}>
      <span className={css.label}>.mp4</span>
      <span className={css.percentage}>12%</span>
    </li>
  </ul>
</section>
  )
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.string.isRequired,
};