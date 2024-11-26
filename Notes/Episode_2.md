# =============Episode_02=============

## pushing code on git hub

- `git init`
- creating main as the main branch `git branch -M main`
- `git add .` adding all files
- `git commit -m "message"` commiting
- `git remote add origin URL` adding origin
- `git push origin main` pushing code on origin main

## Production Ready Code

- To make your app ready to go into production you need to do lots of processing in your local.
- when you start `npx create react app` it create React Scaffold which is already ignited (production ready).
- But here we are creating our own scaffold.

# NPM

- npm does not stands for node package manager.
- npm does not have full form.
- npm manages package.
- npm is basically a standard repositery for all the packages for javascript.

- adding node package manager to our project `npm init` or `npm init -Y` it will skip lot of things.

- package.json is a configuration for npm. It keeps a track of version that package is installed into our system.

- Why do we need package.json file?

  - npm is package manager,it manages all the packages that we will install in our system and sometime these packages are also known as dependencies.

- Our project is dependent on a lot of packages.

# installing pacakage/depene...

- The most important package in our project is "bundler".
- **Bundler** - webpack, parcel, vite are bundler. we will learn defination later.

- `create react app` using webpack and babel behind the sences build things up.

- In our project we will use parcel it depends on choice, at the end of the day all bundler are doing the same thing algorithm of bundling can be different.
- parcel is easy to use.
- parcel will ignite our app. It give to strength our app.
- `npm install -D parcel` installing parcel package.
- when we install `parcel` node module folder also comes with it.
- But here we only install `parcel` so why all these folders are here...because our project has a dependency parcel. now parcel as a project has its own dependencies and those dependencies has own dependencies this is known as `Transitive dependencies`.

- There are two types of dependencies in our app:
  1. Dev dependency - use for development/ required in development phase.
  2. Normal dependencies - used for production also.
- parcel is Dev dependency. So we use bundler in development phase so we install parcel here as dev dependency that's why we use -D flag.
- parcel is the beast.

## Difference between caret and ~ in npm

- when you use `"^2.10.2"` caret(^) if after some time a new minor version eg. 2.10.3 comes parcel updated it automatically. but if you use tilde(~) it will install major version automatically. It will always safe to use ^ caret.

##

- when we install parcel, devDependencies are added in package.json and also we got another file called package-lock.json
- package-lock.json keep a track of
  exact version that is being installed.

- If you have your package.json and package-lock.json you can recreate your entire node module folder. Whatever you can re-generate don't put it on git.
- Now we will use parcel to ignite our app `npx parcel index.html`
- npx stands for node package executer, means execting our package
- here index.html is the source file
- basically here now we are building our app using parcel
- after running command now it saying `Server running at http://localhost:1234`
- now our project is hosted on localhost:1234 port

- Other way to get react into our app via npm. Injecting React via CDN links is not a prefferd way. Because fetching from CDN takes costly operations.And also we have to update links when react will update.

- installing React `npm install react` and ReactDOM `npm install react-dom`

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

- How to create prod build?
  `npx parcel build index.js` but remove `main: App.js` from package.json

- Making our app browser version specific?
  - `browserslist.dev`
  - add this ` "browserslist": [
  "last 2 version"
]`
