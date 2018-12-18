import React from 'react'

    class Timer extends React.Component{

        constructor(props){
            super(props);

        }

        render() {
            const tempo = Date.now() + this.props.timezone*3600*1000;
            const data = new Date(tempo);

            return <h2>Oggi è {data.toLocaleTimeString()}</h2>
        }


    }

    export default Timer;