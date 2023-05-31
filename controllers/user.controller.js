const { response,request } = require("express");


const usersGet=(req=request, res=response)=> {

    const {q,nombre='no name',apikey,page=1,limit} =req.query;

    res.json({
        
        msg:'get API- controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}


const usersPut=(req=request, res= response)=> {
    const id = req.params.id;

    res.json({
        
        msg:'put API-controlador',
        id
    });
};



const usersPost=(req=request, res= response)=> {
    const {nombre,edad}= req.body;

    res.json({
        
        msg:'post API -controlador',
        nombre,
        edad
    });
};

const usersPatch=(req=request, res= response)=> {
    res.json({
        
        msg:'patch API -controlador'
    });
};


const usersDelete=(req=request, res= response)=> {
 


    res.json({
        
        msg:'delete API -controlador',
    
    });
};




module.exports={
    usersGet,
    usersPut,
    usersPost,
    usersDelete,
    usersPatch
}