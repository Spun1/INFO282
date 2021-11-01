const express = require('express');
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

// FIX CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// MYSQL

const pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : 'password',
    database        : 'clinica_fedent'
})

// -----------------------------PACIENTES-------------------------------------------------------------

app.get('/pacientes', (req, res) => {

    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(`conected as id ${connection.threadId}`)

        connection.query('SELECT * from pacientes', (err, rows) => {
            connection.release() // return the connection to pool

            if(!err){
                res.send(rows)
            } else{
                console.log(err)
            }
        })
    })
})

// PACIENTES ID

app.get('/pacientes/:id', (req, res) => {

    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(`conected as id ${connection.threadId}`)

        connection.query('SELECT * from pacientes WHERE id_paciente = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err){
                res.send(rows)
            } else{
                console.log(err)
            }
        })
    })

})

// -----------------------------------ODONTOLOGOS--------------------------------------------------------

app.get('/odontologos', (req, res) => {

    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(`conected as id ${connection.threadId}`)

        connection.query('SELECT * from odontologo', (err, rows) => {
            connection.release() // return the connection to pool

            if(!err){
                res.send(rows)
            } else{
                console.log(err)
            }
        })
    })
})

// ODONTOLOGOS ID

app.get('/odontologos/:id', (req, res) => {

    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(`conected as id ${connection.threadId}`)

        connection.query('SELECT * from odontologo WHERE id_odontologo = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err){
                res.send(rows)
            } else{
                console.log(err)
            }
        })
    })

})

//-----------------------TONS-------------------------------------------------------------

app.get('/tons', (req, res) => {

    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(`conected as id ${connection.threadId}`)

        connection.query('SELECT * from tons', (err, rows) => {
            connection.release() // return the connection to pool

            if(!err){
                res.send(rows)
            } else{
                console.log(err)
            }
        })
    })
})   

// TONS ID

app.get('/tons/:id', (req, res) => {

    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(`conected as id ${connection.threadId}`)

        connection.query('SELECT * from tons WHERE id_tons = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err){
                res.send(rows)
            } else{
                console.log(err)
            }
        })
    })

})


//----------------------ODONTOGRAMA-----------------------------------------

app.get('/odontogramas', (req, res) => {

    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(`conected as id ${connection.threadId}`)

        connection.query('SELECT * from odontograma', (err, rows) => {
            connection.release() // return the connection to pool

            if(!err){
                res.send(rows)
            } else{
                console.log(err)
            }
        })
    })
})

// ODONTOGRAMA ID

app.get('/odontogramas/:id', (req, res) => {

    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(`conected as id ${connection.threadId}`)

        connection.query('SELECT * from odontograma WHERE id_odontograma = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err){
                res.send(rows)
            } else{
                console.log(err)
            }
        })
    })

})


//--------------------HISTORIAL CLINICO-----------------------------------

app.get('/historiales-clinicos', (req, res) => {

    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(`conected as id ${connection.threadId}`)

        connection.query('SELECT * from historial_clinico', (err, rows) => {
            connection.release() // return the connection to pool

            if(!err){
                res.send(rows)
            } else{
                console.log(err)
            }
        })
    })
})

// HISTORIAL CLINICO ID

app.get('/historiales-clinicos/:id', (req, res) => {

    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(`conected as id ${connection.threadId}`)

        connection.query('SELECT * from historial_clinico WHERE id_historial_clinico = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err){
                res.send(rows)
            } else{
                console.log(err)
            }
        })
    })

})


//----------------------FICHA CLINICA-----------------------------------

app.get('/fichas-clinicas', (req, res) => {

    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(`conected as id ${connection.threadId}`)

        connection.query('SELECT * from ficha', (err, rows) => {
            connection.release() // return the connection to pool

            if(!err){
                res.send(rows)
            } else{
                console.log(err)
            }
        })
    })
})

// FICHA CLINICA ID

app.get('/fichas-clinicas/:id', (req, res) => {

    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(`conected as id ${connection.threadId}`)

        connection.query('SELECT * from ficha WHERE folio = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err){
                res.send(rows)
            } else{
                console.log(err)
            }
        })
    })

})



// ------------------DATOS CLINICOS------------------------------------

app.get('/datos-clinicos', (req, res) => {

    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(`conected as id ${connection.threadId}`)

        connection.query('SELECT * from datos_clinicos', (err, rows) => {
            connection.release() // return the connection to pool

            if(!err){
                res.send(rows)
            } else{
                console.log(err)
            }
        })
    })
})

// DATOS CLINICOS ID

app.get('/datos-clinicos/:id', (req, res) => {

    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(`conected as id ${connection.threadId}`)

        connection.query('SELECT * from datos_clinicos WHERE id_datos_clinicos = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err){
                res.send(rows)
            } else{
                console.log(err)
            }
        })
    })

})


// ------------------PIEZAS------------------------------------

app.get('/piezas', (req, res) => {

    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(`conected as id ${connection.threadId}`)

        connection.query('SELECT * from piezas', (err, rows) => {
            connection.release() // return the connection to pool

            if(!err){
                res.send(rows)
            } else{
                console.log(err)
            }
        })
    })
})


// PIEZAS ID

app.get('/piezas/:id', (req, res) => {

    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(`conected as id ${connection.threadId}`)

        connection.query('SELECT * from piezas WHERE id_pieza = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err){
                res.send(rows)
            } else{
                console.log(err)
            }
        })
    })

})

// ------------------ACCEDER------------------------------------

app.get('/accesos-fichas', (req, res) => {

    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(`conected as id ${connection.threadId}`)

        connection.query('SELECT * from acceder', (err, rows) => {
            connection.release() // return the connection to pool

            if(!err){
                res.send(rows)
            } else{
                console.log(err)
            }
        })
    })
})

// ID ACCESO

app.get('/accesos-fichas/:id', (req, res) => {

    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(`conected as id ${connection.threadId}`)

        connection.query('SELECT * from acceder WHERE id = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err){
                res.send(rows)
            } else{
                console.log(err)
            }
        })
    })

})



// ------------------PIEZAS_ODONTOGRAMA------------------------------------

app.get('/piezas-odontogramas', (req, res) => {

    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(`conected as id ${connection.threadId}`)

        connection.query('SELECT * from pieza_odontograma', (err, rows) => {
            connection.release() // return the connection to pool

            if(!err){
                res.send(rows)
            } else{
                console.log(err)
            }
        })
    })
})

// ID PIEZAS_ODONTOGRAMAS

app.get('/piezas-odontogramas/:id', (req, res) => {

    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(`conected as id ${connection.threadId}`)

        connection.query('SELECT * from pieza_odontograma WHERE id = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err){
                res.send(rows)
            } else{
                console.log(err)
            }
        })
    })

})



// ------------------ODONTOLOGOS_TONS------------------------------------

app.get('/odontologos-tons', (req, res) => {

    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(`conected as id ${connection.threadId}`)

        connection.query('SELECT * from odontologo_tons', (err, rows) => {
            connection.release() // return the connection to pool

            if(!err){
                res.send(rows)
            } else{
                console.log(err)
            }
        })
    })
})

// ID ODONTOLOGOS_TONS

app.get('/odontologos-tons/:id', (req, res) => {

    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(`conected as id ${connection.threadId}`)

        connection.query('SELECT * from odontologo_tons WHERE id = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err){
                res.send(rows)
            } else{
                console.log(err)
            }
        })
    })

})




// Listen on enviroment port or 5000

app.listen(port,() => console.log(`Listen on port ${port}`))