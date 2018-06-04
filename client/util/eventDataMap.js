import { eye } from './functional';
const slugify = require('slugify');
const usd = n => n.toLocaleString('en-US', {style: 'currency', currency:'USD'});
const formats = {
  usd
};

const getFieldsFromEvent = k1 => k2 => e => {
  const fields = {};
  e[k1][k2].fields.forEach(f => {
    fields[slugify(f.key)] = { title: f.key, display: usd };
  });
  return fields;
}

const eventDataMap = event => {
  return {
    revenue: {
      title: 'Revenue',
      display: usd,
      fields: {
        barRevenue: {
          title: 'Bar Revenue',
          display: usd,
          fields: {
            beer: { title: 'Beer', display: usd },
            wine: { title: 'Wine', display: usd },
            liquor: { title: 'Liquor', display: usd },
          },
        },
        grossedAtDoor: {
          title: 'Grossed at Door',
          display: usd,
          fields: {
            preShowTickets: { title: 'Pre-show Ticket Sales', display: usd },
            dayOfShow: { title: 'Door Ticket Sales', display: usd },
          },
        },
        otherRevenue: {
          title: 'Other Revenue',
          display: usd,
          fields: getFieldsFromEvent('revenue')('otherRevenue')(event),
        },
      },
    },
    expenditure: {
      title: 'Expenditures',
      display: usd,
      fields: {
        costOfTalent: {
          title: 'Cost of Talent',
          display: usd,
          fields: {
            cashGuarantee: { title: 'Cash Guarantee', display: usd },
            fromTickets: { title: 'From Tickets', display: usd },
          },
        },
        staffingCosts: {
          title: 'Staffing Costs',
          display: usd,
          fields: {
            security: { title: 'Security', display: usd },
            sound: { title: 'Sound', display: usd },
            bar: { title: 'Bar', display: usd },
            promotional: { title: 'Promotional', display: usd },
          },
        },
        promotionalSpending: {
          title: 'Promotional Spending',
          display: usd,
          fields: {
            physical: { title: 'Physical', display: usd },
            social: { title: 'Social', display: usd },
            local: { title: 'Local', display: usd },
          },
        },
        otherExpenditure: {
          title: 'Other Expenditures',
          display: usd,
          fields: getFieldsFromEvent('expenditure')('otherExpenditure')(event),
        },
      },
    },
  };
};

export default eventDataMap;
