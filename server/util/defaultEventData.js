export const data = [
  {
    name: 'Revenue',
    slug: slugify('Revenue'),
    total: 0,
    display: 'usd',
    fields: [
      {
        name: 'Bar Revenue',
        slug: slugify('Bar Revenue'),
        total: 0,
        display: 'usd',
        fields: [
          {
            name: 'Beer',
            slug: slugify('Beer'),
            total: 0,
            display: 'usd',
          },
          {
            name: 'Wine',
            slug: slugify('Wine'),
            total: 0,
            display: 'usd',
          },
          {
            name: 'Liquor',
            slug: slugify('Liquor'),
            total: 0,
            display: 'usd',
          },
        ],
      },
      {
        name: 'Grossed at Door',
        slug: slugify('Grossed at Door'),
        total: 0,
        display: 'usd',
        fields: [
          {
            name: 'Pre-show Tickets',
            slug: slugify('Pre-show Tickets'),
            total: 0,
            display: 'usd',
          },
          {
            name: 'Day of Show',
            slug: slugify('Day of Show'),
            total: 0,
            display: 'usd',
          },
        ],
      },
      {
        name: 'Other Revenue',
        slug: slugify('Grossed at Door'),
        total: 0,
        display: 'usd',
        fields: [],
      },
    ],
  },
  {
    name: 'Expenditure',
    slug: slugify('Expenditure'),
    display: 'usd',
    total: 0,
    fields: [
      {
        name: 'Cost of Talent',
        slug: slugify('Cost of Talent'),
        total: 0,
        display: 'usd',
        fields: [
          {
            name: 'Cash guarantee',
            slug: slugify('Cash guarantee'),
            total: 0,
            display: 'usd',
          },
          {
            name: 'Total paid from ticket sales',
            slug: slugify('Total paid from ticket sales'),
            total: 0,
            display: 'usd',
          },
        ],
      },
      {
        name: 'Staffing Costs',
        slug: slugify('Staffing Costs'),
        total: 0,
        display: 'usd',
        fields: [
          {
            name: 'Security',
            slug: slugify('Security'),
            total: 0,
            display: 'usd',
          },
          {
            name: 'Sound',
            slug: slugify('Sound'),
            total: 0,
            display: 'usd',
          },
          {
            name: 'Bar',
            slug: slugify('Bar'),
            total: 0,
            display: 'usd',
          },
          {
            name: 'Promotional hourly',
            slug: slugify('Promotional hourly'),
            total: 0,
            display: 'usd',
          },
        ],
      },
      {
        name: 'Promotional Spending',
        slug: slugify('Promotional Spending'),
        total: 0,
        display: 'usd',
        fields: [
          {
            name: 'Physical media materials',
            slug: slugify('Physical media materials'),
            total: 0,
            display: 'usd',
          },
          {
            name: 'Social media platforms',
            slug: slugify('Social media platforms'),
            total: 0,
            display: 'usd',
          },
          {
            name: 'Local media outlets',
            slug: slugify('Local media outlets'),
            total: 0,
            display: 'usd',
          },
        ],
      },
      {
        name: 'Other Expenditure',
        slug: slugify('Other Expenditure'),
        total: 0,
        display: 'usd',
        fields: [],
      },
    ],
  },
  {
    name: 'Miscellaneous',
    total: 0,
    display: 'none',
    fields: [
      {
        name: 'Attendance',
        slug: slugify('Attendance'),
        total: 0,
        display: 'num',
        fields: [
          {
            name: 'Male',
            slug: slugify('Male'),
            total: 0,
            display: 'num',
          },
          {
            name: 'Female',
            slug: slugify('Female'),
            total: 0,
            display: 'num',
          },
        ],
      },
      {
        name: 'Number of Acts',
        slug: slugify('Number of Acts'),
        total: 0,
        display: 'num',
      },
    ],
  },
];
