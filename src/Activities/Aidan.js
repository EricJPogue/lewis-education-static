import React from 'react';
import { NavLink } from 'react-router-dom';

import { unrealEngine, unity, revit } from '../DataAndAPIs/Links';

import AidanFlyer from './AidanFlyer.png'

const name = 'Aidan Interactive Rendering'
export const AIDAN_ROUTE = 'aidan'
const aidanInternalURL = '/activity/aidan'
export const aidanLink = () => {return (<NavLink to={aidanInternalURL}>{name}</NavLink>)}

export const aidan = () => { return ( <div>

<br />
<h4>{name}</h4>
<h5>Summary: Aidan is a Interactive Rendering application that utilizes Game Engine technology to provide real-time
walkthrough capabilities to {revit()} models.</h5>
<h5>Prerequisites: Interest in Game development with {unrealEngine()} or {unity()}</h5>

<br />
<p><em>The Aidan product is a remake of Stadia:</em></p>
<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
<img src={AidanFlyer} alt='Aidan Flyer' width= '925'/>
</div>

<br />
<p>The initial efforts in the development of Aidan will be recreating the client application so that it can read
and display specifically formatted binary architectural drawing files as Interactive Renderings in {unrealEngine()} 
(preferred) or {unity()}.</p>

<p>Alternatively, if you have an interest in Computer Aided Drafting (CAD) and Building Information Modeling (BIM) like
{revit()}, then it would be possible start work on the product’s {revit()} export functionality and Internet hosting 
capabilities.</p>

</div> ) }
