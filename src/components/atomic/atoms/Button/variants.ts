import { tv } from 'tailwind-variants'

export const buttonVariant = tv({
  base: 'justify-center  items-center rounded-md  mt-3',
  defaultVariants: {
    color: 'primary',
    size: 'default'
  },
  variants: {
    color: {
      primary: 'bg-red-600',
      secondary: 'bg-blue-600'
    },
    size: {
      default: 'h-10',
      sm: 'h-8 px-3'
    }
  }
})
