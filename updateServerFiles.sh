sudo rm -rf /var/www/simpleWebsite.com
sudo mkdir /var/www/simpleWebsite.com
sudo cp ./frontend/*.html /var/www/simpleWebsite.com/
sudo cp ./frontend/*.css /var/www/simpleWebsite.com/
sudo cp ./frontend/*.js /var/www/simpleWebsite.com/

sudo cp frontend/simpleWebsite.com /etc/nginx/sites-available/simpleWebsite.com
sudo rm /etc/nginx/sites-enabled/simpleWebsite.com
sudo ln -s /etc/nginx/sites-available/simpleWebsite.com /etc/nginx/sites-enabled/simpleWebsite.com
sudo systemctl restart nginx

