#setup

## Step1:

```
yarn install
```

## Step 2

```
yarn run build:dev
```

## Step 3

*dist* folder will be created which contains home page index.html with assets and this can be deployed on the server.

If you have php installed start web server inside dist directory

```
cd dist
php -S localhost:4000 -t .
```
