- serving static website using nginx : <br>
https://medium.com/@jgefroh/a-guide-to-using-nginx-for-static-websites-d96a9d034940 <br>

- troubleshooting nginx error : "nginx.service: Control process exited, code=exited status=1: "<br>
    - $ sudo service apache2 stop<br>
    - $ sudo apt-get remove --purge nginx nginx-full nginx-common<br>
    - $ sudo apt-get install nginx<br>
    - the commands above have also been used in updateServerFiles.sh<br>

- use the server block below instead of one in the medium article in /etc/nginx/sites-available/simpleWebsite.com : <br>
```
server {
  listen 80;
  listen [::]:80;  
  root /var/www/simpleWebsite.com;  
  index index.html;  
  server_name simpleWebsite.com www.simpleWebsite.com;  
  location / {
    try_files $uri $uri/ =404;
  }
}
```
