import slug from 'limax';
export const data = [
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
            value: 0,
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
            value: 0,
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
];
