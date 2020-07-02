import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Container } from 'react-bootstrap'
//import { Card, Button } from 'react-bootstrap'
import { makeStyles, Card, CardActionArea, CardActions, CardMedia, CardContent, Typography, Button } from '@material-ui/core'
  
const AdminItem = ({item}) => {
    const { _id, items, total, date, user} = item

    const renderRow = (good, idx) => {
        const { _id, name, count, total } = good
            return (
                <tr key={name}>
                    <td>
                        <Typography  variant="h6">
                            {idx + 1}
                        </Typography></td>
                    <td>
                        <Typography variant="h6">
                            {name}
                        </Typography>
                    </td>
                    <td>
                        <Typography  variant="h6">
                            {count}
                        </Typography>
                    </td>
                    <td>
                        <Typography  variant="h6">
                            ${total}
                        </Typography>
                    </td>
                </tr>
            )
    }

    return (
        <Container className='mt-2'>
            <Card className='mt-2'>
        
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th>Count</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                            { items.map(renderRow)}
                            <tr>
                                <td></td>
                                <td><Typography  variant="h6">{date}</Typography></td>
                                <td><Typography  variant="h6">Total: {total}</Typography></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><Typography  variant="h6">User ID: {user}</Typography></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><Typography  variant="h6">Order ID: {_id}</Typography></td>
                            </tr>
                    </tbody>
                </Table>
            </Card>
        </Container>
    );
}
export default AdminItem
