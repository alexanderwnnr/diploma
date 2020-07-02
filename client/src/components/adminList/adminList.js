import React, { Component } from 'react'
import {Grid, Container} from '@material-ui/core/'
import AdminItem from '../adminItem/adminItem'
import { connect } from 'react-redux'
import { fetchAItems } from '../../actions/index'
import withService from '../../hoc/withService'
import ErrorIndicator from '../errorIndicator/errorIndicator'
import Spinner from '../spinner/spinner'
import { Table } from 'react-bootstrap'


const Page = ({items}) => {
  
        return(
            <div className="m-auto">
            

                    {
                        items.map((item) => {
                            return <div key={item._id}><AdminItem item={item} /></div>
                        })
                    }
                
            
        </div>
        )   
}
class AdminContainer extends Component {
    
    componentDidMount() {
        this.props.fetchAItems()
    }
    
    render() {
        const {items, loading, error} = this.props

        if(loading){
            return <Spinner />
        }
        if(error){
            return <ErrorIndicator />
        }
        
        return <Page items={items}/>
          
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    // recieve data
    const { myService } = ownProps
        
        return {
            fetchAItems: () => dispatch(fetchAItems(myService)())
        }
}

const mapStateToProps = ({adminList}) => {
    return {
        items: adminList.items,
        loading: adminList.loading,
        error: adminList.error
    }
}

export default withService()(connect(mapStateToProps, mapDispatchToProps)(AdminContainer))