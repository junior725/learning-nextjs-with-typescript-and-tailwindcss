import axios from "axios"

type dataProps = {
    name: string,
    login: string,
    id: number,
    bio: string
} 

export default async function Information(){

    const data_github = await ( await axios<dataProps>({
        url: 'http://localhost:3000/informations/example',
        method: 'GET'
        })).data
    return (
        <div>
            <h1>Information</h1>
            <div>{data_github.name}</div>
            <div>{data_github.login}</div>
            <div>{data_github.id}</div>
            <div>{data_github.bio}</div>
        </div>
    )
}