import styled from 'styled-components'

const ContainerCard = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border: 1px solid #eaeaea;
    margin: 1rem;
    padding: 1rem;
    display: flex;
`;

const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 30%;
    border: 1px solid #eaeaea;
    margin: 1rem;
    padding: 1rem;
    display: flex;
    justify-content: end;
`
const CardInfo = styled.div`
    padding: 2px 16px;
`
const CardImage = styled.img`
    height: 100%;
`
const HumanPage = ({ user }) => {
    if (user) {
        const registeredDate = new Date(user.registered.date);
        const dateTimeFormat = new Intl.DateTimeFormat('en', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        const displayRegisteredDate = dateTimeFormat.format(registeredDate)
        return (
            <div>
                <ContainerCard>
                    <h1>On This page you will be able Sytem Basic and Address Info. </h1>
                </ContainerCard>
                <ContainerCard>
                    <Card>
                        <CardImage src={user.picture.large} />
                        <CardInfo>
                            <h2>Sytem Info</h2>
                            <p> Username: {user.login.username}</p>
                            <p> Password: {user.login.password}</p>
                            <p> Registered Date: {displayRegisteredDate}</p>
                            <p> Registered Age: {user.registered.age}</p>
                        </CardInfo>
                    </Card>
                    <Card>
                        <CardInfo>
                            <h2>Basic information</h2>
                            <p> Name: {user.name.title} {user.name.first} {user.name.last}</p>
                            <p> Email: {user.email}</p>
                            <p> Phone: {user.phone}</p>
                            <p> Gender: {user.gender}</p>
                        </CardInfo>
                    </Card>
                    <Card>
                        <CardInfo>
                            <h2>Address information</h2>
                            <p> City: {user.location.city}</p>
                            <p> Country: {user.location.country}</p>
                            <p> Postcode: {user.location.postcode}</p>
                            <p> State: {user.location.state}</p>
                            <p> Street: {user.location.street.number} {user.location.street.name}</p>

                        </CardInfo>
                    </Card>
                </ContainerCard>
            </div>
        )
    }
    else return "Loading State"
}
export default HumanPage 