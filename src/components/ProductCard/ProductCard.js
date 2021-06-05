import React, {useContext, useEffect} from 'react'
import { productContext } from '../../context/ProductContext'
import styled from 'styled-components'
import MainShoppingIconHov from '../../assets/icons/buy-white.svg'
import MainShoppingIcon from '../../assets/icons/buy-blue.svg'
import CoinIcon from '../../assets/icons/coin.svg'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';



//Hover

const HoverContainer = styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    position: absolute;
    width: 276px;
    height: 290px;
    background: linear-gradient(180deg, rgba(10, 212, 250, 0.86) 0%, rgba(37, 187, 241, 0.86) 100%);
    z-index: 200;
`

const ShoppingIconHover = styled.img`
    width: 50px;
    align-self: flex-end;
    margin-top: 12.5px;
    margin-bottom: 20px;
    margin-right: 6px;
`
const CoinsContainer = styled.div`
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`
const HoverSaldo = styled.p`
    font-size: 26px;
    color: #fff;
    font-weight: 400;
`
const CoinHover = styled.img`
    width: 26px;
    margin: 5px;
`

//Main container de los productos
const MainContainerProduct = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background: #fff;
    width: 276px;
    height: 290px;
    margin: 12px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    &:hover ${HoverContainer} {
        display: flex;
    }
`
const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 12px;
    width: 252px;
    height: 182px;
`
const Image = styled.img`
    width: 252px;
    position: absolute;
`
const ShoppingIcon = styled.img`
    width: 42px;
    position: absolute;
    z-index: 100;
    align-self: flex-end;
`
//No saldo suficiente
const NotEnoughCoinsContainer = styled.div`
    display: flex;
    align-self: flex-end;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    z-index: 30;
    width: 142px;
    height: 42px;
    background:#616161;
    border-radius: 20.5px;
    color: #fff;
    opacity: 80%;
    outline: none;
    font-size: 14px;
`

const Coin = styled.img`
    width: 20px;
`
const NotEnoughAlert = styled.p`
    font-size: 14px;
    color: #fff;
`

const Separator = styled.span`
    height: 1px;
    width: 228px;
    background: #D9D9D9;
`

const NameCategoryTitle = styled.div`
    width: 228px;
    height: 45px;
    display: flex;
    flex-direction: column;
    padding: 23px;
    
`
const Category = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: #A3A3A3;
    margin: 0;
`

const Name = styled.p`
    font-size: 18px;
    color:  #616161;
    margin-top: 5px;
`

const RedeemButton = styled.button`
    width: 180px;
    height: 42px;
    background:#fff;
    border-radius: 20.5px;
    color: #616161;
    cursor: pointer;
    outline: none;
    font-size: 18px;
`

const Title = styled.h3`
	font-weight: 500;
`;

export default function ProductCard (props) {

    const { 
        user, 
        setPoints,
        openRedeemModal,
        setOpenRedeemModal,
    } = useContext(productContext);

    const useStyles = makeStyles((theme) => ({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        paper: {
            backgroundColor: '#fffefe',
            border: 'none',
            boxShadow: theme.shadows[5],
            borderRadius: '10px',
            padding: theme.spacing(2, 4, 3),
            color: '#0AD4FA',
            fontWeight: 300,
            textAlign: 'center',
            outline: 'none'
        }
    }));

    const classes = useStyles();

    const redeem = async (id, cost) => {
    
        try {
           const response = await fetch('https://coding-challenge-api.aerolab.co/redeem', {
               method: "POST",
               headers: {
                   "Content-Type": "application/json",
                   "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"
               },
               body: JSON.stringify({productId: id})
            })
            var result = await response.json(); 
            
            setOpenRedeemModal(true)
            setPoints( (prevState) => {
                return(
                    prevState - cost
                ) 
            })
       } catch (error) {
           console.log("error", error)
       } 
    }

    return(
        <>
            <MainContainerProduct sinHover={user?.points < props.cost}>
                <ImageContainer>
                    <Image src={props.img.url}/>
                    {user?.points.cost ? <ShoppingIcon src={MainShoppingIcon}></ShoppingIcon> :
                    <NotEnoughCoinsContainer>
                        <NotEnoughAlert>You need {props.cost}</NotEnoughAlert>
                        <Coin src={CoinIcon}></Coin>
                    </NotEnoughCoinsContainer>}
                </ImageContainer>
                <Separator></Separator>
                <NameCategoryTitle>
                    <Category>{props.category}</Category>
                    <Name>{props.name}</Name>
                </NameCategoryTitle>
                <HoverContainer>
                    <ShoppingIconHover src={MainShoppingIconHov}></ShoppingIconHover>
                    <CoinsContainer>
                        <HoverSaldo>{props.cost}</HoverSaldo>
                        <CoinHover src={CoinIcon}></CoinHover>
                    </CoinsContainer>
                    <RedeemButton onClick={() =>redeem(props._id, props.cost)}>Redeem now</RedeemButton>
                </HoverContainer>
            </MainContainerProduct>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openRedeemModal}
                onClose={ () => setOpenRedeemModal(false) }
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 0
                }}
            >
                <Fade in={openRedeemModal}>
                    <div className={classes.paper}>
                        <Title id="transition-modal-title">
                            {openRedeemModal
                                ? 'Congratulations!'
                                : 'Ops... something went wrong!'}
                        </Title>
                        <p id="transition-modal-description">
                            {openRedeemModal
                                ? "You've redeemed the product successfully"
                                : 'Please try again in a few minutes.'}
                        </p>
                    </div>
                </Fade>
           </Modal>
        </> 
    )
}