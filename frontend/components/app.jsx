import React from 'react'
import { Route, Redirect, Routes, Link, HashRouter } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import HeaderContainer from './header/header_container'
import HomeContainer from './home/home_container'
import Modal from './modal/modal_container'
import StoryFormContainer from './story/create_story_form_container'
import StoriesIndexContainer from './story/stories_index_container'
import StoryShowContainer from './story/story_show_container'

const App = () => {
  return(
  <div id='app'>
    <header className='app-header'>
      <h2 className='logo'>Mediyum</h2>
      <AuthRoute exact path='/' component={HeaderContainer}/>
      <Route path='/feed' component={HeaderContainer}/>
    </header>
    <div className='app-body'>
      <ProtectedRoute exact path='/feed' component={HomeContainer}/>
      <ProtectedRoute exact path='/stories/new' component={StoryFormContainer}/>
      <ProtectedRoute exact path='/stories/:storyId' component={StoryShowContainer}/>
    </div>
    <Modal />
  </div>
  )
}

export default App