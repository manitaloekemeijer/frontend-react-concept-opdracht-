import {useParams} from "react-router-dom";
import React, {useState} from "react";
import axios from "axios";

const Subreddit = () => {
    const {subRedditId} = useParams();
    const [post, setPost] = useState([]);


    async function fetchDataSubReddit() {
        try {
            const result = await axios.get('https://www.reddit.com/r/{${ID}/about.json');
            console.log(result);
            setPost(result.data.data.children);
        } catch (error) {
            console.error(error)
        }
    }

    fetchDataSubReddit();
}, []
)
;
}


return (
    <div>

    </div>
);
}
;

export default Subreddit;