import React, { Component } from 'react'
import NewsCard from '../NewsCard/NewsCard';
import { isTemplateElement } from '../../../node_modules/@babel/types';

export class HomePage extends Component {

    state = {
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
            },
        ]
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
                    {...item}
                />
            );
        });
        return (
            <div>
                Hello World!

                {news}
            </div>
        )
    }
}

export default HomePage
