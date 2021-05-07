const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {Shirt, User, Detail, Category} = require('../db.js');

async function postShirt(req, res, next) {        
    // this will have a validation before post
    try {
        const newShirt = {...req.body, created_by_user: true} 
        const postedShirt = await Shirt.create(newShirt);
        return res.status(200).json(postedShirt)
    } catch (error) {
        next({status: 409, message: 'Shirt already exist'});
    }
}


async function getShirts(req, res, next) {  
    const name = req.query.name
    // NEEDS REFACTORING
    try { 
        if (!name) {
            const shirts = await Shirt.findAll({include: [Category]})
            return res.status(200).json(shirts)
        } else {
            const shirts = await Shirt.findAll({
                where: {
                    name: {
                        [Op.like]: `%${name}%`
                    }
                }, 
                include: [Category]
            })
            return res.status(200).json(shirts)
        }

    } catch (error) {
        next({status: 404, message: 'Shirt not found'});
    }
}

/* async */ function controllerX(req, res, next) {        


    /* 
    try {
        
    } catch (error) {
        
     */
    
    return;
}
    

/* async */ function controllerZ(req, res, next) {
    
        
        
        
    /* try {
            
    } catch (error) {
            
    } */
    
    return;
}

module.exports = {
    postShirt,
    getShirts
}