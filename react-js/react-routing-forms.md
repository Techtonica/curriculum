# React Routing & Forms: Building Dynamic User Interfaces

⚠️ **_This is intended to be a comprehensive advanced self-guided topic outline. You may come back to the various activities over the course of a week. See respective time estimates for each [activity](#lesson-activities) below._** ⚠️

## Prerequisites

- Basic knowledge of HTML, CSS, and JavaScript
- [JavaScript Fundamentals](https://github.com/Techtonica/curriculum/blob/main/javascript/javascript-1-variables.md)
- [JavaScript Functions](https://github.com/Techtonica/curriculum/blob/main/javascript/javascript-2-functions.md)
- [DOM Manipulation](https://github.com/Techtonica/curriculum/blob/main/web/dom-manipulation.md)

- React Fundamentals
- [React Intro](https://github.com/Techtonica/curriculum/blob/main/react-js/react-intro.md)
- [React Components](https://github.com/Techtonica/curriculum/blob/main/react-js/react-components.md)
- [ES6 Syntax](https://github.com/Techtonica/curriculum/blob/main/javascript/javascript-6-object-literals.md)
- [NPM Basics](https://github.com/Techtonica/curriculum/blob/main/node-js/node-npm.md)

## Table of Contents
- [Objectives](#objectives)
- [Motivation](#motivation)
- [React Router Fundamentals](#react-router-fundamentals)
- [Building Forms in React](#building-forms-in-react)
- [Controlled vs Uncontrolled Components](#controlled-vs-uncontrolled-components)
- [Form Validation](#form-validation)
- [Connecting Routing with Forms](#connecting-routing-with-forms)
- [Lesson Activities](#lesson-activities)
  - [Activity 1: Setting Up Basic Routing](#activity-1-setting-up-basic-routing-20-minutes)
  - [Activity 2: Building a Simple Form](#activity-2-building-a-simple-form-25-minutes)
  - [Activity 3: Dynamic Routes with Parameters](#activity-3-dynamic-routes-with-parameters-30-minutes)
  - [Activity 4: Multi-Step Registration Form](#activity-4-multi-step-registration-form-45-minutes)
- [Common Mistakes / Misconceptions](#common-mistakes--misconceptions)


## Objectives

By the end of this lesson, you should be able to:

- Configure client-side routing in a React application using React Router
- Create multi-page React applications with consistent navigation
- Implement form handling and data collection in React
- Validate user input and display appropriate feedback
- Use URL parameters to create dynamic routes
- Connect routing with form data to create a complete user flow


## Motivation

### Why React Routing Matters

Single-page applications (SPAs) provide smooth user experiences without page reloads, but they need a way to handle different views and maintain bookmarkable URLs. React Router solves this problem by enabling navigation between different components while maintaining the SPA experience.

In real-world applications like:

- E-commerce sites need product pages, category pages, and checkout flows
- Dashboard applications need multiple views for different data sets
- Social media platforms need profile pages, feeds, and messaging interfaces


### Why Forms Matter

Forms are the primary way users input data into applications. Mastering form handling in React is crucial for:

- User authentication (login/signup)
- Data collection (surveys, user profiles)
- Content creation (posts, comments)
- E-commerce (shipping details, payment information)


As a software engineer, you'll implement these patterns daily across various projects!

## 1️⃣ React Router Fundamentals

### Setting Up React Router

```javascript file="setup-example.tsx"
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Components for our routes
const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Us</h1>;
const Contact = () => <h1>Contact Page</h1>;

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Route definitions */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### Core Router Components

- `BrowserRouter`: Wrapper component that uses HTML5 history API
- `Routes`: Container for multiple Route components
- `Route`: Maps a URL path to a component
- `Link`: Creates navigation links that update the URL without page reload
- `NavLink`: Enhanced Link that can be styled when active
- `Navigate`: Programmatic navigation component
- `useNavigate`: Hook for programmatic navigation
- `useParams`: Hook for accessing URL parameters
- `useLocation`: Hook for accessing current URL information


### URL Parameters and Dynamic Routes

```javascript file="dynamic-routes.tsx"
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

// Dynamic component that uses URL parameters
function ProductDetail() {
  // Extract the productId from the URL
  const { productId } = useParams();
  
  return (
    <div>
      <h1>Product Details</h1>
      <p>Viewing product ID: {productId}</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products/1">Product 1</Link></li>
          <li><Link to="/products/2">Product 2</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        {/* Dynamic route with URL parameter */}
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## 2️⃣ Building Forms in React

### Basic Form Structure

```javascript file="basic-form.tsx"
import { useState } from 'react';

function SimpleForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    // Here you would typically send data to a server
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
}
```

## 3️⃣ Controlled vs Uncontrolled Components

### Controlled Components

In controlled components, React state is the "single source of truth" for form elements:

```javascript file="controlled-component.tsx"
import { useState } from 'react';

function ControlledForm() {
  const [inputValue, setInputValue] = useState('');
  
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  
  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
      />
      <p>Current value: {inputValue}</p>
    </div>
  );
}
```

### Uncontrolled Components

In uncontrolled components, the DOM itself maintains the state:

```javascript file="uncontrolled-component.tsx"
import { useRef } from 'react';

function UncontrolledForm() {
  const inputRef = useRef(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Input value:', inputRef.current.value);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} defaultValue="Default text" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## 4️⃣ Form Validation

### Client-Side Validation

```javascript file="form-validation.tsx"
import { useState } from 'react';

function ValidatedForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const validate = () => {
    const newErrors = {};
    
    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    // Clear errors
    setErrors({});
    
    // Form is valid, proceed with submission
    console.log('Form submitted successfully:', formData);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Using Form Libraries

For complex forms, consider libraries like Formik or React Hook Form:

```javascript file="formik-example.tsx"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

function FormikExample() {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" component="div" className="error" />
          </div>
          
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="div" className="error" />
          </div>
          
          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
```

## 5️⃣ Connecting Routing with Forms

### Form Submission with Redirect

```javascript file="form-with-redirect.tsx"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission to an API
    console.log('Submitting user data:', formData);
    
    // Redirect to a success page with the username
    navigate(`/welcome/${formData.username}`);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Account</h2>
      
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      
      <button type="submit">Register</button>
    </form>
  );
}
```

### Multi-Step Form with Routes

```javascript file="multi-step-form.tsx"
import { useState } from 'react';
import { 
  BrowserRouter, 
  Routes, 
  Route, 
  useNavigate, 
  useParams 
} from 'react-router-dom';

// Form context to share state between steps
const FormContext = React.createContext();

function FormProvider({ children }) {
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: ''
    },
    address: {
      street: '',
      city: '',
      zipCode: ''
    },
    payment: {
      cardNumber: '',
      expiryDate: '',
      cvv: ''
    }
  });
  
  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
}

// Step 1: Personal Information
function PersonalInfoStep() {
  const navigate = useNavigate();
  const { formData, setFormData } = React.useContext(FormContext);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      personalInfo: {
        ...formData.personalInfo,
        [name]: value
      }
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/form/address');
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Step 1: Personal Information</h2>
      
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.personalInfo.firstName}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.personalInfo.lastName}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.personalInfo.email}
          onChange={handleChange}
          required
        />
      </div>
      
      <button type="submit">Next Step</button>
    </form>
  );
}

// Step 2: Address Information
function AddressStep() {
  const navigate = useNavigate();
  const { formData, setFormData } = React.useContext(FormContext);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      address: {
        ...formData.address,
        [name]: value
      }
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/form/payment');
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Step 2: Address Information</h2>
      
      <div>
        <label htmlFor="street">Street:</label>
        <input
          type="text"
          id="street"
          name="street"
          value={formData.address.street}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.address.city}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label htmlFor="zipCode">Zip Code:</label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          value={formData.address.zipCode}
          onChange={handleChange}
          required
        />
      </div>
      
      <button type="button" onClick={() => navigate('/form/personal')}>
        Previous Step
      </button>
      <button type="submit">Next Step</button>
    </form>
  );
}

// Step 3: Payment Information
function PaymentStep() {
  const navigate = useNavigate();
  const { formData, setFormData } = React.useContext(FormContext);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      payment: {
        ...formData.payment,
        [name]: value
      }
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the complete form data
    console.log('Complete form submission:', formData);
    navigate('/form/success');
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Step 3: Payment Information</h2>
      
      <div>
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={formData.payment.cardNumber}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label htmlFor="expiryDate">Expiry Date:</label>
        <input
          type="text"
          id="expiryDate"
          name="expiryDate"
          value={formData.payment.expiryDate}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label htmlFor="cvv">CVV:</label>
        <input
          type="text"
          id="cvv"
          name="cvv"
          value={formData.payment.cvv}
          onChange={handleChange}
          required
        />
      </div>
      
      <button type="button" onClick={() => navigate('/form/address')}>
        Previous Step
      </button>
      <button type="submit">Complete Order</button>
    </form>
  );
}

// Success page
function SuccessStep() {
  const { formData } = React.useContext(FormContext);
  
  return (
    <div>
      <h2>Registration Complete!</h2>
      <p>Thank you, {formData.personalInfo.firstName} {formData.personalInfo.lastName}!</p>
      <p>Your order has been submitted successfully.</p>
      <p>We will send a confirmation to {formData.personalInfo.email}</p>
    </div>
  );
}

// Main App Component
function MultiStepFormApp() {
  return (
    <BrowserRouter>
      <FormProvider>
        <div className="multi-step-form">
          <h1>Multi-Step Registration</h1>
          
          <Routes>
            <Route path="/form/personal" element={<PersonalInfoStep />} />
            <Route path="/form/address" element={<AddressStep />} />
            <Route path="/form/payment" element={<PaymentStep />} />
            <Route path="/form/success" element={<SuccessStep />} />
            <Route path="*" element={<Navigate to="/form/personal" />} />
          </Routes>
        </div>
      </FormProvider>
    </BrowserRouter>
  );
}
```

## Lesson Activities

### Activity 1: Setting Up Basic Routing (20 minutes)

1. Create a new React application using Create React App:

```shellscript
npx create-react-app react-routing-app
cd react-routing-app
```


2. Install React Router:

```shellscript
npm install react-router-dom
```


3. Create the following component files:

1. `src/components/Home.js`
2. `src/components/About.js`
3. `src/components/Contact.js`
4. `src/components/Navbar.js`



4. Implement a basic navigation bar and routing between these components.
5. Test your app with `npm start` and verify navigation works correctly.


### Activity 2: Building a Simple Form (25 minutes)

1. Create a new component file `src/components/ContactForm.js`
2. Implement a contact form with the following fields:

1. Name
2. Email
3. Message



3. Store form data in state using the `useState` hook
4. Implement form validation for:

1. Required fields
2. Email format validation



5. Add a submit handler that logs the form data to the console
6. Style your form using CSS


### Activity 3: Dynamic Routes with Parameters (30 minutes)

1. Create a new component `src/components/ProductList.js` that displays a list of products (at least 5 products with IDs, names, and descriptions)
2. Create a new component `src/components/ProductDetail.js` for displaying a single product's details
3. Implement dynamic routing with URL parameters to display the details of a specific product
4. Use the `useParams` hook to extract the product ID from the URL
5. Add navigation links to go back to the product list
6. Add a "Not Found" component for invalid product IDs


### Activity 4: Multi-Step Registration Form (45 minutes)

1. Create a new folder `src/components/Registration` with the following files:

1. `Step1.js` (Personal Information)
2. `Step2.js` (Address Information)
3. `Step3.js` (Account Setup)
4. `Success.js` (Confirmation Page)



2. Implement routing between these steps with proper navigation:

1. Previous/Next buttons
2. A progress indicator
3. Preservation of form data between steps



3. Add form validation for each step
4. On the final submission, combine all data and display a success message with the user's information
5. Add a "Start Over" button on the success page


## Common Mistakes / Misconceptions

### 1. Not Handling Form State Correctly

**Misconception**: "I can just read values from the DOM when I need them."

**Reality**: React works best with controlled components where form state is managed in React state. Manipulating the DOM directly can cause inconsistencies and bugs.

**Solution**: Always use React state to manage form values:

```javascriptreact
const [value, setValue] = useState('');
<input value={value} onChange={e => setValue(e.target.value)} />
```

### 2. Forgetting to Prevent Default Form Submission

**Misconception**: "React will handle form submission automatically."

**Reality**: Browsers still try to submit forms by default, causing page refreshes.

**Solution**: Always use `e.preventDefault()` in your form submit handlers:

```javascriptreact
const handleSubmit = (e) => {
  e.preventDefault(); // Prevent page refresh
  // Process form data here
};
```

### 3. Not Using Route Parameters Correctly

**Misconception**: "I can access URL parameters directly from the component."

**Reality**: URL parameters need to be accessed using React Router's hooks.

**Solution**: Use the `useParams` hook:

```javascriptreact
import { useParams } from 'react-router-dom';

function MyComponent() {
  const { userId } = useParams();
  // Now you can use userId
}
```

### 4. Misunderstanding Route Matching

**Misconception**: "Routes will only match exact paths."

**Reality**: Routes match partial paths by default in React Router v6.

**Solution**: Be explicit about route matching patterns and use `*` for catch-all routes:

```javascriptreact
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/products/:id" element={<ProductDetail />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

### 5. Not Handling Form Validation Properly

**Misconception**: "I can just check form validity when the user submits."

**Reality**: Good UX provides immediate feedback as users are typing.

**Solution**: Implement both real-time validation and submit validation:

```javascriptreact
// Real-time validation
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
  
  // Validate field as user types
  if (name === 'email') {
    if (!value) {
      setErrors({ ...errors, email: 'Email is required' });
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      setErrors({ ...errors, email: 'Email is invalid' });
    } else {
      setErrors({ ...errors, email: undefined });
    }
  }
};
```

### 6. Overusing Context for Form State

**Misconception**: "I should always use Context for form data."

**Reality**: Context is great for sharing state between distant components, but local state is often sufficient for single forms.

**Solution**: Use local state for simple forms, and only use Context when you need to share form data between components that aren't closely related in the component tree.
