import React, { Component } from 'react'
import './App.scss'
import { Route, Routes } from 'react-router'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Pages/Home/Home'
import List from './components/Pages/List/List'
import Article from './components/Pages/Article/Article'
import Contact from './components/Pages/Contact/Contact';

export default class App extends Component {

  constructor() {
    super()
    this.state = {}
  }


  render() {
    return (
      <div >
        <Header />

        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='list' element={<List />} />
          <Route path='article' element={<Article />} />
          <Route path='contact' element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    )
  }
}
