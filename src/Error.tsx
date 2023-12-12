import { useRouteError } from "react-router-dom";

export const ErrorComponent = () => {
  const error = useRouteError() as Error;
  return <div>{error.message}</div>;
};
