import { User } from './user';

export class Message {
    user: User;
    text: string;
    when: string;
    wasRead: boolean;
}
