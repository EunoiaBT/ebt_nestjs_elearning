# eLearning App Backend 🎓

This repository contains the backend services for the eLearning App, built with NestJS. It serves as the server-side component for the Flutter-based eLearning application, providing RESTful APIs for user management, course content, quizzes, and other essential functionalities.

## Description

The backend is designed with a modular architecture, ensuring scalability and maintainability. It connects to a MongoDB database for data storage and uses Nodemailer and SendGrid for email notifications. This setup ensures robust performance and seamless integration with the Flutter frontend.

## Tech Stack 🛠️

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **MongoDB**: A NoSQL database used for storing application data.
- **Nodemailer**: A module for sending emails from Node.js applications.
- **SendGrid**: A cloud-based service that provides email delivery and marketing campaigns.

## Features ✨

- **User Authentication**: Secure user sign-up, login, and profile management.
- **Course Management**: APIs for creating, updating, and managing courses.
- **Quiz Handling**: APIs for managing quizzes and tracking user progress.
- **Email Notifications**: Automated email notifications using Nodemailer and SendGrid.
- **Scalable Architecture**: Designed to handle growing user bases and expanding features.

## Installation 🚀

Follow these steps to set up the backend locally:

1. **Clone the repository**:

   ```bash
   git clone git@github.com:EunoiaBT/ebt_nestjs_elearning.git
   cd ebt_nestjs_elearning
   ```

2. **Install dependencies**:

   ```bash
   pnpm i
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory with the following variables:

   ```plaintext
   MONGODB_URI=<your-mongodb-connection-string>
   SENDGRID_API_KEY=<your-sendgrid-api-key>
   EMAIL_FROM=<your-email-address>
   ```

4. **Run the application**:

   ```bash
   pnpm start:dev
   ```

5. **Access the API documentation**:
   Navigate to `http://localhost:3000/api/v1/*` to view the Swagger API documentation.

## Project Structure 🗂️

The project follows a modular architecture to keep the codebase organized and maintainable:

```plaintext
src/
│
├── auth/                      # Authentication module
├── common/                    # Common utilities and helpers
├── course/                    # Course management module
├── quiz/                      # Quiz handling module
├── mail/                      # Email service module (Nodemailer & SendGrid)
├── user/                      # User management module
├── app.module.ts              # Root module
└── main.ts                    # Entry point of the application
```

## Contributing 🤝

We welcome contributions from developers of all skill levels! Here’s how you can help:

1. **Fork the repository**.
2. **Create a new branch**:
   ```bash
   git checkout -b feature-branch-name
   ```
3. **Make your changes** and commit them with descriptive messages.
4. **Push to your branch**:
   ```bash
   git push origin feature-branch-name
   ```
5. **Create a pull request** explaining your changes.

Please ensure your code follows our coding standards and adheres to the Clean Architecture principles before submitting a pull request.

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact 📧

For any questions, suggestions, or issues, feel free to open an issue or reach out via email:

- **Email**: [fsd.rabgay@gmail.com](mailto:fsd.rabgay@gmail.com)

## Acknowledgements 🙌

A big thank you to the open-source community for providing the tools and resources that made this project possible.
