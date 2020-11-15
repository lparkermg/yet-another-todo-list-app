FROM node:current-alpine3.10 AS build
WORKDIR /ui
COPY ["yatla-ui/", "."] 
RUN npm install
RUN npm run build

FROM node:current-alpine3.10 AS final
EXPOSE 8888
WORKDIR /site
COPY --from=build /ui/build/ .
RUN npm install -g serve
ENTRYPOINT ["serve", "-s", "/site", "-l", "8888"]