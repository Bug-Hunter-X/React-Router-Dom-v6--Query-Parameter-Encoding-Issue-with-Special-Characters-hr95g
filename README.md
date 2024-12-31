This repository demonstrates a bug in React Router Dom v6 related to query parameters containing special characters.  The `bug.js` file shows the problematic code, and `bugSolution.js` presents a solution using `useSearchParams` for proper encoding and decoding.

The issue arises when navigating to a route with a query parameter that includes characters like '+', '/', '?', '&', or '='. These characters may not be properly parsed, leading to unexpected route behavior or rendering errors.  The solution utilizes the `useSearchParams` hook to correctly handle URL encoding and decoding, ensuring reliable navigation and rendering.

To reproduce the bug, run the `bug.js` example. To see the fix, run the `bugSolution.js` example.