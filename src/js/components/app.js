import React, { Component } from 'react'
const ReactLazyBlur = require('react-lazy-blur')

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
    	const duration = 1000
    	
        return (
            <div className="app">
                <ReactLazyBlur
                    background={ require(	'../../images/denys-nevozhai-191628.lazy.jpg') }
                    blur={ require('../../images/denys-nevozhai-191628.blur.jpg') }
                    duration={ duration }>
                    
					<div
						className="link-container"
						onClick= { () => { window.open('https://unsplash.com/photos/w7YCquMkv2c', '_blank') } }>
	                    <div className="link">
	                    	Larger ⤴
	                    </div>
                    </div>
                </ReactLazyBlur>
                
                <ReactLazyBlur
                    background={ require('../../images/ian-dooley-298769.lazy.jpg') }
                    blur={ require('../../images/ian-dooley-298769.blur.jpg') }
                    duration={ duration }>
                    
					<div
						className="link-container"
						onClick= { () => { window.open('https://unsplash.com/photos/k8OCHhEymME', '_blank') } }>
	                    <div className="link">
	                    	Larger ⤴
	                    </div>
                    </div>
                </ReactLazyBlur>
                
                
                <ReactLazyBlur
                    background={ require('../../images/pawel-nolbert-284892.lazy.jpg') }
                    blur={ require('../../images/pawel-nolbert-284892.blur.jpg') }
                    duration={ duration }>
                    
					<div
						className="link-container"
						onClick= { () => { window.open('https://unsplash.com/photos/wE_Dk2Kd3GQ', '_blank') } }>
	                    <div className="link">
	                    	Larger ⤴
	                    </div>
                    </div>
                </ReactLazyBlur>
                
                
                <ReactLazyBlur
                    background={ require('../../images/dan-gold-224245.lazy.jpg') }
                    blur={ require('../../images/dan-gold-224245.blur.jpg') }
                    duration={ duration }>
                    
					<div
						className="link-container"
						onClick= { () => { window.open('https://unsplash.com/photos/sQ3ZqZORrlQ', '_blank') } }>
	                    <div className="link">
	                    	Larger ⤴
	                    </div>
                    </div>
                </ReactLazyBlur>
                
                
                <ReactLazyBlur
                    background={ require('../../images/philipp-kammerer-266322.lazy.jpg') }
                    blur={ require('../../images/philipp-kammerer-266322.blur.jpg') }
                    duration={ duration }>
                    
					<div
						className="link-container"
						onClick= { () => { window.open('https://unsplash.com/photos/1FJZBOthB8k', '_blank') } }>
	                    <div className="link">
	                    	Larger ⤴
	                    </div>
                    </div>
                </ReactLazyBlur>
                
                
                <ReactLazyBlur
                    background={ require('../../images/aziz-acharki-253909.lazy.jpg') }
                    blur={ require('../../images/aziz-acharki-253909.blur.jpg') }
                    duration={ duration }>
                    
					<div
						className="link-container"
						onClick= { () => { window.open('https://unsplash.com/photos/7nsqPSnYCoY', '_blank') } }>
	                    <div className="link">
	                    	Larger ⤴
	                    </div>
                    </div>
                </ReactLazyBlur>
                
                
                <ReactLazyBlur
                    background={ require('../../images/joel-filipe-182051.lazy.jpg') }
                    blur={ require('../../images/joel-filipe-182051.blur.jpg') }
                    duration={ duration }>
                    
					<div
						className="link-container"
						onClick= { () => { window.open('https://unsplash.com/photos/Nw3ddCwbUKg', '_blank') } }>
	                    <div className="link">
	                    	Larger ⤴
	                    </div>
                    </div>
                </ReactLazyBlur>
                
                
                <ReactLazyBlur
                    background={ require('../../images/kimon-maritz-193428.lazy.jpg') }
                    blur={ require('../../images/kimon-maritz-193428.blur.jpg') }
                    duration={ duration }>
                    
					<div
						className="link-container"
						onClick= { () => { window.open('https://unsplash.com/photos/1-ISIwuBMiw', '_blank') } }>
	                    <div className="link">
	                    	Larger ⤴
	                    </div>
                    </div>
                </ReactLazyBlur>
                
                
                <ReactLazyBlur
                    background={ require('../../images/max-ostrozhinskiy-212676.lazy.jpg') }
                    blur={ require('../../images/max-ostrozhinskiy-212676.blur.jpg') }
                    duration={ duration }>
                    
					<div
						className="link-container"
						onClick= { () => { window.open('https://unsplash.com/@maxon?photo=w6OniVDCfn0', '_blank') } }>
	                    <div className="link">
	                    	Larger ⤴
	                    </div>
                    </div>
                </ReactLazyBlur>
                
                <div
                	className="octocat"
                	onClick= { () => { window.open('https://github.com/AndrusAsumets/react-lazy-blur', '_blank') } }>
                </div>
                
            </div>
        )
    }
}

export default App
