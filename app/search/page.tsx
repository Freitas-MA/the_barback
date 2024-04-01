import React from 'react'
import { useAtom } from 'jotai'
import { searchQueryAtom, searchResultsAtom, localUrlAtom } from '@/components/atoms'
import SearchResults from '@/components/searchBar/searchRender'

export default async function Search() {
  return (
    <SearchResults/>
  )
}
