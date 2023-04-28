import { FC } from 'react'
import { Field } from 'react-final-form';

type ConditionType = {
  when: string,
  is: boolean | string,
  children: JSX.Element,
  not?: true,
}

const Condition: FC<ConditionType> = ({ when, is, children, not }) => (
  <Field name={when} subscription={{ value: true }}>
    {not ? ({ input: { value } }) => (value !== is ? children : null) :  ({ input: { value } }) => (value === is ? children : null)}
  </Field>
);

export { Condition }