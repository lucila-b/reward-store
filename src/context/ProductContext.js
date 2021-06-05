import react, { createContext, useState, useEffect } from 'react'


export const productContext = createContext();

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([])

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(16);

    // Get Current posts
    const [indexOfLastPost, setIndexOfLastPost] = useState(currentPage * postsPerPage);
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const [currentPosts, setCurrentPost] = useState([])

    //Usuario
    const [user, setUser] = useState ();
    const [points, setPoints] = useState ();

    // Redeem
    const [openRedeemModal, setOpenRedeemModal] = useState();

    useEffect(() => {
       setCurrentPost(products.slice(indexOfFirstPost, indexOfLastPost))
    },[products, indexOfFirstPost, indexOfLastPost, user, points])

    return (
        <productContext.Provider value={{products, setProducts, currentPage, setCurrentPage, postsPerPage, setPostsPerPage, indexOfLastPost, indexOfFirstPost, currentPosts,  setIndexOfLastPost, user, setUser, points, setPoints, openRedeemModal, setOpenRedeemModal}}>
            {props.children}
        </productContext.Provider>
    )
}

