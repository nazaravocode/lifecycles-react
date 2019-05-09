import React, {Component} from 'react';
import Trigger from './Trigger'

export default class WindowTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clock: 0,
            color : '',
            colorIterator : 0
        };
        this.timer = null;
        this.setDocumentTitle.bind(this);
        this.colors = ['red', 'blue', 'yellow'];
    }

    componentDidMount() {
        let {clock} = this.state.clock;
        console.log('componentDidMount clock', this.state);
        document.title = clock;
        this.timer = setInterval(() => {this.setDocumentTitle();}, 300);

    }
    
    componentDidUpdate (nextProps, nextState) {

    }
    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {

        return (<Trigger
                    color={this.state.color}
                  />)
    }
    setDocumentTitle() {
       const {clock} = this.state;
       let colorIterator = this.state.colorIterator === 2 ? 0 : this.state.colorIterator + 1;
       document.title = clock;

       this.setState({clock : clock + 1,});
        if (clock > 20) {
            this.setState({
               clock : 0});

        }


       if (clock %2 === 0 && clock < 12) {
           this.setState({
               colorIterator : colorIterator,
               color:   this.colors[colorIterator]});
       }
    }
}