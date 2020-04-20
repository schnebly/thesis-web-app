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
                },
                {
                    name: 'Bot Detection',
                    desc: "Machine Learning model that classifies Twitter Bot accounts",
                    image: 'data:image/jpeg;base64,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',
                    id: 5,
                    link: '/bot-detection/'
                },
                {
                    name: 'Web App',
                    desc: "How this web app was made",
                    image: 'data:image/png;base64,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',
                    id: 6,
                    link: '/web-app/'
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