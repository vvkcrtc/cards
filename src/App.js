import './App.css';
import React from 'react'


/*
  <div >

    <h5 >{props.title}</h5>
    <p>{props.text}</p>
    <a href="#" >{props.rf}</a>
  </div>
*/


function CardOne (props) {

  //console.log("props.children CardOne:",props.children)
  return ( 
  <div>
     {props.children}
   </div>
  )
}


/*  
<svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg><div class="card-body">
<h5 class="card-title">Card title</h5>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
*/


function CardTwo (props) {
 
  return (
    <div className="Card" >
     <div> 
     <svg class="SvgImg">
     <rect width="100%" height="100%" fill="#868e96">
     
     </rect>
     <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
      <img className="CardImgTop" src="..." alt="..."></img>
       </svg>
 <CardOne >
<div className="CardBody">
<h5 className="CardTitle">{props.title}</h5>
<p>{props.text}</p>
<a href="#" className="Btn BtnPrimary">{props.rf}</a>
</div>
</CardOne>



    
</div>
    </div>
  )

}


function App() {
  return (
    <div className="BdExample ">
      <CardTwo  title="Special title treatment" text="With supporting text below as a natural lead-in to additional content."
      rf="Go somewhere"      />
      <CardOne  title="Card title"
      text="Some quick example text to build on the card title and make up the bulk of the card's content."/>
          </div>
  );
}

export default App;
