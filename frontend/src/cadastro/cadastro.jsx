import React, { Component } from "react";
import axios from 'axios';

import PageHeader from "../template/pageHeader";
import CadastroForm from "./cadastroForm";
import CadastroList from "./cadastroList";



const URL = 'http://localhost:3003/api/cadastros'

export default class Cadastro extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        
        this.refresh()
    }


    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({ ...this.state, description: '', list: resp.data }))
    }
    handleChange(a) {
        this.setState({ ...this.state, description: a.target.value })
    }
    handleSearch() {
        this.refresh(this.state.description)
    }
    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => this.refresh())
    }
    handleClear() {
        this.refresh()
    }
    handleRemove(cadastro) {
        axios.delete(`${URL}/${cadastro._id}`)
            .then(resp => this.refresh(this.state.description))
    }
    
    
    render() {
        return (
            <div>
                <PageHeader name='Cadastro' small='Pessoas'></PageHeader>
                <CadastroForm
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear} />
                <CadastroList
                    list={this.state.list}
                    handleRemove={this.handleRemove} />
                   
            </div>
        );
    }
}