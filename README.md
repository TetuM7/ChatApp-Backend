# Chatbot Backend

## Overview

This repository contains the backend implementation for a high-performance chatbot application. Designed for speed, reliability, and scalability, this backend supports a chat platform that enables instantaneous and continuous dialogue, essential for successful collaboration in any setting.

## Features

- **Real-Time Interaction:** Utilizes Firebase backend solutions to manage large volumes of real-time data, ensuring immediate responses and interactive communication.
- **Scalable Architecture:** Leverages Cloud Firestore, providing a scalable solution to accommodate growing data needs without degradation of performance.
- **Reliable Performance:** Engineered to be robust under various load conditions, maintaining consistent performance.

## Technologies Used

- **Firebase:** Used for managing backend services and real-time data flow.
- **Cloud Firestore:** Acts as the primary database, chosen for its scalability and ease of use for real-time applications.
- **Postman:** Used for testing and interacting with Firebase Cloud Functions, ensuring they function correctly before deployment.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

```bash
npm install -g firebase-tools.
```

## Clone the repo:
  ```bash
git clone https://github.com/yourusername/chatbot-backend.git
```

Install dependencies:
```bash
npm install
```
Set up your Firebase project:
```bash

firebase login
firebase init
```


Testing with Postman
To test the addMessage Firebase Cloud Function with Postman, follow these steps:

Open Postman.

Create a new request.

Set the request type to POST.

Enter the URL for your deployed addMessage function (you can find this in your Firebase console under Functions).

Add the necessary headers and request body for testing.

Send the request and observe the response.



