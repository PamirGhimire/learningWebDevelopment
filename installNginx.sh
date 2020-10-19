sudo service stop apache2
sudo service stop nginx
sudo apt-get remove --purge nginx nginx-full nginx-common
sudo apt update
sudo apt-get install nginx
sudo systemctl restart nginx