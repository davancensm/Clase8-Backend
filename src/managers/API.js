let productos = [
	{
		"title": "Escuadra",
		"price": "123.45",
		"thumbnail": "https://rfmayorista.com.ar/wp-content/uploads/2020/03/REGLA-ECONM_15-CM..jpg",
		"id": 1
	},
	{
		"title": "Calculadora",
		"price": "234.56",
		"thumbnail": "https://www.soscomputacion.com.ar/10024/calculadora-electronica-st39221-12-digitos-grandes-display-grande.jpg",
		"id": 2
	},
	{
		"title": "Globo Terráqueo",
		"price": "345.67",
		"thumbnail": "https://m.media-amazon.com/images/I/91JEXV3kk1L._AC_SL1500_.jpg",
		"id": 3
	}
];

const producto = [];


class API {
    constructor() {
        this.ides = productos.length + 1
    }

    getAll = (req,res) => {
        console.log('request a get recibido!');
        if(productos.length > 0){
            res.send(productos);  
        } else {
            res.json({error : 'no hay productos cargados'})
        }
    }
    
    getById = (req,res) => {
        console.log('request a get recibido!');
        let params = req.params;
        params = parseInt(params.id)
        if(productos.find(x => x.id === params)){
            let result = productos.find(x => x.id === params)
            res.json(result);
        }else{
            res.json({error : 'producto no encontrado'})
        }
    }

    save = (req,res) => {
        console.log('request a post recibido!')
        const cuerpo = req.body;
        console.log(cuerpo)
        let productoAAgregar = {
            ...cuerpo,
            "id" : this.ides
        }
        this.ides++;
        productos.push(productoAAgregar)
        res.json(productoAAgregar);
    }
    
    update = (req,res) => {
        console.log('request de put recibida')
        const cuerpo = req.body;
        const params = parseInt(req.params.id);
        productos[params -1] = {
            ...cuerpo,
            "id" : params
        }
        res.json(productos[params - 1]);
    }
    
    deleteById = (req,res) => {
        console.log('request de delete recibida')
        let params = parseInt(req.params.id)
        let id = productos.find(x => x.id === params);
        if(id){
            productos.splice(id.id - 1,1);
            res.json(productos)
        } else{
            res.send('No existe el producto');
        }        
    }
}

module.exports = API;