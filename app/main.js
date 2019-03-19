import React from 'react';

export default class Home extends React.Component {
    render() {
        return <button onClick={() => window.alert(123)}>Hello World</button>
    }
}