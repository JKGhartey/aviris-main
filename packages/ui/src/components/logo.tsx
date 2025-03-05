"use client";

import * as React from "react";

import Link from "next/link";
import { cn } from "../lib/utils";
import { useTheme } from "next-themes";

interface LogoProps {
  variant?: "logo" | "full";
  color?: "black" | "white";
  size?: "sm" | "md" | "lg" | "xl";
  label?: string;
  className?: string;
  iconClassName?: string;
}

const sizeClasses = {
  sm: "h-8",
  md: "h-10",
  lg: "h-12",
  xl: "h-16",
} as const;

const textSizeClasses = {
  sm: "text-base",
  md: "text-lg",
  lg: "text-xl",
  xl: "text-2xl",
} as const;

export function Logo({
  variant = "logo",
  color,
  size = "md",
  label = "Aviris",
  className,
  iconClassName,
}: LogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={cn("invisible", className)} />;
  }

  // Determine color based on theme if not explicitly set
  const currentColor = color ?? (resolvedTheme === "dark" ? "white" : "black");

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {variant === "logo" ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
            fill={currentColor}
            className={cn(sizeClasses[size], "aspect-square", iconClassName)}
          >
            <g
              transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
              stroke={currentColor}
            >
              <path d="M2510 3472 l0 -268 117 -94 c203 -163 431 -367 651 -584 127 -126 209 -200 203 -185 -17 46 -101 209 -179 349 -130 233 -318 514 -476 710 -94 117 -262 303 -295 326 l-21 15 0 -269z" />
              <path d="M2362 3598 c-76 -200 -180 -570 -252 -893 -70 -312 -148 -740 -137 -751 6 -6 419 230 443 253 10 11 13 161 11 768 -1 415 -4 755 -8 755 -3 0 -29 -60 -57 -132z" />
              <path d="M2093 3063 c-261 -399 -470 -832 -600 -1243 -49 -154 -56 -180 -45 -180 5 0 68 35 140 78 71 42 173 102 226 132 106 61 94 42 117 190 50 322 154 796 238 1084 12 38 19 71 17 73 -2 2 -44 -58 -93 -134z" />
              <path d="M2514 2959 c2 -96 5 -215 5 -265 l1 -91 153 -88 c83 -49 265 -154 402 -233 138 -80 365 -211 505 -293 140 -81 256 -146 258 -144 9 8 -151 197 -299 354 -258 275 -548 545 -877 820 -68 56 -130 105 -138 108 -13 5 -14 -20 -10 -168z" />
              <path d="M2420 2102 c-678 -389 -930 -536 -925 -540 9 -10 341 55 550 108 224 56 297 77 630 182 128 41 445 151 574 200 21 8 22 11 10 22 -12 12 -220 132 -394 227 l-50 28 -395 -227z" />
              <path d="M3160 1968 c-295 -113 -635 -221 -970 -307 -87 -22 -110 -32 -95 -38 11 -4 216 -8 455 -8 387 1 454 3 611 23 263 32 629 108 629 130 0 11 -445 262 -461 261 -8 0 -84 -28 -169 -61z" />
            </g>
          </svg>
          {label && (
            <span
              className={cn(
                textSizeClasses[size],
                "font-bold",
                currentColor === "white" ? "text-white" : "text-black",
              )}
            >
              {label}
            </span>
          )}
        </>
      ) : (
        // Full logo with name
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 300"
          fill={currentColor}
          className={cn(sizeClasses[size], "w-auto", iconClassName)}
        >
          <g
            transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
            stroke="none"
          >
            <path d="M2423 3745 c-37 -65 -147 -391 -212 -627 -43 -158 -126 -515 -161 -693 -28 -138 -89 -489 -86 -492 1 -1 107 60 236 135 l235 137 3 730 c1 402 1 753 0 780 -3 44 -4 47 -15 30z" />
            <path d="M2510 3477 l0 -274 149 -122 c215 -175 416 -357 649 -585 111 -109 202 -196 202 -192 0 18 -189 378 -264 504 -83 138 -196 311 -269 412 -129 175 -369 457 -431 504 l-36 27 0 -274z" />
            <path d="M2103 3078 c-215 -328 -366 -614 -496 -933 -77 -189 -176 -499 -163 -512 2 -3 87 43 188 103 101 59 206 121 235 137 49 29 52 33 58 81 38 280 169 886 254 1171 16 55 28 101 27 103 -2 1 -48 -66 -103 -150z" />
            <path d="M2515 2873 c5 -180 11 -272 19 -279 6 -6 182 -109 391 -229 419 -241 862 -496 913 -527 17 -11 32 -17 32 -14 0 7 -115 152 -189 236 -108 124 -385 402 -580 582 -204 188 -566 498 -582 498 -7 0 -8 -86 -4 -267z" />
            <path d="M2785 2316 c-11 -7 -202 -118 -425 -246 -223 -129 -499 -288 -615 -355 -115 -67 -225 -130 -243 -139 -19 -10 -32 -19 -30 -21 5 -6 230 29 353 55 245 51 663 169 1000 283 214 73 448 158 458 167 9 8 -443 270 -464 269 -8 0 -23 -6 -34 -13z" />
            <path d="M3195 1984 c-303 -118 -778 -268 -1054 -333 -46 -11 -85 -22 -88 -25 -22 -22 763 -28 977 -8 275 27 715 106 775 139 11 6 -51 46 -225 146 -132 75 -241 137 -242 136 -2 0 -66 -25 -143 -55z" />
          </g>
        </svg>
      )}
    </div>
  );
}
