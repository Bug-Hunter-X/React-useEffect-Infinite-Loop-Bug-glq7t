```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timeoutId;
    if (count > 5) {
      timeoutId = setTimeout(() => {
        setCount(0);
      }, 0); 
    }
    return () => clearTimeout(timeoutId);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```