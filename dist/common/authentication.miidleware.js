"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationMiddleware = void 0;
const jwt = __importStar(require("express-jwt"));
const jwks_rsa_1 = require("jwks-rsa");
class AuthenticationMiddleware {
    use(req, res, next) {
        jwt({
            secret: (0, jwks_rsa_1.expressJwtSecret)({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: 'https://dev-ps2gwy4s.us.auth0.com/.well-known/jwks.json',
            }),
            audience: 'http://localhost:9000',
            issuer: 'https://dev-ps2gwy4s.us.auth0.com/',
            algorithms: ['RS256'],
        })(req, res, err => {
            if (err) {
                const status = err.status || 500;
                const message = err.message || 'Sorry, we were unable to process your request.';
                return res.status(status).send({
                    message,
                });
            }
            next();
        });
    }
    ;
}
exports.AuthenticationMiddleware = AuthenticationMiddleware;
//# sourceMappingURL=authentication.miidleware.js.map