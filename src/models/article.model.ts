import { Table, Column, Model, DataType, Index } from "sequelize-typescript";
import { ArticleAttributes } from "../interfaces/article.interface";

@Table({ tableName: "article" })
class ArticleModel extends Model<ArticleAttributes> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true
  })
  id!: number;

  @Index({ name: "name-brand", unique: true})
  @Column({
    type: DataType.STRING(15)
  })
  name!: string;
  
  @Index({ name: "name-brand", unique: true})
  @Column({
    type: DataType.STRING(15)
  })
  brand!: string;

  @Column({
    type: DataType.TINYINT,
    defaultValue: true
  })
  active!: boolean;

}

export default ArticleModel;