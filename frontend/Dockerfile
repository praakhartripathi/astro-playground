# ---- Build Stage ----
# Use a Node.js image to build the app
FROM node:lts-alpine AS builder
WORKDIR /app

# Copy package files and install all dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the Astro site for production
RUN npm run build

# Remove development dependencies
RUN npm prune --production

# ---- Runtime Stage ----
# Use a clean, lightweight Node.js image for the final image
FROM node:lts-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production
# Astro's Node adapter typically runs on port 4321 by default. [2, 3]
ENV PORT=4321
# Listen on all network interfaces within the container. [1, 3]
ENV HOST="0.0.0.0"

# Copy the built app and production node_modules from the builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the port the app runs on
EXPOSE 4321

# Command to start the Node.js server
CMD ["node", "dist/server/entry.mjs"]