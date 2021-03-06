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
import ReactLazyBlur from 'react-lazy-blur'

....

<ReactLazyBlur
    background={ 'https://example.com/images/full-size-image.jpg' }
    blur={ 'https://example.com/images/blurred-placeholder.jpg' }
    duration={ 1000 }>

    <YourPrefferedComponent
        ... optionally your content here
    </YourPrefferedComponent>
    
</ReactLazyBlur>
```

## Props
`background` (string, required): Import an image string and pass it as an argument.  
`blur` : (string, optional) Import a processed and blurred background image and use it as a placeholder while the full-sized image is being prefetched.  
`duration`: (integer, optional) The length of fade after prefetching the image in milliseconds. Defaults to 500ms.  
`horizontal`: (boolean, optional) Trigger prefetching when element is being displayed horizontally. Defaults to false.  
`children`: (component, optional) React.js component or a HTML element.  

## Blurring
`npm install`  
`npm run lazy-blur` (Resizes images to have 1280 width and auto height and then uses the converted .lazy files to have separate .blur files. It's up to you if and when you would like to use those images).  
`npm run dev`  
`npm run build` (optional)  

## License:
Do What the Fuck You Want To Public License

## Author:
Andrus Asumets / andrus@asumets.ee / www.asumets.ee
