const { Model, DataTypes } = require('sequelize');
const sequelize = require('  '); // Ajusta la ruta según tu estructura de carpetas
class User extends Model {}

User.init({
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    contraseña: {
        type: DataTypes.STRING,
        allowNull: false
    },
    favoritos: {
        type: DataTypes.JSON, // Puedes ajustar esto según tus necesidades; por ejemplo, podrías utilizar un arreglo de IDs de álbumes
        allowNull: true,
        defaultValue: []
    }
}, {
    sequelize,
    modelName: 'User',
    timestamps: true
});

module.exports = User;
