FROM cypress/included:10.3.0



WORKDIR /usr/app
COPY ./ /usr/app
RUN npm i


RUN npm run