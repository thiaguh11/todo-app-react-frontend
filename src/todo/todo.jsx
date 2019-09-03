import React from 'react'
import Axios from 'axios'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = `${process.env.REACT_APP_API_URL}/api/todos`

export default class Todo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            description: '',
            data: ''
        }

        this.handleChangeText = this.handleChangeText.bind(this)
        this.handleClickAdd = this.handleClickAdd.bind(this)
        this.loadList = this.loadList.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleDone = this.handleDone.bind(this)
        this.handlePending = this.handlePending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.loadList()
    }

    loadList(description = ""){
        const search = description ? `&description__regex=/${description}/` : ''
        Axios.get(`${URL}?sort=-createdAt${search}`)
        .then((response) =>{
            this.setState({...this.state, description, data: response.data})
            console.log(response)
        }).catch((err) => console.log(err))
    }

    handleSearch(){
        this.loadList(this.state.description)
    }

    handleChangeText(event){
        this.setState({description: event.target.value})
    }

    handleClickAdd(){
        if(this.state.description.trim().length === 0){
            alert("Animal insira um texto")
        }else{
            Axios.post(`${URL}`, {
                description: this.state.description
            })
            .then((response) => {
                console.log(response)
                this.loadList()
            })
            .catch((err) => console.log(err))
        }
    }

    handleDone(todo){
        Axios.put(`${URL}/${todo._id}`,{...todo, done: true})
        .then(response => this.loadList(this.state.description))
    }

    handlePending(todo){
        Axios.put(`${URL}/${todo._id}`,{...todo, done: false})
        .then(response => this.loadList(this.state.description))
    }

    handleRemove(todo){
        Axios.delete(`${URL}/${todo._id}`)
        .then(response => {
            this.loadList(this.state.description)
        })
    }

    handleClear(){
        this.loadList()
    }

    render(){
        return(
            <div>
                <h1>Minhas tarefas</h1>
                <TodoForm description={this.state.description} handleChangeText={(e) => this.handleChangeText(e)} handleClickAdd={this.handleClickAdd} handleSearch={this.handleSearch} handleClear={this.handleClear} />
                <hr/>
                <TodoList data={this.state.data} handleRemove={this.handleRemove} handleDone={this.handleDone} handlePending={this.handlePending} />
            </div>
        )
    }
}