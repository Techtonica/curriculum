# Deploying to Google Cloud (GCP)

## Introduction to Google Cloud

Google Cloud (GCP) is Google's suite of cloud computing services, running on the same infrastructure that Google uses internally for its end-user products like Google Search and YouTube. It offers a wide range of services for computing, storage, networking, big data, machine learning, and more.

Start out with Firebase Hosting for static sites and simple web apps, and Cloud Run for containerized applications, as these provide a relatively straightforward path to deployment.

## Prerequisites

- A Google Cloud account (with billing enabled for some services, though free tiers exist)
- A Google Cloud Project (created in the GCP Console)
- Basic understanding of web development
- Git and GitHub (or another version control system)
- Node.js and npm (if deploying a Node.js-based application)
- Google Cloud CLI (gcloud CLI) installed and configured on your local machine

## Deployment Options for New Developers

### Option 1: Static Website Hosting with Firebase Hosting

Firebase is Google's mobile and web application development platform, and Firebase Hosting is an excellent, fast, and secure way to host static assets and single-page applications.

#### 1. Install Firebase CLI
- Open your terminal and install the Firebase CLI globally:
    ```bash
    npm install -g firebase-tools
    ```

#### 2. Log In to Firebase
- Authenticate your machine with your Google account:
    ```bash
    firebase login
    ```
- Follow the browser prompts to log in.

#### 3. Initialize Your Project
- Navigate to your project's root directory in the terminal.
- Initialize Firebase for your project:
    ```bash
    firebase init hosting
    ```
- During initialization, you'll be prompted to:
    - Select a Firebase project (choose an existing one or create a new one).
    - Choose your public directory (usually `public` or `dist` for built apps).
    - Configure as a single-page app (if applicable, which rewrites all URLs to `index.html`).
    - Set up automatic GitHub deploys (optional, but recommended).

#### 4. Prepare Your Files
- If you have a build step (e.g., for a React or Next.js static export), run it first:
    ```bash
    npm run build
    ```
- Ensure the output files are in your configured public directory.

#### 5. Deploy Your Website
- Deploy your project:
    ```bash
    firebase deploy --only hosting
    ```
- Firebase will give you a "Hosting URL" where your site is live.

#### 6. (Optional) Add a Custom Domain
- In the Firebase Console for your project, go to 'Hosting'.
- Click 'Add custom domain' and follow the instructions to verify ownership and update DNS records.

### Option 2: Deploying Containerized Web Apps with Cloud Run

Cloud Run is a serverless platform that allows you to run stateless containers via web requests. It's great for backend APIs, web services, or full-stack applications packaged in a Docker container.

#### 1. Containerize Your Application (Create a Dockerfile)
- In your project's root directory, create a `Dockerfile`. This file defines how your application will be built into a Docker image.
- Example for a Node.js app:

    ```dockerfile
    # Use an official Node.js runtime as a parent image
    FROM node:20-slim

    # Set the working directory in the container
    WORKDIR /app

    # Copy package.json and package-lock.json first to leverage Docker cache
    COPY package*.json ./

    # Install app dependencies
    RUN npm install

    # Copy the rest of the application code
    COPY . .

    # Build the application (if applicable, e.g., for Next.js)
    # RUN npm run build

    # Expose the port your app listens on
    EXPOSE 8080

    # Command to run the application
    CMD ["npm", "start"]
    ```

#### 2. Build and Push Your Docker Image to Google Container Registry (GCR)
- Enable the Cloud Run API and Container Registry API in your GCP project.
- Build your Docker image (replace `your-project-id` and `your-image-name`):
    ```bash
    gcloud builds submit --tag gcr.io/your-project-id/your-image-name
    ```
- This command builds the image and pushes it to GCR.

#### 3. Deploy to Cloud Run
- Deploy the image to Cloud Run (replace `your-project-id`, `your-image-name`, and `your-service-name`):
    ```bash
    gcloud run deploy your-service-name --image gcr.io/your-project-id/your-image-name --platform managed --region us-central1 --allow-unauthenticated
    ```
    - `--platform managed`: Use the fully managed Cloud Run environment.
    - `--region`: Choose a region close to your users.
    - `--allow-unauthenticated`: Allows public access to your service (remove for private services).
- Cloud Run will provide a unique URL for your deployed service.

#### 4. (Optional) Add a Custom Domain
- In the Cloud Run service details in the GCP Console, go to 'Custom domains'.
- Add a custom domain and follow the verification and DNS instructions.

## Key GCP Concepts to Understand

- **Google Cloud Project:** The fundamental container for all your GCP resources.
- **Firebase:** A platform for building web and mobile applications, including hosting.
- **Cloud Run:** Serverless platform for running stateless containers.
- **App Engine:** Platform as a Service (PaaS) for deploying web applications and mobile backends.
- **Cloud Storage:** Object storage for files, similar to AWS S3.
- **Compute Engine:** Infrastructure as a Service (IaaS) for virtual machines, similar to AWS EC2.
- **gcloud CLI:** The command-line tool for interacting with Google Cloud.
- **Billing:** Always monitor your billing dashboard and use the Free Tier where possible.

## Next Steps and Troubleshooting

- **Monitor your app:** Use Google Cloud Logging and Monitoring.
- **Troubleshooting deployments:** Check build logs in Cloud Build, and service logs in Cloud Run.
- **Permissions:** Ensure your service accounts have the necessary IAM permissions.
