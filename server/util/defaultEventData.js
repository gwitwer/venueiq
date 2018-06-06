import slugify from 'slugify';
export const data = [
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
            value: 0,
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
            value: 0,
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
];
