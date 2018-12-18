import React from 'react'

    class Timer extends React.Component{

        constructor(props){
            super(props);

            this.state = {
                timestamp : 0,
                stopped : true
            }

        }

        render() {
            const tempo = this.state.timestamp;

            return <h2>Timer: {tempo} <button onClick={this.reset}>{ this.state.stopped ? "Avvia" : "Stop"}</button></h2>
        }

        reset = () => {
            if ( this.state.stopped ) {
                this.setState({timestamp: 0});
                this.interval = setInterval( this.update, 1000);
                this.setState({stopped : false});
            }else {
                clearInterval(this.interval);
                this.setState({stopped : true});
            }

        };

        update = () => {
            //this.setState({date:  new Date()});

            this.setState((precState) => {
                return {
                    timestamp : precState.timestamp + 1
                }
            })

        };

        componentDidMount(){
            //this.interval = setInterval( this.update, 1000);
        }

        componentWillUnmount() {
            //clearInterval(this.interval);
        }

    }

    export default Timer;