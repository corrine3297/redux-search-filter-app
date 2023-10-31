import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../../services/allAPI";

export const fetchAllProducts = createAsyncThunk('allProductsList/fetchAllProducts', async () => {
    const { data } = await getAllProducts()
    data.filter(prod => {
        prod.price = Math.floor(prod.originalPrice * (prod.discountPercentage / 100))
    })
    return data
})


const allProductSlice = createSlice({
    name: 'allProductsList',
    initialState: {
        loading: false,
        allProducts: [],
        allProductsContainer: [],
        error: ''
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.pending, (state => {
            state.loading = true
        }))
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.loading = false
            state.allProducts = action.payload
            state.allProductsContainer = action.payload
            state.error = ''
        })
        builder.addCase(fetchAllProducts.rejected,(state,action)=>{
            state.loading = false
            state.allProducts=[]
            state.allProductsContainer=[]
            state.error=action.error.message
        })
    
    },
    reducers:{
        searchProduct:(state,action)=>{
            state.allProducts=state.allProductsContainer.filter(item=>item.title.toLowerCase().includes(action.payload))
        }
    }

})

export const {searchProduct} =allProductSlice.actions;
export default allProductSlice.reducer