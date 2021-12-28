import React from 'react';
import '../assets/css/world-time.css';

class WorldTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    worldTime() {
        let date = new Date();
        let utc = date.getTime() + (date.getTimezoneOffset() * 60000);

        // Clock India
        let timeIndia = new Date(utc + (3600000 * (5.3)));
        let dayIndia = timeIndia.getHours() > 12 ? 'PM' : 'AM';
        let hoursIndia = timeIndia.getHours() % 12;
        hoursIndia = hoursIndia ? hoursIndia : 12;
        let minutesIndia = timeIndia.getMinutes() < 10 ? '0' + timeIndia.getMinutes() : timeIndia.getMinutes();

        // Clock California
        let timeCalifornia = new Date(utc + (3600000 * (-8)));
        let dayCalifornia = timeCalifornia.getHours() > 12 ? 'PM' : 'AM';
        let hoursCalifornia = timeCalifornia.getHours() % 12;
        hoursCalifornia = hoursCalifornia ? hoursCalifornia : 12;
        let minutesCalifornia = timeCalifornia.getMinutes() < 10 ? '0' + timeCalifornia.getMinutes() : timeCalifornia.getMinutes();

        // Clock NewYord
        let timeNewYord = new Date(utc + (3600000 * (-5)));
        let dayNewYord = timeNewYord.getHours() > 12 ? 'PM' : 'AM';
        let hoursNewYord = timeNewYord.getHours() % 12;
        hoursNewYord = hoursNewYord ? hoursNewYord : 12;
        let minutesNewYord = timeNewYord.getMinutes() < 10 ? '0' + timeNewYord.getMinutes() : timeNewYord.getMinutes();

        // Clock London
        let timeLondon = new Date(utc + (3600000 * (0)));
        let dayLondon = timeLondon.getHours() > 12 ? 'PM' : 'AM';
        let hoursLondon = timeLondon.getHours() % 12;
        hoursLondon = hoursLondon ? hoursLondon : 12;
        let minutesLondon = timeLondon.getMinutes() < 10 ? '0' + timeLondon.getMinutes() : timeLondon.getMinutes();

        // Clock Sydney
        let timeSydney = new Date(utc + (3600000 * (11)));
        let daySydney = timeSydney.getHours() > 12 ? 'PM' : 'AM';
        let hoursSydney = timeSydney.getHours() % 12;
        hoursSydney = hoursSydney ? hoursSydney : 12;
        let minutesSydney = timeSydney.getMinutes() < 10 ? '0' + timeSydney.getMinutes() : timeSydney.getMinutes();
        // Clock China
        let timeChina = new Date(utc + (3600000 * (8)));
        let dayChina = timeChina.getHours() > 12 ? 'PM' : 'AM';
        let hoursChina = timeChina.getHours() % 12;
        hoursChina = hoursChina ? hoursChina : 12;
        let minutesChina = timeChina.getMinutes() < 10 ? '0' + timeChina.getMinutes() : timeChina.getMinutes();

        // Clock Tokyo
        let timeTokyo = new Date(utc + (3600000 * (9)));
        let dayTokyo = timeTokyo.getHours() > 12 ? 'PM' : 'AM';
        let hoursTokyo = timeTokyo.getHours() % 12;
        hoursTokyo = hoursTokyo ? hoursTokyo : 12;
        let minutesTokyo = timeTokyo.getMinutes() < 10 ? '0' + timeTokyo.getMinutes() : timeTokyo.getMinutes();

        // Clock Berlin
        let timeBerlin = new Date(utc + (3600000 * (1)));
        let dayBerlin = timeBerlin.getHours() > 12 ? 'PM' : 'AM';
        let hoursBerlin = timeBerlin.getHours() % 12;
        hoursBerlin = hoursBerlin ? hoursBerlin : 12;
        let minutesBerlin = timeBerlin.getMinutes() < 10 ? '0' + timeBerlin.getMinutes() : timeBerlin.getMinutes();

        return (
            <div className="container-clock">
                <div className="clock">
                    <span>India</span>
                    <h1>{hoursIndia}:{minutesIndia} <sup>{dayIndia}</sup></h1>
                </div>
                <div className="clock">
                    <span>California</span>
                    <h1>{hoursCalifornia}:{minutesCalifornia} <sup>{dayCalifornia}</sup></h1>
                </div>
                <div className="clock">
                    <span>New York</span>
                    <h1>{hoursNewYord}:{minutesNewYord} <sup>{dayNewYord}</sup></h1>
                </div>
                <div className="clock">
                    <span>London</span>
                    <h1>{hoursLondon}:{minutesLondon} <sup>{dayLondon}</sup></h1>
                </div>
                <div className="clock">
                    <span>Sydney</span>
                    <h1>{hoursSydney}:{minutesSydney} <sup>{daySydney}</sup></h1>
                </div>
                <div className="clock">
                    <span>China</span>
                    <h1>{hoursChina}:{minutesChina} <sup>{dayChina}</sup></h1>
                </div>
                <div className="clock">
                    <span>Tokyo</span>
                    <h1>{hoursTokyo}:{minutesTokyo} <sup>{dayTokyo}</sup></h1>
                </div>
                <div className="clock">
                    <span>Berlin</span>
                    <h1>{hoursBerlin}:{minutesBerlin} <sup>{dayBerlin}</sup></h1>
                </div>
            </div>
        );
    }

    componentDidMount() {
        setInterval(() => {
            this.setState(this.worldTime());
        }, 1000)
    }

    render() { 
        return (
            this.worldTime()
        );
    }
}
 
export default WorldTime;