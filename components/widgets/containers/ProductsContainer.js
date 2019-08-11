import ActionBar from "./ActionBar";
import Product from "../components/Product";
import ProductsLayout from "../components/ProductsLayout";

export class ProductsCointaner extends React.Component{
    render(){
        return (
            <section>

                <ActionBar></ActionBar>

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


            </section>
        )
    }
}