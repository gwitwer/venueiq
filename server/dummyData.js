// import Post from './models/post';
import Event from './models/event';

export default function() {
  const eventCount = Event.count().exec();
  eventCount.then(count => {
    if (!count) {
      const event1 = new Event({
        name: 'Latin Night',
        type: 'latin',
        cuid: '1',
        dateLastUpdated: new Date(),
        time: new Date('November 9, 2018'),
        tags: ['dance', 'recurring', 'music', 'dj'],
        revenue: {
          barRevenue: {
            _total: 0,
            beer: 0,
            wine: 0,
            liquor: 0,
          },
          grossedAtDoor: {
            _total: 0,
            preShowTickets: 327.30,
            dayOfShow: 0,
          },
          otherRevenue: {
            _total: 0,
            fields: [{
              key: 'Spaghetti',
              value: 0,
            }],
          },
        },
        expenditure: {
          costOfTalent: {
            _total: 0,
            cashGuarantee: 0,
            fromTickets: 0,
          },
          staffingCosts: {
            _total: 0,
            security: 0,
            sound: 0,
            bar: 0,
            promotional: 0,
          },
          promotionalSpending: {
            _total: 0,
            physical: 0,
            social: 65,
            local: 0,
          },
          otherExpenditure: {
            _total: 0,
            fields: [],
          }
        }
      });

      const event2 = new Event({
        name: 'Borinquen',
        type: 'latin',
        cuid: '2',
        dateLastUpdated: new Date(),
        time: new Date('January 27, 2018'),
        tags: ['dance', 'music', 'benefit'],
        revenue: {
          barRevenue: {
            _total: 0,
            beer: 1216.42,
            wine: 396.08,
            liquor: 1664.79,
          },
          grossedAtDoor: {
            _total: 1020,
            preShowTickets: 0,
            dayOfShow: 0,
          },
          otherRevenue: {
            _total: 0,
            fields: [{
              key: 'Spaghetti',
              value: 0,
            }],
          },
        },
        expenditure: {
          costOfTalent: {
            _total: 800,
            cashGuarantee: 0,
            fromTickets: 0,
          },
          staffingCosts: {
            _total: 400,
            security: 0,
            sound: 0,
            bar: 0,
            promotional: 0,
          },
          promotionalSpending: {
            _total: 150,
            physical: 0,
            social: 85,
            local: 0,
          },
          otherExpenditure: {
            _total: 0,
            fields: [],
          }
        }
      });

      const event3 = new Event({
        name: 'Subset at Serendipity',
        type: 'electronic',
        cuid: '3',
        dateLastUpdated: new Date(),
        time: new Date('April 21, 2018'),
        tags: ['music', 'dj'],
        revenue: {
          barRevenue: {
            _total: 3244.67,
            beer: 0,
            wine: 487.59,
            liquor: 0,
          },
          grossedAtDoor: {
            _total: 1400,
            preShowTickets: 463.17,
            dayOfShow: 0,
          },
          otherRevenue: {
            _total: 0,
            fields: [{
              key: 'Spaghetti',
              value: 250,
            }],
          },
        },
        expenditure: {
          costOfTalent: {
            _total: 1200,
            cashGuarantee: 500,
            fromTickets: 0,
          },
          staffingCosts: {
            _total: 841.28,
            security: 0,
            sound: 0,
            bar: 0,
            promotional: 0,
          },
          promotionalSpending: {
            _total: 0,
            physical: 0,
            social: 65,
            local: 0,
          },
          otherExpenditure: {
            _total: 0,
            fields: [],
          }
        }
      });

      Event.create([ event1, event2, event3 ], (error) => {
        if (error) {
          console.log(error);
        } else {
          console.log('created dummy events successfully.');
        }
      });
    }
  });
}
