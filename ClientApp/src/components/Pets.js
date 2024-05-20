import React, { useState, useEffect } from 'react';
import '../custom.css';

export default function Pets()
{
  const [petSum, setPets] = useState([]);

  //uses when things are changing
  useEffect(() => {
    fetch("api/pets")
      .then(r => r.json())
      .then(d => {
        console.log("the sum of pets age is: ", d);
        setPets(d);
      })
      .catch(e => console.log("the error fetching pets age: ", e));
  }, [petSum]);
  return  ( 
        <section className="sll-pets">
            <h1>All Pets</h1>
            <h1> petSum </h1>
        </section>
  )
    }