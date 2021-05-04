import {useRouter} from 'next/router'
export default function People() {
    const router = useRouter()
    const {id} = router.query

    return <h1>Person {id}</h1>
}