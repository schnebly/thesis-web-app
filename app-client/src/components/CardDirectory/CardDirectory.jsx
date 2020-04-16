import React from 'react';

import './CardDirectory.styles.css';

import MyCard from '../Card/Card';

class CardDirectory extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            sections: [
                {
                    name: 'TF-IDF',
                    desc: "Term Fequency - Inverse Document Frequency",
                    image: 'https://media-exp1.licdn.com/dms/image/C4D12AQFaP_lf5nI7RA/article-cover_image-shrink_600_2000/0?e=1587600000&v=beta&t=-y-JZYHNDOM9dT_eT7KYe6YjZQFj2VD9yFujQNF2v9s',
                    id: 1,
                    link: '/TF-IDF/'
                },
                {
                    name: 'Entropy',
                    desc: "Information gain summarizer",
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSx_-ZbSfAU6T_pOdVPThyXh2hIXbD63kobVNreh0FasIol6aP1&usqp=CAU',
                    id: 2,
                    link: '/entropy/'
                },
                {
                    name: 'TextRank',
                    desc: "PageRank but for summarizing text",
                    image: 'https://cdn.analyticsvidhya.com/wp-content/uploads/2018/10/block_3.png',
                    id: 3,
                    link: '/cosine/'
                },
                {
                    name: 'Pointer-Generator',
                    desc: "Trash Summarizer",
                    image: 'data:image/png;base64,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',
                    id: 4,
                    link: '/pointer-generator/'
                }
            ]
        };
    }

    render(){
        return (
            <div className='card-directory'>
                {
                    this.state.sections.map(({id, ...sectionProps}) => 
                        <MyCard {...sectionProps} key={id} />
                    )
                }
            </div>
        )
    }
}

export default CardDirectory;