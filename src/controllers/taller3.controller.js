import { desglosarString, twoSum, conversionRomana, descomposicion } from '../services/taller3/index.js';

export const postDesglosarString = (req, res) => {
  const { str, escoger } = req.body; 
  if (typeof str !== 'string' || !['vocales', 'consonantes'].includes(escoger))
    return res.status(400).json({ error: "str:string y escoger:'vocales'|'consonantes' requeridos" });
  res.json({ result: desglosarString(str, escoger) });
};

export const postTwoSum = (req, res) => {
  const { numeros, target } = req.body;
  if (!Array.isArray(numeros) || numeros.some(v => typeof v !== 'number') || typeof target !== 'number')
    return res.status(400).json({ error: 'numeros:number[] y target:number requeridos' });
  res.json({ result: twoSum(numeros, target) });
};

export const postConversionRomana = (req, res) => {
  const { romano } = req.body;
  if (typeof romano !== 'string') return res.status(400).json({ error: 'romano:string requerido' });
  res.json({ result: conversionRomana(romano) });
};

export const postDescomposicion = (req, res) => {
  const { cadena } = req.body; 
  if (typeof cadena !== 'string') return res.status(400).json({ error: 'cadena:string requerido' });
  res.json({ result: descomposicion(cadena) });
};
