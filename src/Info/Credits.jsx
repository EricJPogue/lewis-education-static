
import React from 'react';
import { NavLink } from "react-router-dom";

class Credits extends React.Component {
	render() {
		return ( <div>
			<h4>Lewis.education</h4>
			<h5>Developed by <NavLink to="/info">Eric Pogue</NavLink></h5>

			<pre>{`

			The MIT License

			Copyright (c) 2024 Eric Pogue

			Permission is hereby granted, free of charge, 
			to any person obtaining a copy of this software and 
			associated documentation files (the "Software"), to 
			deal in the Software without restriction, including 
			without limitation the rights to use, copy, modify, 
			merge, publish, distribute, sublicense, and/or sell 
			copies of the Software, and to permit persons to whom 
			the Software is furnished to do so, 
			subject to the following conditions:

			The above copyright notice and this permission notice 
			shall be included in all copies or substantial portions of the Software.

			THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
			EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES 
			OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
			IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR 
			ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, 
			TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
			SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
			`}</pre>
	</div> );
	}
}

export { Credits }
