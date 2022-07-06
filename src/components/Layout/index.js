import { Outlet } from 'react-router-dom'
import Copyright from '../Copyright'
import Sidebar from '../Sidebar'
import './index.scss'

const Layout = () => {
    return (
        <div className="App">
            <Sidebar />
            <div className="page">
                <Outlet />
            </div>
            <Copyright/>
        </div>
    )
}

export default Layout