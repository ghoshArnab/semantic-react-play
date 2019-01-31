import React, { Component } from 'react';
import './Navbar.css';
import { Search } from 'semantic-ui-react';
import Avatar from "../../components/Avatar";

class Navbar extends Component {
    render() {
        /* Mock Data */
        const listItemsTop = [
            { id: 1, title: 'Search', content: <Search />, icon: 'search' },
            { id: 2, title: 'New', content: 'New', icon: 'plus' },
            { id: 3, title: 'Pulse', content: 'Pulse', icon: 'comment-o' },
            { id: 4, title: 'Documents', content: 'Documents', icon: 'clipboard' },
            { id: 5, title: 'My Backlog', content: 'My Backlog', icon: 'file-o' },
            { id: 6, title: 'My Teams', content: 'My Teams', icon: 'users' },
            { id: 7, title: 'My Releases', content: 'My Releases', icon: 'space-shuttle' },
            { id: 8, title: 'My Goals', content: 'My Goals', icon: 'star' },
            { id: 9, title: 'My Epics', content: 'My Epics', icon: 'flag' },
            { id: 10, title: 'Tags', content: 'Tags', icon: 'tags' },
            { id: 11, title: 'Reports', content: 'Reports', icon: 'signal' },
            { id: 12, title: 'Planning Board', content: 'Planning Board', icon: 'keyboard-o' },
            { id: 13, title: 'More', content: 'More', icon: 'ellipsis-h' }
        ];

        const listItemsBottom = [
            { id: 1, title: 'Rewind', content: 'Rewind', icon: 'undo' ,type:'ico'},
            { id: 2, title: 'Notifications', content: 'Notifications', icon: 'bell',type:'ico' },
            { id: 3, title: 'Naveen Patil', content: 'Naveen Patil', icon: <Avatar /> ,type:'img'}
        ];

        /* Individual lists for top and bottom */
        const sideBarTop = (
            <ul>
                {listItemsTop.map((item) =>
                    <li key={item.id}>
                        <a href="#">
                            <i className={`fa fa-2x fa-${item.icon}`}></i>
                            <span className="nav-text">{item.content}</span>
                        </a>
                    </li>
                )}
            </ul>
        );

        const sideBarBottom = (
            <ul className='bottom'>
                {listItemsBottom.map((item) =>
                    <li key={item.id}>
                        <a href="#">
                        {item.type === 'ico' ? 
                            <i className={`fa fa-2x fa-${item.icon}`}></i>
                            :
                            <Avatar></Avatar>
                        }
                        <span className="nav-text">{item.content}</span>
                        </a>
                    </li>
                )}
            </ul>
        );

        return (
            <nav className="main-menu">
                {sideBarTop}
                {sideBarBottom}
            </nav>
        )
    }
}


export default Navbar;