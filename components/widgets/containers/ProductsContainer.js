import ActionBar from "./ActionBar";
import Product from "../components/Product";
import ProductsLayout from "../components/ProductsLayout";
import Pagination from "./Pagination";

export class ProductsCointaner extends React.Component{
    render(){
        return (
            <section>

                <ActionBar/>

                <ProductsLayout>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                </ProductsLayout>

                <Pagination/>


            </section>
        )
    }
}