# base image
FROM phusion/baseimage:0.9.22

# create app directory
WORKDIR opt/app

# install node
RUN apt-get update
RUN apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash
RUN apt-get install nodejs -y

# install postgres
RUN apt-get install -y postgresql postgresql-contrib

# install nodemon
RUN npm install -g nodemon

# set vi bash bindings
RUN echo "set -o vi" >> ~/.bashrc

# expose port 8000
EXPOSE 8000

# Use baseimage-docker's init system.
CMD ["/sbin/my_init"]
