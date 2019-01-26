import React from 'react';
import MainLayout from "../components/MainLayout";
import {Segment} from "semantic-ui-react";

export default class AnotherRoute extends React.Component {
    render() {
        return (
            <MainLayout>
                <Segment>Hello</Segment>
            </MainLayout>
        );
    }
}