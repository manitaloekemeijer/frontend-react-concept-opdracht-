import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Home.css';
import logoReddit from '../../assets/logo.png';
import {Link} from 'react-router-dom';
// import Navigation from "../../components/navigation/Navigation";

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchDataReddit() {
            try {
                const result = await axios.get('https://www.reddit.com/hot.json?limit=15');
                console.log(result);
                setPosts(result.data.data.children);
            } catch (error) {
                console.error(error)
            }
        }

        fetchDataReddit();
    }, []);

    return (
        <>
            <div className="outercontainer-page">
                    <header>
                        <div className="innercontainer-Header">
                        <img src={logoReddit} alt="logo Reddit"/>
                        <h1><strong>Reddit</strong></h1>
                        </div>
                    </header>
                {console.log(posts)};
                <main>
                    <div className="innercontainer-titles">
                        <h2>hottest posts</h2>
                        <h4>on Reddit right now</h4>
                    </div>
                    <section>

                        {/*<article className='innercontainer-link' key={posts.data.id}>*/}

                        {Object.keys(posts).length > 0 &&
                            <>{posts.map((post) => {
                                return (
                                    <article className='innercontainer-link' key={post.data.id}>

                                        <a href={post.data.url} className={"link-subreddit-article"}>
                                            <h3>{post.data.title}  </h3>
                                        </a>
                                        <Link to={`/subreddit/${post.data.subreddit}`}> {post.data.subreddit_name_prefixed}</Link>
                                    <div>
                                        <p>'Comments {post.data.num_comments} - Ups {post.data.ups}</p>
                                    </div>
                                    </article>
                                )
                            })}
                            </>
                        }

                    </section>
                </main>
            </div>
        </>
    );
};

export default Home;