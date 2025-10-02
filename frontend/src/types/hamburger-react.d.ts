declare module 'hamburger-react' {
  import type { FC } from 'react';

  export interface HamburgerProps {
    toggled?: boolean;
    toggle?: (toggled: boolean) => void;
    size?: number;
    rounded?: boolean;
    label?: string;
    color?: string;
    direction?: 'left' | 'right';
    distance?: 'sm' | 'md' | 'lg';
    duration?: number;
    easing?: string;
    hideOutline?: boolean;
  }

  const Hamburger: FC<HamburgerProps>;
  export default Hamburger;

  export const Sling: FC<HamburgerProps>;
  export const Spin: FC<HamburgerProps>;
  export const Squeeze: FC<HamburgerProps>;
  export const Twirl: FC<HamburgerProps>;
}


