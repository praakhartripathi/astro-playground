# Contributing to Astro Playground

First off, thank you for considering contributing to Astro Playground! It's people like you that make open source projects such a great place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

This document provides a set of guidelines for contributing to this project.

## How Can I Contribute?

### Reporting Bugs

If you find a bug, please ensure it hasn't already been reported by searching on GitHub under [Issues](https://github.com/your-username/astro-playground/issues). If you can't find an open issue addressing the problem, please [open a new one](https://github.com/your-username/astro-playground/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBUG%5D+).

Be sure to include a **title and clear description**, as much relevant information as possible, and steps to reproduce the issue.

### Suggesting Enhancements

If you have an idea for a new feature or an improvement, please check the [Issues](https://github.com/your-username/astro-playground/issues) to see if it has been discussed. If not, feel free to [open a new feature request](https://github.com/your-username/astro-playground/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=%5BFEATURE%5D+).

## Pull Request Process

1.  **Fork the repository** and create your branch from `main`.
2.  Set up your development environment by following the instructions in the `README.md`.
3.  Make your changes in a way that is consistent with the project's style.
4.  When you commit your changes, a pre-commit hook will automatically format your code with Prettier, then run the linter and tests on your staged files using `lint-staged`. Please ensure your code passes all checks.
5.  If you modify translation files, run `npm run check:translations` to ensure all language files are synchronized. The CI workflow will automatically sort the keys for you.
6.  Fill out the Pull Request Template when you're ready to submit.
7.  Issue that pull request! Your PR will be reviewed, and you may be asked to make changes.

## Code Style Guide

### Git Commit Messages

*   Use the present tense ("Add feature" not "Added feature").
*   Use the imperative mood ("Move cursor to..." not "Moves cursor to...").
*   Limit the first line to 72 characters or less.
*   Consider using a conventional commit format like:
    *   `feat: A new feature`
    *   `fix: A bug fix`
    *   `docs: Documentation only changes`
    *   `style: Changes that do not affect the meaning of the code (white-space, formatting, etc)`
    *   `refactor: A code change that neither fixes a bug nor adds a feature`
    *   `test: Adding missing tests or correcting existing tests`
    *   `chore: Changes to the build process or auxiliary tools`

### JavaScript/React Style

*   Follow the style enforced by the project's ESLint configuration.
*   Use functional components with hooks.
*   Write clear, readable code. Add comments for complex or non-obvious logic.
*   Keep components small and focused on a single responsibility.
*   Code formatting is handled automatically by Prettier on commit.

Thank you for your contribution!