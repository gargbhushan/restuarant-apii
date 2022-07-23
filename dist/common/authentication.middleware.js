"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationMiddleware = void 0;
const jwks_rsa_1 = require("jwks-rsa");
const { expressjwt: jwt } = require("express-jwt");
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
//# sourceMappingURL=authentication.middleware.js.map