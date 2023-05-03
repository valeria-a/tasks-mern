"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestMiddleware = void 0;
const requestMiddleware = (req, res, next) => {
    console.log(`url: ${req.url} \t body: ${JSON.stringify(req.body)} \t query_parms: ${JSON.stringify(req.params)}`);
    next();
};
exports.requestMiddleware = requestMiddleware;
