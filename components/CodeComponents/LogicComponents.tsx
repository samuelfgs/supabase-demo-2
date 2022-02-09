import { repeatedElement } from '@plasmicapp/host';
import { User } from '@supabase/gotrue-js';
import { string } from 'prop-types';
import React, { ReactNode, useContext, useRef, useState } from 'react';
import { supabase } from '../../api';
import { contextTable, LogInContext, SupabaseMutationContext, SupabaseQueryContext, SupabaseUserSessionContext, useAllContexts } from './Contexts';
import { getContextAndField, getPropValue, isContextValueRef } from './DatabaseComponents';

export interface RedirectIfProps {
  children?: ReactNode;
  className?: string;
  leftExpression?: string;
  operator?: any;
  redirectUrl?: string;
  rightExpression?: string;
  isTesting?: boolean;
  testCondition?: boolean;
}

const aux = (value: any, contexts: any) => {
  let val = null;
  if (!isContextValueRef(value)) {
    val = value;
  } else {
    const {contextName, field} = getContextAndField(value);
    if (contextName === "local") {
      val = localStorage.getItem(field);
    } else if (contextName in contexts) {
      val = contexts[contextName][field];
    }
  }
  return val;
}

export function RedirectIf(props: RedirectIfProps) {
  const { children, className, leftExpression, operator, redirectUrl, rightExpression, isTesting, testCondition } = props;

  const [loaded, setLoaded] = React.useState(false);
  const contexts = useAllContexts();


  setTimeout(() => {
    setLoaded(true);
  }, 1000)

  React.useEffect(() => {
    if (!condition && loaded) {
      ref.current?.click();
    }
  }, [loaded]);

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

  const ref = React.createRef<HTMLAnchorElement>();

  let condition = true;
  const leftVal = aux(leftExpression, contexts);
  if (operator === "FALSY") {
    if (!!leftVal) condition = false;
  } else if (operator === "TRUTHY") {
    if (!leftVal) condition = false;
  } else {
    const rightVal = aux(rightExpression, contexts);
    if (leftVal !== rightVal)
      condition = false;
  }

  return (
      <div className={className}>
        {children}
        <a href={redirectUrl} hidden={true} ref={ref} />
      </div> 
  )
}
