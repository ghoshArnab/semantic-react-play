import React, {Component} from 'react';
import {Container, Menu} from "semantic-ui-react";

class MainLayout extends Component {
    render() {
        return (
            <div style={{flex: 1}}>
                <Menu style={{flex: 1}} fixed='top'>
                    <Container>
                        <Menu.Item header>
                            Hello world
                        </Menu.Item>
                        <Menu.Item as='a'>Home</Menu.Item>
                        <Menu.Item as='a'>About</Menu.Item>
                    </Container>
                </Menu>
                <Container style={{marginTop: 60}}>
                    {this.props.children}
                </Container>
            </div>
        )
    }
}


export default MainLayout;

