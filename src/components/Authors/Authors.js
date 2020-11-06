import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchAuthors} from './AuthorsSlice'
import {Link} from 'react-router-dom'
import {SingleAuthor, UserInfo, ViewProfileBtn} from './authorStyle'
import Loading from '../Loading/Loading'

function Authors() {
    const {authorsInfo} = useSelector(state => state.authorsInfo)
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(fetchAuthors('users'))
    }, [])
    console.log()
    return authorsInfo ?(
        <div className='container'>
            <div className="row">

                {
                    authorsInfo.map( author => {
                        return(
                            <div className="col-sm-6 col-md-3" key={author.id}>
                                <SingleAuthor className="single-author">
                                    <div className="author-img">
                                        <img src={`https://i.pravatar.cc/150?u=${author.id}`} alt=""/>
                                    </div>
                                    <UserInfo className="authors-info">
                                        <p className="name">{author.name}</p>
                                        <p className="email">{author.email}</p>
                                    </UserInfo>
                                    <ViewProfileBtn className='btn btn-primary'><Link to={`/author/${author.id}`}>View Profile</Link></ViewProfileBtn>
                                </SingleAuthor>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    ): <Loading />
}

export default Authors
