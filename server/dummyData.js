// import Post from './models/post';
import Event from './models/event';
import slugify from 'slugify';
import createEvent from './util/createEvent';

export default function() {
  // const eventCount = Event.count().exec();
  const removeEvents = Event.remove({}).exec();
  removeEvents.then(() => {
    if (true) {
      const event1 = createEvent({
        name: 'Latin Night',
        type: 'latin',
        uid: '1',
        dateLastUpdated: new Date(),
        time: new Date('November 9, 2018'),
        tags: ['dance', 'recurring', 'music', 'dj'],
        defaultCuid: '1',
        data: [
          {
            name: 'Revenue',
            slug: slugify('Revenue'),
            value: 0,
            display: 'usd',
            fields: [
              {
                name: 'Bar Revenue',
                slug: slugify('Bar Revenue'),
                value: 0,
                display: 'usd',
                fields: [
                  {
                    name: 'Beer',
                    slug: slugify('Beer'),
                    value: 0,
                    display: 'usd',
                  },
                  {
                    name: 'Wine',
                    slug: slugify('Wine'),
                    value: 0,
                    display: 'usd',
                  },
                  {
                    name: 'Liquor',
                    slug: slugify('Liquor'),
                    value: 0,
                    display: 'usd',
                  },
                ],
              },
              {
                name: 'Grossed at Door',
                slug: slugify('Grossed at Door'),
                value: 0,
                display: 'usd',
                fields: [
                  {
                    name: 'Pre-show Tickets',
                    slug: slugify('Pre-show Tickets'),
                    value: 327.30,
                    display: 'usd',
                  },
                  {
                    name: 'Day of Show',
                    slug: slugify('Day of Show'),
                    value: 0,
                    display: 'usd',
                  },
                ],
              },
              {
                name: 'Other Revenue',
                slug: slugify('Other Revenue'),
                value: 0,
                display: 'usd',
                fields: [],
              },
            ],
          },
          {
            name: 'Expenditure',
            slug: slugify('Expenditure'),
            display: 'usd',
            value: 0,
            fields: [
              {
                name: 'Cost of Talent',
                slug: slugify('Cost of Talent'),
                value: 0,
                display: 'usd',
                fields: [
                  {
                    name: 'Cash guarantee',
                    slug: slugify('Cash guarantee'),
                    value: 0,
                    display: 'usd',
                  },
                  {
                    name: 'Total paid from ticket sales',
                    slug: slugify('Total paid from ticket sales'),
                    value: 0,
                    display: 'usd',
                  },
                ],
              },
              {
                name: 'Staffing Costs',
                slug: slugify('Staffing Costs'),
                value: 0,
                display: 'usd',
                fields: [
                  {
                    name: 'Security',
                    slug: slugify('Security'),
                    value: 0,
                    display: 'usd',
                  },
                  {
                    name: 'Sound',
                    slug: slugify('Sound'),
                    value: 0,
                    display: 'usd',
                  },
                  {
                    name: 'Bar',
                    slug: slugify('Bar'),
                    value: 0,
                    display: 'usd',
                  },
                  {
                    name: 'Promotional hourly',
                    slug: slugify('Promotional hourly'),
                    value: 0,
                    display: 'usd',
                  },
                ],
              },
              {
                name: 'Promotional Spending',
                slug: slugify('Promotional Spending'),
                value: 0,
                display: 'usd',
                fields: [
                  {
                    name: 'Physical media materials',
                    slug: slugify('Physical media materials'),
                    value: 0,
                    display: 'usd',
                  },
                  {
                    name: 'Social media platforms',
                    slug: slugify('Social media platforms'),
                    value: 65,
                    display: 'usd',
                  },
                  {
                    name: 'Local media outlets',
                    slug: slugify('Local media outlets'),
                    value: 0,
                    display: 'usd',
                  },
                ],
              },
              {
                name: 'Other Expenditure',
                slug: slugify('Other Expenditure'),
                value: 0,
                display: 'usd',
                fields: [],
              },
            ],
          },
          {
            name: 'Miscellaneous',
            slug: slugify('Miscellaneous'),
            value: 0,
            display: 'none',
            fields: [
              {
                name: 'Attendance',
                slug: slugify('Attendance'),
                value: 0,
                display: 'num',
                fields: [
                  {
                    name: 'Male',
                    slug: slugify('Male'),
                    value: 0,
                    display: 'num',
                  },
                  {
                    name: 'Female',
                    slug: slugify('Female'),
                    value: 0,
                    display: 'num',
                  },
                ],
              },
              {
                name: 'Number of Acts',
                slug: slugify('Number of Acts'),
                value: 0,
                display: 'num',
              },
            ],
          },
        ],
      });

      const event2 = createEvent({
        name: 'Borinquen',
        type: 'latin',
        defaultCuid: '2',
        uid: '1',
        dateLastUpdated: new Date(),
        time: new Date('January 27, 2018'),
        tags: ['dance', 'music', 'benefit'],
        data: [
          {
            name: 'Revenue',
            slug: slugify('Revenue'),
            value: 0,
            display: 'usd',
            fields: [
              {
                name: 'Bar Revenue',
                slug: slugify('Bar Revenue'),
                value: 0,
                display: 'usd',
                fields: [
                  {
                    name: 'Beer',
                    slug: slugify('Beer'),
                    value: 1216.42,
                    display: 'usd',
                  },
                  {
                    name: 'Wine',
                    slug: slugify('Wine'),
                    value: 396.08,
                    display: 'usd',
                  },
                  {
                    name: 'Liquor',
                    slug: slugify('Liquor'),
                    value: 1664.79,
                    display: 'usd',
                  },
                ],
              },
              {
                name: 'Grossed at Door',
                slug: slugify('Grossed at Door'),
                value: 1020,
                display: 'usd',
                fields: [
                  {
                    name: 'Pre-show Tickets',
                    slug: slugify('Pre-show Tickets'),
                    value: 327.30,
                    display: 'usd',
                  },
                  {
                    name: 'Day of Show',
                    slug: slugify('Day of Show'),
                    value: 0,
                    display: 'usd',
                  },
                ],
              },
              {
                name: 'Other Revenue',
                slug: slugify('Other Revenue'),
                value: 0,
                display: 'usd',
                fields: [],
              },
            ],
          },
          {
            name: 'Expenditure',
            slug: slugify('Expenditure'),
            display: 'usd',
            value: 0,
            fields: [
              {
                name: 'Cost of Talent',
                slug: slugify('Cost of Talent'),
                value: 800,
                display: 'usd',
                fields: [
                  {
                    name: 'Cash guarantee',
                    slug: slugify('Cash guarantee'),
                    value: 0,
                    display: 'usd',
                  },
                  {
                    name: 'Total paid from ticket sales',
                    slug: slugify('Total paid from ticket sales'),
                    value: 0,
                    display: 'usd',
                  },
                ],
              },
              {
                name: 'Staffing Costs',
                slug: slugify('Staffing Costs'),
                value: 400,
                display: 'usd',
                fields: [
                  {
                    name: 'Security',
                    slug: slugify('Security'),
                    value: 0,
                    display: 'usd',
                  },
                  {
                    name: 'Sound',
                    slug: slugify('Sound'),
                    value: 0,
                    display: 'usd',
                  },
                  {
                    name: 'Bar',
                    slug: slugify('Bar'),
                    value: 0,
                    display: 'usd',
                  },
                  {
                    name: 'Promotional hourly',
                    slug: slugify('Promotional hourly'),
                    value: 0,
                    display: 'usd',
                  },
                ],
              },
              {
                name: 'Promotional Spending',
                slug: slugify('Promotional Spending'),
                value: 150,
                display: 'usd',
                fields: [
                  {
                    name: 'Physical media materials',
                    slug: slugify('Physical media materials'),
                    value: 0,
                    display: 'usd',
                  },
                  {
                    name: 'Social media platforms',
                    slug: slugify('Social media platforms'),
                    value: 85,
                    display: 'usd',
                  },
                  {
                    name: 'Local media outlets',
                    slug: slugify('Local media outlets'),
                    value: 0,
                    display: 'usd',
                  },
                ],
              },
              {
                name: 'Other Expenditure',
                slug: slugify('Other Expenditure'),
                value: 0,
                display: 'usd',
                fields: [],
              },
            ],
          },
          {
            name: 'Miscellaneous',
            slug: slugify('Miscellaneous'),
            value: 0,
            display: 'none',
            fields: [
              {
                name: 'Attendance',
                slug: slugify('Attendance'),
                value: 0,
                display: 'num',
                fields: [
                  {
                    name: 'Male',
                    slug: slugify('Male'),
                    value: 0,
                    display: 'num',
                  },
                  {
                    name: 'Female',
                    slug: slugify('Female'),
                    value: 0,
                    display: 'num',
                  },
                ],
              },
              {
                name: 'Number of Acts',
                slug: slugify('Number of Acts'),
                value: 0,
                display: 'num',
              },
            ],
          },
        ],
      });

      const event3 = createEvent({
        name: 'Subset at Serendipity',
        type: 'electronic',
        defaultCuid: '3',
        uid: '1',
        dateLastUpdated: new Date(),
        time: new Date('April 21, 2018'),
        tags: ['music', 'dj'],
        data: [
          {
            name: 'Revenue',
            slug: slugify('Revenue'),
            value: 0,
            display: 'usd',
            fields: [
              {
                name: 'Bar Revenue',
                slug: slugify('Bar Revenue'),
                value: 3244.67,
                display: 'usd',
                fields: [
                  {
                    name: 'Beer',
                    slug: slugify('Beer'),
                    value: 0,
                    display: 'usd',
                  },
                  {
                    name: 'Wine',
                    slug: slugify('Wine'),
                    value: 487.59,
                    display: 'usd',
                  },
                  {
                    name: 'Liquor',
                    slug: slugify('Liquor'),
                    value: 0,
                    display: 'usd',
                  },
                ],
              },
              {
                name: 'Grossed at Door',
                slug: slugify('Grossed at Door'),
                value: 1400,
                display: 'usd',
                fields: [
                  {
                    name: 'Pre-show Tickets',
                    slug: slugify('Pre-show Tickets'),
                    value: 463.17,
                    display: 'usd',
                  },
                  {
                    name: 'Day of Show',
                    slug: slugify('Day of Show'),
                    value: 0,
                    display: 'usd',
                  },
                ],
              },
              {
                name: 'Other Revenue',
                slug: slugify('Other Revenue'),
                value: 0,
                display: 'usd',
                fields: [],
              },
            ],
          },
          {
            name: 'Expenditure',
            slug: slugify('Expenditure'),
            display: 'usd',
            value: 0,
            fields: [
              {
                name: 'Cost of Talent',
                slug: slugify('Cost of Talent'),
                value: 1200,
                display: 'usd',
                fields: [
                  {
                    name: 'Cash guarantee',
                    slug: slugify('Cash guarantee'),
                    value: 500,
                    display: 'usd',
                  },
                  {
                    name: 'Total paid from ticket sales',
                    slug: slugify('Total paid from ticket sales'),
                    value: 0,
                    display: 'usd',
                  },
                ],
              },
              {
                name: 'Staffing Costs',
                slug: slugify('Staffing Costs'),
                value: 841.28,
                display: 'usd',
                fields: [
                  {
                    name: 'Security',
                    slug: slugify('Security'),
                    value: 0,
                    display: 'usd',
                  },
                  {
                    name: 'Sound',
                    slug: slugify('Sound'),
                    value: 0,
                    display: 'usd',
                  },
                  {
                    name: 'Bar',
                    slug: slugify('Bar'),
                    value: 0,
                    display: 'usd',
                  },
                  {
                    name: 'Promotional hourly',
                    slug: slugify('Promotional hourly'),
                    value: 0,
                    display: 'usd',
                  },
                ],
              },
              {
                name: 'Promotional Spending',
                slug: slugify('Promotional Spending'),
                value: 0,
                display: 'usd',
                fields: [
                  {
                    name: 'Physical media materials',
                    slug: slugify('Physical media materials'),
                    value: 0,
                    display: 'usd',
                  },
                  {
                    name: 'Social media platforms',
                    slug: slugify('Social media platforms'),
                    value: 65,
                    display: 'usd',
                  },
                  {
                    name: 'Local media outlets',
                    slug: slugify('Local media outlets'),
                    value: 0,
                    display: 'usd',
                  },
                ],
              },
              {
                name: 'Other Expenditure',
                slug: slugify('Other Expenditure'),
                value: 0,
                display: 'usd',
                fields: [],
              },
            ],
          },
          {
            name: 'Miscellaneous',
            slug: slugify('Miscellaneous'),
            value: 0,
            display: 'none',
            fields: [
              {
                name: 'Attendance',
                slug: slugify('Attendance'),
                value: 0,
                display: 'num',
                fields: [
                  {
                    name: 'Male',
                    slug: slugify('Male'),
                    value: 0,
                    display: 'num',
                  },
                  {
                    name: 'Female',
                    slug: slugify('Female'),
                    value: 0,
                    display: 'num',
                  },
                ],
              },
              {
                name: 'Number of Acts',
                slug: slugify('Number of Acts'),
                value: 0,
                display: 'num',
              },
            ],
          },
        ],
      });

      Promise.all([
        event1,
        event2,
        event3,
      ]).then(() => console.log('created events successfully')).catch(console.log);

      // Event.create([ event1, event2, event3 ], (error) => {
      //   if (error) {
      //     console.log(error);
      //   } else {
      //     console.log('created dummy events successfully.');
      //   }
      // });
    }
  });
}
