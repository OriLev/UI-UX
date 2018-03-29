import { Message } from './message';

export const MESSAGES: Message[] = [
    {
        user: {
            firstName: 'Nina',
            lastName: 'Jones',
            avatar: {
                path: '/assets/avatar-nina-jones.png',
                style: {
                    'background-position': '65% 0%',
                    'background-size': '260%'
                }
            }
        },
        text: `Hey You! It's me again :-) I attached new PSD`,
        when: '5 minutes ago',
        wasRead: false,
    },
    {
        user: {
            firstName: 'Nina',
            lastName: 'Jones',
            avatar: {
                path: '/assets/avatar-nina-jones.png',
                style: {
                    'background-position': '65% 0%',
                    'background-size': '260%'
                }
            }
        },
        text: 'Hey! I attached some new PSD files for the project',
        when: 'About 20 hours ago',
        wasRead: false,
    },
    {
        user: {
            firstName: 'James',
            lastName: 'Smith',
            avatar: {
                path: '/assets/avatar-james-smith.png',
                style: {
                    'background-position': '82% -13%',
                    'background-size': '260%'
                }
            }
        },
        text: 'Good morning, you are fired!',
        when: '2 days ago',
        wasRead: true
    },
    {
        user: {
            firstName: 'Nina',
            lastName: 'Jones',
            avatar: {
                path: '/assets/avatar-nina-jones.png',
                style: {
                    'background-position': '65% 0%',
                    'background-size': '260%'
                }
            }
        },
        text: 'Hello! Could you bring me coffee please?',
        when: 'About 2 weeks ago',
        wasRead: true,
    },
];
