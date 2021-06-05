import React, {useContext, useEffect} from 'react'
import styled from 'styled-components'
import { productContext } from '../../context/ProductContext'
import ProductCard from '../../components/ProductCard/ProductCard'

const BodyContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background: #F2F2F2;
`

export default function Filters () {
    const { 
        products, 
        setProducts, 
        currentPosts,
        currentPage,
        postsPerPage
    } = useContext(productContext)
  
   
 
    const ProductsFetch = async () => {
        try{
            const response = await fetch("https://coding-challenge-api.aerolab.co/products", {
                headers: {
                'Content-Type': "application/json",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"
                }
            })
            var result = await response.json(); 
        
            setProducts(result)
            console.log(result)

        } catch (error) {
            console.log("error", error)
        }
         
    }

    useEffect(() => {
        ProductsFetch()
    },[]) 

    console.log(currentPosts)

    const currentData = () => {
        const begin = (currentPage - 1) * postsPerPage;
        const end = begin + postsPerPage;
        return products.slice(begin, end);
    };

    return(

        <>
            <BodyContainer>
                {
                     currentData().map((obj) => (
                        <div key={obj._id}>
                            <ProductCard {...obj}/>
                        </div>
                    ))
                }  
            </BodyContainer>
        </>
    )
}