import styles from '../../styles/Home.module.css'

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
                <div className={styles.headerCard}>

                    <h1>On This page you will be able Sytem Basic and Address Info. </h1>
                </div>
                <div className={styles.headerCard}>
                    <div className={styles.card}>
                        <img className={styles.headerImage} src={user.picture.large} />
                        <div className={styles.container}>
                            <h2>Sytem Info</h2>
                            <p> Username: {user.login.username}</p>
                            <p> Password: {user.login.password}</p>
                            <p> Registered Date: {displayRegisteredDate}</p>
                            <p> Registered Age: {user.registered.age}</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.container}>
                            <h2>Basic information</h2>
                            <p> Name: {user.name.title} {user.name.first} {user.name.last}</p>
                            <p> Email: {user.email}</p>
                            <p> Phone: {user.phone}</p>
                            <p> Gender: {user.gender}</p>
                        </div>
                    </div>
                    <div className={styles.card}>

                        <div className={styles.container}>
                            <h2>Address information</h2>
                            <p> City: {user.location.city}</p>
                            <p> Country: {user.location.country}</p>
                            <p> Postcode: {user.location.postcode}</p>
                            <p> State: {user.location.state}</p>
                            <p> Street: {user.location.street.number} {user.location.street.name}</p>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else return "Loading State"
}
export default HumanPage 