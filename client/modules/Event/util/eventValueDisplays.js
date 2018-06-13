const eventValueDisplays = {
  usd: n => n.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
  eye: n => n,
  none: () => null,
};
export default eventValueDisplays;
