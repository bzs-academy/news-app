import React, { Component } from 'react'
import NewsCard from '../NewsCard/NewsCard';
import { isTemplateElement } from '../../../node_modules/@babel/types';
import axios from 'axios';

export class HomePage extends Component {

    state = {
        isUpdated: false,
        data:
        [
            {
                urlToImage:"https://www.nj.com/resizer/ewOeGU5IVwJgJ0_NXptqTfUN1M8=/1280x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/OEFHMGVTFNCNVBXNJQADDHCSRM.jpg",
                title: "Test 1",
                description: "Test 1 Content"
            },
            {
                urlToImage:"https://static.politico.com/45/f9/b6bbbc1e4c0fa6bd3059d4875548/cuomo-corona-brief.jpg",
                title: "Test 2",
                description: "Test 2 Content"
            }
        ]
    }

    componentDidMount() {
        const url = 'http://newsapi.org/v2/top-headlines?' +
            'country=de&' +
            'apiKey=78961d7c864d4c77a95f173e437d7af1';
        if (!this.state.isUpdated) {
            axios.get(url)
            .then(result=>{
                console.log(result);
                this.setState({data:result.data.articles});
                this.setState({isUpdated:true});
            })
            .catch(err=>console.log(err));
        }
    }

    render() {
        /* 
        // destructuring
        const {urlToImage,title,description} = item; 
        urlToImage=item.urlToImage;
        title= utem.title;
        description = item.description; 
        */

        /* 
        // spread operator
        const urlToImage = {...item}  
        */
       
        const news = this.state.data.map((item, i)=>{
            return(
                <NewsCard
                    width='18rem'
                    {...item}
                />
            );
        });
        return (
            <div>
                <div className="col-md-4 col-sm-6 vh-100 bg-success float-left bg-light">
                <NewsCard
                    className = "w-100"
                    additionClass="border-0 bg-light"
                    width="100"
                    urlToImage ={this.state.data[0].urlToImage}
                    title ={this.state.data[0].title}
                    description ={this.state.data[0].content}
                />

                </div>

                <div className="row p-3 col-md-8 col-sm-6 float-left overflow-auto vh-100">
                    {news}
                </div>
                
            </div>
        )
    }
}

export default HomePage
