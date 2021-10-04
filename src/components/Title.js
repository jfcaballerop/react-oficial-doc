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
class ButtonGreeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            name: props.name
        }
    }
    greeting() {
        this.setState({
            show: !this.state.show
        })
    }
    render() {
        return (
            <div>
                <button onClick={() => this.greeting()}>Saludo</button>
                <div style={{ display: this.state.show ? 'block' : 'none' }}>Hola {this.props.name}</div>
            </div>
        );

    }

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
        return (
            <div>

                <FormattedDate date={this.state.date} />
            </div>
        );
    }
}

export { Saludo, Hora, ButtonGreeting };