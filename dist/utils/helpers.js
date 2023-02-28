"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncHandler = void 0;
const asyncHandler = (fn) => function asyncUtilWrap(req, res, next) {
    const fnReturn = fn(req, res, next);
    return Promise.resolve(fnReturn).catch(next);
};
exports.asyncHandler = asyncHandler;
//# sourceMappingURL=helpers.js.map