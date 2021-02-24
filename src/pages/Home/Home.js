import React from 'react'
import { connect, useSelector } from 'react-redux'
import * as actions from '../../store/actions'

const Home = ({logout}) => {

    const role = useSelector(state => state.firebase.profile.role)
    
    return (
        <div>
            <div>Hello, {role}</div>
            <button type="sumbit" className="btn btn-primary" onClick={logout}> Log out</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return{
        logout: () => dispatch(actions.signOut())
    }
}
export default connect(null, mapDispatchToProps)(Home)
