import { repeatedElement } from '@plasmicapp/host';
import { User } from '@supabase/gotrue-js';
import React, { ReactNode, useContext, useRef, useState } from 'react';
import { supabase } from '../../api';
import L from "lodash";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { contextTable, FormContext, LogInContext, SupabaseMutationContext, SupabaseQueryContext, useAllContexts } from './Contexts';
import { getContextAndField, getPropValue, isContextValueRef } from './DatabaseComponents';


export function FormTextInput({name, children, defaultValue} : {name?: string, children: any, defaultValue?: string}) {
  const contexts = useAllContexts();
  const form = useContext(FormContext);
  let isLoading = false;
  //check loading
  if (!!defaultValue && isContextValueRef(defaultValue)) {
    const { contextName } = getContextAndField(defaultValue);
    //const context = useContext(contextTable[contextName]);
    //isLoading = !context;
    isLoading = !contexts[contextName];
  }

  if (!form || !name || isLoading) {
    return React.cloneElement(children, {...children.props, value: "Loading..."});
  }

  return <Controller 
    name={name}
    control={form.control}
    defaultValue={getPropValue(defaultValue ?? "", contexts)}
    render={({field}) => React.cloneElement(children, {...children.props, ...field, name})}
  />
}

export interface FormContextComponentProps {
  children: React.ReactChildren;
  className?: string;
}

export function FormContextComponent (props: FormContextComponentProps) {
  const {children, className} = props;
  const { control, handleSubmit } = useForm();

  const logInCtx = useContext(LogInContext);
  const mutationCtx = useContext(SupabaseMutationContext);

  const onSubmit = async (formData:any) => {
    if (logInCtx) {
      logInCtx.onSubmit(formData);
    }
    if (mutationCtx) {
      mutationCtx.onSubmit(formData);
    }
  }

  return (
    <div className={className}>
      <FormContext.Provider value={{control}}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {children}
        </form>
      </FormContext.Provider>
    </div>
  );
}

