
import React from 'react';

export const ExampleCode = () => {
	return (
	
<div>
<h4>Example Code</h4>
<h5>Summary: Download, update, and review our class sample code using Git</h5>
<h5>Prerequisites: command line Git </h5>

<p>In order to download our class sample code, we will be utilizing the command line Git tool. To 
download a copy of our class sample code, open up a terminal session, create a new folder where you would like to store
our class sample code, move into that folder, and execute the following Git command:</p>
<pre>     git clone --depth=1 https://github.com/EricJPogue/cpsc-example-code.git</pre><br />

<p>Since we will be updating our sample code regularly periodically throughout the class, you will want to refresh your 
copy of the code regularly by moving into the folder you created and executing the following Git command:</p>
<pre>     git pull --depth=1 https://github.com/EricJPogue/cpsc-example-code.git</pre><br />

<p>Be sure to never modify the code in your copy of the sample code. If you modify the code, Git will not allow it to 
be updated in fear of overwriting your changes. Instead, if you want to modify the code, always copy the code you want 
to modify to a separate folder.</p>

<p>Finally, take a few minutes and review the various source code that is in our class example code.</p>
</div> )
}