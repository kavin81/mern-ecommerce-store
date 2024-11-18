import { productSchema } from "../models/product.model.js";


class productController {
    async create(data, callback) {
        const new_product = new productSchema({ ...data });
        try {
            await new_product.save();
            callback.status(201).json(new_product);
        } catch (error ) {
            callback.status(400).json({ error: error.message });
        }
    }
    async getAll(callback) {
        try {
            const products = await productSchema.find();
            callback.status(200).json(products);
        } catch (error) {
            callback.status(400).json({ error: error.message });
        }
    }

    async getOne(id, callback) {
        try {
            const product = await productSchema.findById(id);
            callback.status(200).json(product);
        } catch (error) {
            callback.status(400).json({ error: error.message });
        }
    }
}

export default new productController();
