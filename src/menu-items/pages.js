// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
    id: 'users',
    title: 'Users Management',
    type: 'group',
    children: [
        {
            id: 'roles',
            title: 'Roles',
            type: 'item',
            url: '/roles',
            icon: icons.LoginOutlined,
            target: false
        },
        {
            id: 'users',
            title: 'Users',
            type: 'item',
            url: '/users',
            icon: icons.ProfileOutlined,
            target: false
        }
    ]
};

export default pages;
