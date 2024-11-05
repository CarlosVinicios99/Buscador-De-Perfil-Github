import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import classes from './Repositories.module.css'
import BackButton from '../components/BackButton'

import { RepositoryProps } from '../types/repository'
import Loader from '../components/Loader'
import Repository from '../components/Repository'

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

            setRepositories(data)
        }

        loadRepositories(username as string)
        
    }, [])

    if(!repositories && isLoading){
        return <Loader/>
    }

    return (
        <div>
            <BackButton/>
            <h2>Explore os repositórios do usuário</h2>
            {repositories && repositories.length === 0 && <p>Não há repositórios.</p>}
            {repositories && repositories.length > 0 && (
                <div>
                    {repositories.map((repository: RepositoryProps) => (
                       <Repository key={repository.name} {...repository}/>
                    ))}
                </div>
            )}
        </div>
    )

}

export default Repositories