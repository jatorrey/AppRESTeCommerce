import * as orderServices from '../services/order.service.js';
import boom from '@hapi/boom';

// All orders
export const getOrderList = async (req, res, next) => {
    try {
        const orderList = await orderServices.getOrderList();
        if (!orderList) {
            throw boom.notFound('No se encontraron registros');
        } else if (orderList) {
            res.status(200).json(orderList);
        }
    } catch (error) {
        next(error);
    }
};

// Just one order
export const getOrderItem = async (req, res, next) => {
    try {
        const { id } = req.params;
        const keyType = req.query.keyType || "OK";
        const orderItem = await orderServices.getOrderItem(id, keyType);
        if (!orderItem) {
            throw boom.notFound('Esta orden no fue encontrada');
        } else if (orderItem) {
            res.status(200).json(orderItem);
        }
    } catch (error) {
        next(error);
    }
};

// Create order
export const postOrderItem = async (req, res, next) => {
    try {
        const paOrderItem = req.body;
        const newOrderItem = await orderServices.postOrderItem(paOrderItem);
        if (!newOrderItem) {
            throw boom.badRequest('No se pudo crear la orden');
        } else if (newOrderItem) {
            res.status(201).json(newOrderItem);
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// Update order
export const putOrderItem = async (req, res, next) => {
    try {
        const { id } = req.params;
        const paOrderItem = req.body;
        const updatedOrderItem = await orderServices.putOrderItem(id, paOrderItem);
        if (!updatedOrderItem) {
            throw boom.badRequest('No se pudo actualizar la orden');
        } else if (updatedOrderItem) {
            res.status(200).json(updatedOrderItem);
        }
    } catch (error) {
        next(error);
    }
};

// Delete order
export const deleteOrderItem = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteOrderItem = await orderServices.deleteOrderItem(id);
        if (!deleteOrderItem) {
            throw boom.badRequest('No se pudo eliminar la orden');
        } else if (deleteOrderItem) {
            res.status(200).json(deleteOrderItem);
        }
    } catch (error) {
        next(error);
    }
};