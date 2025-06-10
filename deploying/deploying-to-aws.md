# Deploying to AWS (Amazon Web Services)

## Introduction to AWS

AWS (Amazon Web Services) is a comprehensive, broadly adopted, and widely used cloud platform, offering over 200 fully featured services from data centers globally. For new developers, it can seem daunting due to its vastness, but it's essential for understanding modern cloud infrastructure.

This outline focuses on two common and relatively beginner-friendly ways to deploy web applications: using AWS Amplify for modern web apps (like React, Next.js) and AWS S3 for static websites.

## Prerequisites

- An AWS account (with root user and an IAM user for daily use)
- Basic understanding of web development (HTML, CSS, JavaScript)
- Git and GitHub (or another version control system)
- Node.js and npm (if deploying a Node.js-based application)

## Deployment Options for New Developers

### Option 1: Static Website Hosting with AWS S3 and CloudFront

This is great for simple websites, single-page applications (SPAs), or portfolios.

#### 1. Prepare Your Static Files
- Ensure all your website files (HTML, CSS, JS, images) are ready.

#### 2. Create an S3 Bucket
- Go to the S3 service in the AWS Management Console.
- Click 'Create bucket'.
- Give your bucket a unique name (e.g., `my-awesome-static-site`).
- Choose an AWS Region close to your users.
- **Crucially**, uncheck "Block all public access" and acknowledge the warning (you'll set specific public access later).
- Create the bucket.

#### 3. Enable Static Website Hosting
- Navigate to your new S3 bucket.
- Go to the 'Properties' tab.
- Scroll down to "Static website hosting" and click 'Edit'.
- Select 'Enable'.
- Set your 'Index document' (e.g., `index.html`) and 'Error document' (e.g., `error.html`).
- Save changes. Note the "Bucket website endpoint" – this is your site's URL.

#### 4. Configure Bucket Policy (Grant Public Read Access)
- Go to the 'Permissions' tab.
- Under "Bucket policy", click 'Edit'.
- Add a policy that grants public read access to your bucket's objects. A common policy looks like this (replace `YOUR_BUCKET_NAME`):

    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Principal": "*",
                "Action": "s3:GetObject",
                "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
            }
        ]
    }
    ```
- Save changes.

#### 5. Upload Your Website Files
- In your S3 bucket, go to the 'Objects' tab.
- Click 'Upload'.
- Drag and drop your website files and folders.
- Ensure all files are uploaded correctly.

#### 6. (Optional) Set up AWS CloudFront for CDN and Custom Domain/SSL
- CloudFront is a Content Delivery Network (CDN) that speeds up content delivery and enables HTTPS for custom domains.
- Go to the CloudFront service.
- Create a new distribution, pointing it to your S3 bucket's website endpoint.
- Configure CNAMEs for custom domains and attach an SSL certificate from AWS Certificate Manager (ACM).

### Option 2: Deploying Modern Web Apps with AWS Amplify

AWS Amplify is a set of tools and services that makes it easy to build, ship, and host full-stack applications on AWS. It's excellent for Next.js, React, Vue, Angular, etc.

#### 1. Set up Your Project in a Git Repository
- Ensure your web application (e.g., a Next.js app) is committed and pushed to a GitHub, GitLab, Bitbucket, or AWS CodeCommit repository.

#### 2. Connect Your Repository to Amplify
- Go to the AWS Amplify service in the AWS Management Console.
- Under "Amplify Hosting", click 'Host your web app'.
- Choose your Git provider (e.g., GitHub) and authorize Amplify.
- Select the repository and branch you want to deploy.

#### 3. Configure Build Settings
- Amplify will usually auto-detect your framework (e.g., Next.js, React) and suggest build settings.
- Review and adjust the build commands and output directory if necessary (e.g., for Next.js: `npm run build` and `out`).
- You can add environment variables here if your app needs them.

#### 4. Deploy Your Application
- Review all settings and click 'Save and deploy'.
- Amplify will clone your repository, build your app, and deploy it.
- You'll get a unique URL for your deployed application.

#### 5. (Optional) Add a Custom Domain
- In the Amplify Console, navigate to your app.
- Go to 'Domain management' and add your custom domain.
- Amplify can automatically provision an SSL certificate for you.

## Key AWS Concepts to Understand

- **S3 (Simple Storage Service):** Object storage for files, perfect for static websites.
- **EC2 (Elastic Compute Cloud):** Virtual servers (VMs) in the cloud. More advanced, for running your own servers.
- **Lambda:** Serverless compute service, runs code without provisioning or managing servers (often used with Amplify or API Gateway).
- **IAM (Identity and Access Management):** Manages user access and permissions within your AWS account. Crucial for security.
- **CloudFront:** Content Delivery Network (CDN) for fast content delivery.
- **Cost Management:** AWS can be complex regarding billing. Always monitor your usage and set budget alerts. Use the Free Tier when possible.

## Next Steps and Troubleshooting

- **Monitor your app:** Use AWS CloudWatch for logs and monitoring.
- **Troubleshooting builds:** Check the build logs in Amplify or review S3 bucket settings and policies.
- **Security:** Always follow best practices for IAM and bucket policies.
- **Vercel's Edge:** AWS Amplify offers similar serverless capabilities as Vercel, especially for Next.js applications, by leveraging AWS services like Lambda and CloudFront [^3].
