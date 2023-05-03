"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestMiddleware = void 0;
const requestMiddleware = (req, res, next) => {
    console.log(`url: ${req.url} | 
        body: ${JSON.stringify(req.body)} | 
            query_parms: ${JSON.stringify(req.params)}`);
    next();
};
exports.requestMiddleware = requestMiddleware;
