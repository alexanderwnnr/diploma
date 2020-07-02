import React, { Component } from 'react'
import AdminList from '../components/adminList/adminList'
import ItemFormPost from '../components/itemFomPost/itemFormPost'

export default class AdminPage extends Component {

    render() {
        
        return(
            <div>
                <ItemFormPost />
                <AdminList />
            </div>
        )
    }
}