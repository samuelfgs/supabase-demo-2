import { PlasmicCanvasContext, repeatedElement } from '@plasmicapp/host';
import { User } from '@supabase/gotrue-js';
import { string } from 'prop-types';
import React, { ReactNode, useContext, useRef, useState } from 'react';
import { supabase } from '../../api';
import { contextTable, LogInContext, SupabaseMutationContext, SupabaseQueryContext, SupabaseUserSessionContext, useAllContexts } from './Contexts';
import { getContextAndField, getPropValue, isContextValueRef } from './DatabaseComponents';

export interface RedirectIfProps {
  children?: any;
  className?: string;
  leftExpression?: string;
  operator?: any;
  redirectUrl?: string;
  rightExpression?: string;
  isTesting?: boolean;
  testCondition?: boolean;
}

export function RedirectIf(props: RedirectIfProps) {
  const { children, className, leftExpression, operator, redirectUrl, rightExpression, isTesting, testCondition } = props;

  const [loaded, setLoaded] = React.useState<boolean>(false);
  const contexts = useAllContexts();
  const [condition, setCondition] = React.useState<boolean>(false);

  const ref = React.createRef<HTMLAnchorElement>();
  const inEditor = useContext(PlasmicCanvasContext);
  setTimeout(() => {
    setLoaded(true);
  }, 500);

  React.useEffect(() => {
    setCondition(false);
  }, [leftExpression, rightExpression, operator, children, isTesting]);

  React.useEffect(() => {
    supabase.auth.onAuthStateChange((e) => {
      if (e === "SIGNED_OUT")
        setCondition(false);
    })
  }, [])
  
  React.useEffect(() => {
    if (condition && loaded && !inEditor) {
      ref.current?.click();
    }
  }, [loaded, condition]);

  if (!leftExpression) {
    return <p>You need to set the leftExpression prop</p>;
  }

  if (!operator) {
    return <p>You need to set the operator prop</p>;
  }

  if (operator !== "FALSY" && operator !== "TRUTHY") {
    return <p>You need to set the rightExpression prop</p>
  }
  if (!redirectUrl) {
    return <p>You need to set the redirectUrl prop</p>;
  }

  const leftVal = getPropValue(leftExpression, contexts);
  if (!condition) {
    if (operator === "FALSY") {
      if (!leftVal) setCondition(true);
    } else if (operator === "TRUTHY") {
      if (!!leftVal) setCondition(true);
      const rightVal = getPropValue(rightExpression ?? "", contexts);
      if (leftVal === rightVal)
        setCondition(true);
    }
  } 

  return (
      <div className={className}> 
        {children}
        <a href={redirectUrl} hidden={true} ref={ref} />
      </div> 
  )
}
