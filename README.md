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

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  **Open the application:**
    The frontend will be accessible at http://localhost:5173.

## Contributing

Contributions are welcome! For guidelines on how to contribute, please see our [Contributing Guidelines](CONTRIBUTING.md).

Please note that this project is released with a [Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.
