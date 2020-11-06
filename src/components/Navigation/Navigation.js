import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from './NavigationStyle'

function Navigation() {
    return (

       <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
           <div className="container">
                <Link className="navbar-brand" to='/' >Home</Link>
           </div>
       </Navbar>
    )
}

export default Navigation
