import React, { Component } from 'react'
var ReactLazyBlur = require('./react-lazy-blur').default

export default class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
    	const duration = 1000
    	const images= [
    			{
    				lazy: 'denys-nevozhai-191628.lazy.jpg',
    				uri: 'https://unsplash.com/photos/w7YCquMkv2c'
    			},
    			{
    				lazy: 'ian-dooley-298769.lazy.jpg',
    				uri: 'https://unsplash.com/photos/k8OCHhEymME'
    			},
    			{
    				lazy: 'pawel-nolbert-284892.lazy.jpg',
    				uri: 'https://unsplash.com/photos/wE_Dk2Kd3GQ'
    			},
    			{
    				lazy: 'dan-gold-224245.lazy.jpg',
    				uri: 'https://unsplash.com/photos/sQ3ZqZORrlQ'
    			},
    			{
    				lazy: 'philipp-kammerer-266322.lazy.jpg',
    				uri: 'https://unsplash.com/photos/1FJZBOthB8k'
    			},
    			{
    				lazy: 'aziz-acharki-253909.lazy.jpg',
    				uri: 'https://unsplash.com/photos/7nsqPSnYCoY'
    			},
    			{
    				lazy: 'joel-filipe-182051.lazy.jpg',
    				uri: 'https://unsplash.com/photos/Nw3ddCwbUKg'
    			},
    			{
    				lazy: 'kimon-maritz-193428.lazy.jpg',
    				uri: 'https://unsplash.com/photos/1-ISIwuBMiw'
    			},
    			{
    				lazy: 'max-ostrozhinskiy-212676.lazy.jpg',
    				uri: 'https://unsplash.com/@maxon?photo=w6OniVDCfn0'
    			},
    			{
    				lazy: 'jesus-kiteque-224069.lazy.jpg',
    				uri: 'https://unsplash.com/?photo=wn-KYaHwcis'
    			},
    			{
    				lazy: 'alessio-lin-208180.lazy.jpg',
    				uri: 'https://unsplash.com/photos/p5bWbSeiLfs'
    			},
    			{
    				lazy: 'dmitri-popov-188807.lazy.jpg',
    				uri: 'https://unsplash.com/photos/JrekhvT7NBo'
    			},
    			{
    				lazy: 'joel-filipe-189405.lazy.jpg',
    				uri: 'https://unsplash.com/photos/eJG7suWnrKU'
    			},
    			{
    				lazy: 'marco-sartori-225577.lazy.jpg',
    				uri: 'https://unsplash.com/photos/QIK9fG4mBmc'
    			},
      			{
    				lazy: 'maria-mekht-149860.lazy.jpg',
    				uri: 'https://unsplash.com/photos/LSE4Rz_ixvA'
    			},
    			{
    				lazy: 'samuel-scrimshaw-114346.lazy.jpg',
    				uri: 'https://unsplash.com/photos/2oFdVd00xOg'
    			}
    			
    		]
    	
        return (
            <div className="app">
	            {[...images].map((image, i) =>
	                <ReactLazyBlur
	                    background={ require(`../../images/${ image.lazy }`) }
	                    blur={ require(`../../images/${ parseBlur(image.lazy) }`) }
	                    duration={ duration }
	                    key={ i}>
	                    
						<div
							className="link-container"
							onClick= { () => { window.open(image.uri, '_blank') } }>
		                    <div className="link">
		                    	Unsplash ⤴
		                    </div>
	                    </div>
	                </ReactLazyBlur>
	            )}
               
                <div
                	className="octocat"
                	onClick= { () => { window.open('https://github.com/AndrusAsumets/react-lazy-blur', '_blank') } }>
                </div>
                
            </div>
        )
    }
}

function parseBlur(image) {
	const prefix = image.split('.lazy')[0]
	const suffix = image.split('.lazy')[1]
	const fileName = prefix + '.blur' + suffix
	return fileName
}
