# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook that can lead to an infinite loop.  The bug arises from incorrectly updating the state variable within the `useEffect` dependency array, causing a continuous re-render and triggering the `useEffect` repeatedly.

## Bug Description

The `MyComponent` component uses `useState` to track a `count`.  The `useEffect` hook is intended to reset the counter to 0 when it exceeds 5.  However, the way the state is updated causes an infinite loop because changing `count` inside the useEffect immediately triggers another render, which again triggers the useEffect, and so on.

## Solution

The solution involves carefully managing the state update within the `useEffect` to avoid triggering an infinite loop.  This is done by correctly handling the state update using a conditional and avoiding directly modifying state in the function that is called in setCount()