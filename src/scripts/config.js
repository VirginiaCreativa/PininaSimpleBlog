require('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true');

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
  meses[date.getMonth()]
} de ${date.getFullYear()}`;

const CURRENT_YEAR = new Date().getFullYear();

export { CURRENT_MESES, CURRENT_YEAR };
