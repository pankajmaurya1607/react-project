import { useRef } from "react";


export default function ScrollToSection() {

    const ref = useRef(null);

    const data = [
        {
            label: "First Card",
            style: {
                width: '100%',
                height: '600px',
                background: 'red'
            }
        },
        {
            label: "Second Card",
            style: {
                width: '100%',
                height: '600px',
                background: 'gray'
            }
        },
        {
            label: "Third Card",
            style: {
                width: '100%',
                height: '600px',
                background: 'blue'
            }
        },
        {
            label: "Fourth Card",
            style: {
                width: '100%',
                height: '600px',
                background: 'green'
            }
        },
        {
            label: "Fifth Card",
            style: {
                width: '100%',
                height: '600px',
                background: 'orange'
            }
        },
    ] 

    function handleScrollToSection() {
        let position = ref.current.getBoundingClientRect().top;

        window.scrollTo({
            top: position,
            behavior: "smooth"
        }) 
    }

    return (
        <div>
            <h1>Scroll To a Particular Section </h1>
            <button onClick={handleScrollToSection}>Click To Scroll</button>
            {
                data.map((item, index) => {
                    return (
                        <div key={index} ref={index === 2 ? ref : null} style={item.style}>
                            <h3>{item.label}</h3 >
                        </div>
                    )
                })
            }
        </div>
    )
}