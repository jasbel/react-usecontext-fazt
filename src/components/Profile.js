import React, { useContext } from 'react'
import userContext from '../context/User/UserContext'

const Profile = () => {

    const { selectedUser } = useContext(userContext);


    return (
        <>
            {
                selectedUser ? (
                    <div className="card card-body text-center">
                        <img src={selectedUser.avatar} className="card-img-top rounded-circle m-auto"/>
                        <h1> {` ${selectedUser.first_name} ${selectedUser.last_name}`} </h1>
                        <h3> Email: {selectedUser.email} </h3>

                    </div>
                ):(
                    <h1>NO usuario seleccionado</h1>
                )
            }
        </>
    )
}

export default Profile
