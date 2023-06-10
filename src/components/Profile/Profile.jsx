import css from './Profile.module.css';
import PropTypes from "prop-types";
import React from 'react';

export const Profile = ({username, tag, location, avatar, stats}) => {

<div className={css.profile}>
  <div class={css.description}>
    <img
      src={avatar}
      alt={username}
      class={css.avatar}
    />
    <p class={css.name}>Petra Marica</p>
    <p class={css.tag}>@pmarica</p>
    <p class={css.location}>Salvador, Brasil</p>
  </div>

  <ul class={css.stats}>
    <li>
      <span class={css.label}>Followers</span>
      <span class={css.quantity}>1000</span>
    </li>
    <li>
      <span class={css.label}>Views</span>
      <span class={css.quantity}>2000</span>
    </li>
    <li>
      <span class={css.label}>Likes</span>
      <span class={css.quantity}>3000</span>
    </li>
  </ul>
</div>
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  quantity: PropTypes.object.isRequired, 
};