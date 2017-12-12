# base image
FROM postgres:latest

ENV POSTGRES_USER="admin"

COPY docker-entrypoint-initdb.d /docker-entrypoint-initdb.d

EXPOSE 5432
