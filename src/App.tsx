import React from 'react';

import './App.css';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import Footer from './component/Footer';

const Completionist = () => <span className="span">Время Вышло ... НА хуй ВСЕXXXX</span>;

<h2 style={{color: 'blanchedalmond'}}>Остатки Дяди Вани , на маршаке</h2>

function App() {
    return (

        <div className="App">

                <a href="https://marshal.ru/" className={"title"}>
                    <i>Лучшие деньки Дяди Вани, на маршаке :</i>
                </a>

                <FlipClockCountdown
                    className="flip-clock"
                    to={'2025-04-29'}
                    labels={['day', 'hours', 'minutes', 'seconds']}
                    labelStyle={{fontSize: 15, fontWeight: 500, textTransform: 'uppercase'}}
                    digitBlockStyle={{width: 50, height: 60, fontSize: 45}}
                    dividerStyle={{color: 'white', height: 1}}
                    separatorStyle={{color: 'red', size: '10px'}}
                    duration={0.5}
                >
                    <Completionist/>
                </FlipClockCountdown>
            <Footer/>

        </div>
    )
}

export default App;
