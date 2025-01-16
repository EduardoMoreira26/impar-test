import { SVGAttributes } from 'react'

import IconCard from './assets/icone.svg'
import SearchIcon from './assets/lupa.svg'
import IconTrash from './assets/Icon-trash.svg'
import IconEdit from './assets/Icon-edit.svg'
import IconCreate from './assets/icone_criar.svg'
import Logo from './assets/logo.svg'

export const icons = {
  IconCard,
  SearchIcon,
  IconTrash,
  IconEdit,
  IconCreate,
  Logo,
}

type IconPropsExtended = SVGAttributes<SVGElement>

export type IconType = keyof typeof icons

export interface IconProps extends IconPropsExtended {
  type: IconType
}

export function Icon({ type, ...props }: IconProps) {
  const IconComponent = icons[type]
  return IconComponent ? <IconComponent {...props} /> : null
}
