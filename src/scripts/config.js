const meses = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];
const date = new Date();
const CURRENT_MESES = `${date.getDate()} de ${
  meses[date.getDate()]
} de ${date.getFullYear()}`;

const CURRENT_YEAR = new Date().getFullYear();

export { CURRENT_MESES, CURRENT_YEAR };
