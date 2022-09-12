import { Environment } from '@abp/ng.core';

const baseUrl = 'https://pradoroljhon.netlify.app';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'BookStore',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'http://roljhonprado-001-site1.atempurl.com',
    redirectUri: baseUrl,
    clientId: 'BookStore_App',
    responseType: 'code',
    scope: 'offline_access BookStore',
    requireHttps: false
  },
  apis: {
    default: {
      url: 'http://roljhonprado-001-site1.atempurl.com',
      rootNamespace: 'Acme.BookStore',
    },
  },
} as Environment;
