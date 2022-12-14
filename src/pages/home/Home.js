import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Home.css';

const Home = () => {
    const [dataReddit, setDataReddit] = useState({});
    const [endpoint, setEndpoint] = useState('https://www.reddit.com/hot.json?limit=15');

    useEffect(() => {
        async function fetchDataReddit() {
            try {
                const {result} = await axios.get(endpoint);
                setDataReddit(result);
            } catch (error) {
                console.error(error)
            }
        }

        fetchDataReddit();
    }, [endpoint]);

    return (
        <section>
            {console.log(dataReddit)};
        </section>
    );
};

export default Home;