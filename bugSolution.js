The `useSearchParams` hook provides a robust way to manage query parameters. It handles encoding and decoding automatically, preventing issues with special characters.

```javascript
import { useSearchParams } from 'react-router-dom';

function MyComponent() {
  let [searchParams, setSearchParams] = useSearchParams();
  let name = searchParams.get('name');

  const handleSearch = (e) => {
    setSearchParams({name: e.target.value});
  };

  return (
    <div>
      <p>Name: {name}</p>
      <input type="text" onChange={handleSearch} value={name || ''} />
    </div>
  );
}

```

This approach ensures the correct encoding and decoding of query parameters, even those containing special characters.  Using `useSearchParams` is the recommended way to handle query parameters in React Router v6.