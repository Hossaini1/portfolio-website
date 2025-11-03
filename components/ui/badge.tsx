import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        // Technology colors with original brand colors
        html: "border-transparent bg-[#E34F26] text-white [a&]:hover:bg-[#E34F26]/90",
        css: "border-transparent bg-[#1572B6] text-white [a&]:hover:bg-[#1572B6]/90",
        javascript:
          "border-transparent bg-[#F7DF1E] text-black [a&]:hover:bg-[#F7DF1E]/90",
        typescript:
          "border-transparent bg-[#3178C6] text-white [a&]:hover:bg-[#3178C6]/90",
        react:
          "border-transparent bg-[#61DAFB] text-black [a&]:hover:bg-[#61DAFB]/90",
        nextjs:
          "border-transparent bg-black text-white dark:bg-white dark:text-black [a&]:hover:bg-black/90 dark:[a&]:hover:bg-white/90",
        tailwind:
          "border-transparent bg-[#06B6D4] text-white [a&]:hover:bg-[#06B6D4]/90",
        vue: "border-transparent bg-[#4FC08D] text-white [a&]:hover:bg-[#4FC08D]/90",
        api: "border-transparent bg-[#FF6B6B] text-white [a&]:hover:bg-[#FF6B6B]/90",
        multilanguage:
          "border-transparent bg-[#667EEA] text-white [a&]:hover:bg-[#667EEA]/90",
        sass: "border-transparent bg-[#CC6699] text-white [a&]:hover:bg-[#CC6699]/90",
        vite: "border-transparent bg-[#646CFF] text-white [a&]:hover:bg-[#646CFF]/90",
        laravel: "border-transparent bg-[#FF2D20] text-white [a&]:hover:bg-[#FF2D20]/90",
        php: "border-transparent bg-[#777BB4] text-white [a&]:hover:bg-[#777BB4]/90",
        alpine: "border-transparent bg-[#8BC0D0] text-black [a&]:hover:bg-[#8BC0D0]/90"
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
