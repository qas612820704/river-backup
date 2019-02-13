import { WebAuth } from 'auth0-js';
import { AUTH0_CONFIG } from '../../config';
import * as debug from '../logger';

const auth0 = new WebAuth({
  domain: AUTH0_CONFIG.domain,
  clientID: AUTH0_CONFIG.clientId,
  redirectUri:  AUTH0_CONFIG.redirectUri,
  responseType: 'token id_token',
  scope: 'openid profile offline_access',
});

export class InvalidTokenError extends Error {
  constructor(message) {
    super(message);
    this.name = 'InvalidTokenError';
  }
}

export class NullAuthError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NullAuthError';
  }
}

export function login() {
  auth0.authorize();
}

export async function authentication() {
  return new Promise((resolve, reject) => {
    auth0.parseHash((err, auth) => {
      debug.api('authentication', 'auth', auth);
      if (err) {
        // auth0-js defined error, throw it
        if (err.error === 'invalid_token') {
          reject(new InvalidTokenError(err.errorDescription));
        } else {
          reject(new Error(err));
        }
      }

      if (!auth) reject(new NullAuthError());

      return resolve(auth);
    })
  });
}

export default auth0;
