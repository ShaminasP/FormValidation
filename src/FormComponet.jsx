import React from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';

const FormComponent = () => {
  const { register, handleSubmit, errors, watch } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const password = watch('password');
  const reenterPassword = watch('reenterPassword');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" ref={register({ required: true })} />
        {errors.name && <span>Name is required.</span>}
      </div>

      <div>
        <label>Mobile:</label>
        <input
          type="text"
          name="mobile"
          ref={register({ required: true, pattern: /^[0-9+\-]+$/ })}
        />
        {errors.mobile && <span>Mobile is required and should contain only numbers, +, or -.</span>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          ref={register({
            required: true,
            pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
          })}
        />
        {errors.email && <span>Valid email is required.</span>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          ref={register({
            required: true,
            pattern: /^(?=.*[@#$])(?=.*[0-9]{4})(?=.*[A-Z]{2})(?=.*[a-z]{2}).*$/i,
          })}
        />
        {errors.password && (
          <span>
            Password should contain at least 1 special character (@#$), 4 numbers, 2 capital case
            letters, and 2 small case letters.
          </span>
        )}
      </div>

      <div>
        <label>Re-enter Password:</label>
        <input
          type="password"
          name="reenterPassword"
          ref={register({
            required: true,
            validate: (value) => value === password,
          })}
        />
        {errors.reenterPassword && <span>Passwords do not match.</span>}
      </div>

      <div>
        <label>Select Field:</label>
        <Select
          options={[
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' },
          ]}
          name="selectField"
          ref={register({ required: true })}
        />
        {errors.selectField && <span>Select a value.</span>}
      </div>

      <div>
        <label>
          <input type="checkbox" name="checkboxField" ref={register} /> Checkbox Field
        </label>
      </div>

      <div>
        <label>
          <input type="radio" name="radioField" value="option1" ref={register({ required: true })} />{' '}
          Option 1
        </label>
        <label>
          <input type="radio" name="radioField" value="option2" ref={register({ required: true })} />{' '}
          Option 2
        </label>
        <label>
          <input type="radio" name="radioField" value="option3" ref={register({ required: true })} />{' '}
          Option 3
        </label>
        {errors.radioField && <span>Select an option.</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
