# Progressive Web Apps (PWAs): Building Modern Web Applications

⚠️ **_This is intended to be a comprehensive advanced self-guided topic outline. You may come back to the various activities over the course of a week. See respective time estimates for each activity below._** ⚠️

## Prerequisites
- [JavaScript Fundamentals](https://github.com/Techtonica/curriculum/blob/main/javascript/javascript-1-variables.md)
- [HTML & CSS Basics](https://github.com/Techtonica/curriculum/blob/main/web/html.md)
- [Intro to Web APIs](https://github.com/Techtonica/curriculum/blob/main/api/apis-and-json.md)
- [Asynchronous JavaScript](https://github.com/Techtonica/curriculum/blob/main/javascript/javascript-7-oop.md)
- [Basic React Knowledge](https://github.com/Techtonica/curriculum/blob/main/react-js/react-part-1-intro.md)
- [Environment Variables](https://github.com/Techtonica/curriculum/blob/main/command-line/env.md)
   - This topic outline content has been designed to work without requiring actual API keys or environment variables. However, in a real-world implementation, the following environment variables would be needed:
      - **Activity 5: Adding Push Notifications**
        - `VAPID_PUBLIC_KEY` and `VAPID_PRIVATE_KEY`: For the server-side implementation of web push notifications
        - The example code includes a dummy application server key for demonstration purposes
      - **Activity 6: Building a Complete PWA**
        - `VAPID_PUBLIC_KEY` and `VAPID_PRIVATE_KEY`: For push notifications in the weather app example
        - `PORT`: For configuring the server port (defaults to 3000 if not specified)
   - For the purposes of this topic outline, particpants can use the provided dummy values or mock implementations. If the particpant wants to implement fully functional push notifications, they would need to generate VAPID keys using the web-push library:
      ```javascript
      const webpush = require('web-push');
      const vapidKeys = webpush.generateVAPIDKeys();
      console.log('Public Key:', vapidKeys.publicKey);
      console.log('Private Key:', vapidKeys.privateKey);
      ```

## Table of Contents
- [Objectives](#objectives)
- [Motivation](#motivation)
- [Core Concepts](#core-concepts)
- [Activity 1: Understanding PWA Fundamentals](#activity-1-understanding-pwa-fundamentals) (30 minutes)
- [Activity 2: Creating Your First Manifest File](#activity-2-creating-your-first-manifest-file) (45 minutes)
- [Activity 3: Service Workers Basics](#activity-3-service-workers-basics) (60 minutes)
- [Activity 4: Implementing Offline Functionality](#activity-4-implementing-offline-functionality) (90 minutes)
- [Activity 5: Adding Push Notifications](#activity-5-adding-push-notifications) (60 minutes)
- [Activity 6: Building a Complete PWA](#activity-6-building-a-complete-pwa) (120 minutes)
- [Activity 7: Testing and Auditing Your PWA](#activity-7-testing-and-auditing-your-pwa) (45 minutes)
- [Common Mistakes / Misconceptions](#common-mistakes--misconceptions)
- [Additional Resources](#additional-resources)


## Objectives

By the end of this module, participants will be able to:

- Understand what makes an application a Progressive Web App
- Create and configure a web app manifest
- Implement and manage service workers
- Build offline-capable web applications
- Implement push notifications
- Audit and optimize PWA performance
- Deploy a production-ready PWA


## Motivation

Progressive Web Apps represent the evolution of web applications, combining the best of web and mobile apps. They're:

- **Reliable**: Load instantly and never show the "dinosaur" offline page, even in uncertain network conditions
- **Fast**: Respond quickly to user interactions with smooth animations and jank-free scrolling
- **Engaging**: Feel like a natural app on the device, with immersive user experience


In today's job market, PWA skills are increasingly in demand as companies seek to provide app-like experiences without the friction of app store installations. According to recent surveys, companies implementing PWAs have seen:

- 20% faster page load times
- 52% increase in conversions
- 137% increase in engagement
- 68% increase in mobile traffic


## Core Concepts

### What Makes a PWA?

A Progressive Web App is characterized by three main technical components:

1. **Web App Manifest**: A JSON file that controls how your app appears to the user
2. **Service Workers**: JavaScript files that act as proxy servers between web applications, the browser, and the network
3. **HTTPS**: Security is a requirement for PWAs


### Progressive Web Apps (PWAs): Building Modern Web Applications

## Prerequisites

- [JavaScript Fundamentals](https://github.com/Techtonica/curriculum/blob/main/javascript/javascript-1-variables.md)
- [HTML & CSS Basics](https://github.com/Techtonica/curriculum/blob/main/web/html.md)
- [Intro to Web APIs](https://github.com/Techtonica/curriculum/blob/main/api/apis-and-json.md)
- [Asynchronous JavaScript](https://github.com/Techtonica/curriculum/blob/main/javascript/javascript-7-oop.md)
- [Basic React Knowledge](https://github.com/Techtonica/curriculum/blob/main/react-js/react-part-1-intro.md)


## Table of Contents

- [Objectives](#objectives)
- [Motivation](#motivation)
- [Core Concepts](#core-concepts)
- [Activity 1: Understanding PWA Fundamentals](#activity-1-understanding-pwa-fundamentals) (30 minutes)
- [Activity 2: Creating Your First Manifest File](#activity-2-creating-your-first-manifest-file) (45 minutes)
- [Activity 3: Service Workers Basics](#activity-3-service-workers-basics) (60 minutes)
- [Activity 4: Implementing Offline Functionality](#activity-4-implementing-offline-functionality) (90 minutes)
- [Activity 5: Adding Push Notifications](#activity-5-adding-push-notifications) (60 minutes)
- [Activity 6: Building a Complete PWA](#activity-6-building-a-complete-pwa) (120 minutes)
- [Activity 7: Testing and Auditing Your PWA](#activity-7-testing-and-auditing-your-pwa) (45 minutes)
- [Common Mistakes / Misconceptions](#common-mistakes--misconceptions)
- [Additional Resources](#additional-resources)


## Objectives
By the end of this module, participants will be able to:
- Understand what makes an application a Progressive Web App
- Create and configure a web app manifest
- Implement and manage service workers
- Build offline-capable web applications
- Implement push notifications
- Audit and optimize PWA performance
- Deploy a production-ready PWA


## Motivation
Progressive Web Apps represent the evolution of web applications, combining the best of web and mobile apps. They're:
- **Reliable**: Load instantly and never show the "dinosaur" offline page, even in uncertain network conditions
- **Fast**: Respond quickly to user interactions with smooth animations and jank-free scrolling
- **Engaging**: Feel like a natural app on the device, with immersive user experience

In today's job market, PWA skills are increasingly in demand as companies seek to provide app-like experiences without the friction of app store installations. According to recent surveys, companies implementing PWAs have seen:
- 20% faster page load times
- 52% increase in conversions
- 137% increase in engagement
- 68% increase in mobile traffic


## Core Concepts

### What Makes a PWA?
A Progressive Web App is characterized by three main technical components:
1. **Web App Manifest**: A JSON file that controls how your app appears to the user
2. **Service Workers**: JavaScript files that act as proxy servers between web applications, the browser, and the network
3. **HTTPS**: Security is a requirement for PWAs


## Activity 1: Understanding PWA Fundamentals

### What is a PWA?
A Progressive Web App (PWA) is a type of application built with web technologies (HTML, CSS, and JavaScript), but delivers an experience similar to native mobile applications. PWAs work for every user, regardless of browser choice, using progressive enhancement principles.

#### Key Characteristics:
- Progressive - Works for every user, regardless of browser
- Responsive - Fits any form factor
- Connectivity independent - Works offline or with poor network
- App-like - Uses app-style interactions and navigation
- Fresh - Always up-to-date thanks to service workers
- Safe - Served via HTTPS to prevent snooping
- Discoverable - Identifiable as "applications" via manifests
- Re-engageable - Makes re-engagement easy with push notifications
- Installable - Allows users to add apps to their home screen
- Linkable - Easily shared via URL without complex installation


### Benefits of PWAs

#### For Users:
- Works offline or with poor connectivity
- Fast loading and smooth performance
- Installable without app store
- Automatic updates
- Push notifications for engagement
- Safe (HTTPS)


#### For Developers:
- Single codebase for web and mobile-like experiences
- No app store approval process
- Easier updates (no waiting for app store approval)
- Lower development costs compared to native apps
- Better user engagement and conversion rates


#### Real-world Impact:
- Twitter Lite: 65% increase in pages per session
- Pinterest: 60% increase in engagement
- Starbucks: 2x increase in daily active users
- Uber: Core experience in under 50KB


### Key Components

#### 1. Web App Manifest
A JSON file that provides information about a web application, including:
- Name and short name
- Icons (various sizes)
- Start URL
- Display mode (fullscreen, standalone, etc.)
- Theme and background colors

This enables "Add to Home Screen" functionality.

#### 2. Service Workers
JavaScript files that run separately from the main browser thread, acting as network proxies that:
- Enable offline functionality
- Enable background sync
- Enable push notifications
- Cache resources for faster loading


#### 3. HTTPS
Security is mandatory for PWAs. Service workers are powerful and can intercept network requests, so they require secure connections.

#### 4. Application Shell Architecture
A design approach that separates the app's core infrastructure and UI from its data. This enables instant loading and reliable performance.

### Exercise: Compare Web Applications
Compare these two web applications and identify which one has PWA characteristics:

**Application A:**
- Requires internet connection at all times
- Loads all resources on each visit
- Cannot be added to home screen
- No push notifications
- Served over HTTP


**Application B:**
- Works offline after first visit
- Loads instantly on repeat visits
- Can be added to home screen with custom icon
- Sends push notifications
- Served over HTTPS

**Answer:** Application B demonstrates PWA characteristics with offline capabilities, fast loading, installability, push notifications, and secure serving.

## Activity 2: Creating Your First Manifest File

### Web App Manifest Overview
The Web App Manifest is a JSON file that tells the browser about your Progressive Web App and how it should behave when installed on the user's desktop or mobile device.

A properly configured manifest file enables:
- Adding your app to the home screen
- Launching in full-screen mode without a browser address bar
- Providing a splash screen during app launch
- Controlling screen orientation
- Defining a theme color for the browser UI


#### File Location:

The manifest file should be linked from all pages of your application using a link tag in the head section:

```html
<link rel="manifest" href="/manifest.json">
```

### Essential Manifest Properties:
- **name**: The full name of your application
- **short_name**: A shorter name for use on home screens
- **start_url**: The URL that loads when the user launches the application
- **display**: How the app should be displayed (fullscreen, standalone, minimal-ui, browser)
- **background_color**: The background color of the splash screen
- **theme_color**: The color of the browser UI elements
- **icons**: Array of image objects with src, sizes, and type properties
- **description**: A description of the application


### Optional Properties:
- **orientation**: Preferred orientation (portrait or landscape)
- **scope**: The navigation scope of the web application
- **lang**: Primary language for the application
- **dir**: Text direction (ltr, rtl, auto)
- **related_applications**: Array of related native applications
- **prefer_related_applications**: Boolean preference for native over web
- **screenshots**: Array of screenshots for app stores


### Implementation Steps:
1. **Create a manifest.json file in your project's root directory**

```json
{
  "name": "My PWA App",
  "short_name": "PWA App",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#2563eb",
  "icons": [
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

2. **Link to the manifest file in your HTML**


```html
<link rel="manifest" href="/manifest.json">
```

3. **Add additional meta tags for iOS support**


```html
<!-- iOS support -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-mobile-web-app-title" content="My PWA App">
<link rel="apple-touch-icon" href="/icon-192x192.png">
```

4. **Create and add the icon files referenced in your manifest**
You'll need to create icon files in various sizes, particularly 192x192 and 512x512 pixels for Android devices.

### Testing Your Manifest:
You can validate your manifest file using Chrome DevTools:
1. Open Chrome DevTools (F12 or Right-click > Inspect)
2. Go to the "Application" tab
3. Select "Manifest" in the left sidebar
4. Check for any errors or warnings


### Exercise: Create Your Own Manifest
Create a manifest.json file for a fictional app of your choice. Include all the essential properties and at least two optional properties. Make sure to create appropriate icon files (or use placeholder images for this exercise).

## Activity 3: Service Workers Basics

### Understanding Service Workers
A Service Worker is a JavaScript file that runs separately from the main browser thread, intercepting network requests, caching or retrieving resources from the cache, and delivering push messages.

#### Key Characteristics:
- Runs in a worker context: no access to the DOM
- Runs on a different thread than the main JavaScript
- Designed to be fully async; sync APIs like localStorage cannot be used
- Can intercept network requests from your page
- Can terminate when not in use and restart when needed
- Uses promises extensively
- Requires HTTPS (except on localhost for development)

> **Important**: Service workers only work over HTTPS (or localhost for development) for security reasons.


### Service Worker Lifecycle
The service worker has a distinct lifecycle that is completely separate from your web page:
1. **Registration**: The browser registers the service worker script, typically in your main JavaScript file.
2. **Installation**: The service worker is installed. This is a good time to cache static assets.
3. **Activation**: The service worker is activated. This is a good time to clean up old caches.
4. **Idle**: The service worker enters an idle state, waiting for events.
5. **Fetch/Message**: The service worker handles fetch or message events when they occur.
6. **Terminated**: The browser may terminate the service worker to save memory. It will be restarted when needed.


#### Registration Code Example:

```javascript
// Check if service workers are supported
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service worker registered:', registration);
      })
      .catch(error => {
        console.error('Service worker registration failed:', error);
      });
  });
}
```

### Service Worker Capabilities
Service workers provide several powerful capabilities that enable PWA functionality:
- **Offline Support**: Service workers can cache resources and respond with cached content when the network is unavailable.
- **Network Intercepting**: Can intercept network requests and modify responses, enabling custom caching strategies.
- **Background Sync**: Can defer actions until the user has stable connectivity, ensuring data is sent even if the user goes offline.
- **Push Notifications**: Enables web apps to receive push messages from a server, even when the app is not open.
- **Periodic Sync**: Allows periodic background synchronization at intervals for content updates.
- **Performance Improvements**: Can implement advanced caching strategies to improve load times and reduce network usage.


#### Common Caching Strategies:
- **Cache First**: Try the cache, fall back to network
- **Network First**: Try the network, fall back to cache
- **Cache Only**: Only use cached resources
- **Network Only**: Only use network resources
- **Stale While Revalidate**: Respond from cache while updating cache from network


### Service Worker Limitations
While powerful, service workers have some important limitations to be aware of:
- **No DOM Access**: Service workers cannot directly access the DOM. They communicate with pages via the postMessage interface.
- **No Window Object**: Service workers don't have access to the window object or other UI-related APIs.
- **Asynchronous Only**: Service workers are designed to be fully asynchronous. Synchronous APIs like localStorage cannot be used.
- **HTTPS Required**: Service workers only work on pages served over HTTPS (except for localhost during development).
- **Non-Persistent**: The browser can terminate service workers at any time, so they should not rely on global state.
- **Limited Browser Support**: While most modern browsers support service workers, some older browsers do not.


> **Browser Compatibility**: Always check current browser compatibility and implement appropriate fallbacks for browsers that don't support service workers.


### Hands-On: Creating Your First Service Worker

#### Step 1: Create a Service Worker File
Create a new file called `service-worker.js` in the root of your project with the following code:

```javascript
// service-worker.js

const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles/main.css',
  '/scripts/main.js',
  '/images/logo.png'
];

// Installation event: when the service worker is installed
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activation event: when the service worker is activated
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            // Delete old caches that are not in the whitelist
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event: when the browser makes a network request
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return the response from the cached version
        if (response) {
          return response;
        }
        
        // Not in cache - return the result from the live server
        // and cache it for future
        return fetch(event.request)
          .then(response => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clone the response because it's a stream and can only be consumed once
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
              
            return response;
          });
      })
  );
});
```

**What this code does:**
1. Defines a cache name and a list of URLs to cache
2. Listens for the `install` event to cache initial resources
3. Listens for the `activate` event to clean up old caches
4. Listens for `fetch` events to intercept network requests
5. Implements a "Cache, falling back to network" strategy


#### Step 2: Register the Service Worker

Add the following code to your main JavaScript file (e.g., `main.js`) to register the service worker:

```javascript
// Check if service workers are supported
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service worker registered successfully:', registration);
      })
      .catch(error => {
        console.error('Service worker registration failed:', error);
      });
  });
} else {
  console.log('Service workers are not supported in this browser.');
}
```

**Important Notes:**
- The service worker file must be in the root directory or higher than the pages it controls
- The scope of the service worker is determined by its location in the directory structure
- Always check for service worker support before attempting to register one
- Registration happens asynchronously, so we use promises to handle success and failure

> **Tip**: During development, use Chrome DevTools' Application tab to debug service workers. You can view registered service workers, update them, and clear caches.


#### Step 3: Test Your Service Worker
To test your service worker:
1. **Serve your application over HTTPS or localhost**
Service workers require a secure context. During development, localhost is treated as secure.
2. **Open Chrome DevTools (F12)**
Navigate to the Application tab, then select Service Workers in the left sidebar.
3. **Verify registration**
You should see your service worker listed with its status.
4. **Test offline functionality**
In Chrome DevTools, you can simulate offline mode:
   - Go to the Network tab
   - Check the "Offline" checkbox
   - Reload the page - it should still work!
5. **Verify caching**
In the Application tab, under Cache Storage, you should see your cache with the resources you specified.


**Congratulations!** You've successfully created and registered a basic service worker that caches resources and enables offline functionality for your web application. This is a fundamental step in creating a Progressive Web App.

## Activity 4: Implementing Offline Functionality

### Caching Strategies for Offline Support
Offline functionality is a core feature of Progressive Web Apps. It allows users to continue using your application even when they have no internet connection or poor connectivity.

#### Key Components for Offline Support:
- **Cache API**: Browser API that allows storing network responses for later use
- **Service Workers**: Scripts that intercept network requests and can serve cached responses
- **IndexedDB**: Client-side database for storing structured data for offline use
- **Caching Strategies**: Patterns for deciding when to use cached vs. network resources


#### What to Cache:
- HTML files (app shell)
- CSS stylesheets
- JavaScript files
- Images and icons
- Fonts
- API responses


#### What Not to Cache:
- Highly dynamic content that must be fresh
- Sensitive user data
- Large media files (selectively cache these)
- Analytics and tracking requests
- Third-party resources you don't control

> **App Shell Model**: A popular approach for PWAs is the "App Shell" architecture, where you cache the minimal HTML, CSS, and JavaScript required to power the user interface. This allows the app shell to load instantly on repeat visits, while content can be loaded dynamically.


### Different Caching Strategies
Different caching strategies are suitable for different types of resources and use cases:

#### 1. Cache First (Cache Falling Back to Network)
Try to serve the request from the cache first. If the resource isn't in the cache, fetch it from the network and cache it for next time.

**Best for**: Static assets that rarely change (CSS, JS, images, fonts)

```javascript
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // Return cached response if found
        if (cachedResponse) {
          return cachedResponse;
        }
        
        // Otherwise fetch from network
        return fetch(event.request)
          .then(response => {
            // Clone the response
            const responseToCache = response.clone();
            
            // Add to cache for future
            caches.open('my-cache')
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
              
            return response;
          });
      })
  );
});
```

**Pros:**
- Fastest possible load times for cached resources
- Reduces network usage
- Works offline for cached resources


**Cons:**
- Cached content may become stale
- Updates to resources aren't seen until cache expires
- Requires cache invalidation strategy


#### 2. Network First (Network Falling Back to Cache)
Try to fetch the latest version from the network. If the network request fails, fall back to the cached version.

**Best for**: Resources that frequently update but where having an outdated version is better than having nothing

```javascript
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Clone the response
        const responseToCache = response.clone();
        
        // Add to cache for future
        caches.open('my-cache')
          .then(cache => {
            cache.put(event.request, responseToCache);
          });
          
        return response;
      })
      .catch(() => {
        // If network fails, try the cache
        return caches.match(event.request);
      })
  );
});
```

**Pros:**
- Always serves fresh content when online
- Still works offline for previously cached resources
- Provides a good balance of freshness and reliability


**Cons:**
- Slower than cache-first when online
- More network requests than cache-first
- Network timeouts can delay response


#### 3. Stale While Revalidate

Respond with the cached version immediately (if available), then update the cache with a fresh network response for next time.

**Best for**: Frequently updated resources where some staleness is acceptable

```javascript
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open('my-cache').then(cache => {
      return cache.match(event.request).then(cachedResponse => {
        const fetchPromise = fetch(event.request).then(networkResponse => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
        
        // Return the cached response immediately, or wait for network
        // if nothing is cached
        return cachedResponse || fetchPromise;
      });
    })
  );
});
```

**Pros:**
- Fast response times (from cache)
- Cache is updated in the background
- Good balance of performance and freshness


**Cons:**
- Users may see stale content initially
- Still makes network requests even when cache exists
- More complex to implement correctly


#### 4. Cache Only
Only ever serve the request from the cache, never going to the network.

**Best for**: Assets you know are in the cache (e.g., precached app shell)

```javascript
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        // If not in cache, return a fallback or error
        return caches.match('/offline.html');
      })
  );
});
```

**Pros:**
- Fastest possible response times
- No network requests at all
- Works completely offline


**Cons:**
- Content never updates automatically
- Requires pre-caching of all needed resources
- Limited use cases (static content only)


#### 5. Network Only

Always try to fetch from the network and never use the cache.

**Best for**: Resources that must always be fresh, like API calls for real-time data

```javascript
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .catch(error => {
        // Handle network failure (e.g., show offline page)
        return caches.match('/offline.html');
      })
  );
});
```

**Pros:**
- Always serves fresh content
- Good for real-time or dynamic data
- No cache management needed


**Cons:**
- Doesn't work offline
- Slowest response times
- Highest network usage

> **Strategy Selection**: Choose your caching strategies carefully based on the specific needs of each resource. You can use different strategies for different types of requests in the same application.

### Implementing Offline Data Storage with IndexedDB

#### What is IndexedDB?
IndexedDB is a low-level API for client-side storage of significant amounts of structured data, including files/blobs. It's a NoSQL database that works well for offline applications.

**Key features:**
- Stores large amounts of data
- Supports transactions for reliability
- Supports indexes for fast searches
- Asynchronous API that doesn't block the main thread


#### Basic IndexedDB Implementation:

```javascript
// Open (or create) the database
const request = indexedDB.open('MyAppDatabase', 1);

