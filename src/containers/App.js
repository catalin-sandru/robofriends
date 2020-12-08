import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css'
import ErrorBoundary from '../components/ErorBoundary';
import { fetchRobots, setSearchField } from '../actions';


const mapStateToProps = state => ({
  searchField: state.searchRobots.searchField,
  robots: state.fetchRobots.robots,
  isPending: state.fetchRobots.isPending,
  error: state.fetchRobots.error
})

const mapDispachToProps = dispach => ({
  onSearchChange: (event) => dispach(setSearchField(event.target.value)),
  onFetchRobots: () => dispach(fetchRobots())
})


const App = ( {searchField, onSearchChange, onFetchRobots, robots, isPending} ) => {

  useEffect(() => {
    onFetchRobots()
    }, [])
    
  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })

  return isPending ? 
    <h1>Loading...</h1> : 
    (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange}/>
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots}/>
        </ErrorBoundary>
      </Scroll>
    </div>
  )
}



export default connect(mapStateToProps, mapDispachToProps)(App);