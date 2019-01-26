import React from 'react'
import {
    Container
} from 'semantic-ui-react'

import Header from './Header/Header'
import '../styles/App.css';
import Footer from './Footer/Footer';
import SplitPane from './SplitPanel/SplitPanel'

const ScreenLayout = () => (
    <div>
        <Header />
        <Container text>
            <SplitPane />
        </Container>
        <Footer />
    </div>
)

export default ScreenLayout;