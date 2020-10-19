server {
  listen 120;
  listen [::]:120;  
  root /var/www/simpleWebsite.com;  
  index index.html;  
  server_name simpleWebsite.com www.simpleWebsite.com;  
  location / {
    try_files $uri $uri/ =404;
  }
}
