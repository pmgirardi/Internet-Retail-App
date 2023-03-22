const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
  // define columns
    id: {
  // Integer.
      type: DataTypes.INTEGER,
  // Doesn't allow null values.
      allowNull: false,
  // Set as primary key.
      primaryKey: true,
  // Uses auto increment.
      autoIncrement: true

    },
      product_id: {
  // Integer.
        type: DataTypes.INTEGER,
  // References the `Product` model's `id`.
        references: {
          model: 'Product',
          key: 'id',
          unique: false
        },
      },
      tag_id: {
  // Integer.
        type: DataTypes.INTEGER,
  // References the `Tag` model's `id`.
        references: {
          model: 'Tag',
          key: 'id',
          unique: false
        },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
