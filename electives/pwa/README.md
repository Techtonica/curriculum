# Progressive Web App (PWA) Example

This directory contains a complete example of a Progressive Web App - a Todo application that demonstrates key PWA features including:

- Offline functionality
- Installable on devices
- Push notifications
- Responsive design
- Service worker implementation
- Web app manifest

## Project Structure

```
example-todo-app/
├── index.html          # Main HTML file
├── manifest.json       # Web app manifest
├── service-worker.js   # Service worker for offline functionality
├── app.js             # Main application logic
├── styles.css         # Styling
└── icons/             # App icons (192x192 and 512x512)
```

## Features

1. **Offline Support**
   - The app works without an internet connection
   - Todos are stored in localStorage
   - Service worker caches necessary assets

2. **Installable**
   - Can be installed on desktop and mobile devices
   - App-like experience with full-screen mode
   - Custom icons and splash screen

3. **Push Notifications**
   - Request notification permission
   - Send notifications for reminders

4. **Responsive Design**
   - Works on all screen sizes
   - Mobile-first approach
   - Touch-friendly interface

## How to Run

1. Clone the repository
2. Navigate to the `example-todo-app` directory
3. Serve the files using a local server (e.g., `python -m http.server` or `npx serve`)
4. Open the app in a modern browser
5. Test offline functionality by disabling network connection
6. Try installing the app on your device

## Testing PWA Features

1. **Offline Testing**
   - Open Chrome DevTools
   - Go to Network tab
   - Check "Offline" checkbox
   - Refresh the page - the app should still work

2. **Installation**
   - Look for the install icon in the address bar
   - Click to install the app
   - Verify it works as a standalone app

3. **Lighthouse Audit**
   - Open Chrome DevTools
   - Go to Lighthouse tab
   - Run an audit for PWA features
   - Verify all PWA requirements are met

## Browser Support

The app works best in modern browsers that support PWA features:
- Chrome
- Firefox
- Edge
- Safari (iOS)

## Resources

- [MDN Web Docs: Progressive Web Apps](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [Google's PWA Documentation](https://web.dev/progressive-web-apps/)
- [Service Workers: An Introduction](https://developers.google.com/web/fundamentals/primers/service-workers) 