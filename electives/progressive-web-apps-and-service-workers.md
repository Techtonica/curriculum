# Service Workers, Progressive Web Apps (PWAs), and PWA Development

## Prerequisites
- [JavaScript Fundamentals](https://github.com/Techtonica/curriculum/blob/main/javascript/javascript-1-variables.md)
- [HTML & CSS Basics](https://github.com/Techtonica/curriculum/blob/main/web/html.md)
- [HTTP & Web Requests](https://github.com/Techtonica/curriculum/blob/main/api/http-request-practice.md)
- [Intro to Web APIs](https://github.com/Techtonica/curriculum/blob/main/api/intro-to-apis.md)
- [JSON](https://github.com/Techtonica/curriculum/blob/main/api/apis-and-json.md)
- [Promises & Async/Await](https://github.com/Techtonica/curriculum/blob/main/javascript/javascript-7-oop.md)


## Table of Contents

- [Objectives](#objectives)
- [Motivation](#motivation)
- [Specific Things to Learn](#specific-things-to-learn)
- [Lesson Activities](#lesson-activities)
    - [Activity 1: Implementing Offline Functionality](#activity-1-implementing-offline-functionality)
    - [Activity 2: Building Your First PWA](#activity-2-building-your-first-pwa)
    - [Activity 3: Testing and Debugging PWAs](#activity-3-testing-and-debugging-pwas)
    - [Activity 4: PWA Performance Optimization](#activity-4-pwa-performance-optimization)
- [Common Mistakes / Misconceptions](#common-mistakes--misconceptions)
- [Additional Resources](#additional-resources)


## Objectives

By the end of this lesson, participants will be able to:
1. Explain what Progressive Web Apps are and their key features
2. Understand how service workers function and their role in PWAs
3. Create and configure a Web App Manifest
4. Implement offline functionality in a web application
5. Build, test, and debug a simple PWA
6. Optimize PWA performance for various devices and network conditions
7. Deploy a PWA to production


## Motivation

Progressive Web Apps represent a modern approach to web development that combines the best of web and mobile applications. They are increasingly important in today's tech landscape for several reasons:

- **Enhanced User Experience**: PWAs provide app-like experiences with fast load times and smooth interactions, even on unreliable networks.
- **Cross-Platform Compatibility**: Build once, run anywhere - PWAs work across devices and platforms without requiring separate codebases.
- **Offline Functionality**: Users can continue using PWAs even without an internet connection.
- **Increased Engagement**: Features like push notifications help keep users engaged with your application.
- **Improved Conversion Rates**: Companies like Twitter, Pinterest, and Starbucks have reported significant increases in engagement, conversions, and revenue after implementing PWAs.
- **Reduced Development Costs**: Maintaining a single codebase instead of separate web and mobile applications can significantly reduce development and maintenance costs.


As a full stack engineer, understanding PWAs will make you more versatile and valuable in the job market, as more companies adopt this technology to improve user experience and reach.

## Specific Things to Learn

### 1. PWA Fundamentals

**What are PWAs?**
Progressive Web Apps are web applications that use modern web capabilities to deliver app-like experiences to users. They evolve from pages in browser tabs to immersive, top-level apps, maintaining the web's low friction at every moment.

**Core Principles:**
- **Progressive** - Work for every user, regardless of browser choice, using progressive enhancement principles
- **Responsive** - Fit any form factor: desktop, mobile, tablet, or whatever is next
- **Connectivity independent** - Enhanced with service workers to work offline or on low-quality networks
- **App-like** - Feel like an app with app-style interactions and navigation
- **Fresh** - Always up-to-date thanks to the service worker update process
- **Safe** - Served via HTTPS to prevent snooping and ensure content hasn't been tampered with
- **Discoverable** - Identifiable as "applications" thanks to W3C manifests and service worker registration
- **Re-engageable** - Make re-engagement easy through features like push notifications
- **Installable** - Allow users to "keep" apps they find most useful on their home screen
- **Linkable** - Easily share via URL, not requiring complex installation


**Real-World Examples:**
- **Twitter Lite**: Reduced data usage by 70%, increased pages per session by 65%, decreased bounce rate by 20%, and increased tweets sent by 75%.
- **Starbucks PWA**: Their ordering PWA is 99.84% smaller than their iOS app, resulting in 2x daily active users.
- **Pinterest**: Saw a 60% increase in core engagements and a 44% increase in user-generated ad revenue after implementing a PWA.


**Comparison with Other App Types:**

| Feature | Traditional Website | Native App | PWA
|-----|-----|-----|-----
| Installation | Not required | App store download | Add to home screen
| Offline access | Limited/None | Full | Full
| Updates | Immediate | Manual/Auto via store | Automatic
| Discoverability | Search engines | App stores | Search engines + App stores (emerging)
| Push notifications | Limited | Full support | Full support
| Device features access | Limited | Full | Growing
| Development cost | Lower | Higher | Medium
| Maintenance | Single codebase | Multiple codebases | Single codebase


**Benefits:**
- Faster loading times and smoother performance
- Lower development costs compared to native apps
- No app store approval process
- Automatic updates without user intervention
- Lower data usage than native apps
- Cross-platform compatibility


**Tradeoffs:**
- Limited access to some device features (though this gap is closing)
- May consume more battery than native apps
- Browser compatibility considerations
- Less visibility than app store presence (though this is changing with app stores beginning to include PWAs)


### 2. Service Workers

**What are Service Workers?**
Service workers are JavaScript files that run separately from the main browser thread, intercepting network requests, caching or retrieving resources from the cache, and delivering push messages. They serve as a programmable network proxy, allowing precise control over how network requests are handled.

**How They Work:**
Service workers run in a worker context, which means they have no DOM access and run on a different thread than the main JavaScript. They can respond to network requests from your web application through the Fetch API, allowing them to serve cached content when users are offline.

**Lifecycle:**
1. **Registration** - Your web app registers the service worker script
2. **Installation** - The browser installs the service worker if it's new or has changed
3. **Activation** - The service worker activates after installation, often after page refresh
4. **Idle** - The service worker waits for events
5. **Fetch/Message** - The service worker handles fetch or message events
6. **Terminated** - The service worker terminates when not in use to save memory


**Caching Strategies:**
- **Cache-first** - Check cache, then network if not found (best for static assets)
- **Network-first** - Try network, fall back to cache (best for dynamic content)
- **Stale-while-revalidate** - Serve from cache while updating cache from network (balance of speed and freshness)
- **Cache-only** - Only serve from cache (for truly static content)
- **Network-only** - Only serve from network (for content that must be fresh)


**Real-World Applications:**
- **Offline Google Maps** - Allows users to download and use maps without a connection
- **Spotify's PWA** - Caches music for offline playback
- **Financial Times** - Provides offline reading of articles


**Benefits:**
- Enable offline functionality
- Improve performance by serving cached resources
- Reduce server load
- Enable background syncing and push notifications


**Tradeoffs:**
- Increased complexity in application architecture
- Potential for stale content if not managed properly
- Debugging can be more challenging
- Browser compatibility considerations


### 3. Web App Manifest

**What is a Web App Manifest?**
A JSON file that provides information about a web application in a JSON text file, necessary for the web app to be downloaded and be presented to the user similarly to a native app (e.g., be installed on the homescreen of a device).

**Key Fields:**
- `name` and `short_name` - The application's name
- `icons` - Array of image objects for different device resolutions
- `start_url` - The URL that loads when a user launches the application
- `display` - The preferred display mode (fullscreen, standalone, minimal-ui, browser)
- `background_color` - The background color of the splash screen
- `theme_color` - The color of the browser UI elements
- `description` - A general description of the application
- `orientation` - The default orientation of the application


**Real-World Example:**

```json
{
  "name": "Weather PWA",
  "short_name": "Weather",
  "icons": [{
    "src": "images/icons/icon-128x128.png",
    "sizes": "128x128",
    "type": "image/png"
  }, {
    "src": "images/icons/icon-144x144.png",
    "sizes": "144x144",
    "type": "image/png"
  }],
  "start_url": "/index.html",
  "display": "standalone",
  "background_color": "#3E4EB8",
  "theme_color": "#2F3BA2"
}
```

**Benefits:**
- Enables "Add to Home Screen" functionality
- Provides app-like experience with custom splash screens
- Controls how the app appears when launched
- Improves discoverability


**Tradeoffs:**
- Requires careful icon preparation for multiple resolutions
- Different browsers may interpret manifest properties differently
- Some features may not be supported across all platforms


### 4. Offline Functionality

**Core Technologies:**
- **Cache API** - Provides a mechanism to store network responses for later use
- **IndexedDB** - A low-level API for client-side storage of significant amounts of structured data
- **localStorage/sessionStorage** - Simple key-value storage (limited size)

**Offline-First Design Approach:**
Offline-first is a design philosophy that assumes users will be offline or on poor connections and builds the experience accordingly. This means:

- Default to local data first, then synchronize with the server
- Provide meaningful offline experiences rather than error messages
- Synchronize data in the background when connectivity returns

**Real-World Applications:**
- **Google Docs** - Allows document editing offline with synchronization when online
- **Trello PWA** - Enables viewing and editing boards offline
- **Uber** - Maintains core functionality even with intermittent connectivity


**Benefits:**
- Improved user experience in areas with poor connectivity
- Reduced data usage
- Faster application performance
- Resilience against network failures


**Tradeoffs:**
- Increased complexity in data synchronization
- Potential for data conflicts
- Storage limitations on some devices
- Additional testing requirements


### 5. PWA Development Tools

**Key Tools:**
- **Lighthouse** - An open-source, automated tool for improving the quality of web pages, including PWA features
- **Chrome DevTools** - Provides service worker debugging, network simulation, and application panel for manifest inspection
- **Workbox** - A set of libraries and Node modules that make it easy to cache assets and take full advantage of features used to build PWAs
- **PWA Builder** - Helps convert existing websites into PWAs

**Lighthouse Audits:**
Lighthouse evaluates PWAs on criteria including:

- Performance
- Accessibility
- Best Practices
- SEO
- PWA-specific features (installability, service worker, etc.)

**Real-World Example:**
Companies like Lyft and Forbes use Lighthouse to continuously monitor and improve their PWAs, resulting in significant performance improvements.

**Benefits:**
- Standardized evaluation of PWA implementation
- Automated testing and suggestions
- Simplified service worker implementation with libraries like Workbox
- Cross-browser testing capabilities


**Tradeoffs:**
- Learning curve for new tools
- Some tools may not support all PWA features
- Tool updates may lag behind browser implementations


### 6. Performance Optimization

**Critical Rendering Path:**
The sequence of steps the browser goes through to convert HTML, CSS, and JavaScript into pixels on the screen:
1. DOM Construction
2. CSSOM Construction
3. Render Tree Construction
4. Layout
5. Paint


**Key Optimization Techniques:**
- **Code Splitting** - Breaking your code into smaller chunks that can be loaded on demand
- **Tree Shaking** - Eliminating dead code
- **Lazy Loading** - Deferring loading of non-critical resources until needed
- **Image Optimization** - Using modern formats (WebP), responsive images, and compression
- **Text Compression** - Using Gzip or Brotli to compress text resources
- **Caching Strategies** - Implementing effective caching through service workers


**Real-World Impact:**
- **Pinterest** reduced their time-to-interactive by 40% through PWA optimization
- **Tinder** cut load times from 11.91 seconds to 4.69 seconds with their PWA


**Benefits:**
- Faster page loads and interactions
- Lower bounce rates
- Improved user engagement
- Better conversion rates
- Reduced data usage


**Tradeoffs:**
- Development complexity
- Potential for over-optimization
- Maintenance overhead for optimization strategies
- Browser compatibility considerations for some techniques


### 7. PWA Deployment

**HTTPS Requirements:**
PWAs require HTTPS for security reasons and to enable features like service workers and many modern Web APIs.

**Deployment Considerations:**
- Server configuration for proper MIME types
- Cache headers configuration
- Service worker scope management
- Cross-origin resource sharing (CORS) setup


**Analytics and Monitoring:**
- Tracking offline usage
- Measuring performance metrics
- Monitoring service worker effectiveness
- Analyzing user engagement with PWA features


**Real-World Example:**
When Alibaba.com deployed their PWA, they saw a 76% increase in conversions across browsers and a 14% increase in monthly active users on iOS.

**Benefits:**
- Improved security through HTTPS
- Better user analytics through service worker events
- Simplified updates compared to native apps


**Tradeoffs:**
- Additional server configuration requirements
- Potential hosting cost increases for HTTPS
- More complex monitoring needs


## Lesson Activities

### Activity 1: Implementing Offline Functionality

**Duration: 60 minutes**
In this activity, you'll implement offline functionality for a simple weather application.

**Instructions:**
1. Review the following starter code for a weather app that currently only works online:

```javascript
// weather-app.js
const weatherContainer = document.querySelector('.weather-container');
const locationInput = document.getElementById('location-input');
const searchButton = document.getElementById('search-button');

// Function to fetch weather data
async function getWeatherData(location) {
  try {
    const response = await fetch(`https://api.example.com/weather?location=${location}`);
    const data = await response.json();
    displayWeatherData(data);
  } catch (error) {
    weatherContainer.innerHTML = '<p>Unable to fetch weather data. Please check your connection.</p>';
  }
}

// Function to display weather data
function displayWeatherData(data) {
  weatherContainer.innerHTML = `
    <h2>${data.location}</h2>
    <p>Temperature: ${data.temperature}°C</p>
    <p>Condition: ${data.condition}</p>
    <p>Humidity: ${data.humidity}%</p>
  `;
}

// Event listener for search button
searchButton.addEventListener('click', () => {
  const location = locationInput.value.trim();
  if (location) {
    getWeatherData(location);
  }
});
```

2. Implement a service worker to cache the application shell (HTML, CSS, JS) using the following steps:
   - Create a service worker file (sw.js)
   - Register the service worker in your main JavaScript file
   - Implement the install event to cache the app shell
   - Implement the fetch event to serve from cache when offline

3. Modify the weather app to store previously fetched weather data in IndexedDB:
   - Create functions to store and retrieve weather data from IndexedDB
   - Update the getWeatherData function to check IndexedDB first before making a network request
   - Implement a mechanism to display cached data when offline with a notification that it might not be current

4. Test your implementation by:
   - Using Chrome DevTools to simulate offline mode
   - Searching for a location while online, then going offline and searching for the same location
   - Analyzing how your app behaves in various network conditions

5. Reflect on your implementation:
   - What caching strategy did you choose and why?
   - What challenges did you face when implementing offline storage?
   - How would you improve the offline experience in a real-world application?


### Activity 2: Building Your First PWA

**Duration: 90 minutes**
In this activity, you'll transform a simple note-taking app into a full PWA with installability and offline functionality.

**Instructions:**
1. Start with this basic note-taking app:

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Note Taker</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="app-container">
    <h1>Note Taker</h1>
    <div class="note-input">
      <input type="text" id="note-title" placeholder="Note title">
      <textarea id="note-content" placeholder="Note content"></textarea>
      <button id="save-note">Save Note</button>
    </div>
    <div class="notes-list" id="notes-list">
      <!-- Notes will be displayed here -->
    </div>
  </div>
  <script src="app.js"></script>
</body>
</html>
```

```javascript
// app.js
const noteTitleInput = document.getElementById('note-title');
const noteContentInput = document.getElementById('note-content');
const saveNoteButton = document.getElementById('save-note');
const notesList = document.getElementById('notes-list');

// Load notes from localStorage
function loadNotes() {
  const notes = JSON.parse(localStorage.getItem('notes') || '[]');
  notesList.innerHTML = '';
  
  notes.forEach((note, index) => {
    const noteElement = document.createElement('div');
    noteElement.className = 'note';
    noteElement.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.content}</p>
      <button class="delete-note" data-index="${index}">Delete</button>
    `;
    notesList.appendChild(noteElement);
  });
  
  // Add event listeners to delete buttons
  document.querySelectorAll('.delete-note').forEach(button => {
    button.addEventListener('click', deleteNote);
  });
}

// Save a new note
function saveNote() {
  const title = noteTitleInput.value.trim();
  const content = noteContentInput.value.trim();
  
  if (!title || !content) return;
  
  const notes = JSON.parse(localStorage.getItem('notes') || '[]');
  notes.push({ title, content, timestamp: Date.now() });
  localStorage.setItem('notes', JSON.stringify(notes));
  
  // Clear inputs
  noteTitleInput.value = '';
  noteContentInput.value = '';
  
  // Reload notes
  loadNotes();
}

// Delete a note
function deleteNote(e) {
  const index = e.target.getAttribute('data-index');
  const notes = JSON.parse(localStorage.getItem('notes') || '[]');
  notes.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(notes));
  loadNotes();
}

// Event listeners
saveNoteButton.addEventListener('click', saveNote);

// Load notes on startup
loadNotes();
```

2. Create a Web App Manifest (manifest.json) for your PWA:
   - Include appropriate icons (you can use placeholder icons)
   - Set the display mode to "standalone"
   - Choose appropriate colors for theme and background
   - Link the manifest in your HTML file

3. Implement a service worker (sw.js) that:
   - Caches the application shell
   - Implements an appropriate caching strategy for your app's resources
   - Handles offline functionality

4. Upgrade the data storage from localStorage to IndexedDB:
   - Create functions to open the database and create object stores
   - Modify the saveNote and loadNotes functions to use IndexedDB
   - Implement proper error handling for database operations

5. Add "Add to Home Screen" functionality:
   - Detect when the app can be installed
   - Show an installation prompt to the user
   - Track installation events

6. Test your PWA using Lighthouse:
   - Run a Lighthouse audit in Chrome DevTools
   - Identify and fix any issues that prevent your app from being a fully-compliant PWA
   - Aim for a score of at least 90 in the PWA category

7. Analyze your implementation:
   - What PWA features were easiest to implement?
   - What challenges did you face?
   - How does the user experience differ from a traditional web app?
   - What additional features would make your PWA more engaging?


### Activity 3: Testing and Debugging PWAs

**Duration: 60 minutes**
In this activity, you'll learn how to test and debug PWAs using Chrome DevTools and Lighthouse.

**Instructions:**

1. Use the PWA you created in Activity 2 or the following code for a simple PWA with intentional issues:

```javascript
// Problematic service worker registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('ServiceWorker registration successful');
      })
      .catch(error => {
        console.log('ServiceWorker registration failed:', error);
      });
  });
}

// Problematic service worker (sw.js)
const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  // Missing critical resources
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  // Problematic fetch handler - always goes to network first
  event.respondWith(
    fetch(event.request)
      .catch(() => {
        return caches.match(event.request);
      })
  );
});
```

2. Use Chrome DevTools to identify and fix issues:
   - Open the Application panel in DevTools
   - Examine the Service Workers tab
   - Check the Manifest tab for issues
   - Use the Cache Storage viewer to inspect cached resources
   - Simulate offline mode using the Network panel

3. Run a Lighthouse audit:
   - Open Chrome DevTools and navigate to the Lighthouse tab
   - Select the Progressive Web App category
   - Run the audit and analyze the results
   - Document all issues found by Lighthouse

4. Fix the identified issues:
   - Correct the service worker registration if needed
   - Update the caching strategy to be more resilient
   - Ensure all required resources are cached
   - Fix any manifest issues
   - Address any other Lighthouse recommendations

5. Test your PWA across different scenarios:
   - Test in offline mode
   - Test with slow network connections (use throttling in DevTools)
   - Test the installation process
   - Test how the app behaves when switching between online and offline

6. Create a debugging checklist based on your experience:
   - What are the most common issues you encountered?
   - What debugging techniques were most effective?
   - What preventative measures could you implement in future PWA development?


### Activity 4: PWA Performance Optimization
**Duration: 75 minutes**
In this activity, you'll optimize a PWA for performance using various techniques and measure the improvements.

**Instructions:**

1. Start with a PWA that has performance issues:

```html
<!-- index.html with performance issues -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Image Gallery PWA</title>
  <link rel="stylesheet" href="styles.css">
  <!-- Large external CSS framework loaded synchronously -->
  <link rel="stylesheet" href="https://cdn.example.com/large-framework.css">
  <link rel="manifest" href="manifest.json">
</head>
<body>
  <div class="app-container">
    <h1>Image Gallery</h1>
    <div class="gallery" id="image-gallery">
      <!-- Many unoptimized images -->
      <img src="images/large-image-1.jpg" alt="Gallery image 1">
      <img src="images/large-image-2.jpg" alt="Gallery image 2">
      <img src="images/large-image-3.jpg" alt="Gallery image 3">
      <!-- More images... -->
    </div>
  </div>
  
  <!-- Large JavaScript libraries loaded synchronously -->
  <script src="https://cdn.example.com/large-library.js"></script>
  <script src="app.js"></script>
  
  <!-- Service worker registration at the end of body -->
  <script>
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js');
    }
  </script>
</body>
</html>
```

2. Run a baseline performance audit using Lighthouse:
   - Document the initial performance score
   - Note specific metrics like First Contentful Paint, Time to Interactive, etc.
   - Identify the top 3-5 performance issues

3. Implement the following optimizations:
   - Move critical CSS inline and defer non-critical CSS
   - Optimize images (consider using responsive images, WebP format, and lazy loading)
   - Implement code splitting for JavaScript
   - Add appropriate resource hints (preload, prefetch, preconnect)
   - Optimize the service worker caching strategy for performance

4. Implement lazy loading for images:
   - Use the native loading="lazy" attribute or implement a JavaScript solution
   - Ensure images outside the viewport don't block rendering

5. Optimize the critical rendering path:
   - Identify and inline critical CSS
   - Defer non-critical JavaScript
   - Minimize render-blocking resources

6. Run a follow-up Lighthouse audit:
   - Compare the performance score to the baseline
   - Document improvements in specific metrics
   - Identify any remaining issues

7. Analyze your optimization process:
   - Which optimizations had the biggest impact?
   - What was the most challenging aspect of performance optimization?
   - How would you approach performance optimization in future projects?
   - What tools were most helpful in identifying and fixing performance issues?


## Common Mistakes / Misconceptions

1. **"PWAs are just for mobile devices"**
   - PWAs work on desktop browsers as well and can provide a consistent experience across all devices.

2. **"Service workers are only for offline caching"**
   - While offline caching is a key feature, service workers also enable push notifications, background sync, and other advanced features.

3. **"PWAs can access all device features like native apps"**
   - PWAs have access to many device features but still have some limitations compared to native apps, though this gap is narrowing with new Web APIs.

4. **"Once I add a service worker, my app works offline automatically"**
   - Service workers require explicit configuration for caching strategies and offline behavior; they don't automatically make everything work offline.

5. **"PWAs are only beneficial for mobile users with poor connectivity"**
   - PWAs benefit all users through improved performance, engagement features, and a more app-like experience regardless of network conditions.

6. **"I need to completely rebuild my existing web app to make it a PWA"**
   - PWAs follow the progressive enhancement approach, allowing you to add PWA features incrementally to existing web applications.

7. **"Service workers work in all browsers"**
   - While service worker support is growing, it's important to implement feature detection and provide fallbacks for unsupported browsers.

8. **"HTTPS is optional for PWAs"**
   - HTTPS is mandatory for service workers and many modern web APIs used in PWAs.

## Additional Resources
- [Google's PWA Training](https://web.dev/learn/pwa/)
- [MDN Progressive Web Apps Guide](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [Workbox: JavaScript Libraries for PWAs](https://developers.google.com/web/tools/workbox)
- [PWA Stats: Case Studies and Examples](https://www.pwastats.com/)
- [Awesome PWA: A Curated List of PWA Resources](https://github.com/hemanth/awesome-pwa)
- [The App Shell Model](https://developers.google.com/web/fundamentals/architecture/app-shell)
- [Offline Cookbook by Jake Archibald](https://web.dev/offline-cookbook/)
