# 📱 Learning App (React Native - Expo)

## 🚀 Overview

This project is a **Learning App built using React Native and Expo**.
It allows users to browse courses, view lessons, and track lesson completion.

The goal of this project was to demonstrate:

* Clean architecture
* State management
* Navigation handling
* Problem-solving ability
* Effective use of AI-assisted development tools

---

## ✨ Features

### 📚 Course List Screen

* Fetch courses from a mock API
* Search courses by title and description
* Display:

  * Course title
  * Course description
  * Number of lessons

### 📖 Lesson List Screen

* Display lessons for a selected course
* Each lesson shows:

  * Title
  * Short description
* Mark lessons as completed (local state)

### 📄 Lesson Detail Screen

* View full lesson content (text-based)

---

## ⚙️ State Handling

* ✅ Loading state while fetching data
* ✅ Error state if API fails
* ✅ Empty state if no courses or lessons exist

---

## 🛠 Tech Stack

* React Native (Expo)
* React Navigation
* JavaScript (ES6+)

---

## 📂 Project Structure

```
src/
 ├── api/
 │    └── mockApi.js
 ├── navigation/
 │    └── StackNavigator.js
 ├── screens/
 │    ├── CourseListScreen.js
 │    ├── LessonListScreen.js
 │    └── LessonDetailScreen.js
```

### 🧠 Why this structure?

* Separation of concerns
* Easy scalability
* Reusable components
* Clean and maintainable code

---

## 🤖 AI-Assisted Development

### 1. AI Tools Used

* ChatGPT (primary tool)
* Used for:

  * Debugging errors
  * Code generation
  * Architecture suggestions

---

### 2. Example Prompts Used

* "Fix React Native dependency error with Expo 55"
* "Create a course list screen with search functionality"
* "Add loading and error state in React Native"
* "Explain navigation setup using React Navigation"
* "Generate clean folder structure for React Native project"

---

### 3. Where AI Helped Most

AI was most helpful in:

* Resolving dependency conflicts (Expo, React, React Native)
* Structuring the project cleanly
* Generating initial boilerplate code
* Debugging runtime errors
* Suggesting best practices

---

### 4. What Was Manually Implemented / Corrected

* Fixed version mismatches manually
* Improved UI structure and layout
* Implemented search logic (title + description)
* Added lesson completion logic
* Handled edge cases:

  * Empty lessons
  * API failure
* Cleaned and organized code

---

### 5. How I Validated Correctness

* Ran the app on:

  * Android (Expo Go)
  * Web browser
* Verified:

  * Navigation flow
  * Search functionality
  * State handling
* Tested edge cases:

  * No courses
  * No lessons
  * API delay

---

## 🧠 Architecture Thinking

### 1. Project Structure Decision

The project is structured using **feature-based separation**:

* `screens/` → UI logic
* `api/` → data layer
* `navigation/` → routing logic

This ensures:

* Maintainability
* Scalability
* Reusability

---

### 2. Reusability with React Web

If a React Web app existed:

* Business logic (API, hooks) could be reused
* Components could be adapted with minimal changes
* Navigation could be replaced with React Router

Shared layers:

* API logic
* State management
* Data models

---

### 3. Scaling to 50+ Screens

If the app grows:

* Use **feature-based architecture**

  ```
  features/
    courses/
    lessons/
  ```

* Introduce:

  * Global state management (Redux / Zustand)
  * Custom hooks
  * API service layer

* Add:

  * Lazy loading
  * Code splitting
  * Modular navigation

---

## 📸 Screenshots

*Add screenshots here*

Example:

```
/screenshots/course-list.png
/screenshots/lesson-list.png
/screenshots/lesson-detail.png
```

---

## ⚙️ Setup Instructions

### 1. Install dependencies

```bash
npm install
```

### 2. Start project

```bash
npx expo start
```

### 3. Run

* Press `a` → Android
* Press `w` → Web

---

## 🔗 GitHub Repository

👉 https://github.com/TusharJangid18/learning-app

---

## 🎯 Conclusion

This project demonstrates:

* Strong understanding of React Native
* Clean architecture and scalable design
* Effective debugging and problem-solving
* Responsible use of AI tools in development

---

## 🙌 Thank You
