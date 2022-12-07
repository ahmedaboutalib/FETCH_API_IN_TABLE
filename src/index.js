import { useEffect } from 'react';
import { useState }from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import React from 'react';


function Generate(){

  const [items,setItems]=useState([]) 
  
  const url="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

  useEffect(() => {

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        
          setItems(data.drinks)

        },
      )
   }, [])
   
  return items; 
  
}

function Work(){

  let data=Generate()
  

  return(
    <table border={"solide 10px"} >
      <thead>
        <th>ID</th>
        <th>LIBELLE</th>
      </thead>
      {
        data.map(elm=>{
          return(
            <tbody key={elm.idDrink} >
              <td>{elm.idDrink}</td>
              <td>{elm.strDrink}</td>
            </tbody>
          )
        })
      }




    </table>



  )




}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Work />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
