import { DataTypes, Model } from "sequelize";
import db from "../config/Database.config";
export class Produto extends Model{};
(async ()=>{
    await db.sync({force:true});
})
Produto.init(
    {
        id_produto:{
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
        descricao:{
            type: DataTypes.STRING,
            allowNull: false
        },
        preco:{
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        timestamps: false,
        sequelize: db,
        modelName: 'produto',
        tableName: 'produto'
    }
);