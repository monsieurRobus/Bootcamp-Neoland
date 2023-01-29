import React from 'react'
import './languages.css'


const checkLevel = (level) => {
    
    switch (level) {
        case 'B1':
                return "B1😊"
            break;
        case 'B2':
                return "B2😀"
            break;
        case 'C1':
                return "C1🤩"
            break;
        case 'Native':
                return "Native🪶"
            break;
            
    }

}

const checkFlag = (country) => {
    let flag='';
            switch (country)
            {
                case 'English':
                        return "English"
                    break;
                case 'Spanish':
                        return "Spanish"
                    break;
                case 'Italian':
                        return "Italian"
                    break;

            }
}


const Languages = ({data}) => {
    return (
        <div className="languages">
            <h1>Languages Yo Parlo</h1>
            
            {
                
                data.map((language,index)=>{

                    return (
                        <div key={index} className="language">
                            <h3>{checkFlag(language.language)}</h3>
                            <h4>Writing level: {checkLevel(language.wrlevel)}</h4>
                            <h4>Speaking level: {checkLevel(language.splevel)}</h4>
                        </div>
                        )
                    
            }) 
            }
            
            
        </div>
    );
}


export default Languages;
