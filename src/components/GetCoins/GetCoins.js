import React, { useContext } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import Coins from '../../styles/Coins';
import coin from '../../assets/icons/coin.svg';
import { PagesContainer, Title } from '../../styles/PagesContainer';
import { productContext } from '../../context/ProductContext'

const GetCoins = () => {
    const { setPoints } = useContext(productContext);

    const postPoints = async (amount) => {
        let raw = JSON.stringify({ amount: amount });
    
        let requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"
            },
            body: raw,
            redirect: 'follow'
        };
    
        try {
            const result = await fetch(`https://coding-challenge-api.aerolab.co/user/points`, requestOptions);
            const newPointsData = await result.json();
            setPoints(newPointsData['New Points']);
        } catch (error) {
            console.log('error', error);
        }
    };

	function handleGetCoins(amount) {
		postPoints(amount);
	}

	return (
		<PagesContainer>
			<Title>Get more coins</Title>
			<p>Choose the coins you want to add</p>

			<CoinsContainer>
				<Coin
					onClick={() => {
						handleGetCoins(1000);
					}}
				>
					<p>1000</p>
					<img src={coin} alt="Ilustration of coin" />
				</Coin>
				<Coin
					onClick={() => {
						handleGetCoins(5000);
					}}
				>
					<p>5000</p>
					<img src={coin} alt="Ilustration of coin" />
				</Coin>
				<Coin
					onClick={() => {
						handleGetCoins(7500);
					}}
				>
					<p>7500</p>
					<img src={coin} alt="Ilustration of coin" />
				</Coin>
			</CoinsContainer>
		</PagesContainer>
	);
};

const CoinsContainer = styled.div`
	margin: 0 auto;
	width: 80%;

	@media ${theme.mediaQueries.above600}{
		display: flex;
		justify-content: center;
	})
`;

const Coin = styled(Coins)`
	margin: 1rem;
	cursor: pointer;

	&:hover {
		background-color: ${theme.colors.background};
	}

	@media ${theme.mediaQueries.above600} {
		width: 100%;
	}

	@media ${theme.mediaQueries.above1200} {
		width: 50%;
	}
`;

export default GetCoins;
