import {Router} from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('You re on items')
})

export {
  router
}