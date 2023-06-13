import css from './Statistic.module.css';
import PropTypes from "prop-types";

export const Statistics = ({ title, stats }) => {

  return (
<section class={css.statistics}>
  <h2 class={css.title}>Upload stats</h2>

  <ul class={css.statlist}>
    <li class={css.item}>
      <span class={css.label}>.docx</span>
      <span class={css.percentage}>4%</span>
    </li>
    <li  class={css.item}>
      <span class={css.label}>.mp3</span>
      <span class={css.percentage}>14%</span>
    </li>
    <li  class={css.item}>
      <span class={css.label}>.pdf</span>
      <span class={css.percentage}>41%</span>
    </li>
    <li  class={css.item}>
      <span class={css.label}>.mp4</span>
      <span class={css.percentage}>12%</span>
    </li>
  </ul>
</section>
  )
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.string.isRequired,
};