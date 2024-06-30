import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();

    /*const [data, setData] = useState([])
    useEffect (() => {
        fetch ('https://api.github.com/users/askgurdit')
        .then (Response => Response.json())
        .then (data => {
            console.log(data);
            setData(data)
        })
    },[]) */

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github followers: {data.followers}
            <img src={data.avatar_url} alt="GitHub Avatar" width={300} />
        </div>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/askgurdit');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
}
