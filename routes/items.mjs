import {Router} from 'express';
import * as itemsCtrl from './../controller/items.mjs'

const router = Router();

router.get('/', itemsCtrl.index)

router.post('/', itemsCtrl.create)

router.put('/:itemId', itemsCtrl.update)

router.get('/:itemId', itemsCtrl.show)

router.delete('/:itemId', itemsCtrl.delete)

export {
  router
}