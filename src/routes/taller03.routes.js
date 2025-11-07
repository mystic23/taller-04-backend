import { Router } from 'express';
import { postDesglosarString, postTwoSum, postConversionRomana, postDescomposicion } from '../controllers/taller3.controller.js';
const r = Router();
r.post('/desglosar-string', postDesglosarString);
r.post('/two-sum', postTwoSum);
r.post('/conversion-romana', postConversionRomana);
r.post('/descomposicion', postDescomposicion);
export default r;
