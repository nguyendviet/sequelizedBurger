module.exports = (sequelize, DataTypes)=>{
    var Customer = sequelize.define('Customer', {
        customer_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1, 255]
            }
        }
    });
  
    // link customer with burger
    Customer.associate = (models)=>{
        Customer.hasMany(models.Burger, {
            onDelete: 'cascade'
        });
    };
  
    return Customer;
};
  