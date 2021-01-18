import React, {useState} from 'react';
import axios from 'axios';
import url from '../utils/URL';

export const ProductContext = React.createContext();


export default function ProductProvider({children}) {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [featured, setFeatured] = useState([]);

    React.useEffect(() => {
        setLoading(true);
        axios.get(`${url}/products`).then(response => {
            setProducts(response.data);
            setLoading(false);
        });
        return () => {};
    }, []);

    return (
        <ProductContext.Provider value={{ products, loading, featured }}>
            {children}
        </ProductContext.Provider>
    );
}
