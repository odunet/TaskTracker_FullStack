//Initialize postgress DB
const {Pool, Client} = require('pg');

//connect to an available table in a running postgresql database
const connectionString = 'postgressql://ayo:demo1234@localhost:5432/guru99'

//Initialize Pool. This can be used as an alternate to client. 
const client_A = new Pool({
    //Method1 to store properties
    user: "ayo",
    host: "localhost",
    database: "postgres",
    password: "demo1234",
    port: 5432
})

//Initialize Client2. Not used here, just sample.
// const client = new Client({
//     // Method2 on to store properties
//     connectionString:process.env.DATABASE_URL || connectionString
// })
// client.connect()   

//Instantiate model object
let Model =  {
    insert_query : function (day_, text_, reminder_,resolve, reject) {
        // access the collection from prosgress database. Name of table in DB is "travesty_task"
            const text = 'INSERT INTO travesty_task (day, text , reminder) VALUES($1, $2, $3)'
            const values = [day_, text_, reminder_]
            client_A.query(text, values, (err,res) => {
            if(err){
                reject(err)
            }
            else{
                resolve(res.rows)
            }
            // client_A.end();
            })
    },
    update_query : function (id_,reminder_,resolve, reject) {
        //Update DB with new reminder value. Name of table in DB is "travesty_task"
            const text = "UPDATE travesty_task SET reminder = ($1) WHERE id=($2)"
            const values = [reminder_, id_,]
            client_A.query(text, values, (err,res) => {
            if(err){
                reject(err)
            }
            else{
                resolve(res.rows)
            }
            })
    },
    delete_query : function (id_, resolve,reject) {
        // access the collection from prosgress database. Name of table in DB is "travesty_rct"
            if(typeof(id_)!= "number"){
                reject("The ID inputed is not a number")
            }
        client_A.query(`DELETE FROM travesty_task WHERE id = ${id_}`, (err,res) => {
            if(err){
                reject(err)
            }
            else{
                resolve(res.rows)
            }
        })
    },

    // get_task : function (resolve,reject) {
    //     // access the collection from prosgress database. Name of table in DB is "persond"
    //         client_A.query("SELECT * FROM travesty_task", (err,res) => {
    //         if(err){
    //             reject(err)
    //         }
    //         else{
    //             resolve(res.rows)
    //         }
    //         // client_A.end();
    //         })
    // },

    get_task : function () {
        // access the collection from prosgress database. Name of table in DB is "persond"
        return new Promise((resolve,reject) => {
            client_A.query("SELECT * FROM travesty_task", (err,res) => {
            if(err){
                reject(err)
            }
            else{
                resolve(res.rows)
            }
        })
        })
    },
    get_guru : function (resolve,reject) {
        // access the collection from prosgress database. Name of table in DB is "persond"
            client_A.query("SELECT * from persond", (err,res) => {
            if(err){
                reject(err)
            }
            else{
                resolve(res.rows)
            }
            // client_A.end();
            })
    }
}
module.exports = {Model , client_A};


/**
 * Test code, not to be used in production
 */

//Get data from Guru database - Used as practise
// Model.get_guru((data)=>{
//     console.log(data);
// })

// Model.get_task()
// .then((data) => console.log(data))
// .catch((err) => console.log(err))

//Insert data into table
// Model.insert_query("Mar 5th at 2:30pm", "Meeting with Banker" , false,(data)=>{
//     console.log(data);
// })

//Delete data from table
// Model.delete_query(7,(data)=>{
//     console.log(data);
// })

//Update table
// Model.update_query(15,true,(data)=>{
//     console.log(data);
// })