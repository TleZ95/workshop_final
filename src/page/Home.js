import React, { useState } from 'react'
import Search from "../components/search";
import Unspash from '../api/Unspash';
import Post from '../components/Post';


function Home() {

    const [state, setState] = useState({
        results: []
    });
    const onSearch = async (query) => {

        console.log(query);

        const results = await Unspash.get("/search/photos?page=3&=", {
            params: { query, client_id: "5Y3Spb6jijKahAOYJ3CqubjgBuvnCywtYxzvvQ91O-w" }

        })
        setState(prevState => {

            return { ...prevState, results: results }
        })
        console.log(results);
    }
    //https://api.unsplash.com/search/photos?page=1&query=cat&client_id=5Y3Spb6jijKahAOYJ3CqubjgBuvnCywtYxzvvQ91O-w
    return (
        <main>
            <Search onSearch={onSearch} />
            <Post results={state.results} />
        </main>
    )
}

export default Home
