const eventValueDisplays = {
  usd: n => n.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
  num: n => n,
  none: () => null,
};
export default eventValueDisplays;
