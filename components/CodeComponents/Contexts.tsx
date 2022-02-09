import React, { useContext } from "react";

export const SupabaseMutationContext = React.createContext<any>(undefined);
export const SupabaseQueryContext = React.createContext<any>(undefined);
export const SupabaseUserSessionContext = React.createContext<any>(undefined);
export const FormContext = React.createContext<any>(undefined);
export const RowContext = React.createContext<any>(undefined);
export const LogInContext = React.createContext<any>(undefined);
export const DeleteButtonContext = React.createContext<any>(undefined);

export const contextTable: {[key: string]: React.Context<any>} = {
    "mutation": SupabaseMutationContext,
    "query": SupabaseQueryContext,
    "session": SupabaseUserSessionContext,
    "form": FormContext,
    "row": RowContext,
    "logIn": LogInContext,
    "delete": DeleteButtonContext,
}

export const useAllContexts = () => {
    const table = contextTable;
    const useContextTable = {
        "mutation": useContext(table["mutation"]),
        "query": useContext(table["query"]),
        "session": useContext(table["session"]),
        "form": useContext(table["form"]),
        "row": useContext(table["row"]),
        "logIn": useContext(table["logIn"]),
        "delete": useContext(table["delete"]),
    }
    return useContextTable as any;
}