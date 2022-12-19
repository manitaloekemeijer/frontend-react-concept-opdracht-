import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Navigation from "../../components/navigation/Navigation";

function Subreddit() {
    const [post, setPost] = useState([]);
    const {id} = useParams();
    console.log(id);

    useEffect(() => {
        async function fetchDataSubReddit() {
            try {
                const result = await axios.get(`https://www.reddit.com/r/${id}/about.json`);
                console.log(result);
                setPost(result.data.data);
            } catch (error) {
                console.error(error)
            }
        }

        fetchDataSubReddit()

    }, [id]);


    return (
        <>
                <header>
                    <div className="innercontainer-Header">
                    <h1><strong>r/{id}</strong></h1>
                        <h3>Subreddit specifications</h3>
                    </div>
                </header>
            <h2>Title</h2>
            <p>{post.title}</p>
            <h2>Description</h2>
            <p>{post.description}</p>
            <h2>Number of subscribers</h2>
            <p>{post.subscribers}</p>
            <Link to={`/`}>Take me back</Link>
        </>
    );
}

export default Subreddit;