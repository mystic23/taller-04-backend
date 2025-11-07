import { Router } from 'express';
import { postConvertidorTemp, postResolvedor, postMejorParidad, postPeorParidad } from '../controllers/taller1.controller.js';
const r = Router();
r.post('/convertidor-temp', postConvertidorTemp);
r.post('/resolvedor', postResolvedor);
r.post('/mejor-paridad', postMejorParidad);
r.post('/peor-paridad', postPeorParidad);
export default r;
