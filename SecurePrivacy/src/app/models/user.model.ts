export interface User {
    id: string;
    name: string;
    email: string;
    consentToDataCollection: boolean; // GDPR related
  }