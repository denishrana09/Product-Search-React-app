import React from 'react';
import {SearchBar} from './SearchBar';
import {ProductTable} from './ProductTable';

export class FilterableProductTable extends React.Component{
    constructor(props){
        super(props);
        this.state = { filterText:'', inStockOnly:false };
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleInStockChange(inStockOnly){
        this.setState({inStockOnly : inStockOnly});
    }
    handleFilterTextChange(filterText){
        this.setState({filterText : filterText});
    }

    render() {
        return (
          <div className="FilterableProductTable">
            <SearchBar
                filterText={this.state.filterText}
                inStockOnly={this.state.inStockOnly}
                onFilterTextChange={this.handleFilterTextChange}
                onInStockChange={this.handleInStockChange}
            />
            <ProductTable
                products={this.props.products}
                filterText={this.state.filterText}
                inStockOnly={this.state.inStockOnly}
            />
          </div>
        );
    }
}