import { findMax, includes, sum, missingNumbers } from '../services/taller2/index.js';

export const postFindMax = (req, res) => {
  const { lista } = req.body;
  if (!Array.isArray(lista) || lista.some(v => typeof v !== 'number')) return res.status(400).json({ error: 'lista:number[] requerida' });
  res.json({ result: findMax(lista) });
};

export const postIncludes = (req, res) => {
  const { lista, numero } = req.body;
  if (!Array.isArray(lista) || lista.some(v => typeof v !== 'number') || typeof numero !== 'number')
    return res.status(400).json({ error: 'lista:number[] y numero:number requeridos' });
  res.json({ result: includes(lista, numero) });
};

export const postSum = (req, res) => {
  const { lista } = req.body;
  if (!Array.isArray(lista) || lista.some(v => typeof v !== 'number')) return res.status(400).json({ error: 'lista:number[] requerida' });
  res.json({ result: sum(lista) });
};

export const postMissingNumbers = (req, res) => {
  const { lista } = req.body;
  if (!Array.isArray(lista) || lista.some(v => typeof v !== 'number')) return res.status(400).json({ error: 'lista:number[] requerida' });
  res.json({ result: missingNumbers(lista) });
};
