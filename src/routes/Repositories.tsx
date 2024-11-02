import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import classes from './Repositories.module.css'
import BackButton from '../components/BackButton'

import { RepositoryProps } from '../types/repository'

const Repositories = () => {

    const {username} = useParams()

    const [repositories, setRepositories] = useState<RepositoryProps[] | [] | null>(null)

    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
    
        const loadRepositories = async (username: string) => {
            setIsLoading(true)

            const res = await fetch(`https://api.github.com/users/${username}/repos`)

            const data = await res.json()

            setIsLoading(false)

            console.log(data)
        }

        loadRepositories(username as string)
        
    }, [])

    return (
        <div>
            {username}
            <BackButton/>
        </div>
    )

}

export default Repositories