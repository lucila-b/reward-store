import react, { createContext, useState } from 'react'


export const productContext = createContext();

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([])

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(16);

    // Get Current posts
    const [indexOfLastPost, setIndexOfLastPost] = useState(currentPage * postsPerPage);
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost)


    return (
        <productContext.Provider value={{products, setProducts, currentPage, setCurrentPage, postsPerPage, setPostsPerPage, indexOfLastPost, indexOfFirstPost, currentPosts,  setIndexOfLastPost}}>
            {props.children}
        </productContext.Provider>
    )
}

