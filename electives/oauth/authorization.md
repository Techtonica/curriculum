# Authorization

## Overview
Understanding the difference between Authentication (who you are) and Authorization (what you are allowed to do).

## Learning Objectives
- Distinguish between AuthN and AuthZ.
- Understand the Role-Based Access Control (RBAC) model.
- Implement basic middleware for route protection.

## Key Concepts
- **Authentication:** Verifying identity (e.g., Login).
- **Authorization:** Verifying permissions (e.g., Admin vs User).
- **JWT (JSON Web Tokens):** How claims are used to authorize requests.

## Resources
- [MDN Web Docs: HTTP Authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication)
- [Auth0: Authentication vs Authorization](https://auth0.com/docs/authenticate/authn-vs-authz)

## Exercise
1. Create an Express app with two roles: `user` and `admin`.
2. Implement a middleware that allows only `admin` users to access `/admin-dashboard`.
3. Test the implementation using Postman or Insomnia.
