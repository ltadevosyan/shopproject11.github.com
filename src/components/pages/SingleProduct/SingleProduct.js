import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebace";
import { useParams } from 'react-router-dom';
import classes from "../SingleProduct/SingleProduct.module.css";

const SingleProduct = ()=>{
    const [singleProduct, setSingleProduct] = useState([]);
    const productId = useParams();
    const [cardBtn, setCardBtn] = useState("Add to cart");
    const getProducts = async function(){
        const qureySnapshot = await getDocs(collection(db,"products"));
        qureySnapshot.forEach((doc) =>{
            if(doc.id === productId.id){
                setSingleProduct(doc.data());
            }
        });
    };
    useEffect(()=>{
        getProducts();
    }, []);
    return(
        // <div className={classes.product} >
        //         <div className={classes.productImageContainer}>
        //             <img src={singleProduct.picture} alt=""></img>
        //         </div>
        //         <div className={classes.productBody}>
        //             <span className={classes.productCategory}>Category:{singleProduct.category}</span>
        //             <p className={classes.productTitle}>{singleProduct.name}</p>
        //             <span className={classes.productDescription}>{singleProduct.description}</span>
        //         </div>
        //         <div className={classes.productFooter}>
        //             <p className={classes.productPrice}>${singleProduct.price}</p>
        //         </div>
        //     </div>
        singleProduct !== undefined && 
            <section className={classes.singleProduct}>
                <div className={classes.productImageContainer}>
                    <img src={singleProduct.picture} className={classes.productImage} alt={singleProduct.name} />
                </div>
                <div className={classes.productSummary}>
                    <span className={classes.productCategory}>Category: {singleProduct.category}</span>
                    <h1 className={classes.productTitle}>{singleProduct.name}</h1>
                    <hr />
                    <p className={classes.productPrice}>${singleProduct.price}</p>
                    <p className={classes.productDescription}>{singleProduct.description}</p>
                    <button className={classes.addToCart} >{cardBtn}</button>
                </div>
            </section> 
    )
}
export default SingleProduct
