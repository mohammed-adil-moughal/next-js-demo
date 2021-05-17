import styled from 'styled-components'

const SearchCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border: 1px solid #eaeaea;
  margin: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: end;
`;

const SearchContainer = styled.div`
  padding: 2px 16px;
`

const RedirectLink = styled.a`
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

const Card = ({ firstName, lastName, image, uuid }) => {
  const redirect = "/people/" + uuid;
  return (
    <SearchCard>
      <img src={image} />
      <SearchContainer>
        <p> {firstName} {lastName}</p>
        <RedirectLink href={redirect}>View more</RedirectLink>
      </SearchContainer>

    </SearchCard>

  )
}
export default Card 