import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const recipes = [
    {
      image: "biryanii.png",
      country: "Pakistan",
      Dishname: "Biryani",
      Description: "Biryani in Pakistan is a spicier and more flavorful version, often made with chicken, mutton, or beef and served with raita.",
    },
    {
      image: "pizza.png",
      country: "Italy",
      Dishname: "Pizza",
      Description: "Pizza is an Italian dish consisting of a flatbread topped with tomatoes, cheese, and various other ingredients.",
    },
    {
      image: "sushi.png",
      country: "Japan",
      Dishname: "Sushi",
      Description: "Sushi is a Japanese dish consisting of vinegared rice, seafood, and sometimes vegetables.",
    },
    {
      image: "croissant.png",
      country: "France",
      Dishname: "Croissant",
      Description: "Croissant is a buttery, flaky, and delicious pastry that is a popular breakfast item in France.",
    },
    {
      image: "tacos.png",
      country: "Mexico",
      Dishname: "Tacos",
      Description: "Tacos are Mexican dishes consisting of a tortilla filled with a variety of ingredients, such as meat, beans, cheese, and salsa.",
    },
    {
      image: "baklava.png",
      country: "Turkey",
      Dishname: "Baklava",
      Description: "Baklava is a sweet pastry made of layers of filo dough, filled with chopped nuts and sweetened with syrup or honey.",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-red-100 py-10 px-6">

      <h1 className="text-4xl font-bold mb-10 text-center text-red-800">Famous Dishes Around the World</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {recipes.map((recipe) => (

          <div className="bg-white rounded-xl p-5 hover:shadow-xl">

            <img src={recipe.image} alt={recipe.Dishname} className="w-full h-40 object-cover rounded-md mb-4" />

            <h2 className="text-2xl font-semibold text-red-700 ">{recipe.Dishname}</h2>

            <h4 className="text-md text-gray-600  mt-2"> Country: <span className="text-black font-medium">{recipe.country}</span>  </h4>

            <p className="italic mt-3 text-l text-gray-700 text-center">{recipe.Description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

