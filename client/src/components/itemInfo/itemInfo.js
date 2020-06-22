import React, { Component } from 'react'
import {Grid, Container} from '@material-ui/core/'
import ListItem from '../listItem/listItem'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchItems, fetchItem, itemAddedToCart } from '../../actions'
import withService from '../../hoc/withService'
import ErrorIndicator from '../errorIndicator/errorIndicator'
import Spinner from '../spinner/spinner'
// import compose from '../../utils/compose'


const InfoList = ({name, onAddedToCart}) => {

    return (
        <Grid container direction='column' spacing={2} className="m-auto">
            <Grid>
            {name}
            </Grid>
        </Grid>









        // <Grid container direction='row' spacing={2} className="m-auto">
            

        //             {
        //                 items.map((item) => {
        //                     return <Grid item xs={12} md={3} key={item._id}><ListItem item={item} onAddedToCart={() => onAddedToCart(item._id) } /></Grid>
        //                 })
        //             }
                
            
        // </Grid>
        
    )
}


class InfoContainer extends Component {
    

    componentDidMount() {
        this.props.fetchItem()
    }
    
    render() {
        const {name, loading, error, onAddedToCart} = this.props

        if(loading){
            return <Spinner />
        }
        // if(error){
        //     return <ErrorIndicator />
        // }
        
        return <InfoList name={name} onAddedToCart={onAddedToCart}/>
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