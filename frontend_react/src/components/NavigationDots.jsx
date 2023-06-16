import React from 'react'

// active will tell that on which section we are currently
const NavigationDots = ({ active }) => {
    return (
        <div className ="app__navigation">
            {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item, index) => (


                <a
                    href={` #${item} `}
                    key={item + index }  //to make it unique we add key
                    className=" app__navigation-dot "
                    style={active === item ? { backgroundColor: '#313BAC' } : {}}
                
                />
                  
              

            ))}
        </div>
    )
}

export default NavigationDots



// {['home', 'about', 'work', 'skills', 'testimonials' ,'contact'].map((item , index) => (
//     <li className="app__flex p-text" key={`link-${item}`}>
//         {/* app__flex is use to center the text */}
//         <div />
//         <a href={` #${item} `}>{item}</a>
//     </li>
// ))}
