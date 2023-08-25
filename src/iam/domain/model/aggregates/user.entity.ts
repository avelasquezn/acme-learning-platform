import { EmailAddress } from '../value-objects/email-address.value-object';

export class User {
  id: string;
  username: string;
  email: EmailAddress;
  password: string;
}
