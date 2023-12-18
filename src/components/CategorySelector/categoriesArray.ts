import { ElementType } from 'react'

import {
  BusFront,
  ChefHat,
  Home,
  LibraryBig,
  MoreHorizontal,
  RollerCoaster,
  ShoppingBag,
  Syringe,
} from 'lucide-react'

type Categories = {
  name: string
  icon: ElementType
}

export const categories: Categories[] = [
  {
    name: 'Other',
    icon: MoreHorizontal,
  },
  {
    name: 'Food',
    icon: ChefHat,
  },
  {
    name: 'Healthcare',
    icon: Syringe,
  },
  {
    name: 'Education',
    icon: LibraryBig,
  },
  {
    name: 'Household',
    icon: Home,
  },
  {
    name: 'Transport',
    icon: BusFront,
  },
  {
    name: 'Entertainment',
    icon: RollerCoaster,
  },
  {
    name: 'Shopping',
    icon: ShoppingBag,
  },
]
