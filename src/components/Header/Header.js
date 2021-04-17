import styled from 'styled-components'
import mainImage from '../../assets/header-x1.png'
import mainIcon from '../../assets/aerolab-logo.svg'
import coinIcon from '../../assets/icons/coin.svg'



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
const TextUserDiv = styled.p`
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

export default function Header () {
    return(
        <MainContainer>
            <UserContainer>
            <IconLogo src={mainIcon} alt="Logotipo Aerolab"></IconLogo>
                    <UserDataContainer>
                        <TextUserDiv>Lolis</TextUserDiv>
                        <CoinsContainer>
                            <TextUserDiv>6000</TextUserDiv>
                            <IconCoin src={coinIcon} alt="Imagen de una moneda"></IconCoin>
                        </CoinsContainer>
                    </UserDataContainer>
            </UserContainer>
            <MainImage src={mainImage} />
        </MainContainer>
    )
}