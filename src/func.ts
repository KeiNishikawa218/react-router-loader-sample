export const loaderFuncOK = async () => {
  return Promise.resolve("ok");
};

export const loaderFuncNG = async () => {
  return Promise.reject(new Error("ng"));
};
