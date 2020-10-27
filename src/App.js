import React from 'react';
import cn from 'classnames';
import s from './App.modules.scss';

const App = () => {
    return(
        <div>
            <h2 className={cn(s.block__title)}>Я реакт компонент!</h2>
        </div>
    )
}

export default App;