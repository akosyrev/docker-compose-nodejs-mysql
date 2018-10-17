FROM node:10.12.0-jessie

COPY ./start.sh /start.sh
RUN npm install -g nodemon
RUN chmod 755 /start.sh
CMD ["/start.sh"]


