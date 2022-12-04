import { DataTypes, Model } from "sequelize";
import db from "../config/Database.config";
export class Servico extends Model{};
(async ()=>{
    await db.sync({force:true});
})
Servico.init(
    {
        id_servico:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: true,
            onDelete: 'CASCADE',
        },
        Snome:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Sduracao:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Sdescricao:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Spreco:{
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        timestamps: false,
        sequelize: db,
        modelName: 'servico',
        tableName: 'servico'
    }
);