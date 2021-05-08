const axios= require('axios')


// Functions 'get...ByName' returns an array of elements where name matches
// each action needs a error handler (if res.status === 404 dispatch(error, doSomething))

/********************** USERS ROUTES ***********************/

export function getUsers(){
    
    return async (dispatch) => {
        try {
            const res= await axios.get('http://localhost:3001/user', {responseType: 'json'})
            const users= res.data
            console.log(res)
            dispatch({type: 'GET_USERS', payload: users})
        } catch (err) {
            console.log(err.response.data);
        }
    }
}

export function getUsersByName(userName){
    
    return async (dispatch) => {
        try {
            const res= await axios.get(`http://localhost:3001/user?name=${userName}`, {responseType: 'json'})
            const users= res.data
            dispatch({type: 'GET_USERS_NAME', payload: users})
        } catch (err) {
            console.log(err.response.data);
        }
    }
}

export function getUserById(userId){
    
    return async (dispatch) => {
        try {
            const res= await axios.get(`http://localhost:3001/user/${userId}`, {responseType: 'json'})
            const user= res.data
            dispatch({type: 'GET_USER', payload: user})
        } catch (err) {
            console.log(err.response.data);
        }
    }
}

export function postUser(user){

    return async (dispatch) => {
        try {
            const res= await axios.post(`http://localhost:3001/user`, user, {responseType: 'json'})
            const newUser= res.data
            dispatch({type: 'POST_USER', payload: {...user, userId:newUser.id}})
        } catch (err) {
            console.log(err.response.data);
        }
    }
}

export function putUser(dataToModify, userId){

    return async (dispatch) => {
        try {
        const res= await axios.put(`http://localhost:3001/user/${userId}`, dataToModify, {responseType: 'json'})
        const modifiedUser= res.data
        dispatch({type: 'PUT_USER', payload: {...user, userId:modifiedUser.id}})
        } catch (err){
            console.log(err.response.data);
        }
    }
}

export function deleteUser(userId){
    // Hacer un get antes de usar esta action porque se necesita el id
    return async (dispatch) => {
        try {
            const res= await axios.delete(`http://localhost:3001/user/${userId}`, {responseType: 'json'})
            dispatch({type: 'DELETE_USER', payload: res.status})
        } catch (err) {
            console.log(err.response.data);
        }        
    }
    
}
/*************************************/


/************************* SHIRTS ROUTES *************************/

export function getShirts(){
    
    return async (dispatch) => {
        try {
            const res= await axios.get('http://localhost:3001/shirt', {responseType: 'json'});
            const shirts = res.data;
            console.log(res);
            dispatch({type: 'GET_SHIRTS', payload: shirts})
        } catch (err) {
            console.log(err.response.data);
        }
    }
}

export function getShirtsByName(shirtName){
    
    return async (dispatch) => {
        try {
            const res = await axios.get(`http://localhost:3001/shirt?name=${shirtName}`, {responseType: 'json'})
            const shirts = res.data
            dispatch({type: 'GET_SHIRTS_NAME', payload: shirts})
        } catch (err) {
            console.log(err.response.data);
        }
    }
}

export function getShirtById(shirtId){
    
    return async (dispatch) => {
        try {
            const res = await axios.get(`http://localhost:3001/shirt/${shirtId}`, {responseType: 'json'})
            const shirt = res.data
            dispatch({type: 'GET_USER', payload: shirt})
        } catch (err) {
            console.log(err.response.data);
        }
    }
}

export function postShirt(shirt){

    return async (dispatch) => {
        try {
            const res = await axios.post(`http://localhost:3001/shirt`, shirt, {responseType: 'json'})
            const newShirt = res.data
            dispatch({type: 'POST_SHIRT', payload: {...shirt, shirtId: newShirt.id}})
        } catch (err) {
            console.log(err.response.data);
        }
    }
}

export function putShirt(dataToModify, shirtId){

    return async (dispatch) => {
        try {
            const res= await axios.put(`http://localhost:3001/user/${shirtId}`, dataToModify, {responseType: 'json'})
            const modifiedShirt = res.data
            dispatch({type: 'PUT_SHIRT', payload: {...shirt, shirtId: modifiedShirt.id}})
        } catch (err){
            console.log(err.response.data);
        }
    }
}


export function deleteShirt(shirtId){
    // Hacer un get antes de usar esta action porque se necesita el id
    return async (dispatch) => {
        try {
            const res = await axios.delete(`http://localhost:3001/shirt/${shirtId}`, {responseType: 'json'})
            dispatch({type: 'DELETE_SHIRT', payload: res.status})
        } catch (err) {
            console.log(err.response.data);
        }        
    }
    
}
/*************************************/


// router.get('/', getCategories )
// router.post('/', postCategory)
// router.put('/:id', putCategory )
// router.delete('/:id', deleteCategory )

/*********************** Categories *************************/

export function getCategories(){
    
    return async (dispatch) => {
        try {
            const res= await axios.get('http://localhost:3001/category', {responseType: 'json'})
            const categories = res.data
            console.log(res)
            dispatch({type: 'GET_CATEGORIES', payload: users})
        } catch (err) {
            console.log(err.response.data);
        }
    }
}

export function getCategoriesByName(categoryName){
    
    return async (dispatch) => {
        try {
            const res = await axios.get(`http://localhost:3001/category?name=${categoryName}`, {responseType: 'json'})
            const categories = res.data
            dispatch({type: 'GET_CATEGORIES_NAME', payload: categories})
        } catch (err) {
            console.log(err.response.data);
        }
    }
}

export function postCategory(category){

    return async (dispatch) => {
        try {
            const res = await axios.post(`http://localhost:3001/category`, category, {responseType: 'json'})
            const newCategory = res.data
            dispatch({type: 'POST_CATEGORY', payload: {...category, categoryId: newCategory.id}})
        } catch (err) {
            console.log(err.response.data);
        }
    }
}

export function putCategory(dataToModify, categoryId){

    return async (dispatch) => {
        try {
            const res = await axios.put(`http://localhost:3001/category/${categoryId}`, dataToModify, {responseType: 'json'})
            const modifiedCategory = res.data
            dispatch({type: 'PUT_CATEGORY', payload: {...category, categoryId: modifiedCategory.id}})
        } catch (err){
            console.log(err.response.data);
        }
    }
}

export function deleteCategory(categoryId){
    // Hacer un get antes de usar esta action porque se necesita el id
    return async (dispatch) => {
        try {
            const res = await axios.delete(`http://localhost:3001/category/${categoryId}`, {responseType: 'json'})
            dispatch({type: 'DELETE_CATEGORY', payload: res.status})
        } catch (err) {
            console.log(err.response.data);
        }        
    }   
}