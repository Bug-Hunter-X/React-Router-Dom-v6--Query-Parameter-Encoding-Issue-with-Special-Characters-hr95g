In React Router Dom v6, navigating to a route with a query parameter that has a special character (e.g., '+', '/', '?', '&', '=') may cause unexpected behavior or prevent the route from rendering correctly.  This is because the query parameter may not be properly parsed or encoded. For example:

```javascript
<Link to={`/profile?name=John+Doe`}>
```

The '+' in "John+Doe" might be misinterpreted.

