import { Wrap, List } from "./TaskList.styled";
import React, { Component } from "react";

export class TaskList extends Component {
    state = {
        tasks: [{
            id: "1",
            text: "cook"
        },
        {
            id: "2",
            text: "brash teeth"
        },
        {
            id: "3",
            text: "wash a dish"
        },
        {
            id: "4",
            text: "do homework"
        },
        {
            id: "5",
            text: "clean the floor"
        }
        ]
    }

    delElement = (id) => this.setState(prevState => {
        const newState = prevState.tasks.filter(task => task.id !== id)
        return { tasks: newState }
    })

    render() {
        return (
            <Wrap><List>
                {this.state.tasks.map(({ id, text }) => <li key={id}>{text}<button type="button" onClick={() => { this.delElement(id) }}>del</button></li>)}
            </List></Wrap>
        )
    }
}