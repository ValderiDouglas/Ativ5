import { DataTypes, Model } from "sequelize";
import db from "../config/Database.config";
export class Cliente extends Model{};
(async ()=>{
    await db.sync({force:true});
})
Cliente.init(
    {
        id_cliente:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: true,
            onDelete: 'CASCADE',
        },

        nome:{
            type: DataTypes.STRING,
            allowNull: false
        },
        telefones:{
            type: DataTypes.STRING,
            allowNull: false
        },

        nomeSocial:{
            type: DataTypes.STRING,
            allowNull: false
        },
        cpf: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        rgs: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        dataCadastro: {
            type: DataTypes.STRING,
            allowNull: false
        },
        genero: {
            type: DataTypes.STRING,
            allowNull: false
        }
          
    },
    {
        timestamps: false,
        sequelize: db,
        modelName: 'cliente',
        tableName: 'cliente'
    }
);