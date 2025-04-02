# Advanced React Routing and Navigation

## Prerequisites

- [JavaScript Fundamentals](https://github.com/Techtonica/curriculum/tree/main/javascript)
- [React Fundamentals](https://github.com/Techtonica/curriculum/tree/main/react-js)
- [React Hooks](https://github.com/Techtonica/curriculum/tree/main/react-hooks)
- [HTTP Basics](https://github.com/Techtonica/curriculum/tree/main/http-basics)
- [APIs & JSON](https://github.com/Techtonica/curriculum/tree/main/api/apis-and-json)


## Table of Contents

- [Objectives](#objectives)
- [Specific Things to Learn](#specific-things-to-learn)
- [Lesson](#lesson)
    - [Introduction to Advanced Routing](#introduction-to-advanced-routing)
    - [React Router v6 Core Concepts](#react-router-v6-core-concepts)
    - [Dynamic Routes and Parameters](#dynamic-routes-and-parameters)
    - [Nested Routes and Layouts](#nested-routes-and-layouts)
    - [Route Guards and Protected Routes](#route-guards-and-protected-routes)
    - [Data Loading Strategies](#data-loading-strategies)
    - [Navigation State Management](#navigation-state-management)
    - [Code Splitting with Routing](#code-splitting-with-routing)
- [Activities](#activities)
    - [Activity 1: Setting Up Basic Routing](#activity-1-setting-up-basic-routing-20-minutes)
    - [Activity 2: Building a Nested Route Structure](#activity-2-building-a-nested-route-structure-30-minutes)
    - [Activity 3: Implementing Dynamic Routes](#activity-3-implementing-dynamic-routes-40-minutes)
    - [Activity 4: Building Protected Routes](#activity-4-building-protected-routes-45-minutes)
    - [Activity 5: Advanced Data Loading](#activity-5-advanced-data-loading-60-minutes)
    - [Activity 6: Route Transitions](#activity-6-route-transitions-45-minutes)
    - [Activity 7: Comprehensive Routing Project](#activity-7-comprehensive-routing-project-90-minutes)
- [Common Mistakes / Misconceptions](#common-mistakes--misconceptions)


## Objectives

### Motivation

Modern web applications require sophisticated navigation systems to provide excellent user experiences. Advanced routing techniques allow you to create intuitive navigational flows, manage application state across routes, handle authentication, and optimize performance. As a software engineer, mastering these concepts will enable you to build professional-grade React applications that meet industry standards.

### Real-World Application

- E-commerce sites with product categories, filters, and details pages
- Content management systems with nested navigation hierarchies
- Authenticated applications with role-based access control
- Single-page applications with complex data flows
- Progressive web apps that need to function offline


## Specific Things to Learn

- Setting up and configuring React Router v6
- Working with dynamic route parameters and nested routes
- Implementing layouts and shared UI components across routes
- Creating protected routes with authentication
- Managing navigation state and history
- Implementing error boundaries for routes
- Code-splitting and lazy loading routes
- Handling route transitions and animations
- Programmatic navigation techniques
- Testing routing components


## Lesson

### 1️⃣ Introduction to Advanced Routing

#### What is Routing in SPAs?

Routing in Single Page Applications (SPAs) allows users to navigate between different "pages" without actually reloading the browser. Instead, JavaScript intercepts navigation, loads new content, and updates the URL, creating a seamless experience.

```javascript
// Basic routing structure in React Router v6
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
```

#### Evolution of React Router

React Router has evolved significantly over time, with v6 introducing a more declarative API, automatic route ranking, and better handling of relative links.

### 2️⃣ React Router v6 Core Concepts

#### Router Types

React Router offers different router types for various environments:

```javascript
// For web applications
<BrowserRouter>
  {/* Your routes */}
</BrowserRouter>

// For static file serving or GitHub Pages
<HashRouter>
  {/* Your routes */}
</HashRouter>

// For testing or server rendering
<StaticRouter location="/dashboard">
  {/* Your routes */}
</StaticRouter>
```

#### Routes and Route

The `Routes` component acts as a container for all your `Route` components, which define the path-to-component mappings:

```javascript
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/products" element={<Products />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

#### Link and NavLink Components

These components create navigation links that integrate with the router:

```javascript
// Basic navigation link
<Link to="/about">About Us</Link>

// Navigation link with active styling
<NavLink 
  to="/products"
  className={({ isActive }) => isActive ? "active-link" : ""}
>
  Products
</NavLink>
```

### 3️⃣ Dynamic Routes and Parameters

#### URL Parameters

URL parameters allow you to capture values from the URL:

```javascript
// Route definition
<Route path="/users/:userId" element={<UserProfile />} />

// In the UserProfile component
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();
  return <h1>User Profile for ID: {userId}</h1>;
}
```

#### Query Parameters

Query parameters can be accessed and manipulated:

```javascript
// Using search params
import { useSearchParams } from 'react-router-dom';

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') || 'all';
  
  return (
    <div>
      <h1>Products in {category} category</h1>
      <button onClick={() => setSearchParams({ category: 'electronics' })}>
        Show Electronics
      </button>
    </div>
  );
}
```

### 4️⃣ Nested Routes and Layouts

#### Creating Layouts with Outlet

The `Outlet` component renders child routes within a parent layout:

```javascript
// Parent route with layout
function DashboardLayout() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <nav>
          <NavLink to="/dashboard">Overview</NavLink>
          <NavLink to="/dashboard/analytics">Analytics</NavLink>
          <NavLink to="/dashboard/settings">Settings</NavLink>
        </nav>
      </aside>
      <main className="content">
        <Outlet /> {/* Child routes render here */}
      </main>
    </div>
  );
}

// Route configuration
<Routes>
  <Route path="/dashboard" element={<DashboardLayout />}>
    <Route index element={<DashboardOverview />} />
    <Route path="analytics" element={<Analytics />} />
    <Route path="settings" element={<Settings />} />
  </Route>
</Routes>
```

#### Index Routes

Index routes specify what should render at the parent route path:

```javascript
<Route path="dashboard" element={<DashboardLayout />}>
  <Route index element={<DashboardHome />} /> {/* Renders at /dashboard */}
  <Route path="stats" element={<Stats />} /> {/* Renders at /dashboard/stats */}
</Route>
```

### 5️⃣ Route Guards and Protected Routes

#### Authentication-based Route Protection

Implementing protected routes that check authentication status:

```javascript
function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/login', { replace: true });
    }
  }, [isAuthenticated, isLoading, navigate]);
  
  if (isLoading) {
    return <div>Loading authentication status...</div>;
  }
  
  return isAuthenticated ? children : null;
}

// Using the protected route
<Routes>
  <Route path="/login" element={<Login />} />
  <Route 
    path="/dashboard" 
    element={
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    }
  >
    <Route index element={<DashboardHome />} />
    <Route path="settings" element={<Settings />} />
  </Route>
</Routes>
```

#### Role-based Access Control

Extending protection to include user roles:

```javascript
function RoleBasedRoute({ requiredRoles, children }) {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (isAuthenticated && !requiredRoles.includes(user.role)) {
      navigate('/unauthorized', { replace: true });
    }
  }, [isAuthenticated, navigate, requiredRoles, user]);
  
  return isAuthenticated && requiredRoles.includes(user.role) ? children : null;
}

// Using role-based protection
<Route 
  path="/admin" 
  element={
    <RoleBasedRoute requiredRoles={['admin', 'superadmin']}>
      <AdminPanel />
    </RoleBasedRoute>
  } 
/>
```

### 6️⃣ Data Loading Strategies

#### Loading Data with useEffect

Traditional approach to fetch data when components mount:

```javascript
function UserDetails() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/users/${userId}`);
        if (!response.ok) throw new Error('Failed to fetch user');
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUser();
  }, [userId]);
  
  if (loading) return <div>Loading user details...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user found</div>;
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}
```

#### Route Loaders (React Router v6.4+)

Modern approach using React Router's data loading API:

```javascript
// Define a loader function
async function userLoader({ params }) {
  const response = await fetch(`/api/users/${params.userId}`);
  if (!response.ok) {
    throw new Error('Failed to load user');
  }
  return response.json();
}

// Use the loader in route definition
<Route 
  path="/users/:userId" 
  element={<UserDetails />} 
  loader={userLoader} 
  errorElement={<ErrorBoundary />}
/>

// Access the data in the component
import { useLoaderData } from 'react-router-dom';

function UserDetails() {
  const user = useLoaderData();
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}
```

### 7️⃣ Navigation State Management

#### Navigation Context

Maintaining state across navigation:

```javascript
// Creating a navigation context
const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [navigationState, setNavigationState] = useState({
    previousPath: null,
    scrollPositions: {}
  });
  
  const updateNavState = (updates) => {
    setNavigationState(prev => ({
      ...prev,
      ...updates
    }));
  };
  
  return (
    <NavigationContext.Provider value={{ navigationState, updateNavState }}>
      {children}
    </NavigationContext.Provider>
  );
}

// Using the navigation context
function ScrollRestorationExample() {
  const { navigationState, updateNavState } = useContext(NavigationContext);
  const location = useLocation();
  const elementRef = useRef(null);
  
  // Save scroll position on unmount
  useEffect(() => {
    return () => {
      if (elementRef.current) {
        updateNavState({
          previousPath: location.pathname,
          scrollPositions: {
            ...navigationState.scrollPositions,
            [location.pathname]: elementRef.current.scrollTop
          }
        });
      }
    };
  }, [location.pathname, updateNavState, navigationState.scrollPositions]);
  
  // Restore scroll position
  useEffect(() => {
    const savedPosition = navigationState.scrollPositions[location.pathname];
    if (savedPosition && elementRef.current) {
      elementRef.current.scrollTop = savedPosition;
    }
  }, [location.pathname, navigationState.scrollPositions]);
  
  return (
    <div className="scrollable-content" ref={elementRef}>
      {/* Content here */}
    </div>
  );
}
```

#### Using Location State

Passing temporary data between routes:

```javascript
// Passing state during navigation
function ProductItem({ product }) {
  const navigate = useNavigate();
  
  const viewDetails = () => {
    navigate(`/products/${product.id}`, {
      state: { 
        fromList: true,
        listFilter: 'popular',
        timestamp: Date.now() 
      }
    });
  };
  
  return (
    <div>
      <h3>{product.name}</h3>
      <button onClick={viewDetails}>View Details</button>
    </div>
  );
}

// Accessing state in the destination route
function ProductDetails() {
  const { state } = useLocation();
  const { productId } = useParams();
  
  useEffect(() => {
    // Analytics tracking
    if (state?.fromList) {
      trackEvent('product_view_from_list', {
        productId,
        filter: state.listFilter,
        timestamp: state.timestamp
      });
    }
  }, [productId, state]);
  
  return (
    <div>
      {state?.fromList && (
        <Link to="/products">← Back to {state.listFilter} products</Link>
      )}
      <h1>Product Details</h1>
      {/* Product details here */}
    </div>
  );
}
```

### 8️⃣ Code Splitting with Routing

#### Lazy Loading Routes

Optimizing bundle size by loading components only when needed:

```javascript
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
```

#### Prefetching Routes

Improving perceived performance by prefetching likely routes:

```javascript
function NavWithPrefetch() {
  const prefetchAbout = () => {
    // This will trigger the dynamic import
    import('./pages/About');
  };
  
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link 
        to="/about" 
        onMouseEnter={prefetchAbout} 
        onFocus={prefetchAbout}
      >
        About
      </Link>
    </nav>
  );
}
```

## Activities

### Activity 1: Setting Up Basic Routing (20 minutes)

Create a new React app and implement basic routing with React Router v6 for a simple multi-page application.

**Steps:**

1. Create a new React application using Create React App or Vite
2. Install React Router: `npm install react-router-dom`
3. Create three page components: Home, About, and Contact
4. Set up BrowserRouter and Routes in your App component
5. Add a navigation bar with Links to each page
6. Test your navigation and observe the URL changes


### Activity 2: Building a Nested Route Structure (30 minutes)

Implement a dashboard layout with nested routes and a sidebar navigation.

**Steps:**

1. Create a Dashboard layout component with a sidebar and main content area
2. Create three dashboard section components: Overview, Analytics, and Settings
3. Set up nested routes using the Outlet component
4. Implement an active state for navigation links using NavLink
5. Add an index route for the dashboard path


### Activity 3: Implementing Dynamic Routes (40 minutes)

Create a product catalog with dynamic product detail pages using URL parameters.

**Steps:**

1. Create a mock product database (array of objects)
2. Implement a Products page that lists all products
3. Create a ProductDetail component that uses useParams to get the product ID
4. Set up a dynamic route for individual products
5. Add navigation from the product list to individual product pages
6. Add error handling for invalid product IDs


### Activity 4: Building Protected Routes (45 minutes)

Create an authentication system with protected routes that require login.

**Steps:**

1. Create a simple auth context with login/logout functionality
2. Implement login and register pages
3. Create a ProtectedRoute component that checks authentication
4. Set up routes that use the ProtectedRoute component
5. Add redirect functionality for unauthorized access attempts
6. Implement a logout button that works across the application


### Activity 5: Advanced Data Loading (60 minutes)

Implement a data fetching strategy with loading states and error boundaries.

**Steps:**

1. Create an API service module with fetch functions
2. Implement a custom useFetch hook for data loading
3. Add loading indicators and error states to your components
4. Create a route-level ErrorBoundary component
5. Configure routes with errorElement for error handling
6. Implement retry functionality for failed requests


### Activity 6: Route Transitions (45 minutes)

Add smooth transitions between routes using CSS animations.

**Steps:**

1. Create a RouteTransition component that wraps route elements
2. Implement enter and exit animations using CSS transitions
3. Use the location key to trigger animations on route changes
4. Add different transitions for different route types
5. Ensure accessibility is maintained during transitions


### Activity 7: Comprehensive Routing Project (90 minutes)

Build a mini e-commerce application that combines all the routing concepts.

**Steps:**

1. Plan your route structure with categories, products, cart, and checkout
2. Implement public routes for browsing and protected routes for checkout
3. Create layouts for different sections of the application
4. Add dynamic routes for product categories and individual products
5. Implement query parameters for filtering and sorting
6. Add breadcrumb navigation that reflects the route hierarchy
7. Use code splitting to optimize bundle size
8. Implement proper navigation state management


## Common Mistakes / Misconceptions

### 1. Not Using Memory Router for Testing

**Misconception**: Any router will work for tests. \
**Reality**: Tests require a different router implementation. Use MemoryRouter for tests to avoid browser APIs.

### 2. Directly Manipulating Window.location

**Misconception**: You can use window.location alongside React Router. \
**Reality**: This breaks the single-page application flow. Always use React Router's navigation methods.

### 3. Not Handling Loading and Error States

**Misconception**: Data will always load quickly without errors. \
**Reality**: Network requests can fail or be slow. Always implement loading states and error handling.

### 4. Nesting Routes Incorrectly

**Misconception**: Route nesting is about component hierarchy. \
**Reality**: Route nesting is about URL hierarchy and shared layouts. Use the Outlet component correctly.

### 5. Overusing Location State

**Misconception**: Location state is for all cross-route data. \
**Reality**: Location state is lost on page refresh. Use it only for temporary navigation context.

### 6. Not Using Relative Links Correctly

**Misconception**: Paths always work the same way regardless of nesting. \
**Reality**: Starting with './' makes links relative to the current route. This becomes important in deeply nested routes.

### 7. Forgetting to Handle 404 Cases

**Misconception**: Users will only visit valid routes. \
**Reality**: Users might access invalid URLs. Always include a catch-all route with a 404 page.

### 8. Using Hash Router Unnecessarily

**Misconception**: Hash Router and Browser Router are interchangeable. \
**Reality**: Hash Router should only be used when you cannot configure server-side routing, like on certain static hosts.

### 9. Not Using Link Components

**Misconception**: Regular `<a>` tags work fine for navigation. \
**Reality**: Using `<a>` tags causes full page reloads. Always use Link or NavLink for in-app navigation.

### 10. Ignoring Accessibility in Routing

**Misconception**: Screen readers automatically understand SPA navigation. \
**Reality**: You need to manage focus, announce page changes, and ensure keyboard navigation works correctly.
