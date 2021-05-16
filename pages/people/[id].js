import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../redux/ducks/user'
import HumanPage from '../../components/humanPage';
const Human = () => {
    const router = useRouter()
    const { id } = router.query
    const users = useSelector(state => state.user.users.results)
    const dispatch = useDispatch()
    useEffect(() => { dispatch(getUsers()) }, [])
    if (users) {
        const user = filterUser(id, users)[0];
        return (
            <div >
                <HumanPage
                    user={user}
                />
            </div>
        )
    } else {
        return "Loading State"
    }

}

const filterUser = (uuid, list) => {
    return list.filter(function search(user) {
        if (uuid === user.login.uuid) {
            return user;
        }
    })
}
export default Human;
