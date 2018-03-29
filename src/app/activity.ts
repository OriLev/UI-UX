import { User } from './user';


export class Activity {
    user: User;
    action: string;
    predicate: string;
    when: string;
}
