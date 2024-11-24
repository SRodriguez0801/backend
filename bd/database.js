const {Sequelize}= require('sequelize')
                        //nombre de bd   //usuario  //clave
const sequelize = Sequelize('universidad','root','root123',{
    host:'localhost',
    dialect: 'mysql' //depende del que estemos utilizando
})

module.exports= sequelize ;