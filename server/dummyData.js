import slug from 'limax';
import createEvent from './util/createEvent';
import Event from './models/event';

const days = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
];

export default function () {
  // const eventCount = Event.count().exec();
  const removeEvents = Event.remove({}).exec();
  return removeEvents.then(count => {
    if (true || !count) {
      return Promise.all([
        createEvent({
          name: 'Latin Night',
          type: 'latin',
          uid: '1',
          dateLastUpdated: new Date(),
          time: new Date('November 9, 2017'),
          day: days[(new Date('November 9, 2017')).getDay()],
          tags: ['dance', 'recurring', 'music', 'dj'],
          defaultCuid: '1',
          data: [
            {
              name: 'Revenue',
              slug: slug('Revenue'),
              value: 0,
              display: 'usd',
              fields: [
                {
                  name: 'Bar Revenue',
                  slug: slug('Bar Revenue'),
                  value: 0,
                  display: 'usd',
                  fields: [
                    {
                      name: 'Beer',
                      slug: slug('Beer'),
                      value: 0,
                      display: 'usd',
                    },
                    {
                      name: 'Wine',
                      slug: slug('Wine'),
                      value: 0,
                      display: 'usd',
                    },
                    {
                      name: 'Liquor',
                      slug: slug('Liquor'),
                      value: 0,
                      display: 'usd',
                    },
                  ],
                },
                {
                  name: 'Grossed at Door',
                  slug: slug('Grossed at Door'),
                  value: 0,
                  display: 'usd',
                  fields: [
                    {
                      name: 'Pre-show Tickets',
                      slug: slug('Pre-show Tickets'),
                      value: 327.30,
                      display: 'usd',
                    },
                    {
                      name: 'Day of Show',
                      slug: slug('Day of Show'),
                      value: 0,
                      display: 'usd',
                    },
                  ],
                },
                {
                  name: 'Other Revenue',
                  slug: slug('Other Revenue'),
                  value: 0,
                  canAdd: true,
                  display: 'usd',
                  fields: [],
                },
              ],
            },
            {
              name: 'Expenditure',
              slug: slug('Expenditure'),
              display: 'usd',
              value: 0,
              fields: [
                {
                  name: 'Cost of Talent',
                  slug: slug('Cost of Talent'),
                  value: 0,
                  display: 'usd',
                  fields: [
                    {
                      name: 'Cash guarantee',
                      slug: slug('Cash guarantee'),
                      value: 0,
                      display: 'usd',
                    },
                    {
                      name: 'Total paid from ticket sales',
                      slug: slug('Total paid from ticket sales'),
                      value: 0,
                      display: 'usd',
                    },
                  ],
                },
                {
                  name: 'Staffing Costs',
                  slug: slug('Staffing Costs'),
                  value: 0,
                  display: 'usd',
                  fields: [
                    {
                      name: 'Security',
                      slug: slug('Security'),
                      value: 0,
                      display: 'usd',
                    },
                    {
                      name: 'Sound',
                      slug: slug('Sound'),
                      value: 0,
                      display: 'usd',
                    },
                    {
                      name: 'Bar',
                      slug: slug('Bar'),
                      value: 0,
                      display: 'usd',
                    },
                    {
                      name: 'Promotional hourly',
                      slug: slug('Promotional hourly'),
                      value: 0,
                      display: 'usd',
                    },
                  ],
                },
                {
                  name: 'Promotional Spending',
                  slug: slug('Promotional Spending'),
                  value: 0,
                  display: 'usd',
                  fields: [
                    {
                      name: 'Physical media materials',
                      slug: slug('Physical media materials'),
                      value: 0,
                      display: 'usd',
                    },
                    {
                      name: 'Social media platforms',
                      slug: slug('Social media platforms'),
                      value: 65,
                      display: 'usd',
                    },
                    {
                      name: 'Local media outlets',
                      slug: slug('Local media outlets'),
                      value: 0,
                      display: 'usd',
                    },
                  ],
                },
                {
                  name: 'Other Expenditure',
                  slug: slug('Other Expenditure'),
                  value: 0,
                  canAdd: true,
                  display: 'usd',
                  fields: [],
                },
              ],
            },
            {
              name: 'Miscellaneous',
              slug: slug('Miscellaneous'),
              value: 0,
              display: 'none',
              fields: [
                {
                  name: 'Attendance',
                  slug: slug('Attendance'),
                  value: 0,
                  display: 'num',
                  fields: [
                    {
                      name: 'Male',
                      slug: slug('Male'),
                      value: 0,
                      display: 'num',
                    },
                    {
                      name: 'Female',
                      slug: slug('Female'),
                      value: 0,
                      display: 'num',
                    },
                  ],
                },
                {
                  name: 'Number of Acts',
                  slug: slug('Number of Acts'),
                  value: 0,
                  display: 'num',
                },
              ],
            },
          ],
        }),
        createEvent({
          name: 'Borinquen',
          type: 'latin',
          defaultCuid: '2',
          uid: '1',
          dateLastUpdated: new Date(),
          time: new Date('January 27, 2018'),
          day: days[(new Date('January 27, 2018')).getDay()],
          tags: ['dance', 'music', 'benefit'],
          data: [
            {
              name: 'Revenue',
              slug: slug('Revenue'),
              value: 0,
              display: 'usd',
              fields: [
                {
                  name: 'Bar Revenue',
                  slug: slug('Bar Revenue'),
                  value: 0,
                  display: 'usd',
                  fields: [
                    {
                      name: 'Beer',
                      slug: slug('Beer'),
                      value: 1216.42,
                      display: 'usd',
                    },
                    {
                      name: 'Wine',
                      slug: slug('Wine'),
                      value: 396.08,
                      display: 'usd',
                    },
                    {
                      name: 'Liquor',
                      slug: slug('Liquor'),
                      value: 1664.79,
                      display: 'usd',
                    },
                  ],
                },
                {
                  name: 'Grossed at Door',
                  slug: slug('Grossed at Door'),
                  value: 1020,
                  display: 'usd',
                  fields: [
                    {
                      name: 'Pre-show Tickets',
                      slug: slug('Pre-show Tickets'),
                      value: 327.30,
                      display: 'usd',
                    },
                    {
                      name: 'Day of Show',
                      slug: slug('Day of Show'),
                      value: 0,
                      display: 'usd',
                    },
                  ],
                },
                {
                  name: 'Other Revenue',
                  slug: slug('Other Revenue'),
                  value: 0,
                  canAdd: true,
                  display: 'usd',
                  fields: [],
                },
              ],
            },
            {
              name: 'Expenditure',
              slug: slug('Expenditure'),
              display: 'usd',
              value: 0,
              fields: [
                {
                  name: 'Cost of Talent',
                  slug: slug('Cost of Talent'),
                  value: 800,
                  display: 'usd',
                  fields: [
                    {
                      name: 'Cash guarantee',
                      slug: slug('Cash guarantee'),
                      value: 0,
                      display: 'usd',
                    },
                    {
                      name: 'Total paid from ticket sales',
                      slug: slug('Total paid from ticket sales'),
                      value: 0,
                      display: 'usd',
                    },
                  ],
                },
                {
                  name: 'Staffing Costs',
                  slug: slug('Staffing Costs'),
                  value: 400,
                  display: 'usd',
                  fields: [
                    {
                      name: 'Security',
                      slug: slug('Security'),
                      value: 0,
                      display: 'usd',
                    },
                    {
                      name: 'Sound',
                      slug: slug('Sound'),
                      value: 0,
                      display: 'usd',
                    },
                    {
                      name: 'Bar',
                      slug: slug('Bar'),
                      value: 0,
                      display: 'usd',
                    },
                    {
                      name: 'Promotional hourly',
                      slug: slug('Promotional hourly'),
                      value: 0,
                      display: 'usd',
                    },
                  ],
                },
                {
                  name: 'Promotional Spending',
                  slug: slug('Promotional Spending'),
                  value: 150,
                  display: 'usd',
                  fields: [
                    {
                      name: 'Physical media materials',
                      slug: slug('Physical media materials'),
                      value: 0,
                      display: 'usd',
                    },
                    {
                      name: 'Social media platforms',
                      slug: slug('Social media platforms'),
                      value: 85,
                      display: 'usd',
                    },
                    {
                      name: 'Local media outlets',
                      slug: slug('Local media outlets'),
                      value: 0,
                      display: 'usd',
                    },
                  ],
                },
                {
                  name: 'Other Expenditure',
                  slug: slug('Other Expenditure'),
                  value: 0,
                  canAdd: true,
                  display: 'usd',
                  fields: [],
                },
              ],
            },
            {
              name: 'Miscellaneous',
              slug: slug('Miscellaneous'),
              value: 0,
              display: 'none',
              fields: [
                {
                  name: 'Attendance',
                  slug: slug('Attendance'),
                  value: 0,
                  display: 'num',
                  fields: [
                    {
                      name: 'Male',
                      slug: slug('Male'),
                      value: 0,
                      display: 'num',
                    },
                    {
                      name: 'Female',
                      slug: slug('Female'),
                      value: 0,
                      display: 'num',
                    },
                  ],
                },
                {
                  name: 'Number of Acts',
                  slug: slug('Number of Acts'),
                  value: 0,
                  display: 'num',
                },
              ],
            },
          ],
        }),
        createEvent({
          name: 'Subset at Serendipity',
          type: 'electronic',
          defaultCuid: '3',
          uid: '1',
          dateLastUpdated: new Date(),
          time: new Date('April 21, 2018'),
          day: days[(new Date('April 21, 2018')).getDay()],
          tags: ['music', 'dj'],
          data: [
            {
              name: 'Revenue',
              slug: slug('Revenue'),
              value: 0,
              display: 'usd',
              fields: [
                {
                  name: 'Bar Revenue',
                  slug: slug('Bar Revenue'),
                  value: 3244.67,
                  display: 'usd',
                  fields: [
                    {
                      name: 'Beer',
                      slug: slug('Beer'),
                      value: 0,
                      display: 'usd',
                    },
                    {
                      name: 'Wine',
                      slug: slug('Wine'),
                      value: 487.59,
                      display: 'usd',
                    },
                    {
                      name: 'Liquor',
                      slug: slug('Liquor'),
                      value: 0,
                      display: 'usd',
                    },
                  ],
                },
                {
                  name: 'Grossed at Door',
                  slug: slug('Grossed at Door'),
                  value: 1400,
                  display: 'usd',
                  fields: [
                    {
                      name: 'Pre-show Tickets',
                      slug: slug('Pre-show Tickets'),
                      value: 463.17,
                      display: 'usd',
                    },
                    {
                      name: 'Day of Show',
                      slug: slug('Day of Show'),
                      value: 0,
                      display: 'usd',
                    },
                  ],
                },
                {
                  name: 'Other Revenue',
                  slug: slug('Other Revenue'),
                  value: 0,
                  canAdd: true,
                  display: 'usd',
                  fields: [],
                },
              ],
            },
            {
              name: 'Expenditure',
              slug: slug('Expenditure'),
              display: 'usd',
              value: 0,
              fields: [
                {
                  name: 'Cost of Talent',
                  slug: slug('Cost of Talent'),
                  value: 1200,
                  display: 'usd',
                  fields: [
                    {
                      name: 'Cash guarantee',
                      slug: slug('Cash guarantee'),
                      value: 500,
                      display: 'usd',
                    },
                    {
                      name: 'Total paid from ticket sales',
                      slug: slug('Total paid from ticket sales'),
                      value: 0,
                      display: 'usd',
                    },
                  ],
                },
                {
                  name: 'Staffing Costs',
                  slug: slug('Staffing Costs'),
                  value: 841.28,
                  display: 'usd',
                  fields: [
                    {
                      name: 'Security',
                      slug: slug('Security'),
                      value: 0,
                      display: 'usd',
                    },
                    {
                      name: 'Sound',
                      slug: slug('Sound'),
                      value: 0,
                      display: 'usd',
                    },
                    {
                      name: 'Bar',
                      slug: slug('Bar'),
                      value: 0,
                      display: 'usd',
                    },
                    {
                      name: 'Promotional hourly',
                      slug: slug('Promotional hourly'),
                      value: 0,
                      display: 'usd',
                    },
                  ],
                },
                {
                  name: 'Promotional Spending',
                  slug: slug('Promotional Spending'),
                  value: 0,
                  display: 'usd',
                  fields: [
                    {
                      name: 'Physical media materials',
                      slug: slug('Physical media materials'),
                      value: 0,
                      display: 'usd',
                    },
                    {
                      name: 'Social media platforms',
                      slug: slug('Social media platforms'),
                      value: 65,
                      display: 'usd',
                    },
                    {
                      name: 'Local media outlets',
                      slug: slug('Local media outlets'),
                      value: 0,
                      display: 'usd',
                    },
                  ],
                },
                {
                  name: 'Other Expenditure',
                  slug: slug('Other Expenditure'),
                  value: 0,
                  canAdd: true,
                  display: 'usd',
                  fields: [],
                },
              ],
            },
            {
              name: 'Miscellaneous',
              slug: slug('Miscellaneous'),
              value: 0,
              display: 'none',
              fields: [
                {
                  name: 'Attendance',
                  slug: slug('Attendance'),
                  value: 0,
                  display: 'num',
                  fields: [
                    {
                      name: 'Male',
                      slug: slug('Male'),
                      value: 0,
                      display: 'num',
                    },
                    {
                      name: 'Female',
                      slug: slug('Female'),
                      value: 0,
                      display: 'num',
                    },
                  ],
                },
                {
                  name: 'Number of Acts',
                  slug: slug('Number of Acts'),
                  value: 0,
                  display: 'num',
                },
              ],
            },
          ],
        }),
      ]);
    }
    return 0;
  });
}
