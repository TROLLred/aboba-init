export const bonusesFormatter = (value?: number) => {
  const lastNumber = value ? value % 10 : 0;

  if (lastNumber === 0 || lastNumber >= 5) {
    return 'бонусов';
  } else if (lastNumber === 1) {
    return 'бонус';
  } else {
    return 'бонуса';
  }
};
