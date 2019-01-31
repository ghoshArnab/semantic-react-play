import React from 'react'
import {
    Container
} from 'semantic-ui-react'

import Header from '../Header/Header'
import '../../styles/App.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
/*import SplitPane from '../SplitPanel/SplitPanel';*/


const ScreenLayoutFull = () => {
    const config = {
        header :true,
        footer : true,
        pane : {
            left: true,
            right : true
        }
    }

    return (<div>
        <Header config={config} />
        <Container text>
        <Navbar />
        </Container>
        {/*
        <SplitPane config={config} />
        */}
        <Footer config={config} />
    </div>);
}

export default ScreenLayoutFull;