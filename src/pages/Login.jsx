import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url("https://images.pexels.com/photos/12025241/pexels-photo-12025241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") ;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({width: "75%"})}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;


const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    margin-bottom: 10px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Link = styled.a`
    margin: 5px 0;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign in</Title>
            <Form>
                <Input placeholder="UserName"/>
                <Input placeholder="Password"/>
                <Button>Sign in</Button>
                <Link>Forgot your password?</Link>
                <Link>Create new account</Link>
            </Form>
        </Wrapper>  
    </Container>
  )
}

export default Login