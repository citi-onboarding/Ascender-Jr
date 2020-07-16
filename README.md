# Ascender Jr
Project made for Ascender Jr during the PTA 2020.1

##  All technologies used

- `React` -  A JavaScript library for building user interfaces

- `KeystoneJS` - Node.js CMS & web app platform

- `MongoDB` - NoSQL Database

- `Cloudinary` - Cloud service that offers a solution to a web application's entire image management pipeline.

## How to install and run the project

### 1. Install dependencies
Run `yarn install` or `npm install` on both client and server folders, thsi command will install the project's dependencies.

### 2. Create MongoDB cluster and get the url
1. If you don't have one, [create a mongodb account](https://www.mongodb.com/cloud), then create the cluster for this project.

2. On the cluster's screen, go to **Database Access > Database Users > Add New Database User**, then create the user (remember the username and password, we're going to need them later).

3. Now go to **Network Access > Ip Whitelist > Add IP Adress > Current Ip Adress**, to add your current ip address to the cluster's whitelist, you will need to do this with every source that will access your database.

4. The mongo url will be:

    mongodb://[USER]:[PASSWORD]@[SHARD_URL]/[DB_NAME]?ssl=true&replicaSet=[SHARD_NAME]&authSource=admin&retryWrites=true&w=majority

### 3. Create cloudinary account
1. Go to [cloudinary images website](https://cloudinary.com/) and create an account.

2. Under the **Account Details** section is a url named **API environment variable** this is your cloudinary url.

### 4. Create a env file
Create a file named `.env` and, inside of it, place this:

    PORT=[PORT]
    MONGO_URI=[MONGO_URI]
    COOKIE_SECRET=[COOKIE_SECRET]
    CLOUDINARY_URL=[CLOUDINARY_URL]

Where:
- [PORT] is which port you want the server to run on (usually 3001)
- [MONGO_URI] is the uri you got from [step 2.3](##-2.-create-mongodb-cluster-and-get-the-url)
- [COOKIE_SECRET] is a random string used for authentication on the admin.
- [CLOUDINARY_URL] is the url you got from [step 3.2](##3.-create-cloudinary-account)

### 5. Running in development
To run this project in development mode, we will need to run two servers, the react one on `/client` and keystone on `/server`.

The command to run react is `yarn start` or `npm start` depending on which tool was used on [installation](##1.-install-dependencies), the react server will run on port `3000` by default.

Before running the keystone server, go to `/server/updates/0.0.1-admin.js` and change the admin user as you want, this user will be the first created, but you will be able to create others and delete this one later.

To run keystoneJS server, use the command `node index.js`, the server will run on whatever port is in the variale in the env file, you will find the admin interface in `http://localhost:[PORT]/admin`

### 6. Running in production
To run the server in production, go to `/client` and run the command `yarn server`, this command will create a `react production optimized build` and move it to `/server`.

Then go to `/server` and run `node index.js`, you will find the project on `http://localhost:[PORT]`

- - -


## Project Patterns

### Branchs off of `develop`

Name the branch following one of these:

- `feat/name-of-the-feature`

- `fix/name-of-the-bugfix`

- `upgrade/name-of-the-hotfix`

- `docs/explaning-the-upgrade-on-documentation`

### Atomic commits

Project commits follow this pattern:

- `feat(name-of-the-branch): Atomic commit`

- `fix(name-of-the-branch): Atomic commit`

- `upgrade(name-of-the-branch): Atomic commit`

- `docs(name-of-the-branch): Atomic commit`

### Pull request on Github

For every issue the pull request follows this pattern:

```
**What I did:**
- First thing I did...
- Second thing I did...

**How to test:**
- Brief notes on how to test the issue

resolves #number-of-the-issue
```

## Development team
- Ricardo Morato - *Project Manager* - [RicardoMorato](https://github.com/RicardoMorato)
- Maria Beatriz - *Developer* - [mmariabeatriz](https://github.com/mmariabeatriz)
- Victor Silva - *Developer* - [victormarques-ia](https://github.com/victormarques-ia)

## Design team
- Alyson Renan - *Designer* - [argas7](https://github.com/argas7)
