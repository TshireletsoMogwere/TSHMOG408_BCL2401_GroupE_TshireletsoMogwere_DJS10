import React, { useEffect, useState } from "react";

function Posts() {
    // Initialize state to empty array for independency
    const [posts, setPosts] = useState([]);
    // Initializes storing of error messages when data fetching fails
    const [error, setError] = useState(null)

    useEffect (() => { //runs when component is mount
        const fetchPosts = async () => { //handles data fetch
            try { //statrs try block
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) { 
                    throw new Error('Failed to fetch posts');
                }
                const data = await response.json(); //parses json body of response and stores in data variable
                setPosts(data); //updates posts' state with fetched data
            }
        }
    }

    )

    return (
        <>
        </>
    )
}

export default Posts
