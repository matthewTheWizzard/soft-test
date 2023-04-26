import { FC } from 'react'
import { Field } from 'react-final-form';

type ConditionType = {
  when: string,
  is: boolean | string,
  children: JSX.Element
}

const Condition: FC<ConditionType> = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
);

export { Condition }