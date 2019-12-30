import React from 'react';
import '../src/main.css';
import { NotificationHeader } from '../src/Components';

export default {
  title: 'Notification Header',
};

/**
 * NotificationHeader component should be called with
 * @prop {String} text - (Optional) Message to be desplayed into header.
 * @prop {String} type - (Required) It's define the header styles.
 */
export const Success = () => (
  <NotificationHeader text="Success message to go here" type="success" />
);

export const Error = () => (
  <NotificationHeader text="An error ocurred and the Advertiser was not saved, please try again" type="error" />
);

export const Info = () => (
  <NotificationHeader text="Info message to go here" type="info" />
);

