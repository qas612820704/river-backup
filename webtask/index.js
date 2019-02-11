import express from 'express';
import cors from 'cors';
import jwt from 'express-jwt';
import { expressJwtSecret } from 'jwks-rsa';
import jwtAuthz from 'express-jwt-authz';
import { fromExpress } from 'webtask-tools';
import config from '../config';

const app = express();

if (!config.AUTH0_DOMAIN || !config.AUTH0_AUDIENCE) {
  throw 'Make sure you have AUTH0_DOMAIN, and AUTH0_AUDIENCE in your config file'
}

app.use(cors());

app.use(jwt({
  // Dynamically provide a signing key based on the kid in the header and the singing keys provided by the JWKS endpoint.
  secret: expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: config.AUTH0_AUDIENCE,
  issuer: `https://${config.AUTH0_DOMAIN}/`,
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
