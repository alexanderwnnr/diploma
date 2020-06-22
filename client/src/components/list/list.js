import React, { Component } from 'react'
import {Grid, Container} from '@material-ui/core/'
import ListItem from '../listItem/listItem'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchItems, itemAddedToCart } from '../../actions'
import withService from '../../hoc/withService'
import ErrorIndicator from '../errorIndicator/errorIndicator'
import Spinner from '../spinner/spinner'
// import compose from '../../utils/compose'


const List = ({items, onAddedToCart}) => {
    return (

        <Grid container direction='row' spacing={2} className="m-auto">
            

                    {
                        items.map((item) => {
                            return <Grid item xs={12} md={3} key={item._id}><ListItem item={item} onAddedToCart={() => onAddedToCart(item._id) } /></Grid>
                        })
                    }
                
            
        </Grid>
        
    )
}


class ListContainer extends Component {
    
    componentDidMount() {
        this.props.fetchItems()
    }
    
    render() {
        const {items, loading, error, onAddedToCart} = this.props

        if(loading){
            return <Spinner />
        }
        if(error){
            return <ErrorIndicator />
        }
        
        return <List items={items} onAddedToCart={onAddedToCart}/>
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    // recieve data
    const { myService } = ownProps
        return bindActionCreators({
            fetchItems: fetchItems(myService),
            onAddedToCart: itemAddedToCart
        }, dispatch)
    
        // return {
        //     fetchItems: () => dispatch(fetchItems(myService)()),
        //     onAddedToCart: (id) => dispatch(itemAddedToCart(id))
        // }
}

const mapStateToProps = ({itemList}) => {
    return {
        items: itemList.items,
        loading: itemList.loading,
        error: itemList.error
    }
}

export default withService()(connect(mapStateToProps, mapDispatchToProps)(ListContainer))