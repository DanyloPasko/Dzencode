import React from 'react';
import '../../Pages/Coming/Coming.css'
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { NavigationMenu } from '../../components/Navigation_menu/Navigation_menu';

export function ComingPage () {
  
  
  return(
    <>
    <NavigationMenu />
    <section className='Content__page--coming'></section>
    </>
  )
}