// Create the schema
request.onupgradeneeded = function(event) {
  const db = event.target.result;
  
  // Create an object store with a key path
  const notesStore = db.createObjectStore('notes', { keyPath: 'id', autoIncrement: true });
  
  // Create indexes
  notesStore.createIndex('title', 'title', { unique: false });
  notesStore.createIndex('date', 'date', { unique: false });
};

// Handle database open success
request.onsuccess = function(event) {
  const db = event.target.result;
  
  // Example: Add a note
  function addNote(note) {
    return new Promise((resolve, reject) => {
      // Start a transaction
      const transaction = db.transaction(['notes'], 'readwrite');
      const store = transaction.objectStore('notes');
      
      // Add the note
      const request = store.add({
        title: note.title,
        content: note.content,
        date: new Date()
      });
      
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
  
  // Example: Get all notes
  function getNotes() {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['notes'], 'readonly');
      const store = transaction.objectStore('notes');
      const request = store.getAll();
      
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
  
  // Example usage
  addNote({ title: 'Shopping List', content: 'Milk, Bread, Eggs' })
    .then(id => console.log('Note added with ID:', id))
    .catch(error => console.error('Error adding note:', error));
    
  getNotes()
    .then(notes => console.log('All notes:', notes))
    .catch(error => console.error('Error getting notes:', error));
};

// Handle errors
request.onerror = function(event) {
  console.error('Database error:', event.target.error);
};
```

#### Offline Data Synchronization Pattern:
1. **Store user actions locally first**
When a user performs an action (create, update, delete), store it in IndexedDB immediately.
2. **Maintain a queue of pending actions**
Keep track of actions that need to be synced with the server.
3. **Sync when online**
When the app detects that it's online, process the queue of pending actions.
4. **Handle conflicts**
Implement a strategy for resolving conflicts between local and server data.


#### Detecting Online/Offline Status:

```javascript
// Listen for online/offline events
window.addEventListener('online', handleOnline);
window.addEventListener('offline', handleOffline);

function handleOnline() {
  console.log('App is online! Syncing data...');
  syncData();
}

function handleOffline() {
  console.log('App is offline. Changes will be saved locally.');
}

// Check initial status
if (navigator.onLine) {
  console.log('App loaded online');
} else {
  console.log('App loaded offline');
}

// Background sync with Service Worker
if ('serviceWorker' in navigator && 'SyncManager' in window) {
  navigator.serviceWorker.ready
    .then(registration => {
      // Register a sync event
      return registration.sync.register('sync-data');
    })
    .catch(err => console.error('Background sync registration failed:', err));
}

// In the service worker
self.addEventListener('sync', event => {
  if (event.tag === 'sync-data') {
    event.waitUntil(syncData());
  }
});

async function syncData() {
  // Get pending actions from IndexedDB
  const pendingActions = await getPendingActions();
  
  // Process each action
  for (const action of pendingActions) {
    try {
      await sendToServer(action);
      await markAsSynced(action.id);
    } catch (error) {
      console.error('Sync failed for action:', action, error);
      // Will be retried on next sync
    }
  }
}
```

> **Libraries for Easier IndexedDB Usage**: Working directly with IndexedDB can be verbose. Consider using libraries like Dexie.js, localForage, or idb that provide simpler APIs while still leveraging IndexedDB's power.


### Exercise:
Try implementing a simple note-taking app that works offline using the IndexedDB code provided above. Add functionality to:

1. Create new notes
2. List all notes
3. Edit existing notes
4. Delete notes
5. Sync with a server when online (you can mock this part)


## Activity 5: Adding Push Notifications

### Push Notifications in PWAs
Push notifications allow web applications to notify users of new messages, updates, or other events, even when the user is not actively using the application or even has the browser open.

#### Key Components:
- **Push API**: Allows servers to send messages to service workers
- **Notification API**: Displays notifications to the user
- **Service Workers**: Receive push messages and show notifications


#### Benefits:
- Re-engage users who aren't actively using your app
- Deliver timely information and updates
- Increase user retention and engagement
- Provide a more app-like experience


#### How Push Notifications Work:

1. **User grants permission**
The user must explicitly grant permission for your app to show notifications.
2. **App subscribes to push service**
The app generates a subscription object with endpoint and keys.
3. **Subscription is sent to your server**
Your server stores the subscription information for later use.
4. **Server sends push message**
When an event occurs, your server sends a push message to the push service.
5. **Push service delivers to service worker**
The push service delivers the message to the user's device.
6. **Service worker shows notification**
The service worker receives the push event and displays a notification.

> **Browser Support**: Push notifications are supported in most modern browsers including Chrome, Firefox, Edge, and Opera. Safari has limited support through a different API (Apple Push Notification Service).


### Implementation Steps

#### Step 1: Request Notification Permission

```javascript
function requestNotificationPermission() {
  if (!('Notification' in window)) {
    console.log('This browser does not support notifications');
    return;
  }
  
  Notification.requestPermission()
    .then(permission => {
      if (permission === 'granted') {
        console.log('Notification permission granted!');
        // You can now show notifications
      }
    });
}
```

#### Step 2: Subscribe to Push Service

```javascript
function subscribeToPushService() {
  navigator.serviceWorker.ready
    .then(registration => {
      // Check if we already have a subscription
      return registration.pushManager.getSubscription()
        .then(subscription => {
          if (subscription) {
            return subscription;
          }
          
          // For this example, we'll use a dummy application server key
          // In a real app, you would get this from your server
          const applicationServerKey = new Uint8Array([
            0x04, 0x33, 0x94, 0xf7, 0xdf, 0xa1, 0xeb, 0xb1, 
            0xdc, 0x03, 0xa2, 0x5e, 0x15, 0x71, 0xdb, 0x48, 
            0xd3, 0x2e, 0xed, 0xed, 0xb2, 0x34, 0xdb, 0xb7, 
            0x47, 0x3a, 0x0c, 0x8f, 0
            0xd3, 0x2e, 0xed, 0xed, 0xb2, 0x34, 0xdb, 0xb7, 
            0x47, 0x3a, 0x0c, 0x8f, 0x8d, 0xd4, 0x5f, 0x1d,
            0x3f, 0x8b, 0x5c, 0x77, 0x75, 0x14, 0xd1, 0x5a
          ]);
          
          // Subscribe
          return registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: applicationServerKey
          });
        });
    })
    .then(subscription => {
      // Send the subscription to your server
      console.log('Push notification subscription:', subscription);
      
      // In a real app, you would send this to your server
      // return fetch('/api/save-subscription', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(subscription)
      // });
    })
    .catch(error => {
      console.error('Error subscribing to push notifications:', error);
    });
}
```

#### Step 3: Handle Push Events in Service Worker

```javascript
// In service-worker.js
self.addEventListener('push', event => {
  if (!event.data) {
    console.log('Push event but no data');
    return;
  }
  
  // Get the notification data
  const data = event.data.json();
  
  // Show notification
  const options = {
    body: data.body,
    icon: data.icon,
    badge: data.badge,
    data: data.data,
    actions: data.actions
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Handle notification click
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(
    clients.matchAll({
      type: 'window'
    })
    .then(clientList => {
      for (const client of clientList) {
        if (client.url === '/' && 'focus' in client) {
          return client.focus();
        }
      }
      
      if (clients.openWindow) {
        return clients.openWindow('/');
      }
    })
  );
});
```

#### Step 4: Simulating Push Notifications (for Development)
Since we can't implement a full server for this tutorial, here's how to simulate push notifications during development:

```javascript
// Function to simulate a push notification
function simulatePushNotification() {
  navigator.serviceWorker.ready
    .then(registration => {
      registration.showNotification('Simulated Notification', {
        body: 'This is a simulated push notification',
        icon: '/icon-192x192.png',
        badge: '/badge-72x72.png',
        data: {
          url: '/'
        },
        actions: [
          {
            action: 'explore',
            title: 'View Details'
          },
          {
            action: 'close',
            title: 'Close'
          }
        ]
      });
    });
}

// Add a button to trigger the simulation
document.getElementById('simulate-notification-btn').addEventListener('click', () => {
  simulatePushNotification();
});
```

### Best Practices for Push Notifications

#### User Experience
- Ask for permission at the right time, not immediately on page load
- Explain the value of notifications before requesting permission
- Provide a way for users to manage notification preferences
- Respect user's decision if they deny permission


#### Content
- Keep notifications relevant and timely
- Use clear, concise language
- Include actionable information
- Personalize notifications when possible
- Use appropriate icons and images


#### Technical
- Handle subscription expiration and updates
- Implement proper error handling
- Test across different browsers and devices
- Monitor delivery rates and user engagement
- Implement proper security measures


#### Frequency
- Don't overwhelm users with too many notifications
- Group related notifications when possible
- Consider time zones when sending notifications
- Allow users to set frequency preferences


#### Examples of Good Push Notifications:
- E-commerce: "Your order has shipped! Track package #12345 here."
- Social Media: "Sarah commented on your photo: 'Great shot!'"
- Travel: "Your flight to London has been delayed by 30 minutes. New departure: 3:45 PM."
- News: "Breaking: Major announcement from SpaceX about Mars mission."


> **Testing Push Notifications**: Use Chrome DevTools to test push notifications during development. In the Application tab, you can trigger push events without having to send them from your server.


### Exercise: Implement Basic Notifications
Create a simple notification system for a fictional app:
1. Add a button to request notification permission
2. Add a button to simulate a notification
3. Implement a service worker that can display notifications
4. Add a settings page where users can toggle different types of notifications


## Activity 6: Building a Complete PWA

### Building a Weather PWA
In this activity, we'll build a weather application that demonstrates all the key features of a Progressive Web App:
- Responsive design that works on all devices
- Offline functionality with cached weather data
- Installable with a web app manifest
- Push notifications for weather alerts
- Background sync for updating weather data


#### Project Structure:

```plaintext
weather-pwa/
├── index.html
├── manifest.json
├── service-worker.js
├── offline.html
├── css/
│   ├── style.css
│   └── weather-icons.css
├── js/
│   ├── app.js
│   ├── install.js
│   ├── weather-api.js
│   └── db.js
├── images/
│   ├── icons/
│   │   ├── icon-128x128.png
│   │   ├── icon-144x144.png
│   │   ├── icon-152x152.png
│   │   ├── icon-192x192.png
│   │   ├── icon-256x256.png
│   │   ├── icon-512x512.png
│   │   └── maskable-icon.png
│   └── weather/
│       ├── sunny.svg
│       ├── cloudy.svg
│       ├── rainy.svg
│       └── ...
└── favicon.ico
```

#### Key Files:
- `index.html`: Main application HTML
- `manifest.json`: Web App Manifest
- `service-worker.js`: Service Worker for offline support
- `offline.html`: Offline fallback page
- `app.js`: Main application logic
- `weather-api.js`: Weather API integration
- `db.js`: IndexedDB for offline data storage


#### Features to Implement:
- Current weather display
- 5-day forecast
- Location search
- Geolocation support
- Weather alerts
- Offline access to previously viewed locations
- Add to home screen functionality
- Dark/light theme toggle


#### Basic HTML Structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#2196f3">
  <title>Weather PWA</title>
  <link rel="stylesheet" href="/css/style.css">
  <link rel="stylesheet" href="/css/weather-icons.css">
  <link rel="manifest" href="/manifest.json">
  <link rel="apple-touch-icon" href="/images/icons/icon-152x152.png">
  <link rel="shortcut icon" href="/favicon.ico">
</head>
<body>
  <header class="header">
    <h1>Weather PWA</h1>
    <div class="search-container">
      <input type="text" id="location-input" placeholder="Enter location...">
      <button id="search-button">Search</button>
      <button id="geolocation-button" aria-label="Use current location">
        <span class="icon">📍</span>
      </button>
    </div>
    <button id="install-button" class="hidden">Install App</button>
  </header>

  <main>
    <section id="current-weather" class="card">
      <div class="loader"></div>
      <!-- Current weather content will be inserted here -->
    </section>
    
    <section id="forecast" class="card">
      <h2>5-Day Forecast</h2>
      <div class="forecast-container">
        <!-- Forecast content will be inserted here -->
      </div>
    </section>
  </main>

  <footer>
    <p>Weather data provided by <a href="https://openweathermap.org/">OpenWeatherMap</a></p>
    <button id="theme-toggle">Toggle Dark Mode</button>
  </footer>

  <div id="offline-message" class="hidden">
    You are currently offline. Showing cached data.
  </div>

  <script src="/js/db.js"></script>
  <script src="/js/weather-api.js"></script>
  <script src="/js/install.js"></script>
  <script src="/js/app.js"></script>
</body>
</html>
```

#### Web App Manifest:

```json
{
  "name": "Weather PWA",
  "short_name": "Weather",
  "description": "A Progressive Web App for weather forecasts",
  "start_url": "/index.html",
  "display": "standalone",
  "background_color": "#2196f3",
  "theme_color": "#2196f3",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "/images/icons/icon-128x128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "/images/icons/icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "/images/icons/icon-152x152.png",
      "sizes": "152x152",
      "type": "image/png"
    },
    {
      "src": "/images/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/images/icons/icon-256x256.png",
      "sizes": "256x256",
      "type": "image/png"
    },
    {
      "src": "/images/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    },
    {
      "src": "/images/icons/maskable-icon.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable"
    }
  ],
  "screenshots": [
    {
      "src": "/images/screenshots/weather-app-1.png",
      "sizes": "1280x720",
      "type": "image/png"
    },
    {
      "src": "/images/screenshots/weather-app-2.png",
      "sizes": "1280x720",
      "type": "image/png"
    }
  ],
  "shortcuts": [
    {
      "name": "Current Location",
      "short_name": "Current",
      "description": "View weather for current location",
      "url": "/index.html?mode=current",
      "icons": [{ "src": "/images/icons/current-location.png", "sizes": "192x192" }]
    },
    {
      "name": "Saved Locations",
      "short_name": "Saved",
      "description": "View your saved locations",
      "url": "/index.html?mode=saved",
      "icons": [{ "src": "/images/icons/saved-locations.png", "sizes": "192x192" }]
    }
  ],
  "related_applications": [],
  "prefer_related_applications": false
}
```

#### Install Button Implementation:

```javascript
// install.js
let deferredPrompt;

// Check if the app can be installed
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default prompt
  event.preventDefault();
  
  // Store the event for later use
  deferredPrompt = event;
  
  // Show the install button
  const installButton = document.getElementById('install-button');
  installButton.classList.remove('hidden');
});

// Handle the install button click
document.getElementById('install-button').addEventListener('click', async () => {
  if (!deferredPrompt) {
    return;
  }
  
  // Show the install prompt
  deferredPrompt.prompt();
  
  // Wait for the user's choice
  const { outcome } = await deferredPrompt.userChoice;
  console.log('User installation choice:', outcome);
  
  // Clear the deferred prompt
  deferredPrompt = null;
  
  // Hide the install button
  document.getElementById('install-button').classList.add('hidden');
});

// Listen for successful installation
window.addEventListener('appinstalled', (event) => {
  console.log('Weather PWA was installed');
  // Hide the install button
  document.getElementById('install-button').classList.add('hidden');
});
```

#### Service Worker Implementation:

```javascript
// service-worker.js
const CACHE_NAME = 'weather-pwa-v1';
const STATIC_CACHE_URLS = [
  '/',
  '/index.html',
  '/offline.html',
  '/css/style.css',
  '/css/weather-icons.css',
  '/js/app.js',
  '/js/db.js',
  '/js/install.js',
  '/js/weather-api.js',
  '/images/icons/icon-192x192.png',
  '/images/weather/sunny.svg',
  '/images/weather/cloudy.svg',
  '/images/weather/rainy.svg',
  '/images/weather/snowy.svg',
  '/images/weather/stormy.svg',
  '/images/weather/windy.svg'
];

// Install event - cache static assets
self.addEventListener('install', event => {
  console.log('[Service Worker] Installing Service Worker...');
  
  // Skip waiting to activate immediately
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Caching app shell and content');
        return cache.addAll(STATIC_CACHE_URLS);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating Service Worker...');
  
  event.waitUntil(
    caches.keys()
      .then(keyList => {
        return Promise.all(keyList.map(key => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Removing old cache', key);
            return caches.delete(key);
          }
        }));
      })
  );
  
  // Claim clients to take control immediately
  return self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  const requestUrl = new URL(event.request.url);
  
  // Handle API requests differently
  if (requestUrl.pathname.startsWith('/api/weather')) {
    // Network first strategy for API requests
    event.respondWith(networkFirstStrategy(event.request));
  } else {
    // Cache first strategy for static assets
    event.respondWith(cacheFirstStrategy(event.request));
  }
});

// Cache-first strategy for static assets
function cacheFirstStrategy(request) {
  return caches.match(request)
    .then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }
      
      return fetch(request)
        .then(response => {
          // Don't cache responses that aren't successful
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clone the response to cache it and return it
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(request, responseToCache);
            });
            
          return response;
        })
        .catch(error => {
          // If the request is for an HTML page, show the offline page
          if (request.headers.get('Accept').includes('text/html')) {
            return caches.match('/offline.html');
          }
          
          throw error;
        });
    });
}

// Network-first strategy for API requests
function networkFirstStrategy(request) {
  return fetch(request)
    .then(response => {
      // Clone the response to cache it and return it
      const responseToCache = response.clone();
      caches.open(CACHE_NAME)
        .then(cache => {
          cache.put(request, responseToCache);
        });
        
      return response;
    })
    .catch(error => {
      console.log('[Service Worker] Network request failed, trying cache', error);
      return caches.match(request);
    });
}

// Push event - handle push notifications
self.addEventListener('push', event => {
  console.log('[Service Worker] Push received');
  
  let data = { title: 'Weather Update', body: 'New weather information available' };
  
  if (event.data) {
    data = event.data.json();
  }
  
  const options = {
    body: data.body,
    icon: '/images/icons/icon-192x192.png',
    badge: '/images/icons/badge-72x72.png',
    data: {
      url: data.url || '/'
    }
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Notification click event - open the app
self.addEventListener('notificationclick', event => {
  console.log('[Service Worker] Notification click received');
  
  event.notification.close();
  
  const urlToOpen = event.notification.data.url;
  
  event.waitUntil(
    clients.matchAll({ type: 'window' })
      .then(windowClients => {
        // Check if there is already a window/tab open with the target URL
        for (const client of windowClients) {
          if (client.url === urlToOpen && 'focus' in client) {
            return client.focus();
          }
        }
        
        // If not, open a new window/tab
        if (clients.openWindow) {
          return clients.openWindow(urlToOpen);
        }
      })
  );
});

// Background sync event
self.addEventListener('sync', event => {
  console.log('[Service Worker] Background sync event', event.tag);
  
  if (event.tag === 'sync-weather-data') {
    event.waitUntil(syncWeatherData());
  }
});

// Function to sync weather data
async function syncWeatherData() {
  try {
    // Get saved locations from IndexedDB
    const db = await openDatabase();
    const locations = await getLocations(db);
    
    // Update weather data for each location
    for (const location of locations) {
      const response = await fetch(`/api/weather?q=${location.name}`);
      const data = await response.json();
      
      // Update the location data in IndexedDB
      await updateLocationData(db, location.id, data);
    }
    
    console.log('[Service Worker] Weather data synced successfully');
    
    // Notify the user if there are important updates
    const alerts = await getWeatherAlerts(db);
    if (alerts.length > 0) {
      await self.registration.showNotification('Weather Alert', {
        body: alerts[0].description,
        icon: '/images/icons/icon-192x192.png',
        badge: '/images/icons/badge-72x72.png'
      });
    }
  } catch (error) {
    console.error('[Service Worker] Failed to sync weather data', error);
  }
}

// Helper functions for IndexedDB operations
function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('weather-pwa-db', 1);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
}

function getLocations(db) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['locations'], 'readonly');
    const store = transaction.objectStore('locations');
    const request = store.getAll();
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
}

function updateLocationData(db, locationId, data) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['locations'], 'readwrite');
    const store = transaction.objectStore('locations');
    const request = store.get(locationId);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      const location = request.result;
      location.weather = data;
      location.lastUpdated = new Date();
      
      const updateRequest = store.put(location);
      updateRequest.onerror = () => reject(updateRequest.error);
      updateRequest.onsuccess = () => resolve();
    };
  });
}

function getWeatherAlerts(db) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['locations'], 'readonly');
    const store = transaction.objectStore('locations');
    const request = store.getAll();
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      const locations = request.result;
      const alerts = [];
      
      for (const location of locations) {
        if (location.weather && location.weather.alerts) {
          alerts.push(...location.weather.alerts);
        }
      }
      
      resolve(alerts);
    };
  });
}
```

#### IndexedDB Implementation:

```javascript
// db.js
const DB_NAME = 'weather-pwa-db';
const DB_VERSION = 1;
let db;

// Open the database
function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    
    request.onerror = event => {
      console.error('Database error:', event.target.error);
      reject('Error opening database');
    };
    
    request.onsuccess = event => {
      db = event.target.result;
      console.log('Database opened successfully');
      resolve(db);
    };
    
    request.onupgradeneeded = event => {
      const db = event.target.result;
      
      // Create object stores
      if (!db.objectStoreNames.contains('locations')) {
        const locationsStore = db.createObjectStore('locations', { keyPath: 'id', autoIncrement: true });
        locationsStore.createIndex('name', 'name', { unique: true });
      }
      
      if (!db.objectStoreNames.contains('settings')) {
        db.createObjectStore('settings', { keyPath: 'id' });
      }
      
      console.log('Database schema updated');
    };
  });
}

// Save a location with weather data
function saveLocation(locationData) {
  return new Promise((resolve, reject) => {
    if (!db) {
      reject('Database not initialized');
      return;
    }
    
    const transaction = db.transaction(['locations'], 'readwrite');
    const store = transaction.objectStore('locations');
    
    // Check if location already exists
    const index = store.index('name');
    const query = index.get(locationData.name);
    
    query.onsuccess = event => {
      const existingLocation = event.target.result;
      
      if (existingLocation) {
        // Update existing location
        existingLocation.weather = locationData.weather;
        existingLocation.lastUpdated = new Date();
        
        const updateRequest = store.put(existingLocation);
        updateRequest.onsuccess = () => resolve(existingLocation.id);
        updateRequest.onerror = () => reject('Error updating location');
      } else {
        // Add new location
        const newLocation = {
          name: locationData.name,
          weather: locationData.weather,
          lastUpdated: new Date(),
          isFavorite: false
        };
        
        const addRequest = store.add(newLocation);
        addRequest.onsuccess = () => resolve(addRequest.result);
        addRequest.onerror = () => reject('Error adding location');
      }
    };
    
    query.onerror = () => reject('Error querying location');
  });
}

// Get all saved locations
function getLocations() {
  return new Promise((resolve, reject) => {
    if (!db) {
      reject('Database not initialized');
      return;
    }
    
    const transaction = db.transaction(['locations'], 'readonly');
    const store = transaction.objectStore('locations');
    const request = store.getAll();
    
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject('Error getting locations');
  });
}

// Get a specific location by name
function getLocationByName(name) {
  return new Promise((resolve, reject) => {
    if (!db) {
      reject('Database not initialized');
      return;
    }
    
    const transaction = db.transaction(['locations'], 'readonly');
    const store = transaction.objectStore('locations');
    const index = store.index('name');
    const request = index.get(name);
    
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject('Error getting location');
  });
}

// Delete a location
function deleteLocation(id) {
  return new Promise((resolve, reject) => {
    if (!db) {
      reject('Database not initialized');
      return;
    }
    
    const transaction = db.transaction(['locations'], 'readwrite');
    const store = transaction.objectStore('locations');
    const request = store.delete(id);
    
    request.onsuccess = () => resolve();
    request.onerror = () => reject('Error deleting location');
  });
}

// Save a setting
function saveSetting(key, value) {
  return new Promise((resolve, reject) => {
    if (!db) {
      reject('Database not initialized');
      return;
    }
    
    const transaction = db.transaction(['settings'], 'readwrite');
    const store = transaction.objectStore('settings');
    const request = store.put({ id: key, value });
    
    request.onsuccess = () => resolve();
    request.onerror = () => reject('Error saving setting');
  });
}

// Get a setting
function getSetting(key) {
  return new Promise((resolve, reject) => {
    if (!db) {
      reject('Database not initialized');
      return;
    }
    
    const transaction = db.transaction(['settings'], 'readonly');
    const store = transaction.objectStore('settings');
    const request = store.get(key);
    
    request.onsuccess = () => {
      const result = request.result;
      resolve(result ? result.value : null);
    };
    request.onerror = () => reject('Error getting setting');
  });
}

// Initialize the database when the script loads
openDatabase().catch(error => console.error('Failed to open database:', error));

// Export the functions
window.weatherDB = {
  openDatabase,
  saveLocation,
  getLocations,
  getLocationByName,
  deleteLocation,
  saveSetting,
  getSetting
};
```

#### Offline Fallback Page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#2196f3">
  <title>Offline - Weather PWA</title>
  <link rel="stylesheet" href="/css/style.css">
  <link rel="manifest" href="/manifest.json">
  <link rel="shortcut icon" href="/favicon.ico">
  <style>
    .offline-container {
      text-align: center;
      padding: 2rem;
      max-width: 600px;
      margin: 0 auto;
    }
    
    .offline-icon {
      font-size: 5rem;
      margin-bottom: 1rem;
    }
    
    .offline-title {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    
    .offline-message {
      margin-bottom: 2rem;
    }
    
    .saved-locations {
      margin-top: 2rem;
      text-align: left;
    }
  </style>
</head>
<body>
  <header class="header">
    <h1>Weather PWA</h1>
  </header>

  <main>
    <div class="offline-container">
      <div class="offline-icon">📡</div>
      <h2 class="offline-title">You're offline</h2>
      <p class="offline-message">
        It looks like you're not connected to the internet. 
        Check your connection and try again.
      </p>
      
      <button id="reload-button" class="button">Try Again</button>
      
      <div class="saved-locations">
        <h3>Your Saved Locations</h3>
        <p>You can still view weather data for your previously loaded locations:</p>
        <ul id="saved-locations-list">
          <!-- Saved locations will be inserted here -->
          <li>Loading saved locations...</li>
        </ul>
      </div>
    </div>
  </main>

  <script>
    // Reload the page when the button is clicked
    document.getElementById('reload-button').addEventListener('click', () => {
      window.location.reload();
    });
    
    // Load saved locations from IndexedDB
    if ('indexedDB' in window) {
      const request = indexedDB.open('weather-pwa-db', 1);
      
      request.onsuccess = event => {
        const db = event.target.result;
        const transaction = db.transaction(['locations'], 'readonly');
        const store = transaction.objectStore('locations');
        const request = store.getAll();
        
        request.onsuccess = () => {
          const locations = request.result;
          const locationsList = document.getElementById('saved-locations-list');
          
          if (locations.length === 0) {
            locationsList.innerHTML = '<li>No saved locations found</li>';
            return;
          }
          
          locationsList.innerHTML = '';
          
          locations.forEach(location => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `/?location=${encodeURIComponent(location.name)}`;
            a.textContent = location.name;
            
            if (location.weather && location.lastUpdated) {
              const date = new Date(location.lastUpdated);
              a.textContent += ` (Last updated: ${date.toLocaleDateString()} ${date.toLocaleTimeString()})`;
            }
            
            li.appendChild(a);
            locationsList.appendChild(li);
          });
        };
        
        request.onerror = () => {
          const locationsList = document.getElementById('saved-locations-list');
          locationsList.innerHTML = '<li>Error loading saved locations</li>';
        };
      };
      
      request.onerror = () => {
        const locationsList = document.getElementById('saved-locations-list');
        locationsList.innerHTML = '<li>Error opening database</li>';
      };
    }
  </script>
</body>
</html>
```

#### Detecting Online/Offline Status:

```javascript
// In app.js
function updateOnlineStatus() {
  const offlineMessage = document.getElementById('offline-message');
  
  if (navigator.onLine) {
    offlineMessage.classList.add('hidden');
    document.body.classList.remove('offline');
    
    // Sync data if we just came back online
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.ready
        .then(registration => {
          return registration.sync.register('sync-weather-data');
        })
        .catch(error => {
          console.error('Background sync registration failed:', error);
        });
    }
  } else {
    offlineMessage.classList.remove('hidden');
    document.body.classList.add('offline');
  }
}

// Listen for online/offline events
window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

// Check initial status
updateOnlineStatus();
```

### Project Challenge:
Complete the Weather PWA by implementing the following features:

1. **Weather API Integration**
Integrate with a weather API like OpenWeatherMap to fetch real weather data.
2. **Geolocation**
Add geolocation support to get weather for the user's current location.
3. **Responsive UI**
Create a beautiful, responsive UI that works well on all devices.


## Activity 7: Testing and Auditing Your PWA

### Testing and Auditing Tools

#### Lighthouse
Lighthouse is an open-source, automated tool for improving the quality of web pages. It can be run against any web page, public or requiring authentication. It has audits for performance, accessibility, progressive web apps, SEO, and more.

**How to use Lighthouse:**
1. Open Chrome DevTools (F12)
2. Go to the "Lighthouse" tab
3. Select the categories you want to audit (make sure "Progressive Web App" is checked)
4. Click "Generate report"


**Key PWA Audit Criteria:**
- Registers a service worker
- Responds with a 200 when offline
- Has a `<meta name="viewport">` tag with width or initial-scale
- Contains some content when JavaScript is not available
- Provides a valid `manifest.json`
- Has a splash screen
- Address bar matches brand colors
- Is installable
- Redirects HTTP traffic to HTTPS
- Loads fast enough on mobile networks


#### Chrome DevTools
Chrome DevTools provides several features specifically for testing PWAs:

**Application Panel:**
- Service Workers: View, debug, and update service workers
- Cache Storage: Inspect and modify cache contents
- IndexedDB: View and modify database contents
- Manifest: Validate web app manifest
- Clear Storage: Reset your app's storage for testing


**Network Panel:**
- Offline mode: Simulate offline conditions
- Throttling: Simulate slow network connections


**Lighthouse Panel:**
- Run audits for PWA compliance


#### WebPageTest
WebPageTest is a free tool that allows you to test your website's performance from multiple locations around the world using real browsers.

**Key features:**
- Detailed waterfall charts
- First view vs. repeat view testing
- Mobile device emulation
- Connection throttling
- Video capture


#### PWA Builder

PWA Builder is a tool that helps you build and improve your Progressive Web App.

**Key features:**
- Manifest generator
- Service worker generator
- PWA report card
- Package your PWA for app stores


### Testing Checklist

#### Functionality Testing
- App works with JavaScript disabled (basic content shows)
- App works offline
- App can be installed to home screen
- App launches from home screen
- App retains state when launched from home screen
- Back button works as expected
- Links to cross-origin destinations work
- Offline fallback page shows when appropriate
- Push notifications work correctly


#### Performance Testing
- First Contentful Paint < 2 seconds on 3G
- Time to Interactive < 5 seconds on 3G
- Page size < 1MB (ideally < 500KB)
- Performance score > 80 in Lighthouse


#### Accessibility Testing
- Proper heading structure
- Images have alt text
- Sufficient color contrast
- Keyboard navigation works
- Screen reader compatibility
- Accessibility score > 90 in Lighthouse


#### Security Testing
- HTTPS implemented correctly
- No mixed content
- Proper Content Security Policy
- Sensitive APIs only used in secure contexts


### Common PWA Audit Issues and Fixes

#### Issue: Service worker doesn't register
**Fix:** Check that your service worker file is in the correct location (usually the root directory) and that the registration code is correct.

#### Issue: Not installable
**Fix:** Ensure your manifest.json has all required fields (name, short_name, icons, start_url, display) and that you're serving over HTTPS.

#### Issue: Fails "responds with 200 when offline"
**Fix:** Make sure your service worker is caching the appropriate resources and has a proper offline fallback strategy.

#### Issue: Poor performance

**Fix:**
- Optimize images
- Minify CSS and JavaScript
- Implement code splitting
- Use lazy loading for non-critical resources
- Implement proper caching strategies


#### Issue: Not accessible

**Fix:**
- Add proper alt text to images
- Ensure sufficient color contrast
- Implement proper ARIA attributes
- Use semantic HTML
- Test with keyboard navigation


### Exercise: Audit Your PWA
1. Build a simple PWA using the techniques learned in this module
2. Run Lighthouse audits on your PWA
3. Identify and fix at least three issues found in the audit
4. Re-run the audit to verify improvements
5. Document the issues you found and how you fixed them


## Common Mistakes / Misconceptions

**Misconception: PWAs only work on mobile devices** \
**Reality:** PWAs work on any device with a modern browser, including desktops, tablets, and mobile phones.

**Mistake: Not testing on multiple browsers** \
**Reality:** Different browsers have different levels of support for PWA features. Always test on multiple browsers.

**Misconception: PWAs require a framework like React or Angular** \
**Reality:** PWAs can be built with any web technology, including vanilla HTML, CSS, and JavaScript.

**Mistake: Caching too much or too little** \
**Reality:** Be strategic about what you cache. Cache the app shell and critical resources, but be careful about caching dynamic content.

**Misconception: Service workers are only for offline support** \
**Reality:** Service workers enable many features beyond offline support, including push notifications, background sync, and performance optimizations.

**Mistake: Not handling service worker updates properly** \
**Reality:** When you update your service worker, you need to handle the update process carefully to ensure users get the new version.

**Misconception: PWAs are just for simple apps** \
**Reality:** PWAs can be as complex and feature-rich as native apps. Many major companies have complex PWAs.

**Mistake: Requesting notification permission on page load** \
**Reality:** Always request notification permission after a user interaction and explain why you need it.

**Misconception: PWAs can access all device features** \
**Reality:** While PWAs can access many device features, some are still limited compared to native apps.

**Mistake: Not providing a fallback for browsers that don't support service workers** \
**Reality:** Always implement progressive enhancement so your app works (even with limited functionality) on all browsers.


## Additional Resources

### Documentation
- [MDN Web Docs: Progressive Web Apps](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [Google Developers: Progressive Web Apps](https://developers.google.com/web/progressive-web-apps)
- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)
- [Cache API](https://developer.mozilla.org/en-US/docs/Web/API/Cache)
- [IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
- [Push API](https://developer.mozilla.org/en-US/docs/Web/API/Push_API)
- [Notification API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API)


### Tools
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [PWA Builder](https://www.pwabuilder.com/)
- [Workbox](https://developers.google.com/web/tools/workbox) - A library that makes it easy to add offline support to web apps
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)


### Tutorials and Courses
- [Your First Progressive Web App](https://codelabs.developers.google.com/codelabs/your-first-pwapp)
- [Progressive Web Apps Training](https://web.dev/learn/pwa/)
- [Offline Web Applications](https://www.udacity.com/course/offline-web-applications--ud899)
- [Progressive Web Apps - The Concise PWA Masterclass](https://www.udemy.com/course/progressive-web-apps/)


### Examples
- [PWA Directory](https://pwa-directory.appspot.com/)
- [PWA Stats](https://www.pwastats.com/)
- [PWA Rocks](https://pwa.rocks/)


### Communities
- [Stack Overflow - PWA Tag](https://stackoverflow.com/questions/tagged/progressive-web-apps)
- [Reddit - r/PWA](https://www.reddit.com/r/PWA/)
- [PWA Slack Community](https://bit.ly/pwa-slack)
