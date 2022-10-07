import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebace";
import classes from "./products.module.css";
import { NavLink, /*useParams*/} from "react-router-dom";

import { useDispatch } from "react-redux";
import { addCart } from "../../../redux/action";

const Products = () => {
    const [products, setProducts] = useState([]);

    //const {id} = useParams();
    //const [loading, setLoading] = useState(false);


    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    const getProducts = async function(){
        const qureySnapshot = await getDocs(collection(db,"products"));
        const arrProds = [];
        qureySnapshot.forEach((doc) =>{
            arrProds.push({
                id: doc.id,
                data: doc.data()
            });
            
        });
        setProducts(arrProds);
    };
    useEffect(()=>{
        getProducts();
    }, []);

    return (
    <div className={classes.productsWrapper}> {products.map(({id,data}) =>{
        return(
            <div className={classes.product} key = {id}>
                <div className={classes.productImageContainer}>
                    <img src={data.picture} alt=""></img>
                </div>
                <div className={classes.productBody}>
                    <span className={classes.productCategory}>Category:{data.category}</span>
                    <p className={classes.productTitle}>{data.name}</p>
                    <span className={classes.productDescription}>{data.description}</span>
                </div>
                <div className={classes.productFooter}>
                    <p className={classes.productPrice}>${data.price}</p>
                    <NavLink to={`/products/product/${id}`}>
                        <button onClick= {() => addProduct(classes.product)}>View More</button>
                    </NavLink>
                    <NavLink to={`/products/product/${id}`}>
                        <button >Go to Cart</button>
                    </NavLink>

                </div>
            </div>
        )
    })} </div>
    )
};
export default Products;