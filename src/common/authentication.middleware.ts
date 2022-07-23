import { NestMiddleware } from '@nestjs/common';
import { expressJwtSecret } from 'jwks-rsa';
const {expressjwt:jwt} = require("express-jwt")

export class AuthenticationMiddleware implements NestMiddleware {
  use(req, res, next) {
    jwt({
      secret: expressJwtSecret({
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
        const message =
          err.message || 'Sorry, we were unable to process your request.';
        return res.status(status).send({
          message,
        });
      }
      next();
    });
  };
}