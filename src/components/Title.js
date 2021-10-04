import React from "react";

function Saludo(props) {
    if (props)
        return <h1> Hello {props.name}</h1>
    else
        return <h1> Hello Stranger!</h1>

}

function FormattedDate(props) {
    return <h2>Son las {props.date.toLocaleTimeString()}</h2>;

}

class Hora extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    tick() {
        this.setState({
            date: new Date()
        })
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);

    }


    render() {
        return <FormattedDate date={this.state.date} />;
    }
}

export { Saludo, Hora };