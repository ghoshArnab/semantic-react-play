import React from 'react'
import {
    Container
} from 'semantic-ui-react'

import Header from '../Header/Header'
import '../../styles/App.css';
import Footer from '../Footer/Footer';
import SplitPane from '../SplitPanel/SplitPanel'

const config = {
    header :false,
    footer : false,
    pane : {
        left: false,
        right : false
    }
}
const ScreenLayoutOnlyContent = (config) => (
    <div>
        <Header config/>
        <Container text>
        </Container>
        <SplitPane config/>
        <Footer config/>
    </div>
)

export default ScreenLayoutOnlyContent;