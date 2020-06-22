import React from 'react'
import { Consumer } from '../serviceContext/serviceContext'
// import myService from '../services/myService'

const withService = () => (Wrapped) => {
    return (props) => {
        return(
            <Consumer>
                {
                    (myService) => {
                       return( <Wrapped { ...props } myService={myService}/>)
                    }
                }
            </Consumer>
        )
    }
}

export default withService