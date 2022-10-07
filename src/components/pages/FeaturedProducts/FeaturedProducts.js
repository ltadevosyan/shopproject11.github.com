import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebace";
import classes from "./FeaturedProducts.module.css";
// import classes from "../products.module.css";
import { NavLink} from "react-router-dom";

import { useSelector } from "react-redux";

const FeaturedProducts = () =>{
    const [products, setProducts] = useState([]);

    const state = useSelector((state) => state.handleCart)

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
        <div className={classes.productsWrapper}> {products.slice(0, 4).map(({id,data}) =>{
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
                                <button>View More</button>
                            </NavLink>
                            <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-shopping-cart me-1"></i> Cart ({state.length})
                            </NavLink>
                        </div>
                    </div>
                )
            })} 
        </div>
        )
};
export default FeaturedProducts;