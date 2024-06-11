import React, { useEffect, useState } from "react";

function Posts() {
    // Initialize state to empty array for independency
    const [posts, setPosts] = useState([]);
    // Initializes storing of error messages when data fetching fails
    const [error, setError] = useState(null)

    useEffect (() => { //runs when component is mount
        const fetchPosts = async () => { //handles data fetch

        }
    }

    )

    return (
        <>
        </>
    )
}

export default Posts
