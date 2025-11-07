import { Router } from 'express';
import { postFindMax, postIncludes, postSum, postMissingNumbers } from '../controllers/taller2.controller.js';
const r = Router();
r.post('/find-max', postFindMax);
r.post('/includes', postIncludes);
r.post('/sum', postSum);
r.post('/missing-numbers', postMissingNumbers);
export default r;
