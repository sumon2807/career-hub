import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto '>
            <div className='flex justify-between'>
            <img src="../../../public/All Images/Vector-1.png" alt="" />
            <img src="../../../public/All Images/Vector-1.png" alt="" />
            </div>
            <div className='text-center mb-14 '>
                <h1 className='text-5xl font-extrabold underline text-slate-800'>My Blog</h1>
            </div>
            <div className='md:grid lg:grid-cols-2 gap-8 m-8 lg:mb-8'>
                <div className='border-2 border-gray-300 rounded-xl lg:mb-0 mb-4 gap-10 p-4'>
                    <h1 className='text-2xl text-gray-700 pb-4'><span className='font-bold'>Question-1:</span> When we use context API?</h1>
                    <p><span className='text-xl font-bold text-gray-700'>Answer: </span>
                    The Context API helps share data between components which you can't easily share with props, for example, complex data objects. React Context API provides a way to send data like userid, auth, and theme data through the component tree without sending any props manually at every level.</p>
                </div>
                <div className='border-2 border-gray-300 rounded-xl lg:mb-0 mb-4 gap-10 p-4'>
                    <h1 className='text-2xl text-gray-700 pb-4'><span className='font-bold'>Question-2: </span> What is react custom hooks?</h1>
                    <p><span className='text-xl font-bold text-gray-700'>Answer: </span>
                    Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.</p><br />
                    <p>When we want to share the logic between other components, we can extract it to a separate function. According to official documents, the custom hook has to: 1. Start with the key word use 2. Call other hooks</p>
                </div>
                <div className='border-2 border-gray-300 rounded-xl lg:mb-0 mb-4 gap-10 p-4'>
                    <h1 className='text-2xl text-gray-700 pb-4'><span className='font-bold'>Question-3: </span> What is useRef() in react?</h1>
                    <p><span className='text-xl font-bold text-gray-700'>Answer: </span>
                    useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current .</p><br />
                    <p>The useRef Hook is a function that returns a mutable ref object whose .current property is initialized with the passed argument (initialValue). The returned object will persist for the full lifetime of the component.</p><br />
                    <p><span className='text-xl font-bold text-gray-700'>When to Use Refs: </span>There are a few good use cases for refs:
                    <ul>
                        <li>1. Managing focus, text selection, or media playback.</li>
                        <li>2. Triggering imperative animations.</li>
                        <li>3. Integrating with third-party DOM libraries.</li>
                        <li>4. Avoid using refs for anything that can be done declaratively.</li>
                    </ul>
                    For example, instead of exposing open() and close() methods on a Dialog component, pass an isOpen prop to it.</p>
                </div>
                <div className='border-2 border-gray-300 rounded-xl lg:mb-0 mb-4 gap-10 p-4'>
                    <h1 className='text-2xl text-gray-700 pb-4'><span className='font-bold'>Question-4: </span>What is useMemo in react?</h1>
                    <p><span className='text-xl font-bold text-gray-700'>Answer: </span>
                    React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.</p><br />
                    <p>The React useMemo Hook returns a memoized value.Think of memoization as caching a value so that it does not need to be recalculated.The useMemo Hook only runs when one of its dependencies update.This can improve performance.The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function. You can learn more about useCallback in the useCallback chapter.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;