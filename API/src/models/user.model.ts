import { Table, Column, Model, DataType } from "sequelize-typescript";
import { UserAttributes } from "../interfaces/user.interface";


@Table( { tableName: "user", timestamps: false } )
class UserModel extends Model<UserAttributes> {

    @Column( {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    } )
    id!: number;

    @Column( {
    type: DataType.STRING( 20 ),
    allowNull: false,
    unique: true
    } )
    user!: string;

    @Column( {
    type: DataType.STRING( 70 ),
    allowNull: false
    } )
    password!: string;

}

export default UserModel;