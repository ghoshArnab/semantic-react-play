import React from 'react';
import {
    Container,
    Dropdown,
    Menu
} from 'semantic-ui-react'

class Footer extends React.Component {
    render() {
        if (this.props.config.footer) {
            return (
                <Menu fixed='bottom' inverted>
                    <Container>
                        <Menu.Item as='a' header>
                            Project Name
                        </Menu.Item>
                        <Menu.Item as='a'>Home</Menu.Item>

                        <Dropdown item simple text='Dropdown'>
                            <Dropdown.Menu>
                                <Dropdown.Item>List Item</Dropdown.Item>
                                <Dropdown.Item>List Item</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Header>Header Item</Dropdown.Header>
                                <Dropdown.Item>
                                    <i className='dropdown icon' />
                                    <span className='text'>Submenu</span>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>List Item</Dropdown.Item>
                                        <Dropdown.Item>List Item</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown.Item>
                                <Dropdown.Item>List Item</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Container>
                </Menu>
            );
        } else {
            return "";
        }
    }
}

export default Footer;