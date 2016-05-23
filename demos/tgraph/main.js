'use strict';

var _ = require('lodash');
var React = require('react');
var ReactDOM = require('react-dom');
var TGraph = require('../lib/TGraph');

var App = React.createClass({
    getInitialState: function () {
        return {
            data: [
                {name: 'Converted', value: 500},
                {name: 'Arrived at checkout', value: 600},
                {name: 'Items in shopping cart', value: 700},
                {name: 'Clicks', value: 1400},
                {name: 'Impressions', value: 2400}
            ]
        };
    },
    onChange: function (evt) {
        this.state.data[parseInt(evt.target.name)].value = parseFloat(evt.target.value) || 0;
        this.setState({data: this.state.data});
    },
    render: function render() {
        var self = this;

        return (
            <div>
                <div>
                    {_.map(this.state.data, function (item, i) {
                        return (
                            <label key={i} style={{display:'block'}}>
                                <span style={{display:'inline-block', width:200}}>{item.name}</span>
                                <input value={item.value} name={i} onChange={self.onChange}/>
                            </label>
                        );
                    })}
                </div>
                <br/>
                <div>
                    <TGraph
                        width="320"
                        height="280"
                        colors={[
                            {color: "#ffffff", bg: "#3fdba6"},
                            {color: "#ffffff", bg: "#9cecef"},
                            {color: "#ffffff", bg: "#6ae2e6"},
                            {color: "#ffffff", bg: "#39d9de"},
                            {color: "#ffffff", bg: "#07cfd6"}
                        ]}
                        data={this.state.data}
                    />
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <App/>,
    document.getElementById('main')
);
