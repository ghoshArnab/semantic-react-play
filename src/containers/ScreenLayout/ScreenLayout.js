import React from 'react'
import {
    Container
} from 'semantic-ui-react'

import Header from '../Header/Header'
import '../styles/App.css';
import Footer from '../Footer/Footer';
import SplitPane from '../SplitPanel/SplitPanel'

const ScreenLayout = (config) => (
    <div>
        <Header config/>
        <Container text>
        </Container>
        <SplitPane config/>
        <Footer config/>
    </div>
)

export default ScreenLayout;