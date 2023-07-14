import React from 'react';
import { useForm } from 'react-hook-form';

const FormComponent = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }, watch
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="max-w-md md:max-w-full mx-auto bg-gradient-to-r from-gray-200 to-gray-500 h-screen">

            <div className='w-full h-screen flex flex-col justify-center'>

                <div className='flex justify-center pb-5 text-[45px] font-bold px-10 md:px-2'><h1>SUBMIT YOUR DETAILS</h1></div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='md:flex justify-evenly w-full'>
                        <div className='w-full px-20'>
                            <div className="mb-4">
                                <label className="block mb-1" htmlFor="name">
                                    Name:
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    className={`border rounded-md p-2 w-full ${errors.name ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    {...register('name', { required: 'Name is required.' })}
                                />
                                {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                            </div>


                            <div className="mb-4">
                                <label className="block mb-1" htmlFor="email">
                                    Email:
                                </label>
                                <input
                                    id="email"
                                    type="text"
                                    className={`border rounded-md p-2 w-full ${errors.email ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    {...register('email', {
                                        required: 'Email is required.',
                                        pattern: {
                                            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                                            message: 'Valid email is required.',
                                        },
                                    })}
                                />
                                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                            </div>

                            <div className="mb-4">
                                <label className="block mb-1" htmlFor="password">
                                    Password:
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    className={`border rounded-md p-2 w-full ${errors.password ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    {...register('password', {
                                        required: 'Password is required.',
                                        pattern: {
                                            value: /^(?=.*[@#$])(?=.*[0-9]{4})(?=.*[A-Z]{2})(?=.*[a-z]{2}).*$/,
                                            message:
                                                'Password should contain at least 1 special character (@#$), 4 numbers, 2 capital case letters, and 2 small case letters.',
                                        },
                                    })}
                                />
                                {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                            </div>

                            <div className="mb-4">
                                <label className="block mb-1" htmlFor="reenterPassword">
                                    Re-enter Password:
                                </label>
                                <input
                                    id="reenterPassword"
                                    type="password"
                                    className={`border rounded-md p-2 w-full ${errors.reenterPassword ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    {...register('reenterPassword', {
                                        required: 'Re-enter Password is required.',
                                        validate: (value) => value === watch('password') || 'Passwords do not match.',
                                    })}
                                />
                                {errors.reenterPassword && (
                                    <span className="text-red-500">{errors.reenterPassword.message}</span>
                                )}
                            </div>
                        </div>
                        <div className='w-full px-20'>



                            <div className="mb-4">
                                <label className="block mb-1" htmlFor="mobile">
                                    Mobile:
                                </label>
                                <input
                                    id="mobile"
                                    type="text"
                                    className={`border rounded-md p-2 w-full ${errors.mobile ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    {...register('mobile', {
                                        required: 'Mobile is required.',
                                        pattern: {
                                            value: /^[0-9+\-]+$/,
                                            message: 'Mobile should contain only numbers, +, or -.',
                                        },
                                    })}
                                />
                                {errors.mobile && <span className="text-red-500">{errors.mobile.message}</span>}
                            </div>

                            <div className="mb-4">
                                <label className="block mb-1" htmlFor="selectField">
                                    Select Your Stack
                                </label>
                                <select
                                    id="selectField"
                                    className={`border rounded-md p-2 w-full ${errors.selectField ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    {...register('selectField', { required: 'Select a value.' })}
                                >
                                    <option value="">Select an option</option>
                                    <option value="option1">MEAN</option>
                                    <option value="option2">MERN</option>

                                </select>
                                {errors.selectField && (
                                    <span className="text-red-500">{errors.selectField.message}</span>
                                )}
                            </div>


                            <div className="mb-4">
                                <label className="block">Favorites</label>
                                <label className="block">
                                    <input
                                        type="radio"
                                        className="mr-2"
                                        value="option1"
                                        {...register('radioField', { required: 'Select an option.' })}
                                    />
                                    Frontend
                                </label>
                                <label className="block">
                                    <input
                                        type="radio"
                                        className="mr-2"
                                        value="option2"
                                        {...register('radioField', { required: 'Select an option.' })}
                                    />
                                    Backend
                                </label>
                                <label className="block">
                                    <input
                                        type="radio"
                                        className="mr-2"
                                        value="option3"
                                        {...register('radioField', { required: 'Select an option.' })}
                                    />
                                    Full Stack
                                </label>
                                {errors.radioField && <span className="text-red-500">{errors.radioField.message}</span>}
                            </div>


                            <div className="mt-10">
                                <label className="block">
                                    <input
                                        type="checkbox"
                                        className="mr-2"
                                        {...register('checkboxField')}
                                    />
                                    Terms & Conditions Accepted
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center px-20'>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full "
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default FormComponent;
