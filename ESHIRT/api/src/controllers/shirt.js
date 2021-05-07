const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {Shirt, User, Detail, Category} = require('../db.js');

async function postShirt(req, res, next) {        
    // this will have a validation before post
    try {
        const newShirt = {...req.body, created_by_user: true} 
        const postedShirt = await Shirt.create(newShirt);
        await postedShirt.addCategory(req.body.categoryId);

        return res.status(200).json(postedShirt)
    } catch (error) {
        next({status: 409, message: 'Shirt already exist'});
    }
}

async function getShirt(req, res, next) {     
    const shirtId = req.params.id
    try { 
        const shirt = await Shirt.findOne({where: {id: shirtId}, include: [Category]})
        if (shirt) {
            return res.status(200).json(shirt)
        } else {
            return next({status: 404, message: 'Shirt not found'})
        }
        
    } catch (error) {
        next({status: 400, message: 'Bad body request'});
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



module.exports = {
    postShirt,
    getShirts,
    getShirt
}