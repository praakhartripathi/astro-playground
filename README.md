# astro-playground

A practice project for building a Vedic Astrology web app using modern full-stack development. Includes experimental features for horoscope logic, Kundli analysis, and astrology-based recommendations.

## Getting Started

This guide provides two ways to get the project running on your local machine: with Docker (recommended) or with a local Node.js environment.

### With Docker (Recommended)

**Prerequisites**

You need to have the following software installed on your machine:

-   [Git](https://git-scm.com/)
-   [Docker](https://www.docker.com/products/docker-desktop/)
-   [Docker Compose](https://docs.docker.com/compose/install/) (typically included with Docker Desktop)

**Installation and Running**

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/astro-playground.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd astro-playground
    ```

3.  **Run the application using Docker Compose:**
    This command will build the frontend Docker image and start the development server.
    ```bash
    docker-compose up
    ```

4.  **Open the application:**
    Once the container is running, the frontend will be accessible at [http://localhost:5173](http://localhost:5173). The service supports hot-reloading, so changes made to the source code in the `frontend` directory will be reflected in your browser automatically.

---

### Without Docker (Local Development)

If you prefer to run the frontend directly on your machine without using Docker, follow these steps.

**Prerequisites**

-   Git
-   Node.js (v18.x or later is recommended)

**Installation and Running**

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/astro-playground.git
    ```

2.  **Navigate to the frontend directory:**
    ```bash
    cd astro-playground/frontend
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```
    This command also sets up a pre-commit hook that automatically runs the linter and tests on staged files before each commit using `lint-staged`.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  **Open the application:**
    The frontend will be accessible at http://localhost:5173.

## Contributing

Contributions are welcome! For guidelines on how to contribute, please see our [Contributing Guidelines](CONTRIBUTING.md).

Please note that this project is released with a [Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

## Project Structure

A brief overview of the key files and directories in this project.

-   **`.github/workflows/`**: Contains the GitHub Actions workflow for Continuous Integration (CI). This workflow automatically lints, builds, and tests the frontend application on every pull request to `main`.
-   **`frontend/`**: The main directory for the React frontend application.
    -   **`src/components/`**: Contains all reusable React components, such as `Navbar` and `SubNavbar`.
    -   **`src/locales/`**: Holds the JSON files for internationalization (i18n), with translations for different languages.
    -   **`src/App.jsx`**: The root component where the main layout and components are assembled.
    -   **`src/main.jsx`**: The entry point for the React application, where the `App` component is rendered to the DOM.
-   **`docker-compose.yml`**: Defines the services for the local development environment using Docker. It configures the frontend service for hot-reloading.
-   **`CONTRIBUTING.md` & `CODE_OF_CONDUCT.md`**: Guidelines and standards for community contributors.

## Adding a New Language

To add support for a new language, follow these steps:

1.  **Create a Translation File**:
    *   In the `frontend/src/locales/` directory, create a new folder named with the language's two-letter ISO 639-1 code (e.g., `fr` for French).
    *   Inside this new folder, create a `translation.json` file.
    *   Copy the keys from an existing translation file (like `frontend/src/locales/en/translation.json`) and provide the translated values.

    ```json
    // frontend/src/locales/fr/translation.json
    {
      "appName": "ASTRO Terrain de Jeu",
      "signIn": "Se Connecter"
    }
    ```

2.  **Register the Language Resource**:
    *   Open `frontend/src/resources.js` (the file that aggregates all translation files).
    *   Import your new `translation.json` file and add it to the exported `resources` object.

3.  **Add the Language Name for the UI**:
    *   Open `frontend/src/components/Navbar.jsx`.
    *   Add the new language code and its native name to the `languageNames` object. This ensures it displays correctly in the language selector dropdown.

After completing these steps and restarting the application, the new language will be available.
