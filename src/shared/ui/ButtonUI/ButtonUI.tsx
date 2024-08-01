export interface ButtonUIProps {}

export const ButtonUI: React.FC<React.PropsWithChildren> = ({ children }) => (
  <button>{children}</button>
);
