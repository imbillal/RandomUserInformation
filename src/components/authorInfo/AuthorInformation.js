import React from 'react'
import {AuthorInfo} from './authorInfoStyle'

function AuthorInformation({data}) {
    return (
        <AuthorInfo>
            <table className="table table-responsive table-borderless">
                <tbody>
                    <tr>
                        <th scope="row">Name:</th>
                        <td>{data.name}</td>
                    </tr>
                    <tr>
                        <th scope="row">Email:</th>
                        <td>{data.email}</td>
                    </tr>
                    <tr>
                        <th scope="row">Phone:</th>
                        <td>{data.phone}</td>
                    </tr>
                    <tr>
                        <th scope="row">Website:</th>
                        <td>{data.website}</td>
                    </tr>
                    <tr>
                        <th scope="row">Address:</th>
                        <td>{data.address.street}, {data.address.city}, {data.address.zipcode}</td>
                    </tr>
                    <tr>
                        <th scope="row">Company:</th>
                        <td>{data.company.name}</td>
                    </tr>
                </tbody>
            </table>
        </AuthorInfo>
    )
}

export default AuthorInformation
