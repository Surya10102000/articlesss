import { NextFunction } from "express";

// middleware/validate.js
const { ZodError } = require('zod');

/**
 * Middleware to validate request data using a Zod schema.
 * @param {Zod.Schema} schema - The Zod schema to validate against.
 * @returns {Function} Express middleware function.
 */
const validate = (schema : Zod.Schema) => (req : Request, res : Response, next : NextFunction) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    return next();
  } catch (err) {
    if (err instanceof ZodError) {
      const errors = err.errors.map(e => ({
        path: e.path.join('.'),
        message: e.message,
      }));
      return res.status(400).json({ errors });
    }
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = validate;
