import React from 'react';

export default {
    ONE: {
        display: 'LEVEL 1',
        content: (
            <div>
                <p>Welcome to Solariar Nazo.</p>
                <p>Please tell me that <code>1+1</code>&#61;?</p>
            </div>
        )
    },
    2: {
        content: (
            <div>
                <p>Solariar Nazo is an open-source nazo game.</p>
                <p>You can get the source code on GitHub.</p>
                <p>Type <code>opensource</code> to continue.</p>
            </div>
        )
    },
    opensource: {
        content: (
            <div>
                <p>Solariar Nazo is easy to extend.</p>
                <p>You can simply create your own copy by editing <code>code/data/levels.jsx</code>.</p>
                <p>Type <code>D4t4</code> to continue.</p>
            </div>
        )
    },
    D4t4: {
        display: 'WOW',
        content: (
            <div>
                <p>You can set a 'reward' in some levels.</p>
                <p>Type <code>End</code> to continue.</p>
            </div>
        ),
        reward: (
            <div>
                <p>This in an example of 'reward'.</p>
                <p>Maybe you can put some small gift here :)</p>
            </div>
        )
    },
    End: {
        display: 'THANKS',
        content: (
            <div>
                <p>Solariar Nazo is in full development.</p>
                <p>If you want to help us, just do it!</p>
            </div>
        )
    }
};