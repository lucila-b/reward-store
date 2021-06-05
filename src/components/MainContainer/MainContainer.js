import React, { useContext } from 'react'
import styled from 'styled-components'
import Filters from '../Filters/Filters'
import { productContext } from '../../context/ProductContext'
import left from '../../assets/icons/arrow-left.svg'
import right from '../../assets/icons/arrow-right.svg'
import Pagination from "@material-ui/lab/Pagination";

const FiltersComp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #F2F2F2;
    width: 100%;
`
const Information = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: auto;
    padding-left: 132px;
    margin-right: 132px;
`

const Text = styled.p`
    font-size: 24px;
    margin: 10px;
    color: #A3A3A3;
`

const Separator = styled.div`
    border: .5px solid #D9D9D9;
    height: 49px;
    width: 1px;
    padding: 0;
    background: #D9D9D9;
    margin: 10px;
`
const FilterButton = styled.button`
    width: 163px;
    height: 48px;
    background:#EDEDED;
    border-radius: 20.5px;
    color: #A3A3A3;
    cursor: pointer;
    margin: 20px;
    outline: none;
    font-size: 20px;
    &:hover{
        background: #0AD4FA;
        color: #fff;
    }
`
//Separator
const DivSeparator = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`
const SeparatorBig = styled.div`
    height: 1px;
    width: 90%;
    background: #D9D9D9;
`

//Pages Bottom
const PagesBottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #F2F2F2;
    width: 100%;
    height: 100px;
    padding-bottom: 50px;
`
const NumbOfPage = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
`
const TextPB = styled.p`
    font-size: 24px;
    margin: 10px;
    color: #A3A3A3;
    padding-left: 132px;
    width: 100%;
` 
const PagesDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

export default function Body() {

    const { 
        currentPosts, 
        products, 
        currentPage, 
        setCurrentPage, 
        postsPerPage, 
        setIndexOfLastPost 
    } = useContext(productContext)

    const paginate = () => {
        alert(postsPerPage)
        // if (products > currentPage * postsPerPage) {
        //     setCurrentPage(currentPage + 1)
        // } else if (products > currentPage * postsPerPage & products < currentPage + 1 * postsPerPage) {
        //     setIndexOfLastPost(products.length);
        // }
    }

    const prueba = () => {
        alert("hello")
    }

    const count = Math.ceil(products.length / postsPerPage);

    const maxPage = Math.ceil(products.length / postsPerPage);

    const handlePagination = (event, pageSelected) => {
        setCurrentPage(pageSelected);
        const pageNumber = Math.max(1, pageSelected);
        setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
        // productsPaginated.jumpToPage(pageSelected);
      };

    return (
        <>
            <body>
                <FiltersComp>
                    <Information>
                        <Text>{currentPosts.length * currentPage} of {products.length} products</Text>
                        <Separator/>
                        <Text>Sort by:</Text>
                        <FilterButton>Lowest price</FilterButton>
                        <FilterButton>Highest Price</FilterButton>
                        <div>
                            <Pagination
                                count={count}
                                variant="outlined"
                                page={currentPage}
                                onChange={handlePagination}
                            />
                        </div>
                    </Information>
                    <DivSeparator>
                        <SeparatorBig></SeparatorBig>
                    </DivSeparator>
                </FiltersComp>
                <Filters />
                <PagesBottom>
                    <NumbOfPage>
                        <TextPB>{currentPosts.length * currentPage} of {products.length} products</TextPB>
                        <PagesDiv>
                            {/* <a onClick={paginate}><img src={left} alt="left"/></a> */}
                            <Pagination
                                count={count}
                                variant="outlined"
                                page={currentPage}
                                onChange={handlePagination}
                            />
                            {/* <a><img src={right} alt= "right"/></a> */}
                        </PagesDiv>
                    </NumbOfPage>
                    <DivSeparator style={{ marginTop: 20}}>
                        <SeparatorBig></SeparatorBig>
                    </DivSeparator>
                </PagesBottom>
            </body>
        </>
    )
}