export class Activity {
    user: {
        firstName: string,
        lastName: string,
        avatar: {
            path: string,
            style: {
                'background-position': string,
                'background-size': string
            }
        }
    };
    action: string;
    predicate: string;
    when: string;
}
