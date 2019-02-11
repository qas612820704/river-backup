import express from 'express';
import cors from 'cors';
import jwt from 'express-jwt';
import { expressJwtSecret } from 'jwks-rsa';
import jwtAuthz from 'express-jwt-authz';
import { fromExpress } from 'webtask-tools';
import { AUTH0_CONFIG } from '../config';

const app = express();

if (!AUTH0_CONFIG.domain || !AUTH0_CONFIG.audience) {
  throw 'Make sure you have AUTH0_CONFIG.domain, and AUTH0_CONFIG.audience in your config file'
}

app.use(cors());

app.use(jwt({
  // Dynamically provide a signing key based on the kid in the header and the singing keys provided by the JWKS endpoint.
  secret: expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${AUTH0_CONFIG.domain}/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: AUTH0_CONFIG.audience,
  issuer: `https://${AUTH0_CONFIG.domain}/`,
  algorithms: ['RS256']
}));

app.use(handleUnauthorizedError);
function handleUnauthorizedError(err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({
      message: 'invalid token'
    });
  }
}

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!'});
});

module.exports = fromExpress(app);
