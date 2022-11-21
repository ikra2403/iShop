import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Room,
    Twitter,
  }  from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
  import styled from "styled-components";
  import { mobile } from "../../responsive";
  
  const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1`
  color:#FF4858;`;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor:pointer;
    margin-right: 20px;
    &:hover{
        border:2px solid; 
    }
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
    font-size:28px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    
  `;
  
  const ListItem = styled.li`
    width: 50%;
    cursor:pointer;
    margin-bottom: 10px;
    &:hover{
        ${'' /* transform:scale(1.1); */}
        font-size:19px;
        text-decoration:underline;
    }
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>iSHOP.</Logo>
          <Desc>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly believable.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem><NavLink to='/'>Home</NavLink></ListItem>
            <ListItem><NavLink to='/Cart'>Cart</NavLink></ListItem>
            <ListItem><NavLink to='/ProductList'>iPhone</NavLink></ListItem>
            <ListItem><NavLink to='/ProductList'>Macbook</NavLink></ListItem>
            <ListItem><NavLink to='/ProductList'>iWatch</NavLink></ListItem>
            <ListItem><NavLink to='/ProductList'>iPod</NavLink></ListItem>            
            <ListItem><NavLink to='/ProductList'>Accessories</NavLink></ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem><NavLink to='/'>My Account</NavLink></ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +1 234 56 78
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> care@ishop.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;