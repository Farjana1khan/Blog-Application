# Blog Post
This repository contains a CRUD (Create, Read, Update, Delete) Blog Post application built with React.js and Firebase for user authentication. 
# Blog Application
A simple blog application built with React.js that allows users to create, read, update, and delete blog posts. 
The application utilizes Firebase for authentication and Redux Toolkit for state management.

# Table of Contents
Features

Technologies Used

Installation

Usage

Folder Structure

# Features
User authentication using Firebase
Create, read, update, and delete (CRUD) functionality for blog posts
Blog post properties:
Title
Description (with a text editor)
Cover image
List of blog posts displayed on the homepage
Individual blog page to read the full content of a post
User-friendly navigation with Login/Signup options in the navbar
State management with Redux Toolkit for managing blog post data


#  Technologies Used
1. Frontend: React.js(or Create React App)
2. State Management: Redux Toolkit
3. Authentication: Firebase
4. Styling: Tailwind CSS



# Clone the Repository:
git clone https://github.com/Farjana1khan/BlogPost

cd blog-app

# Install Dependencies

# Set Up Firebase:

Create a Firebase project in the Firebase Console.

Enable Authentication (Email/Password method).

Set up Firestore Database (if needed).

Replace the Firebase configuration in src/firebase.js with your project's credentials.



# Run Application
npm start


# Usage
Homepage: Displays a list of blog posts. Users can click on a post to view its details.

Single Blog Page: Shows the full content of the selected blog post.

Login/Signup: Users can create an account or log in to manage their blog posts.

Create Blog Post: Authenticated users can add a new blog post with a title, description, and cover image.

Edit/Delete Blog Post: Users can edit or delete their own posts from the list.


