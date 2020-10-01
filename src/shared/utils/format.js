// eslint-disable-next-line import/prefer-default-export
export const { format: currencyFormat } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
