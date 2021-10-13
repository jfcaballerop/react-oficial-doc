import React, { Component } from 'react'

function NumbersList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>{number}</li>
    );
    return (
        <div>
            <ul>{listItems}</ul>
        </div>
    )
}
export class Numbers extends Component {

    render() {
        const itemsNumber = [1, 2, 3, 4, 5];

        return (
            <div>
                <NumbersList numbers={itemsNumber} />
            </div>
        )
    }
}

export default Numbers;
