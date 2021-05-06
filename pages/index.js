import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../components/card'
import { increment } from '../redux/ducks/counter'
import { getUsers } from '../redux/ducks/user'
import styles from '../styles/Home.module.css'

const Home = () => {
  
  const count = useSelector(state => state.counter.count)

  const states = useSelector(state => state.users)
  console.log(states)
  const dispatch = useDispatch()
  useEffect(()=>{ dispatch(getUsers())},[])
  const handleIncrement = () => {
    dispatch(increment())
  }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to our list of {count} people
        </h1>
        <button onClick={handleIncrement}>increase </button>

        <p className={styles.description}>
          Our list of People
        </p>

        <div className={styles.grid}>
          <Card firstName="adil" lastName="afl" image="https://www.fakepersongenerator.com/Face/male/male108563129023.jpg"></Card>
          <Card firstName="adil" lastName="afl" image="https://www.fakepersongenerator.com/Face/male/male108563129023.jpg"></Card>
          <Card firstName="adil" lastName="afl" image="https://www.fakepersongenerator.com/Face/male/male108563129023.jpg"></Card>
          <Card firstName="adil" lastName="afl" image="https://www.fakepersongenerator.com/Face/male/male108563129023.jpg"></Card>
          <Card firstName="adil" lastName="afl" image="https://www.fakepersongenerator.com/Face/male/male108563129023.jpg"></Card>
          <Card firstName="adil" lastName="afl" image="https://www.fakepersongenerator.com/Face/male/male108563129023.jpg"></Card>

        </div>
      </main>
    </div>
  )
}
export default Home;