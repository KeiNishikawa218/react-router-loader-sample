import { loaderFuncOK } from "./func";
import { useLoaderData } from "react-router-dom";

type LoaderType = ReturnType<typeof loaderFuncOK> extends Promise<infer T>
  ? T
  : never;

export const Sample = () => {
  const data = useLoaderData() as LoaderType;
  return <div>{data}</div>;
};
