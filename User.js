const User = {
    name: {
        fastName: "Md Zobaidul",
        lastName: "Islam Kazi",
    },
    email: {
        demo: "demo10@hotmail.com",
        100: "one more time"
    },
    password: {
        onetime: "1 Time Password",
        pass: 10203040506070809000,
        well: {
            on: true,
            off: false
        },
        dowen: {
            on: false,
            off: true,
            on1: true,
            off1: false
        }
    },
    phone: {
        onetime: {
            user: {
                phone: '+019 0233285908',
                phone2: '+889 02302141',
            },
            officis: {
                mansger: '+880Bangladesh',
                MediaSession: '+990India, Pakistan etc'
            }
        }
    }
}

// json object data structure



const express = require('express');
const mongoose = require('mongoose')



const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.get('/', (req, res) => {
    res.send('<h1>ZobaidulKazi</h1>')
})


app.listen(PORT, (err) => {
    console.log(err)
})