/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
import Loading from "../Loading";
// import axios from "axios";
import DashProCard from "./DashProCard";




const DashProducts = ({loading,products}) => { 

    
    return <div>
        {
            loading ? <Loading></Loading> : <> 
            {
                products.length === 0 ? <> <div><h1 className="text-orange-600  text-center text-4xl">No product found.</h1></div> </> :<> 
                <div className="min-h-screen grid grid-cols-1 lg:grid-cols-3">
                    {
                        products.map(product =><DashProCard key={product._id} product={product}></DashProCard>)
                    }
                </div>
                 </>
            } </>
        }
    </div>
};

export default DashProducts;