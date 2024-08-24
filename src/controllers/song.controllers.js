const catchError = require('../utils/catchError');
const Song = require('../models/Song');
const { where } = require('sequelize');

const getAll = catchError(async(req, res) => {
    // Operaciones...
    const result= await Song.findAll()
    return res.json( result/* valor a retornar */)
});

const create = catchError(async(req,res)=>{
    const result= await Song.create(req.body)

    return res.jason(result)
})

const getOne=catchError(async(req,res)=>{
    const {id}= req.params
    const result= await Song.findByPk({where:{id}} )
    if(!result) return res.sendStatus(404)

    return res.jason(result)
})

const destroy=catchError(async(req,res)=>{
        const {id}=req.params
        const deleting= await Song.destroy({where:{id}})
        if(!deleting) return res.send("Song not Found").sendStatus(404)

        return res.jason(deleting).sendStatus(204)
})

const update= catchError(async (req,res)=>{
    const {id}=req.params 
    const result= await Song.update(req.body,{where:{id} ,returning :true})
    if(result[0]===0) return sendStatus(404)


    return res.jason(result)

})
module.exports = {
    getAll,
    create,
    getOne,
    destroy,
    update
}