import {Router} from 'express';
import * as itemsCtrl from './../controller/items.mjs'

const router = Router();

router.get('/', itemsCtrl.index)

router.post('/', itemsCtrl.create)

export {
  router
}