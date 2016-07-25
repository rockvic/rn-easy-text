'use strict';
/**
 * 与Text相关的公用组件
 */
import React, {
    Component,
    PropTypes,
} from 'react';

import {
    Text,
} from 'react-native';

/**
 * Bold text
 */
export class B extends Component {

    static propTypes = {

    	/**
    	 * fontWeight
    	 */
    	weight: PropTypes.string,
    };

    static defaultProps = {
    	weight: '500',
    };

	render () {
        let {weight, style, ...other} = this.props;
        let styles = [{fontWeight: weight}].concat(style);
		return (
			<Text style = {styles} {...other} >
				{this.props.children}
			</Text>
		);
	}
}

/**
 * Italic text
 */
export class I extends Component {
	render () {
        let {style, ...other} = this.props;
        let styles = [{fontStyle: 'italic'}].concat(style);
		return (
			<Text style = {styles} {...other} >
				{this.props.children}
			</Text>
		);
	}
}

/**
 * text underline
 */
export class U extends Component {
	render () {
        let {style, ...other} = this.props;
        let styles = [{textDecorationLine: 'underline'}].concat(style);
		return (
			<Text style = {styles} {...other} >
				{this.props.children}
			</Text>
		);
	}
}

/**
 * text shadow
 */
export class S extends Component {

    static propTypes = {

    	/**
    	 * textShadowColor
    	 */
    	color: PropTypes.string,

    	/**
    	 * textShadowOffset
    	 */
    	offset: PropTypes.object,

    	/**
    	 * textShadowRadius
    	 */
    	radius: PropTypes.number,
    };

    static defaultProps = {
    	color: 'rgba(0,0,0,.8)',
    	offset: {width: .5, height: .5},
    	radius: .5
    };

	render () {
        let {color, offset, radius, style, ...other} = this.props;
        let styles = [{
        	textShadowColor: color,
        	textShadowOffset: offset,
        }]
        if(radius) styles = styles.concat([{textShadowRadius: radius}]);
        styles = styles.concat(style);
		return (
			<Text style = {styles} {...other} >
				{this.props.children}
			</Text>
		);
	}
}



