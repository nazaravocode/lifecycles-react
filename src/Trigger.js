import React,{Component} from 'react';

export default class Trigger extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount() {
        document.body.style.backgroundColor = this.props.color;

    }

    componentWillReceiveProps (nextProps) {
        if (this.props.color !== nextProps.color) {
            document.body.style.backgroundColor = nextProps.color;
        }
    }
    render() {
        return null;
    }
}