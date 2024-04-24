import {type VariantProps, cva} from 'class-variance-authority'

export {default as Button} from './Button.vue'

export const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-slate-300',
    {
      variants: {
        variant: {
          default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
          destructive:
              'bg-destructive text-destructive-foreground shadow-sw hover:bg-destructive/90',
          outline:
              'border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground',
          secondary:
              'bg-secondary text-secondary-foreground shadow-sm hover:bg-gray-700',
          ghost: 'hover:bg-accent hover:text-accent-foreground',
          link: 'text-primary underline-offset-4 hover:underline',
        },
        size: {
          default: 'h-9 px-4 py-2',
          sm: 'h-8 rounded-md px-3 text-xs',
          lg: 'h-10 rounded-md px-8',
          icon: 'h-9 w-9',
        },
      },
      defaultVariants: {
        variant: 'secondary',
        size: 'default',
      },
    },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
