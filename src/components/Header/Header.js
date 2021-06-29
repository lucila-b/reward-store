import React, { useContext, useEffect } from 'react'
import { productContext } from '../../context/ProductContext'
import styled from 'styled-components'
import mainImage from '../../assets/header-x1.png'
import mainIcon from '../../assets/aerolab-logo.svg'
import coinIcon from '../../assets/icons/coin.svg'
import { Link } from 'react-router-dom';
import theme from '../../styles/theme';



const MainContainer = styled.div`
   width: 100%;
   height: auto;
   display: flex;
   flex-direction: column;
`
const UserContainer = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const IconLogo = styled.img`
    width: 39px;
    margin-left: 40px;
`
const UserDataContainer = styled.div`
    display: flex;
    align-items: center;
    width: auto;
    height: 50px;
`
const TextUserContainer = styled.p`
    font-size: 22px;
    color: #616161;
    font-weight: 400;
`
const CoinsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    padding-left: 12px;
    height: 48px;
    background: #EDEDED;
    border-radius: 20.5px;
    margin-left: 14px;
    margin-right: 42px;
`
const IconCoin = styled.img`
    width: 24px;
    padding: 10px;
`
const MainImage = styled.img`
    width: 100%;
`

const MenuLinks = styled(Link)`
	padding: 0.5rem;
	border-radius: 30px;
	text-decoration: none;
	color: #fff;
	text-align: center;
	list-style: none;
	transition: all 0.3s ease-in;

	&:hover {
		color: ${theme.fonts.primaryColor};
	}

	@media ${theme.mediaQueries.above600} {
		color: ${theme.colors.primary};

		&:hover {
			background-color: ${theme.colors.primary};
			color: white;
		}
	}
`;

export default function Header () {

        const { setUser, user, points, setPoints } = useContext(productContext)

        const UserFetch = async () => {
            
            try {
                const response = await fetch("https://coding-challenge-api.aerolab.co/user/me", {
                    headers: {
                    'Content-Type': "application/json",
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"
                    }
                })
                var result = await response.json(); 
            
                setUser(result)
                setPoints(result.points)
                console.log(result)
            } catch (error) {
                    console.log("Error", error)
            }
        };
        

        useEffect(() => {
            UserFetch()
        },[]);


    return(
        <MainContainer>
            <UserContainer>
            <Link to="/">
                <IconLogo src={mainIcon} alt="Logotipo Aerolab"></IconLogo>
            </Link>
            <UserDataContainer>
                <TextUserContainer>{user && user.name}</TextUserContainer>
                <CoinsContainer>
                    <TextUserContainer>{points}</TextUserContainer>
                    <IconCoin src={coinIcon} alt="Imagen de una moneda"></IconCoin>
                </CoinsContainer>
            </UserDataContainer>
            <MenuLinks to="/redeems">Redeems</MenuLinks>
            <MenuLinks to="/getcoins">Get Coins</MenuLinks>
            </UserContainer>
            <MainImage src={mainImage} />
        </MainContainer>
    )
}