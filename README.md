Evaluación técnica frontend

La siguiente consigna apunta a evaluar las cualidades técnicas del candidato y la facilidad de llevar a cabo tareas utilizando alguna tecnología nueva.
La tarea consiste en:
1) Maquetar utilizando HTML y Tailwinds CSS el sitio. 2) Darle comportamiento utilizando Vue JS o React Js. 3) Entregar código funcionando.
Consideraciones:
- Donde dice “Logo” poner un logo/imagen a elección.
- Guardar y salir es un dropdown con opciones: “Guardar y salir”, “Salir sin
guardar”, “Guardar y continuar”. No es necesario que tengan.
comportamiento.
- Al hacer click en aberturas, equipamiento o terminaciones se debe abrir la
barra lateral (como se puede ver en Imagen 2 y 3).
- En la barra lateral se muestran categorías (Imagen 2) y al seleccionar una
categoría se listan los productos de la misma (Imagen 3).
- Los productos y categorías deben obtenerse desde:
https://us-central1-prueba-front-280718.cloudfunctions.net/equipamiento https://us-central1-prueba-front-280718.cloudfunctions.net/aberturas https://us-central1-prueba-front-280718.cloudfunctions.net/terminaciones
- Los botones de “Fijar”, “Borrar”, “+”, “-” y las flechitas, deben simplemente logguear en consola que fueron clickeados.


### Solution

<img width="1728" alt="image" src="https://user-images.githubusercontent.com/31039405/188321722-dcfc28cd-91c4-4e50-bd39-225e9755382d.png">
<img width="816" alt="image" src="https://user-images.githubusercontent.com/31039405/188321750-b8efdd15-eb7a-4d8b-89af-f88e3e4eeaa1.png">
<img width="421" alt="image" src="https://user-images.githubusercontent.com/31039405/188321778-a3887007-1e06-49ae-94b3-efe3f81025a9.png">
![](https://github.com/ginoraviola/lightit-chal/blob/main/src/assets/demo.gif)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
