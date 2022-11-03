import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  position: absolute;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  row-gap: 5px;
  top: 105%;
  width: 180px;
  height: 220px;
  border-radius: 10px;
  border: 1px solid green;
  background-color: white;
  box-shadow: grey 0px 0px 5px;
  color: hsl(210, 8%, 35%);
  margin-right: 80px;
  p {
    display: block;
    color: hsl(210, 8%, 45%);
  }
`;

export const UImg = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 30px;
  background-color: hsl(210, 8%, 85%);
`;

export const UName = styled.div`
  font-weight: bold;
  display: block;
  font-size: 1.17em;
`;

export const Logoutbutton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  padding: 2px 9px;
  font-size: 0.85rem;
  color: white;
  background-color: hsl(206, 85%, 57.5%);
  width: max-content;
  height: 32px;
  cursor: pointer;
`;

export const Card = () => {
  // let { email } = useSelector((state) => state.userReducer);
  return (
    <Box>
      <UImg />
      <UName>nickname</UName>
      {/* <p>{email}</p> */}
      <p>nickname@gmail.com</p>
      <Logoutbutton>Log out</Logoutbutton>
    </Box>
  );
};
