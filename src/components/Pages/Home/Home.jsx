import React from 'react'
import HomeNews from './HomeNews/HomeNews'
import MainStart from '../../Main/MainStart/MainStart'
import Container from '../../../Container'
import MainPolicy from '../../Main/MainPolicy/MainPolicy'
import HomeList from './HomeBtnBox/HomeList'
import HomeEnd from './HomeEnd/HomeEnd'

export default function Home() {
  return (
    <Container>
      <MainStart />
      <HomeNews />
      <HomeList />
      <MainPolicy />
      <HomeEnd />
    </Container>
  )
}
