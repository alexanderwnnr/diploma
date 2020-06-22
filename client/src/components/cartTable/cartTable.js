import React from 'react'
import { Table, ButtonGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { itemAddedToCart, itemRemovedFromCart, allItemsRemovedFromCart } from '../../actions'
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Grid, Paper, Button, Typography, InputBase, Tabs, Tab } from "@material-ui/core";
import './cartTable.css'

const CartTable = ({goods, total, onIncrease, onDecrease, onDelete}) => {
    
    const renderRow = (good, idx) => {
        const { _id, name, count, total } = good
            return (
                <tr key={name}>
                    <td>
                        <Typography className="mt-2" variant="h6">
                            {idx + 1}
                        </Typography></td>
                    <td>
                        <Typography className="mt-2" variant="h6">
                            {name}
                        </Typography>
                    </td>
                    <td>
                        <Typography className="mt-2" variant="h6">
                            {count}
                        </Typography>
                    </td>
                    <td>
                        <Typography className="mt-2" variant="h6">
                            ${total}
                        </Typography>
                    </td>
                    <td>
                        
                        {/* <Button variant='success' onClick={() => onIncrease(_id)}>1</Button> */}
                        <IconButton color="primary" aria-label="add to shopping cart" onClick={() => onIncrease(_id)}>
                            <AddShoppingCartIcon />
                        </IconButton>
                        <IconButton color="secondary" aria-label="add to shopping cart" onClick={() => onDecrease(_id)}>
                            <IndeterminateCheckBoxIcon />
                        </IconButton>
                        <IconButton color="primary" aria-label="add to shopping cart" onClick={() => onDelete(_id)}>
                            <DeleteForeverIcon />
                        </IconButton>


                        {/* <Button variant='danger' onClick={() => onDecrease(_id)}>2</Button>
                        <Button onClick={() => onDelete(_id)}>3</Button> */}
                        
                    </td>
                </tr>
            )
    }

        return (
            <div className="shopping-cart-table">
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th>Count</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { goods.map(renderRow) }
                    </tbody>
                </Table>
                <Grid container>
                    <Grid item>
                        <Typography className="mt-2" variant="h6">
                            Total: ${total}
                        </Typography>
                    </Grid>
                    <Grid className="ml-auto" item>
                        <Button variant="contained" color="secondary">
                            Order
                        </Button>
                    </Grid>
                </Grid>
            </div>
        )
}

const mapStateToProps = ({ shoppingCart: {cartItems, orderTotal}}) => {
    return {
        goods: cartItems,
        total: orderTotal
    }
}

const mapDispatchToProps = {
        onIncrease: itemAddedToCart,
        onDecrease: itemRemovedFromCart,
        onDelete: allItemsRemovedFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable)