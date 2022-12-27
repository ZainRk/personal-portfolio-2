import React from 'react'
import Experties from './components/Experties/Experties'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Work from './components/Work/Work'
import css from './styles/App.module.scss'
const App = () => {
  //don't forget to add font link in index.html
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header/>
      <Hero/>
      <Experties/>
      <Work/>
    </div>
  )
}

export default App