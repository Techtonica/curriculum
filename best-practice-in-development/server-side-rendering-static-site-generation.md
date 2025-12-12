# Server-Side Rendering (SSR) and Static Site Generation (SSG)

⚠️ **_This is intended to be a comprehensive advanced self-guided topic outline. You may come back to the various activities over the course of a week. See respective time estimates for each [activity](#lesson-activities) below._** ⚠️

## Prerequisites

Before starting this lesson, you should have:

- Basic understanding of [JavaScript](https://github.com/Techtonica/curriculum/blob/main/javascript/javascript.md)
- Familiarity with [React](https://github.com/Techtonica/curriculum/blob/main/react-js/react.md) or similar frontend frameworks
- Knowledge of [HTTP/HTTPS](https://github.com/Techtonica/curriculum/blob/main/security/web-security.md)
- Understanding of [APIs and JSON](https://github.com/Techtonica/curriculum/blob/main/api/apis-and-json.md)
- Basic [Command Line](https://github.com/Techtonica/curriculum/blob/main/command-line/command-line-interface.md) skills

## Table of Contents

- [Objectives](#objectives)
- [Motivation](#motivation)
- [Specific Things to Learn](#specific-things-to-learn)
- [Lesson Activities](#lesson-activities)
  - [Understanding Rendering Approaches (20 minutes)](#understanding-rendering-approaches-20-minutes)
  - [Building a Server-Side Rendered Application (45 minutes)](#building-a-server-side-rendered-application-45-minutes)
  - [Implementing Static Site Generation and Hybrid Approaches (45 minutes)](#implementing-static-site-generation-and-hybrid-approaches-45-minutes)
  - [Performance Analysis and Real-world Implementation (60 minutes)](#performance-analysis-and-real-world-implementation-60-minutes)
- [Common Mistakes / Misconceptions](#common-mistakes--misconceptions)

## Objectives

By the end of this lesson, participants will be able to:

1. Explain the differences between Client-Side Rendering (CSR), Server-Side Rendering (SSR), and Static Site Generation (SSG)
2. Implement SSR using Express and React
3. Implement SSG using Node.js and React
4. Determine which rendering strategy is appropriate for different use cases
5. Optimize website performance using appropriate rendering techniques
6. Implement a hybrid approach that combines multiple rendering strategies

## Motivation

### Why is this important?

Understanding different rendering strategies is crucial for modern web development because:

- **Performance**: SSR and SSG can significantly improve perceived load times and core web vitals
- **SEO**: Search engines can more easily index content rendered on the server
- **User Experience**: Faster initial page loads lead to better user retention and conversion rates
- **Accessibility**: Content is available without requiring JavaScript execution
- **Employability**: These skills are in high demand in the job market

### Real-world Applications

- E-commerce platforms use SSG for product catalog pages and SSR for dynamic content like shopping carts
- News and content websites use SSR/SSG to improve SEO and social media sharing
- SaaS dashboards use a mix of rendering strategies for optimal performance
- Marketing websites use SSG for fast-loading, highly optimized pages

## Specific Things to Learn

1. **Rendering Concepts**

   - Client-Side Rendering (CSR) and its limitations
   - Server-Side Rendering (SSR) fundamentals
   - Static Site Generation (SSG) principles
   - Hybrid approaches

2. **Implementation**

   - Setting up an Express server for SSR
   - Using React for server-side rendering
   - Building a static site generator with Node.js
   - Implementing caching strategies

3. **Performance Optimization**

   - Analyzing and comparing rendering strategies
   - Measuring Core Web Vitals
   - Optimizing for mobile devices

4. **Best Practices**
   - When to use each rendering strategy
   - Hybrid approaches for complex applications
   - Handling authentication with SSR/SSG

## Lesson Activities

<a id="understanding-rendering-approaches-20-minutes"></a>

### 1️⃣ Understanding Rendering Approaches (20 minutes)

In this activity, you'll learn about the different rendering approaches through interactive diagrams and code examples.

1. Review the following diagram showing the request flow for CSR, SSR, and SSG:
   <img width="754" alt="Rendering Approaches Comparison" src="https://github.com/user-attachments/assets/7701f85c-b367-4e56-b696-423289396183" />

2. Examine the following code snippets to understand how each approach works:

<details><summary>Client-Side Rendering (CSR)</summary>

```javascript
import React, { useState, useEffect } from 'react';

function ProductPage() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch('/api/products/1');
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    }

    fetchProduct();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
}

export default ProductPage;
```

</details>

<details><summary>Server-Side Rendering (SSR)</summary>

```javascript
// server.js
const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');
const fetch = require('node-fetch');
const ProductPage = require('./components/ProductPage');

const app = express();

app.get('/product/:id', async (req, res) => {
  // Fetch data on the server
  const response = await fetch(
    `https://api.example.com/products/${req.params.id}`
  );
  const product = await response.json();

  // Render React component to HTML string
  const html = renderToString(
    React.createElement(ProductPage, { product, loading: false })
  );

  // Send complete HTML to client
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${product.name}</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_DATA__ = ${JSON.stringify({ product })};
        </script>
        <script src="/client.js"></script>
      </body>
    </html>
  `);
});

app.listen(3000);
```

</details>

<details><summary>Static Site Generation (SSG)</summary>

```javascript
// generate-static-site.js
const fs = require('fs');
const path = require('path');
const React = require('react');
const { renderToString } = require('react-dom/server');
const fetch = require('node-fetch');
const ProductPage = require('./components/ProductPage');

async function generateStaticSite() {
  // Create build directory
  const buildDir = path.join(__dirname, 'build');
  if (!fs.existsSync(buildDir)) {
    fs.mkdirSync(buildDir);
  }

  // Fetch all products
  const response = await fetch('https://api.example.com/products');
  const products = await response.json();

  // Generate a static HTML file for each product
  for (const product of products) {
    const html = renderToString(
      React.createElement(ProductPage, { product, loading: false })
    );

    const productHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${product.name}</title>
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            window.__INITIAL_DATA__ = ${JSON.stringify({ product })};
          </script>
          <script src="/client.js"></script>
        </body>
      </html>
    `;

    fs.writeFileSync(
      path.join(buildDir, `product-${product.id}.html`),
      productHtml
    );
  }
}

generateStaticSite();
```

</details>

3. Discuss the key differences between these approaches:
   - CSR: Data fetching and rendering happen on the client
   - SSR: Data fetching and initial rendering happen on the server
   - SSG: Data fetching and rendering happen at build time

<a id="building-a-server-side-rendered-application-45-minutes"></a>

### 2️⃣ Building a Server-Side Rendered Application (45 minutes)

In this activity, you'll build a simple Express server that renders React components on the server.

1. Set up a basic Express server:
<details><summary>Click to view javascript code</summary>

```javascript
// server.js
const express = require('express');
const path = require('path');
const React = require('react');
const { renderToString } = require('react-dom/server');
const fetch = require('node-fetch');

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR/SSG Topic Outline</title>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <h1>Welcome to the SSR/SSG Topic Outline</h1>
        <p>This is a basic Express server.</p>
        <ul>
          <li><a href="/products/ssr">View SSR Products</a></li>
        </ul>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

</details>

2. Create a React component for the products page:
<details><summary>Click to view javascript code</summary>

```javascript
// components/ProductsPage.jsx
import React from 'react';

function ProductsPage({ products, timestamp }) {
  return (
    <div className="products-page">
      <h1>Products (SSR)</h1>
      <p className="timestamp">
        Page generated at: {new Date(timestamp).toLocaleTimeString()}
      </p>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.title}</h2>
            <p>{product.description.substring(0, 100)}...</p>
            <p className="price">${product.price}</p>
            <p className="category">Category: {product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
```

</details>

3. Add a route for server-side rendering:
<details><summary>Click to view javascript code</summary>

```javascript
// Add this to server.js
app.get('/products/ssr', async (req, res) => {
  try {
    // Fetch data from an API
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();

    // Import the ProductsPage component
    const ProductsPage = require('./components/ProductsPage').default;

    // Data to pass to the React component
    const initialData = {
      products,
      timestamp: Date.now()
    };

    // Render React component to string
    const reactHtml = renderToString(
      React.createElement(ProductsPage, initialData)
    );

    // Send complete HTML with pre-rendered React component
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Products (SSR)</title>
          <link rel="stylesheet" href="/styles.css">
          <script>
            window.__INITIAL_DATA__ = ${JSON.stringify(initialData)};
          </script>
        </head>
        <body>
          <div id="root">${reactHtml}</div>
          
          <script>
            // Simple client-side JavaScript for interactivity
            document.addEventListener('DOMContentLoaded', function() {
              const initialData = window.__INITIAL_DATA__;
              const products = initialData.products;
              
              // Add a simple filter input
              const filterContainer = document.createElement('div');
              filterContainer.className = 'filter-container';
              filterContainer.style.margin = '20px 0';
              
              const filterLabel = document.createElement('label');
              filterLabel.textContent = 'Filter products: ';
              filterLabel.setAttribute('for', 'product-filter');
              
              const filterInput = document.createElement('input');
              filterInput.type = 'text';
              filterInput.id = 'product-filter';
              filterInput.placeholder = 'Type to filter...';
              
              filterContainer.appendChild(filterLabel);
              filterContainer.appendChild(filterInput);
              
              const root = document.getElementById('root');
              root.insertBefore(filterContainer, root.querySelector('.products-grid'));
              
              // Add filter functionality
              filterInput.addEventListener('input', function() {
                const filterText = this.value.toLowerCase();
                const productCards = document.querySelectorAll('.product-card');
                
                productCards.forEach(card => {
                  const title = card.querySelector('h2').textContent.toLowerCase();
                  const description = card.querySelector('p').textContent.toLowerCase();
                  
                  if (title.includes(filterText) || description.includes(filterText)) {
                    card.style.display = '';
                  } else {
                    card.style.display = 'none';
                  }
                });
              });
            });
          </script>
        </body>
      </html>
    `);
  } catch (error) {
    res.status(500).send('Error: ' + error.message);
  }
});
```

</details>

4. Create a CSS file for styling:
<details><summary>Click to view css code</summary>

```css
/* public/styles.css */
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.6;
  color: #333;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
}

.timestamp {
  color: #666;
  font-style: italic;
  margin-bottom: 20px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-card h2 {
  margin-top: 0;
  font-size: 1.2rem;
}

.price {
  font-weight: bold;
  color: #e63946;
}

.category {
  color: #666;
  font-size: 0.9rem;
}

.filter-container {
  margin: 20px 0;
}

.filter-container input {
  padding: 8px;
  margin-left: 10px;
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
```

</details>

5. Start your server and visit `http://localhost:3000/products/ssr` to see the server-side rendered page.
6. Observe how the page is fully rendered when it arrives at the browser, and then enhanced with client-side JavaScript for interactivity.

<a id="implementing-static-site-generation-and-hybrid-approaches-45-minutes"></a>

### 3️⃣ Implementing Static Site Generation and Hybrid Approaches (45 minutes)

In this activity, you'll implement Static Site Generation and a hybrid approach that combines server-side rendering with client-side interactivity.

1. Create a static site generator script:
<details><summary>Click to view javascript code</summary>

```javascript
// generate-static-site.js
const fs = require('fs');
const path = require('path');
const React = require('react');
const { renderToString } = require('react-dom/server');
const fetch = require('node-fetch');

async function generateStaticSite() {
  try {
    console.log('Starting static site generation...');

    // Create build directory if it doesn't exist
    const buildDir = path.join(__dirname, 'build');
    if (!fs.existsSync(buildDir)) {
      fs.mkdirSync(buildDir);
    }

    // Create products directory
    const productsDir = path.join(buildDir, 'products');
    if (!fs.existsSync(productsDir)) {
      fs.mkdirSync(productsDir);
    }

    // Copy CSS file to build directory
    fs.copyFileSync(
      path.join(__dirname, 'public', 'styles.css'),
      path.join(buildDir, 'styles.css')
    );

    // Fetch products data
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();

    // Import the ProductsPage component
    const ProductsPage = require('./components/ProductsPage').default;

    // Generate products page
    const initialData = {
      products,
      timestamp: Date.now()
    };

    const reactHtml = renderToString(
      React.createElement(ProductsPage, initialData)
    );

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Products (SSG)</title>
          <link rel="stylesheet" href="/styles.css">
          <script>
            window.__INITIAL_DATA__ = ${JSON.stringify(initialData)};
          </script>
        </head>
        <body>
          <div id="root">${reactHtml}</div>
          
          <script>
            // Simple client-side JavaScript for interactivity
            document.addEventListener('DOMContentLoaded', function() {
              const initialData = window.__INITIAL_DATA__;
              const products = initialData.products;
              
              // Add a simple filter input
              const filterContainer = document.createElement('div');
              filterContainer.className = 'filter-container';
              filterContainer.style.margin = '20px 0';
              
              const filterLabel = document.createElement('label');
              filterLabel.textContent = 'Filter products: ';
              filterLabel.setAttribute('for', 'product-filter');
              
              const filterInput = document.createElement('input');
              filterInput.type = 'text';
              filterInput.id = 'product-filter';
              filterInput.placeholder = 'Type to filter...';
              
              filterContainer.appendChild(filterLabel);
              filterContainer.appendChild(filterInput);
              
              const root = document.getElementById('root');
              root.insertBefore(filterContainer, root.querySelector('.products-grid'));
              
              // Add filter functionality
              filterInput.addEventListener('input', function() {
                const filterText = this.value.toLowerCase();
                const productCards = document.querySelectorAll('.product-card');
                
                productCards.forEach(card => {
                  const title = card.querySelector('h2').textContent.toLowerCase();
                  const description = card.querySelector('p').textContent.toLowerCase();
                  
                  if (title.includes(filterText) || description.includes(filterText)) {
                    card.style.display = '';
                  } else {
                    card.style.display = 'none';
                  }
                });
              });
            });
          </script>
        </body>
      </html>
    `;

    fs.writeFileSync(path.join(productsDir, 'ssg.html'), html);

    // Generate index page
    const indexHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>SSR/SSG Topic Outline</title>
          <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
          <h1>Welcome to the SSR/SSG Topic Outline</h1>
          <p>This is a statically generated site.</p>
          <a href="/products/ssg.html">View SSG Products</a>
        </body>
      </html>
    `;

    fs.writeFileSync(path.join(buildDir, 'index.html'), indexHtml);

    console.log('Static site generation complete!');
  } catch (error) {
    console.error('Error generating static site:', error);
  }
}

generateStaticSite();
```

</details>

2. Add a script to your `package.json` to generate the static site:

```json
"scripts": {
  "start": "node server.js",
  "build": "node generate-static-site.js"
}
```

3. Run the static site generator:

```shellscript
npm run build
```

4. Update your `server.js` to serve the static site:

```javascript
// Add this route to serve the static site
app.use('/static', express.static(path.join(__dirname, 'build')));

// Update the home page to include the static site link
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR/SSG Topic Outline</title>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <h1>Welcome to the SSR/SSG Topic Outline</h1>
        <p>This is a basic Express server.</p>
        <ul>
          <li><a href="/products/ssr">View SSR Products</a></li>
          <li><a href="/static/products/ssg.html">View SSG Products</a></li>
        </ul>
      </body>
    </html>
  `);
});
```

5. Now, implement a hybrid approach that combines server-side rendering with enhanced client-side interactivity:
<details><summary>Click to view javascript code</summary>

```javascript
// Add this route for the hybrid approach
app.get('/products/hybrid', async (req, res) => {
  try {
    // Fetch data from an API
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();

    // Get unique categories for the filter
    const categories = ['all', ...new Set(products.map((p) => p.category))];

    // Import the ProductsPage component
    const ProductsPage = require('./components/ProductsPage').default;

    // Data to pass to the React component
    const initialData = {
      products,
      timestamp: Date.now()
    };

    // Render React component to string
    const reactHtml = renderToString(
      React.createElement(ProductsPage, initialData)
    );

    // Send complete HTML with pre-rendered React component
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Products (Hybrid)</title>
          <link rel="stylesheet" href="/styles.css">
          <script>
            window.__INITIAL_DATA__ = ${JSON.stringify(initialData)};
          </script>
        </head>
        <body>
          <div id="root">${reactHtml}</div>
          
          <div class="controls" style="margin: 20px 0; display: flex; justify-content: space-between;">
            <div class="filter-container">
              <label for="category-filter">Filter by category: </label>
              <select id="category-filter">
                ${categories
                  .map((cat) => `<option value="${cat}">${cat}</option>`)
                  .join('')}
              </select>
            </div>
            
            <button id="refresh-data">Refresh Data</button>
          </div>
          
          <script>
            // Enhanced client-side JavaScript for the hybrid approach
            document.addEventListener('DOMContentLoaded', function() {
              const initialData = window.__INITIAL_DATA__;
              let products = initialData.products;
              
              // Category filter functionality
              const categoryFilter = document.getElementById('category-filter');
              categoryFilter.addEventListener('change', function() {
                const selectedCategory = this.value;
                const productCards = document.querySelectorAll('.product-card');
                
                productCards.forEach(card => {
                  const category = card.querySelector('.category').textContent.replace('Category: ', '');
                  
                  if (selectedCategory === 'all' || category === selectedCategory) {
                    card.style.display = '';
                  } else {
                    card.style.display = 'none';
                  }
                });
              });
              
              // Refresh data functionality
              const refreshButton = document.getElementById('refresh-data');
              refreshButton.addEventListener('click', async function() {
                this.textContent = 'Loading...';
                this.disabled = true;
                
                try {
                  const response = await fetch('/api/products');
                  const newProducts = await response.json();
                  products = newProducts;
                  
                  // Update the products grid
                  const productsGrid = document.querySelector('.products-grid');
                  productsGrid.innerHTML = newProducts.map(product => \`
                    <div class="product-card">
                      <h2>\${product.title}</h2>
                      <p>\${product.description.substring(0, 100)}...</p>
                      <p class="price">$\${product.price}</p>
                      <p class="category">Category: \${product.category}</p>
                    </div>
                  \`).join('');
                  
                  // Update timestamp
                  const timestamp = document.querySelector('.timestamp');
                  timestamp.textContent = 'Page refreshed at: ' + new Date().toLocaleTimeString();
                  
                } catch (error) {
                  console.error('Error refreshing data:', error);
                } finally {
                  this.textContent = 'Refresh Data';
                  this.disabled = false;
                }
              });
            });
          </script>
        </body>
      </html>
    `);
  } catch (error) {
    res.status(500).send('Error: ' + error.message);
  }
});

// Add an API endpoint for the refresh functionality
app.get('/api/products', async (req, res) => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update the home page to include the hybrid approach link
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR/SSG Topic Outline</title>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <h1>Welcome to the SSR/SSG Topic Outline</h1>
        <p>This is a basic Express server.</p>
        <ul>
          <li><a href="/products/ssr">View SSR Products</a></li>
          <li><a href="/static/products/ssg.html">View SSG Products</a></li>
          <li><a href="/products/hybrid">View Hybrid Approach</a></li>
        </ul>
      </body>
    </html>
  `);
});
```

</details>

6. Restart your server and visit:
   - `http://localhost:3000/static/products/ssg.html` to see the statically generated page
   - `http://localhost:3000/products/hybrid` to see the hybrid approach
7. Compare the different approaches and observe how they handle:
   - Initial page load
   - Client-side interactivity
   - Data refreshing

<a id="performance-analysis-and-real-world-implementation-60-minutes"></a>

### 4️⃣ Performance Analysis and Real-world Implementation (60 minutes)

In this activity, you'll analyze the performance of different rendering strategies and implement a real-world example with a simple blog.

1. Create a comparison page in `server.js`:
<details><summary>Click to view javascript code</summary>

```javascript
// Comparison page
app.get('/comparison', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Rendering Strategies Comparison</title>
        <link rel="stylesheet" href="/styles.css">
        <style>
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
          }
          th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
          }
          th {
            background-color: #f2f2f2;
          }
          .card {
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
          }
        </style>
      </head>
      <body>
        <h1>Rendering Strategies Comparison</h1>
        
        <div class="grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
          <div class="card">
            <h2>Server-Side Rendering (SSR)</h2>
            <p>Generated on each request. Best for highly dynamic content.</p>
            <a href="/products/ssr">View SSR Example</a>
          </div>
          
          <div class="card">
            <h2>Static Site Generation (SSG)</h2>
            <p>Generated at build time. Best for static content.</p>
            <a href="/static/products/ssg.html">View SSG Example</a>
          </div>
          
          <div class="card">
            <h2>Hybrid Approach</h2>
            <p>Server rendering with client-side interactivity. Best for interactive applications with SEO requirements.</p>
            <a href="/products/hybrid">View Hybrid Example</a>
          </div>
        </div>
        
        <div>
          <h2>Performance Comparison</h2>
          
          <table>
            <thead>
              <tr>
                <th>Metric</th>
                <th>SSR</th>
                <th>SSG</th>
                <th>Hybrid</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Time to First Byte (TTFB)</td>
                <td>Slower (server processing)</td>
                <td>Fastest (pre-rendered)</td>
                <td>Fast (cached)</td>
              </tr>
              <tr>
                <td>First Contentful Paint (FCP)</td>
                <td>Medium</td>
                <td>Fast</td>
                <td>Fast</td>
              </tr>
              <tr>
                <td>Time to Interactive (TTI)</td>
                <td>Medium</td>
                <td>Fast</td>
                <td>Fast</td>
              </tr>
              <tr>
                <td>Server Load</td>
                <td>High</td>
                <td>Low</td>
                <td>Medium</td>
              </tr>
              <tr>
                <td>Content Freshness</td>
                <td>Always fresh</td>
                <td>Only at build time</td>
                <td>Configurable</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div>
          <h2>When to Use Each Approach</h2>
          
          <h3>Use SSR when:</h3>
          <ul>
            <li>Content needs to be always up-to-date</li>
            <li>Pages are highly personalized</li>
            <li>SEO is critical for dynamic content</li>
            <li>Example: Social media feeds, dashboards with real-time data</li>
          </ul>
          
          <h3>Use SSG when:</h3>
          <ul>
            <li>Content changes infrequently</li>
            <li>Pages are the same for all users</li>
            <li>Maximum performance is required</li>
            <li>Example: Marketing pages, blogs, documentation</li>
          </ul>
          
          <h3>Use Hybrid when:</h3>
          <ul>
            <li>You need both SEO and interactivity</li>
            <li>Some content is static, some is dynamic</li>
            <li>You want to optimize for both performance and freshness</li>
            <li>Example: E-commerce product pages, news sites</li>
          </ul>
        </div>
        
        <a href="/">Back to Home</a>
      </body>
    </html>
  `);
});

// Update the home page to include the comparison link
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR/SSG Topic Outline</title>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <h1>Welcome to the SSR/SSG Topic Outline</h1>
        <p>This is a basic Express server.</p>
        <ul>
          <li><a href="/products/ssr">View SSR Products</a></li>
          <li><a href="/static/products/ssg.html">View SSG Products</a></li>
          <li><a href="/products/hybrid">View Hybrid Approach</a></li>
          <li><a href="/comparison">View Rendering Strategies Comparison</a></li>
        </ul>
      </body>
    </html>
  `);
});
```

2. Create a simple blog with different rendering strategies for different pages:
<details><summary>Click to view javascript code</summary>

```javascript
// Create a blog data file
// data/posts.js
exports.posts = [
  {
    id: 1,
    title: 'Understanding Server-Side Rendering',
    excerpt: 'Learn the basics of SSR and how it improves web performance.',
    content: `
      # Understanding Server-Side Rendering
      
      Server-Side Rendering (SSR) is a technique where the HTML of a page is generated on the server for each request. This approach offers several benefits:
      
      ## Benefits of SSR
      
      1. **Better SEO**: Search engines can crawl the fully rendered page.
      2. **Faster First Contentful Paint**: Users see content sooner.
      3. **Improved Performance on Low-End Devices**: Less JavaScript to parse and execute.
      
      ## How SSR Works
      
      When a user requests a page, the server fetches the necessary data, renders the React components to HTML, and sends the fully formed HTML to the client. The client's JavaScript then "hydrates" the HTML, attaching event listeners to make the page interactive.
    `,
    author: 'Jane Smith',
    date: '2023-04-15',
    category: 'Web Development'
  },
  {
    id: 2,
    title: 'Static Site Generation: The Performance Champion',
    excerpt: 'Discover how SSG can dramatically improve your site speed.',
    content: `
      # Static Site Generation: The Performance Champion
      
      Static Site Generation (SSG) is a technique where HTML is generated at build time rather than at request time. This approach offers exceptional performance benefits.
      
      ## Benefits of SSG
      
      1. **Extremely Fast Load Times**: Pages are pre-rendered and can be served from a CDN.
      2. **Reduced Server Load**: The server doesn't need to render pages on demand.
      3. **Improved Reliability**: Static sites have fewer points of failure.
      
      ## When to Use SSG
      
      SSG is ideal for content that doesn't change frequently, such as:
      
    - Marketing pages
    - Blog posts
    - Documentation
    - Product listings (that don't require real-time inventory)
    `,
    author: 'Alex Johnson',
    date: '2023-04-20',
    category: 'Performance'
  },
  {
    id: 3,
    title: 'Hybrid Rendering Approaches',
    excerpt: 'Learn how to combine SSR and CSR for the best of both worlds.',
    content: `
      # Hybrid Rendering Approaches
      
      A hybrid rendering approach combines the benefits of server-side rendering and client-side rendering. This gives you the SEO and initial load benefits of SSR with the interactivity of CSR.
      
      ## How Hybrid Rendering Works
      
      1. The initial page is rendered on the server for fast first paint and SEO.
      2. The client-side JavaScript takes over for subsequent interactions.
      3. Additional data can be loaded client-side as needed.
      
      ## Benefits of Hybrid Rendering
      
      1. **Good SEO**: The initial content is server-rendered and indexable.
      2. **Fast Initial Load**: Users see content quickly.
      3. **Rich Interactivity**: Client-side JavaScript enables dynamic features.
    `,
    author: 'Maria Garcia',
    date: '2023-04-25',
    category: 'Web Development'
  }
];

exports.getPostById = function (id) {
  return this.posts.find((post) => post.id === Number(id));
};
```

</details>

3. Install the marked library for Markdown rendering:

```shellscript
npm install marked
```

4. Add blog routes to your `server.js`:
<details><summary>Click to view javascript code</summary>

```javascript
// Add these routes to your server.js
const { posts, getPostById } = require('./data/posts');
const marked = require('marked');

// Blog home page (SSG approach)
app.get('/blog', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Blog</title>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <div class="blog-home">
          <h1>Blog</h1>
          
          <div class="posts-grid">
            ${posts
              .map(
                (post) => `
              <div class="post-card">
                <h2>
                  <a href="/blog/posts/${post.id}">${post.title}</a>
                </h2>
                <p>${post.excerpt}</p>
                <div class="post-meta">
                  <span>${post.author}</span>
                  <span>${post.date}</span>
                </div>
              </div>
            `
              )
              .join('')}
          </div>
        </div>
        
        <a href="/">Back to Home</a>
      </body>
    </html>
  `);
});

// Blog post page (SSR approach)
app.get('/blog/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = getPostById(postId);

  if (!post) {
    return res.status(404).send('Post not found');
  }

  // Convert markdown to HTML
  const contentHtml = marked(post.content);

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${post.title}</title>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <div class="blog-post">
          <a href="/blog" class="back-link">← Back to Blog</a>
          
          <article>
            <h1>${post.title}</h1>
            <div class="post-meta">
              <span>${post.author}</span>
              <span>${post.date}</span>
            </div>
            
            <div class="post-content">
              ${contentHtml}
            </div>
          </article>
          
          <div class="post-footer">
            <a href="/blog/comments/${post.id}">View Comments</a>
          </div>
        </div>
      </body>
    </html>
  `);
});

// Comments section (Hybrid approach for dynamic content)
app.get('/blog/comments/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = getPostById(postId);

  if (!post) {
    return res.status(404).send('Post not found');
  }

  // Mock comments data - in a real app, this would come from a database
  const INITIAL_COMMENTS = {
    1: [
      {
        id: 1,
        author: 'John Doe',
        text: 'Great article! Very informative.',
        date: '2023-04-16'
      },
      {
        id: 2,
        author: 'Sarah Lee',
        text: 'I have a question about SSG vs. ISR. When would you choose one over the other?',
        date: '2023-04-17'
      }
    ],
    2: [
      {
        id: 1,
        author: 'Michael Chen',
        text: 'This helped me understand static generation much better!',
        date: '2023-04-21'
      }
    ],
    3: [
      {
        id: 1,
        author: 'Emily Wilson',
        text: 'Hybrid approaches are a game-changer for my e-commerce site.',
        date: '2023-04-26'
      },
      {
        id: 2,
        author: 'David Brown',
        text: 'How does this compare to traditional SSR frameworks?',
        date: '2023-04-27'
      }
    ]
  };

  const comments = INITIAL_COMMENTS[postId] || [];

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Comments for ${post.title}</title>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <div class="comments-section">
          <a href="/blog/posts/${postId}" class="back-link">← Back to Article</a>
          
          <h1>Comments</h1>
          
          <div class="comments-list">
            ${
              comments.length > 0
                ? comments
                    .map(
                      (comment) => `
              <div class="comment">
                <div class="comment-header">
                  <span class="comment-author">${comment.author}</span>
                  <span class="comment-date">${comment.date}</span>
                </div>
                <p>${comment.text}</p>
              </div>
            `
                    )
                    .join('')
                : '<p class="no-comments">No comments yet. Be the first to comment!</p>'
            }
          </div>
          
          <form class="comment-form">
            <h2>Add a Comment</h2>
            
            <div class="form-group">
              <label>Name</label>
              <input type="text" name="author" required>
            </div>
            
            <div class="form-group">
              <label>Comment</label>
              <textarea name="text" rows="4" required></textarea>
            </div>
            
            <button type="submit" class="submit-button">
              Submit Comment
            </button>
          </form>
          
          <script>
            // Client-side JavaScript for comment functionality
            document.addEventListener('DOMContentLoaded', function() {
              const form = document.querySelector('.comment-form');
              const commentsList = document.querySelector('.comments-list');
              
              form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const authorInput = this.querySelector('input[name="author"]');
                const textInput = this.querySelector('textarea[name="text"]');
                
                const author = authorInput.value.trim();
                const text = textInput.value.trim();
                
                if (!author || !text) return;
                
                const comment = {
                  id: Date.now(),
                  author,
                  text,
                  date: new Date().toISOString().split('T')[0]
                };
                
                // Add comment to the list
                const commentElement = document.createElement('div');
                commentElement.className = 'comment';
                commentElement.innerHTML = \`
                  <div class="comment-header">
                    <span class="comment-author">\${comment.author}</span>
                    <span class="comment-date">\${comment.date}</span>
                  </div>
                  <p>\${comment.text}</p>
                \`;
                
                // If there's a "no comments" message, remove it
                const noComments = commentsList.querySelector('.no-comments');
                if (noComments) {
                  commentsList.removeChild(noComments);
                }
                
                commentsList.appendChild(commentElement);
                
                // Clear the form
                authorInput.value = '';
                textInput.value = '';
                
                // In a real app, you would send this to your API
                console.log('Submitting comment:', comment);
              });
            });
          </script>
        </div>
      </body>
    </html>
  `);
});

// Update the home page to include the blog link
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR/SSG Topic Outline</title>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <h1>Welcome to the SSR/SSG Topic Outline</h1>
        <p>This is a basic Express server.</p>
        <ul>
          <li><a href="/products/ssr">View SSR Products</a></li>
          <li><a href="/static/products/ssg.html">View SSG Products</a></li>
          <li><a href="/products/hybrid">View Hybrid Approach</a></li>
          <li><a href="/comparison">View Rendering Strategies Comparison</a></li>
          <li><a href="/blog">Visit Blog</a></li>
        </ul>
      </body>
    </html>
  `);
});
```

</details>

5. Add blog styles to your CSS:
<details><summary>Click to view css code</summary>

```css
/* Add these styles to your existing CSS */
.blog-home {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.posts-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-top: 20px;
}

.post-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.post-meta {
  display: flex;
  justify-content: space-between;
  color: #666;
  font-size: 0.9em;
  margin-top: 10px;
}

.blog-post {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.back-link {
  display: inline-block;
  margin-bottom: 20px;
  color: #0066cc;
  text-decoration: none;
}

.back-link:hover {
  text-decoration: underline;
}

.post-content {
  margin: 20px 0;
  line-height: 1.6;
}

.post-content h1,
.post-content h2,
.post-content h3 {
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}

.post-content pre {
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 5px;
  overflow-x: auto;
}

.post-footer {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #ddd;
}

.comments-section {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.comments-list {
  margin: 20px 0;
}

.comment {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.comment-author {
  font-weight: bold;
}

.comment-date {
  color: #666;
  font-size: 0.9em;
}

.no-comments {
  color: #666;
  font-style: italic;
}

.comment-form {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-top: 30px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.submit-button {
  background-color: #0066cc;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0052a3;
}
```

</details>

6. Restart your server and test your application by navigating to:
   - `/comparison` to see the performance comparison
   - `/blog` to see the blog home page
   - Click on a blog post to see the SSR approach
   - Click on "View Comments" to see the hybrid approach with client-side interactivity
7. Use Chrome DevTools to analyze the performance of each page:
   - Open DevTools (F12)
   - Go to the "Performance" tab
   - Click the record button and then navigate to each page
   - Stop the recording and analyze metrics like FCP, LCP, and TTI

## Common Mistakes / Misconceptions

1. **"SSR is always better for SEO than CSR"**
   While SSR does provide fully rendered HTML for search engines, modern search engines like Google can index client-rendered content. However, SSR still provides better guarantees for SEO.

2. **"Static generation means the site can't be interactive"**
   Static generation only affects the initial HTML. After JavaScript loads, the site becomes fully interactive with all the capabilities of a client-side app.

3. **"SSG is only for simple sites"**
   With proper architecture, SSG can handle complex, data-driven sites with thousands of pages.

4. **"SSR is always slower than CSR"**
   While SSR may increase Time to First Byte (TTFB), it often improves First Contentful Paint (FCP) and Time to Interactive (TTI), especially on slower devices.

5. **"I need to choose one rendering strategy for my entire site"**
   Modern applications can mix and match rendering strategies on a per-page or even per-component basis.

6. **"Caching is the same as static generation"**
   While caching can improve performance, SSG pre-renders pages at build time, which is fundamentally different from caching dynamic content.

7. **"SSG doesn't work for personalized content"**
   You can use SSG for the shell of your application and fetch personalized content client-side after the initial load.

8. **"Express and React are too complex for SSR"**
   While there is some setup involved, the core concepts of SSR with Express and React are straightforward and provide significant benefits.
