import React from 'react';
import SplitPane from 'react-split-pane';
import './SplitPanel.css';

class SplitPanel extends React.Component {
    render() {
        return (
            <SplitPane split="vertical" defaultSize="80%">
                
                <SplitPane split="vertical" defaultSize="30%">
                    <div>pane 2 size: 50% (of remaining space)</div>
                    <div>pane 3</div>
                </SplitPane>
                <div>pane 1 size: 33%</div>
            </SplitPane>
        );
    }
}

export default SplitPanel;