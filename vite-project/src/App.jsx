/* eslint-disable react/prop-types */
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useState } from 'react';
// import Header from './Header';
import './index.css';
// import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { blog } from './data/blog';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// <FontAwesomeIcon icon={faWhatsapp}/>

// function BasicExample() {
//   return (
//     <div><Card style={{ width: '18rem' }}>
//       {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the cards content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//     <FontAwesomeIcon icon={faWhatsapp}/>


//     <div>
//        <Container>
//         <Row>
//           { blog.map ((v , i)=>{
//             return(
//               <Product pitems={v} key={i} />
//             )
//           }) }
        

//         </Row>
//       </Container>
//     </div>     
//   </div>
//   );
  
// }

// export default BasicExample;

// function Product({pitems}) {
//     return (
//         <Col lg = "3" md= "6" class="mb-4">
//   <div><Card style={{ width: '18rem' }}>
//       {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
//       <Card.Body>
//         <Card.Title>{pitems.title}</Card.Title>
//         <Card.Text>
//         {pitems.body}
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//     <FontAwesomeIcon icon={faWhatsapp}/>

//     </div>
//         </Col>
//     )
// }


// function App() {
//   let template ='';
//   let [count,setcount]=useState(1)
//   let [pshow,setPshow]=useState(false)

//   if(pshow){
//     template=<>
//     <button onClick={()=>setPshow(!pshow)}>Hide</button>
//    <p>Welcome to React</p>
//     </>
//   }
//   else{
//     template=<button onClick={()=>setPshow(!pshow)}>Show</button>
//   }

//   let displayData = () => {
//     setcount(count+1)

//     // alert("Hello World");
//   }
//   let addData = (a,b) => {
//     let c = a + b
//     alert(c)
//   }

//   return (

    
//     <div className='App'>
//       {/* <Button>Show</Button> */}
//       {template}
//       <br></br>
//       {count}
//       <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={displayData}>
//         Save </button>
//         <br></br>
//       <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={()=>addData(10,15)}>Sum</button>
//       <h1 className="text-3xl font-bold underline">Hello</h1>
//       <h1 className="text-3xl font-bold underline">Hello world!</h1>
//       <h2 className='text-3xl text-red-900'>James</h2>

//       <div className="App">
//         <img
//           width="100px"
//           height="100px"
//           src="https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png"
//           alt="Google Drive"
//         />
//         <Header />
//         <h1 className='text-3xl font-bold underline'>Hello world!</h1>
//       </div>
//     </div>
//   );
// }

// export default App;


function ternary(){  
  let [status, setStatus]=useState(false);
  return (
    <div className='App'>
      <Button onClick={()=>setStatus(!status)}>
      {(status) ? "Hide" : "Show"}
        </Button>
      { 
      (status) ?
      <p className='para'>Welcome to React</p>
      :
      ""
}
    </div>
  );
}
export default ternary;