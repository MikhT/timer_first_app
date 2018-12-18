import React from 'react'

    class Timer extends React.Component{

        constructor(props){
            super(props);

            this.state = {
                date : new Date()
            }

        }

        render() {
            const tempo = this.state.date.getTime() + this.props.timezone*3600*1000;
            const data = new Date(tempo);

            return <h2>Sono le {data.toLocaleTimeString()}</h2>
        }

        reset = () => {
            this.setState({date: new Date()});
        };

        componentDidMount(){
            this.interval = setInterval( this.reset, 1000);
        }

        componentWillUnmount() {
            clearInterval(this.interval);
        }

    }

    export default Timer;