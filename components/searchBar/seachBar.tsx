"use client"
import {useState, useEffect, useMemo} from 'react'

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("")
    const [cocktail, setCocktail]  = useState("")
    const [cocktailRecipe, setCocktailRecipe]  = useState("")

    const fetchCocktail = async () => {
      try {
        const cocktailData = await fetch(`www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        const fetchedCocktail = await cocktailData.json()
        setCocktail(fetchedCocktail)
      } catch (error) {
        console.log(error)
      }
        }

        useEffect(() => {
          if(searchTerm.length > 2) {
            fetchCocktail()
          }
        }, [searchTerm])

        return (
          <div className='w-full min-w-[100%] mt-12 border border-blue-500 px-2'>
            <input
            className='bg bg-white-400 border border-gray-400 m-1'
            type="text" name="searchCocktail" id="searchInput" onChange={e => setSearchTerm(e.target.value)} />
            {searchTerm ? (<span>SearchName: {searchTerm}</span>) : "Search your cocktail"}
          </div>
        )
      }
