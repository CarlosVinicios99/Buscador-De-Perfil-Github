import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import classes from './Repositories.module.css'
import BackButton from '../components/BackButton'

const Repositories = () => {

    const {username} = useParams()

    return (
        <div>
            {username}
            <BackButton/>
        </div>
    )

}

export default Repositories