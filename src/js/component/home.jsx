
import React from "react"; 
import Navbar from "./navbar.jsx"; 
import Welcome from "./welcome.jsx"; 
import Card from "./card.jsx";
  
//create your first component 
const Home = () => { 
 return ( 
   <> 
    <Navbar></Navbar> 
	<div class= "container">
		<div class="row">
         <Welcome></Welcome> </div>
	     <div class="row">
			<Card></Card></div>
	</div>
    
   </> 
 ); 
}; 
 
export default Home;