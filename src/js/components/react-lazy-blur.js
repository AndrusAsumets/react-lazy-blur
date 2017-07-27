import React, { Component } from 'react'
import Waypoint from 'react-waypoint'

export default class ReactLazyBlur extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            waypoint: false,
            blur: {},
            background: {},
            loaded: false
        }
    }
    
    componentWillMount() {
        //display blurred image in the place of background before load
        this.setState({
            background: {
                backgroundImage: `url(${ this.props.blur })`
            }
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.waypoint !== nextState.waypoint && !nextState.loading && !nextState.loaded) this.lazy()
        return true
    }

    lazy() {
        const { background, blur } = this.props
        const duration = this.props.duration || 500
        const self = this

        //start loading background image
        const img = new Image()
        img.onload = () => {

            //on load, display the background and swap background with blur
            self.setState({
                background: {
                    backgroundImage: `url(${ img.src })`
                },
                blur: {
                    backgroundImage: `url(${ blur })`,
                    opacity: 1
                }
            })

            //wait for next tick, so opacity from the previous block could be first added to the DOM
            setTimeout(() => {

                //fade out the blurred image by changing the opacity
                self.setState({
                    background: {
                        backgroundImage: `url(${ img.src })`
                    },
                    blur: {
                        backgroundImage: `url(${ blur })`,
                        transition: 'opacity',
                        transitionDuration: duration / 1000 + 's',
                        opacity: 0
                    }
                })

                //finally remove the blur and its instances
                setTimeout(() => {
                    self.setState({
                        loaded: true
                    })
                }, duration)
            }, 0)
        }
        img.src = background
    }

    render() {
        const { children, horizontal = false } = this.props
        const { background, blur, waypoint } = this.state
        const className = this.props.className ? this.props.className + ' react-lazy-blur' : 'react-lazy-blur'
        
		return (
			<span>
				<Waypoint horizontal={ horizontal } onEnter={() => { this.setState({ waypoint: true }) }} scrollableAncestor={ window } />
				
				<div className={ className } style={{ position: 'relative' }}>
					<div className={ 'react-lazy-blur background' } style={ background }>
						{ children }
					</div>
				
					{
						!this.state.loaded ?
							<div className={ 'react-lazy-blur blur' } style={ Object.assign({ position: 'absolute', top: 0 }, blur )}>
								{ children }
							</div>
						: null
					}
				</div>
				
				<Waypoint horizontal={ horizontal } onEnter={() => { this.setState({ waypoint: true }) }} scrollableAncestor={ window } />
			</span>
		)
    }
}
