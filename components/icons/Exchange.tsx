import { IconProps } from './types/iconTypes';

export type ExchangeProps = {};

export const Exchange = (iconProps: IconProps) => {
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
        d="M6.9716 0.194595L3.2046 4.00455C2.77254 4.42788 3.06958 5.16529 3.67716 5.16529H6.09398V13.3724C6.09398 14.1235 6.70156 14.738 7.44416 14.738C8.18676 14.738 8.79434 14.1235 8.79434 13.3724V5.16529H11.2112C11.8187 5.16529 12.1158 4.42788 11.6837 4.00455L7.91672 0.194595C7.66019 -0.0648649 7.22813 -0.0648649 6.9716 0.194595ZM16.8954 18.8484V10.6413C16.8954 9.89019 16.2878 9.27568 15.5452 9.27568C14.8026 9.27568 14.1951 9.89019 14.1951 10.6413V18.8484H11.7782C11.1707 18.8484 10.8736 19.5858 11.3057 20.0091L15.0727 23.8054C15.3427 24.0649 15.7613 24.0649 16.0313 23.8054L19.7983 20.0091C20.2303 19.5858 19.9198 18.8484 19.3257 18.8484H16.8954Z"
        fill="#303757"
      />
      <path
        d="M6.9716 0.194595L3.2046 4.00455C2.77254 4.42788 3.06958 5.16529 3.67716 5.16529H6.09398V13.3724C6.09398 14.1235 6.70156 14.738 7.44416 14.738C8.18676 14.738 8.79434 14.1235 8.79434 13.3724V5.16529H11.2112C11.8187 5.16529 12.1158 4.42788 11.6837 4.00455L7.91672 0.194595C7.66019 -0.0648649 7.22813 -0.0648649 6.9716 0.194595ZM16.8954 18.8484V10.6413C16.8954 9.89019 16.2878 9.27568 15.5452 9.27568C14.8026 9.27568 14.1951 9.89019 14.1951 10.6413V18.8484H11.7782C11.1707 18.8484 10.8736 19.5858 11.3057 20.0091L15.0727 23.8054C15.3427 24.0649 15.7613 24.0649 16.0313 23.8054L19.7983 20.0091C20.2303 19.5858 19.9198 18.8484 19.3257 18.8484H16.8954Z"
        fill={color ?? 'currentColor'}
      />
    </svg>
  );
};