import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './style.scss'
import Responsive from '../../components/Responsive'

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <h1>React Redux Starter Kit</h1>
    <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>
    {' · '}
    <Link to='/test' activeClassName='page-layout__nav-item--active'>Test(require loged)</Link>
    {' · '}
    <Link to='/another' activeClassName='page-layout__nav-item--active'>Another(not found)</Link>
    <div className='page-layout__viewport'>
      {children}
    </div>
    <Responsive 
      small={<div>Responsive small (>166px)</div>} 
      medium={<div>Responsive medium (>768px)</div>} 
      large={<div>Responsive large (>992px)</div>}
      />
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
