FROM node:24.3.0 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ARG VITE_BACKEND_BASE_URL
ENV VITE_BACKEND_BASE_URL=$VITE_BACKEND_BASE_URL

RUN npm run build -- --mode production

FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]