import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Login from "./layouts/login"
import Main from "./layouts/main"
import NavBar from "./components/navBar"
import Users from "./layouts/users"
import NotFound from "./layouts/not-found"
// import api from './api'

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/login' component={Login} />
                <Route path='/users/:userId?' component={Users} />
                <Route path='/404' component={NotFound} />
                <Redirect to='/404' />
            </Switch>
        </div>
    )
}

export default App

// import React, { useState, useEffect } from 'react'
// import Users from './components/users'

// import api from './api'

// function App() {
//     const [users, setUsers] = useState()
//     useEffect(() => {
//         api.users.fetchAll().then((data) => setUsers(data))
//     }, [])
//     const handleDelete = (userId) => {
//         setUsers(users.filter((user) => user._id !== userId))
//     }
//     const handleToggleBookMark = (id) => {
//         const newArray = users.map((user) => {
//             if (user._id === id) {
//                 return { ...user, bookmark: !user.bookmark }
//             }
//             return user
//         })
//         setUsers(newArray)
//         console.log(id)
//     }
//     return (
//         <div>
//             {users && (
//                 <Users
//                     onDelete={handleDelete}
//                     onToggleBookMark={handleToggleBookMark}
//                     users={users}
//                 />
//             )}
//         </div>
//     )
// }

// export default App
