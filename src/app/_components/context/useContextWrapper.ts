import { Context, useContext } from "react";

type IConfig = {
  contextName: string;
  providerName: string;
};

export const useContextWrapper = <T>(
  ReactContext: Context<T>,
  config: IConfig,
) => {
  const context = useContext(ReactContext);
  const { contextName, providerName } = config;

  if (!context) {
    throw new Error(`${contextName} must be used within a ${providerName}`);
  }
  return context;
};
