

# 🌿 Contributing to Parampara

First of all, thank you for your interest in contributing to **Parampara**!
This project aims to connect the Indian diaspora with their cultural roots while creating meaningful income opportunities for Indian women. Your contributions help us build a platform that is not just functional, but impactful.

This document provides guidelines and steps for contributing to the repository.

---

## 📌 Table of Contents

* Code of Conduct
* Project Structure
* How to Contribute
* Reporting Bugs
* Suggesting Enhancements
* Pull Requests
* Development Setup
* Coding Guidelines

---

## 🤝 Code of Conduct

By participating in this project, you agree to maintain a respectful, inclusive, and collaborative environment.

We welcome contributors from all backgrounds. Please ensure:

* Respectful communication
* Constructive feedback
* Zero tolerance for harassment

---

## 🏗️ Project Structure

The repository is organized as follows:

* `frontend/` – UI components, pages, and design system
* `backend/` – APIs, authentication, business logic
* `database/` – Schema, migrations, and seed data
* `assets/` – Images, icons, and media resources
* `docs/` – Documentation and guides

---

## 🚀 How to Contribute

### 🐛 Reporting Bugs

If you find a bug, please open an Issue and include:

* Steps to reproduce
* Expected vs actual behavior
* Screenshots/logs (if applicable)
* Device/Browser/OS details

---

### 💡 Suggesting Enhancements

Have an idea? Great. Open an Issue and describe:

* What feature you want
* Why it matters (impact on users/artisans)
* Possible implementation approach

---

### 🔁 Pull Requests

To contribute code:

1. Fork the repository
2. Create a branch

   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes
4. Commit clearly

   ```bash
   git commit -m "Add: feature description"
   ```
5. Push to your fork
6. Create a Pull Request

✅ Ensure:

* You have starred the repo ⭐
* Code is tested
* README is updated (if needed)
* PR has a clear description

---

## ⚙️ Development Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/parampara.git
cd parampara
```

### 2. Setup environment

```bash
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Environment Variables

Create a `.env` file:

```
API_KEY=your_api_key_here
DATABASE_URL=your_database_url
```

⚠️ Never commit `.env` files.

---

### 5. Run the project

```bash
npm start        # frontend (if applicable)
python app.py    # backend (or your entry point)
```

---

## 🧑‍💻 Coding Guidelines

### Python

* Follow **PEP 8**
* Use meaningful variable names
* Add docstrings for major functions

### JavaScript / Frontend

* Use modern ES6+
* Maintain clean UI/UX
* Optimize performance

### General

* Keep commits small and meaningful
* Use clear commit messages:

  * `Fix: login bug`
  * `Add: artisan profile page`
  * `Update: payment integration`

---

## 🌍 Vision Behind Parampara

Parampara is more than a platform—it's a movement to:

* Preserve Indian culture globally
* Empower local women economically
* Create a trusted cultural exchange ecosystem

---

## 💛 Final Note

Every contribution—code, design, ideas, or documentation—helps build something meaningful.

We appreciate your time and effort in making **Parampara** better.
