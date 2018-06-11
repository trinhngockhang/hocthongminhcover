import React, { Component}  from 'react';
import ReactDOM from 'react-dom';
import Header from '../../Common/header/Header';
import Footer from '../../Common/footer/Footer';

export default class FeaturePageUi extends Component {
    showHeader = () => <Header/>;
    showFooter = () => <Footer/>;
    showContent = () => {
        return (
            <div>Hello chicken!!</div>
        )
    }


    renderPage = () => {
        return (
            <div>
                <div className="Wrapper">
                    {this.showHeader()}   
                    {this.showContent()}   
                    {this.showFooter()}
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                { this.renderPage()}
            </div>
        )
    }
}