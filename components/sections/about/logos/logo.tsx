
import { cn } from '@/lib/utils'
import React, { SVGProps } from 'react'

export const Logo = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <svg
            viewBox="0 0 78 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('text-foreground h-5 w-auto', className)}>
            <path
                d="M10 15V3H13L16 9L19 3H22V15H19V7L16 12H13L10 7V15Z"
                fill={uniColor ? 'currentColor' : 'url(#logo-gradient)'}
            />
            
            <path
                d="M30 12c0-2.485 0-3.728.586-4.464S32.343 6.5 34.172 6.5s2.828 0 3.414.736S38 9.515 38 12s0 3.728-.586 4.464S36.343 17.5 34.514 17.5s-2.828 0-3.414-.736S30 14.485 30 12Z"
                fill={uniColor ? 'currentColor' : 'url(#logo-gradient)'}
            />
            <path
                d="m32.5 15 1.842-5.526a.694.694 0 0 1 1.316 0L37.5 15m-4-2h3m4-4v6"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.2"
                fill="none"
            />
            
            <defs>
                <linearGradient
                    id="logo-gradient"
                    x1="10"
                    y1="0"
                    x2="40"
                    y2="18"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9B99FE" />
                    <stop offset="0.5" stopColor="#2BC8B7" />
                    <stop offset="1" stopColor="#FF6B6B" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export const LogoIcon = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('size-5', className)}>
            <g fill="none" stroke={uniColor ? 'currentColor' : 'url(#logo-gradient)'} strokeLinejoin="round" strokeWidth="1.5">
                <path d="M4 12c0-3.771 0-5.657 1.172-6.828S8.229 4 12 4s5.657 0 6.828 1.172S20 8.229 20 12s0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12Z" />
                <path strokeLinecap="round" d="m7.5 15l1.842-5.526a.694.694 0 0 1 1.316 0L12.5 15m-4-2h3m4-4v6M8 2v2m8-2v2m-4-2v2M8 20v2m4-2v2m4-2v2m6-6h-2M4 8H2m2 8H2m2-4H2m20-4h-2m2 4h-2" />
            </g>
            <defs>
                <linearGradient
                    id="logo-gradient"
                    x1="4"
                    y1="4"
                    x2="20"
                    y2="20"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9B99FE" />
                    <stop offset="0.5" stopColor="#2BC8B7" />
                    <stop offset="1" stopColor="#FF6B6B" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export function HugeiconsArtificialIntelligence04(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
            <g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5">
                <path d="M4 12c0-3.771 0-5.657 1.172-6.828S8.229 4 12 4s5.657 0 6.828 1.172S20 8.229 20 12s0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12Z" />
                <path strokeLinecap="round" d="m7.5 15l1.842-5.526a.694.694 0 0 1 1.316 0L12.5 15m-4-2h3m4-4v6M8 2v2m8-2v2m-4-2v2M8 20v2m4-2v2m4-2v2m6-6h-2M4 8H2m2 8H2m2-4H2m20-4h-2m2 4h-2" />
            </g>
        </svg>
    )
}