import { atom } from 'jotai'
import type { FormattedDrink } from '@/types'

export const searchQueryAtom = atom('')

export const searchResultsAtom = atom<FormattedDrink[]>([])

export const localUrlAtom = atom('')