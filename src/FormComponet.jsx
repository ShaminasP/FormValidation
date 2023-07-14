import React from 'react';
import { useForm } from 'react-hook-form';

const FormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },watch
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            autoComplete="off"
            {...register('name', {
              required: 'Name is required.',
            })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div>
          <label>Mobile:</label>
          <input
            type="text"
            name="mobile"
            autoComplete="off"
            {...register('mobile', {
              required: 'Mobile is required.',
              pattern: {
                value: /^[0-9+\-]+$/,
                message: 'Mobile should contain only numbers, +, or -.',
              },
            })}
          />
          {errors.mobile && <span>{errors.mobile.message}</span>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            autoComplete="off"
            {...register('email', {
              required: 'Email is required.',
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                message: 'Valid email is required.',
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            autoComplete="off"
            {...register('password', {
              required: 'Password is required.',
              pattern: {
                value: /^(?=.*[@#$])(?=.*[0-9]{4})(?=.*[A-Z]{2})(?=.*[a-z]{2}).*$/,
                message:
                  'Password should contain at least 1 special character (@#$), 4 numbers, 2 capital case letters, and 2 small case letters.',
              },
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <div>
          <label>Re-enter Password:</label>
          <input
            type="password"
            name="reenterPassword"
            autoComplete="off"
            {...register('reenterPassword', {
              required: 'Re-enter Password is required.',
              validate: (value) => value === watch('password') || 'Passwords do not match.',
            })}
          />
          {errors.reenterPassword && <span>{errors.reenterPassword.message}</span>}
        </div>

        <div>
          <label>Select Field:</label>
          <select
            name="selectField"
            {...register('selectField', {
              required: 'Select a value.',
            })}
          >
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          {errors.selectField && <span>{errors.selectField.message}</span>}
        </div>

        <div>
          <label>
            <input type="checkbox" name="checkboxField" {...register('checkboxField')} /> Checkbox
            Field
          </label>
        </div>

        <div>
          <label>
            <input type="radio" name="radioField" value="option1" {...register('radioField')} />{' '}
            Option 1
          </label>
          <label>
            <input type="radio" name="radioField" value="option2" {...register('radioField')} />{' '}
            Option 2
          </label>
          <label>
            <input type="radio" name="radioField" value="option3" {...register('radioField')} />{' '}
            Option 3
          </label>
          {errors.radioField && <span>{errors.radioField.message}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
