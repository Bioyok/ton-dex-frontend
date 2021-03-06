import { IconProps } from './types/iconTypes';

export type GridViewProps = {};

export const GridView = (iconProps: IconProps) => {
  const { color, className = '' } = iconProps;
  return (
    <svg
      className={className}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.25 13.75H11.25C12.625 13.75 13.75 12.625 13.75 11.25V6.25C13.75 4.875 12.625 3.75 11.25 3.75H6.25C4.875 3.75 3.75 4.875 3.75 6.25V11.25C3.75 12.625 4.875 13.75 6.25 13.75Z"
        fill={color ?? 'currentColor'}
      />
      <path
        d="M6.25 13.75H11.25C12.625 13.75 13.75 12.625 13.75 11.25V6.25C13.75 4.875 12.625 3.75 11.25 3.75H6.25C4.875 3.75 3.75 4.875 3.75 6.25V11.25C3.75 12.625 4.875 13.75 6.25 13.75Z"
        fill={color ?? 'currentColor'}
      />
      <path
        d="M6.25 26.25H11.25C12.625 26.25 13.75 25.125 13.75 23.75V18.75C13.75 17.375 12.625 16.25 11.25 16.25H6.25C4.875 16.25 3.75 17.375 3.75 18.75V23.75C3.75 25.125 4.875 26.25 6.25 26.25Z"
        fill={color ?? 'currentColor'}
      />
      <path
        d="M6.25 26.25H11.25C12.625 26.25 13.75 25.125 13.75 23.75V18.75C13.75 17.375 12.625 16.25 11.25 16.25H6.25C4.875 16.25 3.75 17.375 3.75 18.75V23.75C3.75 25.125 4.875 26.25 6.25 26.25Z"
        fill={color ?? 'currentColor'}
      />
      <path
        d="M16.25 6.25V11.25C16.25 12.625 17.375 13.75 18.75 13.75H23.75C25.125 13.75 26.25 12.625 26.25 11.25V6.25C26.25 4.875 25.125 3.75 23.75 3.75H18.75C17.375 3.75 16.25 4.875 16.25 6.25Z"
        fill={color ?? 'currentColor'}
      />
      <path
        d="M16.25 6.25V11.25C16.25 12.625 17.375 13.75 18.75 13.75H23.75C25.125 13.75 26.25 12.625 26.25 11.25V6.25C26.25 4.875 25.125 3.75 23.75 3.75H18.75C17.375 3.75 16.25 4.875 16.25 6.25Z"
        fill={color ?? 'currentColor'}
      />
      <path
        d="M18.75 26.25H23.75C25.125 26.25 26.25 25.125 26.25 23.75V18.75C26.25 17.375 25.125 16.25 23.75 16.25H18.75C17.375 16.25 16.25 17.375 16.25 18.75V23.75C16.25 25.125 17.375 26.25 18.75 26.25Z"
        fill={color ?? 'currentColor'}
      />
      <path
        d="M18.75 26.25H23.75C25.125 26.25 26.25 25.125 26.25 23.75V18.75C26.25 17.375 25.125 16.25 23.75 16.25H18.75C17.375 16.25 16.25 17.375 16.25 18.75V23.75C16.25 25.125 17.375 26.25 18.75 26.25Z"
        fill={color ?? 'currentColor'}
      />
    </svg>
  );
};
