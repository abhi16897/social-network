const Sequelize=require("sequelize")
const db=require("../database/db")

module.exports=db.sequelize.define(
    'user',
    {
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        firstname:{
            type:Sequelize.STRING
        },
        lastname:{
            type:Sequelize.STRING
        },
        username:{
            type:Sequelize.STRING
        },
        password:{
            type:Sequelize.STRING
        }
    },
    {
        timestamps:false
    }
)