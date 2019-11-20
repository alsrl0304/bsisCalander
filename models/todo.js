module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Todo', {
    title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    subject: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
    grade: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    class_num: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
    deadline: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    timestamps: false,
    underscored: false,
    tableName: 'TodoList',
    charset: 'utf8',
    collate: 'utf8_general_ci'
  })
}
