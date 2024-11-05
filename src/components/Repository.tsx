import { BsCodeSlash } from "react-icons/bs"
import { RepositoryProps } from "../types/repository"
import { AiOutlineFork, AiOutlineStar } from "react-icons/ai"
import { RiGitRepositoryLine } from "react-icons/ri"

const Repository = ({name, language, html_url, forks_count, stargazes_count}: RepositoryProps) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>
                <BsCodeSlash/> {language}
            </p>
            <div>
                <div>
                    <AiOutlineStar/>
                    <span>{stargazes_count}</span>
                </div>
                <div>
                    <AiOutlineFork/>
                    <span>{forks_count}</span>
                </div>
            </div>
            <a href={html_url} target="_blank">
                <span>Ver código</span>
                <RiGitRepositoryLine/>
            </a>
        </div>
    )
}

export default Repository