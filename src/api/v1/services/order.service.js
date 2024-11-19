import order from '../models/orders.js';
import boom from '@hapi/boom';

// Get all orders
export const getOrderList = async () => {
    let orderList;
    try {
        orderList = await order.find();
        return orderList;
    } catch (error) {
        throw boom.internal(error);
    }
};

// Get order by id
export const getOrderItem = async (id) => {
    let orderItem;
    try {
        orderItem = await order.findOne({ IdInstitutoOK: id });
        return orderItem;
    } catch (error) {
        throw boom.internal(error);
    }
};

// Create order
export const postOrderItem = async (paOrderItem) => {
    try {
        const newOrderItem = new order(paOrderItem);
        return await newOrderItem.save();
    } catch (error) {
        throw error;
    }
};

// Update order
export const putOrderItem = async (id, paOrderItem) => {
    try {
        return await order.findOneAndUpdate(
            { IdInstitutoOK: id },
            paOrderItem,
            { new: true }
        );
    } catch (error) {
        throw boom.badImplementation(error);
    }
}

// Delete order
export const deleteOrderItem = async (id) => {
    try {
        return await order.findOneAndDelete({ IdInstitutoOK: id });
    } catch (error) {
        throw boom.badImplementation(error);
    }
}