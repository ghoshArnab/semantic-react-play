import React from 'react'
import {
    Container
} from 'semantic-ui-react'

import Header from '../Header/Header'
import '../../styles/App.css';
import Footer from '../Footer/Footer';
import SplitPane from '../SplitPanel/SplitPanel'


const ScreenLayoutFull = () => {
    const config = {
        header :true,
        footer : false,
        pane : {
            left: true,
            right : true
        }
    }

    return (<div>
        <Header config={config} />
        <Container text>
        </Container>
        <SplitPane config={config} />
        <Footer config={config} />
    </div>);
}

export default ScreenLayoutFull;