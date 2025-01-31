import express from 'express';
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.post('/', createProduct);
productRouter.get('/', createProduct);
productRouter.get('/:productId',getProductById);
productRouter.delete('/:productId',deleteProduct);
productRouter.put('/:productId',updateProduct);

export default productRouter;