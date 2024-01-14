# Sales Project

This project is a Vue.js 3 application implementing a responsive dashboard page, with functionality to fetch and display products, and perform searches and sorting on product data. The layout adapts to various screen sizes, offering a clean, user-friendly interface.

## Features

- **Responsive Dashboard**: Adapts to every screen size, based on the provided Figma design.
- **Products Display**: Fetches and displays products with fields like title, category, brand, price, stock, and rating.
- **Search Functionality**: Includes input fields for searching products by title and brand.
- **Sorting**: Sort functionality for the title and brand columns.
- **Product Detail View**: Clickable product titles redirecting to a detailed view of the product.
- **Technical Stack**: Vue 3, Vite, TypeScript, and Vitest.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/bug-king-solver/sales
   cd sales
   ```

2. Install Dependencies
   ```bash
   yarn install
   ```

## Usage

To start the development server:

```bash
yarn dev
```

This will launch the project at `http://localhost:5173`.

## Building for Production

To create a production build, use:

```bash
yarn build
```

## Running Tests

Execute unit tests with Vitest:

```bash
yarn test
```

## Fetch Helper

A custom `fetchHelper` function is utilized for API requests. It is typesafe and enhances the default fetch functionality. Unit tests ensure its reliability.
