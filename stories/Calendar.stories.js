import React from 'react';
import { DateRangePicker } from '@blueprintjs/datetime';

export default {
  title: 'Calendar',
};

/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * *  See full documentation for @blueprintjs/datetime library in:   * *
 * *                                                                 * *
 * *  https://blueprintjs.com/docs/#datetime/daterangepicker         * *
 * *                                                                 * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
export const CalendarBluePrintJs = () => (
  <DateRangePicker contiguousCalendarMonths={false} />
);
