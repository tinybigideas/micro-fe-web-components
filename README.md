# Micro fronend usage of Web Components
Using Native, Angular, React and Vue




## Get up and running
To allow each application to run independantly each app runs in an iframe (also, because true side by side was eating time like no tomorrow).

Therefore, you need to do the following:

```bash
git clone git@github.com:tinybigideas/micro-fe-web-components.git
```

Run each application on its own `serve` command. To get Native, Angular, React and Vue working for the iframes:

### Native
```bash
cd stencil
npm i
npm start
```

### Angular
```bash
cd angular
npm i
npm start
```

### React
```bash
cd react
npm i
npm start
```

### Vue
```bash
cd vue
npm i
npm start
```

Now you should have 4 applications running. Finally, start the wrapper with

```bash
npm i
npm start
```

## Updating the stencil web component
Feel free to update. However, to get it into Angular, React and Vue you will need to produce a production build of the stencil web component and copy the contents into the relevant `src` folders.

```bash
cd stencil
npm run build
```

`dist` will contain the production ready web components. 
