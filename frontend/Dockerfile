# ---- Build Stage ----
# Use a Node.js image to build the app
FROM node:lts-alpine AS builder
WORKDIR /app

# Copy package files and install all dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the React app for production
RUN npm run build

# ---- Runtime Stage ----
# Use a hardened, unprivileged Nginx image to serve static files.
FROM nginxinc/nginx-unprivileged:alpine

# Copy the built static files from the builder stage to the Nginx web root
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy our custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8080, which the unprivileged Nginx image listens on
EXPOSE 8080