import { Wrap, List, TaskForm } from "./TaskList.styled";
import React, { Component } from "react";
import { nanoid } from 'nanoid';

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

    handleSubmit = (e) => {
        e.preventDefault()
        const newTask = [{
            id: nanoid(),
            text: e.currentTarget.elements.newTask.value
        }];
        this.setState(prevState => {
            const newTasks = { tasks: [...prevState.tasks, ...newTask] }
            return newTasks
        })
        e.currentTarget.elements.newTask.value = ""
    };

    render() {
        return (
            <Wrap>
                <TaskForm onSubmit={this.handleSubmit}>
                    <input name="newTask" type="text" placeholder="type new task" />
                    <button type="submit">Add task</button>
                </TaskForm>
                <List>
                    {this.state.tasks.map(({ id, text }) => <li key={id}>{text}<button type="button" onClick={() => { this.delElement(id) }}>del</button></li>)}
                </List></Wrap>
        )
    }
}