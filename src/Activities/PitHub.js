import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeInternalURL } from './ActivityRouter';

const NAME = 'PitHub Video Management'
export const PIT_HUB_ROUTE = 'pit-hub'
export const pitHubLink = () => {return (<NavLink to={makeInternalURL(PIT_HUB_ROUTE)}>{NAME}</NavLink>)}
export const pitHub = () => { return ( <div>

<br />
<h4>{NAME}</h4>
<h5>Summary: Create and enhance the PitHub video sharing service</h5>
<h5>Prerequisites: HTML, CSS, JavaScript, Go or Rust, and Azure or Google cloud provider</h5>
			
<p>In this project you will create and enhance a video sharing service by utilizing Microsoft Azure and possibly 
Google or Amazon to publish and manage videos within their cloud based content delivery networks.</p>

<p>With Web and command-line clients (developed in Go and possibly Rust) PitHub users will be able to store videos 
with the ease that they manage source code with GitHub and Git. In addition, PitHub users will be able manage and 
publish their video libraries effortlessly (well with very little effort in any event).</p>

</div> ) }