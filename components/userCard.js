import styled from 'styled-components'

const UserCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 30%;
  border: 1px solid #eaeaea;
  margin: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: end;
`;

const UserContainer = styled.div`
  padding: 2px 16px;
`

const ViewMore = styled.a`
  background-color: #325fb3;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 2px 2px;
`

const Card = ({ firstName, lastName, image, email, uuid }) => {
  const redirect = "/people/" + uuid;
  return (
    <UserCard>
      <img src={image} />
      <UserContainer>
        <p> Name: {firstName} {lastName}</p>
        <p> Email: {email}</p>
        <ViewMore href={redirect}>View more</ViewMore>
      </UserContainer>

    </UserCard>

  )
}
export default Card 