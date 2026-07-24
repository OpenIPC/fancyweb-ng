import { useState, useEffect } from 'preact/hooks';
import type { FormSchema, FormValidationSchema } from './useForm-types';

export default function useForm(formSchema: FormSchema, formValidationSchema: FormValidationSchema) {
  const [ formState, setFormState ] = useState('error');
  const [ formElemsState, setFormElemsState ] = useState(formSchema); 

  useEffect(() => {
    setFormState(validateForm(formElemsState));
  }, [formElemsState]);

  function handleOnChange(e: Event) {
    if (e.target instanceof HTMLInputElement) {
      const { name, value } = e.target;
      let curElem: FormSchema[0] = {  value, state: 'default', error: '' };
      curElem = validateInput({ [name]: curElem }, formValidationSchema);
      setFormElemsState({ ...formElemsState, [name]: curElem });
    }
  }

  function handelFormButtonClick() {
    setFormElemsState(validateAllInputs(formElemsState, formValidationSchema));
  }

  function validateInput(curInput: Record<string, FormSchema[0]>, formValidationSchema: FormValidationSchema): FormSchema[0] {
    const [[ name, { value} ]] = Object.entries(curInput);
    let newElemState: FormSchema[0] = { value, state: 'default', error: '' };
    for (const { fn, error } of formValidationSchema[name]) {
      if (fn(value)) {
        newElemState = { value, state: 'valid', error: '' };
      } else {
        newElemState = { value, state: 'error', error };
        break;
      }
    }
    return newElemState;
  }

  function validateAllInputs(formElemsState: FormSchema, formValidationSchema: FormValidationSchema): FormSchema {
    let newFormElemsState: FormSchema = {};
    const inputs = Object.entries(formElemsState);
    for (const [ inputName, { value }] of inputs) {
      newFormElemsState = {...newFormElemsState, [inputName]: { value, state: 'default', error: ''}};
      for (const { fn, error } of formValidationSchema[inputName]) {
        if (fn(value)) {
          newFormElemsState[inputName].state = 'valid';
        } else {
          newFormElemsState[inputName].state = 'error';
          newFormElemsState[inputName].error = error;
          break;
        }
      }
    }
    return newFormElemsState;
  }

  function validateForm(formElemsState: FormSchema) {
    if (Object.values(formElemsState).every(inputState => inputState.state === 'valid')) {
      return 'valid';
    } else {
      return 'error';
    }
  }

  return { handleOnChange, handelFormButtonClick, formElemsState, formState };
}
