FROM nginx:alpine

# Copy website files to nginx html directory
COPY index.html /usr/share/nginx/html/
COPY js/ /usr/share/nginx/html/js/
COPY assets/ /usr/share/nginx/html/assets/
COPY robots.txt /usr/share/nginx/html/
COPY sitemap.xml /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
