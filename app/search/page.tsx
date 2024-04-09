import React from 'react'
import { useAtom } from 'jotai'
import { searchQueryAtom, searchResultsAtom, localUrlAtom } from '@/components/atoms'
import SearchResults from '@/app/search/[id]/page'

export default async function Search() {
  return (

    <div>
      <span>Teste id: </span>
      <SearchResults/>
      </div>
  )
}
