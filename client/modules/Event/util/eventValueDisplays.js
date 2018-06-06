const eventValueDisplays = {
  usd: n => n.toLocaleString('en-US', {style: 'currency', currency:'USD'}),
  num: n => n,
  none: n => null,
};
export default eventValueDisplays;
