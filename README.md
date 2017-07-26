# react-lazy-blur - The laziest image loader for React.js

## Demo
https://andrusasumets.github.io/react-lazy-blur

## Features (1:0:x)
* Prefetches an image super lazily and then replaces background-image of the component.
* Uses react-waypoints inside - does not do anything until a user has scrolled to a relevant image.
* Shows a placeholder images (preferrably blured, see the blurring section) during the load.
* Uses CSS transitions to make it smooth.
* Can be used as a wrapper for other content.
* Includes a complete Webpack example on how to integrate blurred placeholders for dev and production (again, see the blurring section).

## Installation
```npm install react-lazy-blur```  

## Usage
```
const ReactLazyBlur = require('./react-lazy-blur')

....


<ReactLazyBlur
    background={ require('../../images/my-background-image.lazy.jpg') }
    blur={ require('../../images/my-blurred-placeholder-image.blur.jpg') }
    duration={ duration }>

    <YourPrefferedComponent
        ... optionally your content here
    </YourPrefferedComponent>
    
</ReactLazyBlur>
```

## Props
`background` (string, required): Import an image string and pass it as an argument.  
`blur` : (string, optional) Import a processed and blurred background image and use it as a placeholder while the full-sized image is being prefetched.  
`duration`: (integer, optional) The length of fade after prefetching the image in milliseconds. Defaults to 500ms.  
`children`: (component, optional) React.js component or a HTML element. 

## Blurring the placeholders
`npm install`  
`npm run blur` (blur.js situated in /scripts folder will scan for images containing .lazy tag inside file names (but ignores the rest), then converts said files into small and blurry (look for images including .blur tags).  
`npm run dev`  
`npm run build` (optional)

## License: 
Do What the Fuck You Want To Public Licens

## Author: 
Andrus Asumets / andrus@asumets.ee / www.asumets.ee
