import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import CC from '../assets/CC-logo.png'
import CCN from '../assets/CC-name.png'
import './header.css'

const header = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

