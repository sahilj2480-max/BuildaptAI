import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export const Logo: React.FC<LogoProps> = ({ className = "", variant = 'dark' }) => {
  const textColor = variant === 'light' 
    ? 'text-white group-hover:text-brand-100' 
    : 'text-navy-950 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400';
  
  const highlightColor = 'text-brand-600 dark:text-brand-500 group-hover:text-brand-500 dark:group-hover:text-brand-400';

  // Innovative Box Styles
  // Removed borders. Using gradients and soft shadows for definition.
  const boxStyles = variant === 'light'
    ? 'bg-navy-800 ring-1 ring-white/10' // Footer style
    : 'bg-gradient-to-br from-white to-brand-50 dark:from-navy-800 dark:to-navy-950 shadow-lg shadow-brand-500/10 dark:shadow-black/40 ring-1 ring-black/5 dark:ring-white/10';

  // Path Colors
  const path1Class = "fill-[rgba(35,158,233,1)]"; 
  const path2Class = variant === 'light' 
    ? "fill-white" 
    : "fill-[rgba(18,40,95,1)] dark:fill-white";

  return (
    <Link to="/" className={`flex items-center gap-3 group ${className}`}>
      {/* 
         Rectangular Box Container 
         - Size: w-12 h-12 (standard icon size, but logo inside is now zoomed)
      */}
      <div className={`
        relative w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl 
        transition-all duration-300 ease-out
        group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-brand-500/20
        ${boxStyles}
      `}>
        {/* 
           Inner SVG Wrapper
           - Adjusted viewBox to "260 280 560 360" to crop whitespace and maximize the BA logo size.
        */}
        <div className="w-full h-full p-2 transition-transform duration-500 ease-out group-hover:rotate-3">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="260 280 560 360" 
                className="w-full h-full drop-shadow-sm"
                preserveAspectRatio="xMidYMid meet"
            >
                <g>
                    {/* The Light Blue Curve */}
                    <path 
                        className={path1Class}
                        d="M 272.00 634.10 C272.00,632.69 288.66,619.68 325.88,592.00 C328.47,590.08 334.47,585.47 339.22,581.76 L 347.84 575.02 L 407.09 574.76 L 466.35 574.50 L 471.25 566.00 C473.95,561.33 481.14,548.72 487.23,538.00 C493.32,527.28 503.86,508.74 510.65,496.81 C517.44,484.88 523.00,474.87 523.00,474.57 C523.00,474.26 493.19,473.90 456.75,473.76 L 390.50 473.50 L 390.23 445.75 L 389.97 418.00 L 422.52 418.00 C451.47,418.00 455.13,417.82 455.68,416.39 C456.56,414.09 484.55,363.84 489.18,356.25 L 491.16 353.00 L 336.00 353.00 L 335.99 448.25 L 335.98 543.50 L 302.24 570.34 L 268.50 597.18 L 267.50 291.50 L 274.00 290.96 C274.53,290.92 276.57,290.87 279.92,290.83 C276.55,290.89 274.34,290.96 273.50,291.03 C273.40,291.04 273.35,291.05 273.35,291.06 C273.35,291.39 340.54,291.73 425.81,291.82 C523.62,291.93 578.57,291.69 584.06,291.13 C584.74,291.21 585.12,291.31 585.26,291.41 C586.91,292.65 586.73,293.27 582.64,300.62 C574.91,314.52 535.97,384.20 531.02,393.00 C521.06,410.70 518.02,416.69 518.67,417.33 C519.03,417.70 527.06,418.00 536.51,418.00 C551.64,418.00 553.87,417.79 555.17,416.25 C557.47,413.54 568.33,393.77 568.33,392.31 C568.33,391.59 568.64,391.00 569.02,391.00 C569.67,391.00 578.14,376.49 594.71,347.00 C598.57,340.12 605.54,327.75 610.19,319.50 C614.85,311.25 620.33,301.46 622.37,297.75 C624.42,294.04 626.41,291.01 626.80,291.03 C627.18,291.05 630.22,296.11 633.55,302.28 C636.88,308.45 648.39,329.48 659.13,349.00 C669.87,368.52 684.19,394.85 690.97,407.50 C705.07,433.85 729.84,479.62 746.97,511.00 C764.32,542.76 764.96,543.95 788.87,589.25 C800.99,612.21 811.04,631.78 811.21,632.75 C811.48,634.39 809.31,634.50 776.61,634.50 C746.63,634.50 741.60,634.29 740.90,633.00 C740.45,632.17 738.10,627.90 735.68,623.50 C733.26,619.10 727.67,608.75 723.26,600.50 C718.85,592.25 710.98,577.62 705.76,568.00 C700.55,558.38 693.91,546.00 691.02,540.50 C688.12,535.00 685.42,530.05 685.01,529.50 C684.60,528.95 682.18,524.56 679.63,519.75 C669.21,500.07 665.84,493.72 656.92,477.00 C651.78,467.38 643.03,450.98 637.48,440.56 C631.92,430.15 626.95,421.50 626.44,421.34 C625.92,421.18 620.20,430.61 613.72,442.28 C607.23,453.95 596.73,472.73 590.37,484.00 C584.01,495.27 576.45,508.77 573.56,514.00 C552.44,552.23 539.51,575.38 517.15,615.00 L 506.14 634.50 L 389.07 634.75 C319.13,634.91 272.00,634.64 272.00,634.10 ZM 666.04 569.50 L 668.86 574.50 L 624.93 574.50 C600.77,574.50 581.00,574.26 581.00,573.96 C581.00,573.66 583.16,569.61 585.81,564.96 C588.45,560.31 594.15,550.20 598.47,542.50 C605.47,530.02 625.00,495.78 625.38,495.32 C625.46,495.22 627.14,498.14 629.10,501.82 C631.07,505.49 635.29,513.22 638.48,519.00 C641.67,524.78 648.55,537.38 653.75,547.00 C658.95,556.62 664.48,566.75 666.04,569.50 ZM 579.01 290.79 C562.75,290.46 512.58,290.27 457.45,290.23 C534.17,290.17 566.83,290.30 579.01,290.79 Z" 
                    />
                    {/* The Dark Blue (or White) Structure */}
                    <path 
                        className={path2Class}
                        d="M 579.00 575.65 C579.00,575.00 589.53,556.01 606.00,527.00 C611.15,517.92 617.45,506.74 620.00,502.15 C622.55,497.56 624.99,493.73 625.41,493.65 C625.84,493.57 629.43,499.58 633.40,507.00 C637.36,514.42 643.47,525.67 646.98,532.00 C653.26,543.35 661.46,558.38 667.11,568.89 C668.70,571.86 670.00,574.67 670.00,575.14 C670.00,575.61 649.53,576.00 624.50,576.00 C599.47,576.00 579.00,575.84 579.00,575.65 ZM 666.04 569.50 C664.48,566.75 658.95,556.62 653.75,547.00 C648.55,537.38 641.67,524.78 638.48,519.00 C635.29,513.22 631.07,505.49 629.10,501.82 C627.14,498.14 625.46,495.22 625.38,495.32 C625.00,495.78 605.47,530.02 598.47,542.50 C594.15,550.20 588.45,560.31 585.81,564.96 C583.16,569.61 581.00,573.66 581.00,573.96 C581.00,574.26 600.77,574.50 624.93,574.50 L 668.86 574.50 L 666.04 569.50 ZM 273.50 291.03 C285.74,289.96 583.85,289.95 584.51,291.02 C584.91,291.66 529.38,291.94 425.81,291.82 C338.19,291.73 269.65,291.37 273.50,291.03 Z" 
                    /> 
                </g>
            </svg>
        </div>
      </div>

      {/* Wordmark */}
      <div className={`flex items-baseline tracking-tighter transition-all duration-300 group-hover:-translate-y-0.5 ${textColor}`}>
        <span className="font-display font-bold text-2xl md:text-3xl transition-colors duration-300">Buildapt</span>
        <span className={`font-display font-semibold text-2xl md:text-3xl ml-0.5 transition-colors duration-300 ${highlightColor}`}>AI</span>
      </div>
    </Link>
  );
};