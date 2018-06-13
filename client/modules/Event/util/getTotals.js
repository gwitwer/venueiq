const getTotals = event => {
  const totals = {};
  event.data.forEach(section => {
    totals[section.slug] = {
      total: 0,
    };
    section.fields.forEach(subsection => {
      totals[section.slug][subsection.slug] = subsection.value;

      // Subsection total can either be manually set or come from the sum of fields.
      if (!totals[section.slug][subsection.slug]) {
        subsection.fields.forEach(field => {
          totals[section.slug][subsection.slug] += field.value;
        });
      }

      // Add subvalue to overall total
      totals[section.slug].total += totals[section.slug][subsection.slug];
    });
  });
  return totals;
};

export default getTotals;
