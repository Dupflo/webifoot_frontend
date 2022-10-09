import React, { Dispatch, ReactElement, ReactNode, SetStateAction } from 'react'

import Link from 'next/link'

import { cn } from '@utils/class-names'

enum Variant {
  PRIMARY,
  SECONDARY,
  LIGHT,
}
enum Size {
  SMALL,
  NORMAL,
  BIG,
}
enum Align {
  LEFT,
  RIGHT,
  CENTER,
}

enum Width {
  FULL,
  AUTO,
}

interface Props {
  id?: string
  variant?: Variant
  children?: ReactNode
  size?: Size
  width?: Width
  disabled?: boolean
  onClick?: Dispatch<SetStateAction<any>>
  uppercase?: boolean
  loading?: boolean
  ariaLabel: string
}

const SIZE_MAPS: Record<Size, string> = {
  [Size.SMALL]: 'px-6 py-2 md:py-2 md:px-4 text-sm',
  [Size.NORMAL]: 'px-8 py-3 md:py-3 md:px-4 text-sm',
  [Size.BIG]: 'uppercase text-sm md:text-base tracking-wider',
}

const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.PRIMARY]: 'bg-primary hover:bg-secondary text-light hover:text-white',
  [Variant.SECONDARY]: 'bg-secondary hover:bg-light text-white hover:text-secondary',
  [Variant.LIGHT]: 'bg-light text-dark',
}

const WIDTH_MAPS: Record<Width, string> = {
  [Width.FULL]: 'block w-full',
  [Width.AUTO]: '',
}

export function Button(props: Props): ReactElement {
  const { id, children, variant, size, width, disabled, loading, onClick, uppercase, ariaLabel } = props

  const renderButton = (
    <button
      id={id}
      className={cn(
        'flex items-center justify-center rounded-lg border border-transparent text-base md:text-md transform ease-in-out hover:duration-500',
        VARIANT_MAPS[variant!],
        SIZE_MAPS[size!],
        WIDTH_MAPS[width!],
        uppercase && 'uppercase'
      )}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {loading && (
        <div className="relative flex justify-center">
          <svg className="absolute mx-auto -mt-0.5 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        </div>
      )}
      {children}
    </button>
  )

  return renderButton
}
Button.defaultProps = {
  variant: Variant.PRIMARY,
  size: Size.NORMAL,
}
Button.variant = Variant
Button.size = Size
Button.width = Width
