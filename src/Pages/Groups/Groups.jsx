import React from 'react';
import '../../Pages/Groups/Groups.css'
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { NavigationMenu } from '../../components/Navigation_menu/Navigation_menu';
import { Topmenu } from '../../components/Top_menu/Top_menu';

export function GroupPage() {


  return (
    <>
    <NavigationMenu />
    <section className='Content__page--groups'></section>
    </>
  )
}