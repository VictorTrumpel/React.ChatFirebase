import { ReactNode } from "react";

type VisibleProps = {
  condition: boolean;
  children: ReactNode;
};

export const Visible = ({ children, condition }: VisibleProps) => {
  if (!condition) return <></>;
  return <>{children}</>;
};
