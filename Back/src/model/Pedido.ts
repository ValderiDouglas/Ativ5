import { DataTypes, Model } from "sequelize";
import db from "../config/Database.config";
import { Cliente } from "./Cliente";
import { Produto } from "./Produto";
import { Servico } from "./Servico";	
export class Pedido extends Model{};
(async ()=>{
    await db.sync({force:true});
})
Pedido.init(
    {
        id_pedido:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        quantidade:{
            type: DataTypes.STRING,
            allowNull: false
        }
        
    },
    {
        timestamps: false,
        sequelize: db,
        modelName: 'pedido',
        tableName: 'pedido'
    }
);

Cliente.hasMany(Pedido,{foreignKey: 'id_cliente'});
Produto.hasMany(Pedido,{foreignKey: 'id_produto'});
Servico.hasMany(Pedido,{foreignKey: 'id_servico'});