import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PagesContainer, Title } from '../../styles/PagesContainer';
import RedeemedProduct from '../RedeemedProduct';
import theme from '../../styles/theme';

const Redeems = () => {
	const [redeemedData, setRedeemedData] = useState([]);

    const getHistory = async () => {
        try {
            const response = await fetch('https://coding-challenge-api.aerolab.co/user/history', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"
                },
                redirect: 'follow'
             });
             
             var result = await response.json(); 
             
             setRedeemedData(result)
      
        } catch (error) {
            console.log("error", error)
        } 
    };

	useEffect(() => {
		getHistory();
	}, [redeemedData]);

	const redeemedReversed = redeemedData.reverse();

	return (
		<PagesContainer>
			<Title>Redeemed products</Title>
			<p>History of your redeems</p>

			<ProductsGrid>
				{redeemedReversed.map((product) => (
					<RedeemedProduct {...product} key={product.createDate} />
				))}
			</ProductsGrid>
		</PagesContainer>
	);
};

const ProductsGrid = styled.section`
	margin: 2rem auto;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media ${theme.mediaQueries.above768} {
		margin: 0 auto;
		width: 60%;
	}

	@media ${theme.mediaQueries.above1024} {
		width: 40%;
	}
`;

export default Redeems;
