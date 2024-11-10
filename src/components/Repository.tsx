import { BsCodeSlash } from "react-icons/bs"
import { RepositoryProps } from "../types/repository"
import { AiOutlineFork, AiOutlineStar } from "react-icons/ai"
import { RiGitRepositoryLine } from "react-icons/ri"
import classes from "./Repository.module.css"

const Repository = ({name, language, html_url, forks_count, stargazers_count}: RepositoryProps) => {
    return (
        <div className={classes.repository}> 
            <h3>{name}</h3>
            <p>
                <BsCodeSlash/> {language}
            </p>
            <div className={classes.stats}>
                <div>
                    <AiOutlineStar/>
                    <span>{stargazers_count}</span>
                </div>
                <div>
                    <AiOutlineFork/>
                    <span>{forks_count}</span>
                </div>
            </div>
            <a href={html_url} target="_blank" className={classes.repository_btn}>
                <span>Ver código</span>
                <RiGitRepositoryLine/>
            </a>
        </div>
    )
}

export default Repository