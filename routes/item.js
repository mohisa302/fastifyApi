const items = require('../items');
const {getItem, getItems, addItem} = require('../controllers/items');

const Item ={
    type: 'object',
        properties: {
            id: {type: 'string'},
            name: {type: 'string'}
        },
};

//return in array
const getItemsOpts = {
    schema: {
        response: {
            //if reply correctly
            200: {
                type: 'array',
                items: Item,
            },
        },
    },
    handler: getItems,
};

//return as object
const getItemOpts = {
    schema : {
        response: {
            200: Item,
        },
    },
    handler: getItem,
};

const postItemsOpts = {
    schema: {
        response: {
            //if reply correctly
            201: Item,
        },
    },
    handler: addItem,
};

module.exports = function itemRoutes (app, options, done) {
    app.get('/items', getItemsOpts);
    
    app.get('/item/:id',getItemOpts);

    app.post('/items', postItemsOpts);
    
    done();
}