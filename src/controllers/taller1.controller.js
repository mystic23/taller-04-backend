import { convertidorTemp, resolvedor, mejorParidad, peorParidad } from '../services/taller1/index.js';

export const postConvertidorTemp = (req, res) => {
  const { celsius } = req.body;
  if (typeof celsius !== 'number') return res.status(400).json({ error: 'celsius:number requerido' });
  res.json({ result: convertidorTemp(celsius) });
};

export const postResolvedor = (req, res) => {
  const { a, b, c, signo } = req.body;
  const okNums = [a, b, c].every(v => typeof v === 'number');
  if (!okNums || typeof signo !== 'boolean') return res.status(400).json({ error: 'a,b,c:number y signo:boolean requeridos' });
  res.json({ result: resolvedor(a, b, c, signo) });
};

export const postMejorParidad = (req, res) => {
  const { n } = req.body;
  if (typeof n !== 'number') return res.status(400).json({ error: 'n:number requerido' });
  res.json({ result: mejorParidad(n) });
};

export const postPeorParidad = (req, res) => {
  const { n } = req.body;
  if (typeof n !== 'number') return res.status(400).json({ error: 'n:number requerido' });
  res.json({ result: peorParidad(n) });
};
