import axios from 'axios';

export function getCategories(){
    
    return async (dispatch) => {
        try {
            const res= await axios.get('http://localhost:3001/category', {responseType: 'json'})
            const categories = res.data
            console.log('categorias', categories)
            dispatch({type: 'GET_CATEGORIES', payload: categories})
        } catch (err) {
            console.log((err.response && err.response.data) || 'Server not working!');
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
            console.log((err.response && err.response.data) || 'Server not working!');
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
            console.log((err.response && err.response.data) || 'Server not working!');
        }
    }
}

export function putCategory(dataToModify, categoryId){

    return async (dispatch) => {
        try {
            const res = await axios.put(`http://localhost:3001/category/${categoryId}`, dataToModify, {responseType: 'json'})
            const modifiedCategory = res.data
            dispatch({type: 'PUT_CATEGORY', payload: {...dataToModify, categoryId: modifiedCategory.id}})
        } catch (err){
            console.log((err.response && err.response.data) || 'Server not working!');
        }
    }
}

export function deleteCategory(categoryId){
    return async (dispatch) => {
        try {
            const res = await axios.delete(`http://localhost:3001/category/${categoryId}`, {responseType: 'json'})
            dispatch({type: 'DELETE_CATEGORY', payload: res.status})
        } catch (err) {
            console.log((err.response && err.response.data) || 'Server not working!');
        }        
    }   
}

export function filterByCategory(categories){
    return {type: 'FILTER_BY_CATEGORY', payload: categories}
        
}