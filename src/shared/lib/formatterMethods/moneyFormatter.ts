// TODO: В макете есть разные вариации, нужно учитывать форматирование с точкой либо с пробелом

export const moneyFormatter = (val: number) =>
  new Intl.NumberFormat('de-DE').format(val);
