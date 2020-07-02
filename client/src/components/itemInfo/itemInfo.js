import React, { Component } from 'react'
import {Grid, Container} from '@material-ui/core/'
import ListItem from '../listItem/listItem'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchItems, fetchItem, itemAddedToCart } from '../../actions'
import withService from '../../hoc/withService'
import ErrorIndicator from '../errorIndicator/errorIndicator'
import Spinner from '../spinner/spinner'
import myService from '../../services/myService'
// import compose from '../../utils/compose'


const InfoList = ({item, onAddedToCart}) => {

    // const { name, name} = item

    return (
        <Grid container direction='column' spacing={2} className="m-auto">
            <Grid>
            {item}
            </Grid>
        </Grid>





        
    )
}


class InfoContainer extends Component {
    
    // service = new myService

    state = {
        item: {}
    }

    // componentDidMount() {
    //     this.fetchItem()
    // }

    // updateItem() {
    //     const { itemId, getData } = this.props
        
    //     getData(itemId)
    //         .then(item => {
    //         this.setState({
    //             item
    //         });
    //     });
    // };

    

    
    
    render() {
        const {item, loading, error, onAddedToCart} = this.props

        if(loading){
            return <Spinner />
        }
        // if(error){
        //     return <ErrorIndicator />
        // }
        
        return <InfoList item={item} onAddedToCart={onAddedToCart}/>
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    // recieve data
    const { myService } = ownProps
        return bindActionCreators({
            fetchItem: fetchItem(myService),
            onAddedToCart: itemAddedToCart
        }, dispatch)
    
        // return {
        //     fetchItems: () => dispatch(fetchItems(myService)()),
        //     onAddedToCart: (id) => dispatch(itemAddedToCart(id))
        // }
}

const mapStateToProps = ({itemList}) => {
    return {
        items: itemList.item,
        loading: itemList.loading,
        error: itemList.error
    }
}

export default withService()(connect(mapStateToProps, mapDispatchToProps)(InfoContainer))