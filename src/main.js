export default () => {
  const hi = 'Hello world';
  console.log(isNaN(NaN));
  return Array.from({ length: 50 }, (_, k) => ({ k: hi }));
};
