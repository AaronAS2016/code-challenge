import ActionBar from "./ActionBar";
import Product from "../components/Product";
import ProductsLayout from "../components/ProductsLayout";
import Pagination from "./Pagination";

export class ProductsCointaner extends React.Component{
    render(){

        const {products, actualPage, productsPerPage} = this.props;

        let inicio = 0;

        if(actualPage != 1){
            inicio = (actualPage - 1) * productsPerPage;
        }


        return (
            <section>

                <ActionBar/>

                <ProductsLayout>
                    {
                        products.slice(inicio, productsPerPage*actualPage).map(product => (
                            <Product key={product._id} title={product.name} category={product.categoy} img={product.img.url} ></Product>
                        ))

                    }
                </ProductsLayout>

                <Pagination/>


            </section>
        )
    }
}