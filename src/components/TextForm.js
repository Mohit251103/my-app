import React, {useState} from 'react'

export default function TextForm(props) {

    const len=(array)=>{
        let count=0
        for(let i=0;i<array.length;i++){
            if(array[i]!==""){
                count++
            }
        }
        return count
    }

    const [myStyle, setMyStyle] = useState({
        color:"black",
        backgroundColor:"white",
        height:"45vh" ,
        margin:"40px 0px"
    })

    const [btnText, setBtnText] = useState("Enable Dark Mode")

    const changeStyle=()=>{
        if(myStyle.color==="black"){
            setMyStyle({
                color:"white",
                backgroundColor:"black",
                height:"45vh" ,
                margin:"40px 0px"
            })
            setBtnText("Enable Light Mode")
        }
        else{
            setMyStyle({
                color:"black",
                backgroundColor:"white",
                height:"45vh" ,
                margin:"40px 0px"
            })
            setBtnText("Enable Dark Mode")
        }
    }

    const [text,setText] = useState("");

    // function Capitalize(text){
    //     let str
    //     let word
    //     for (word of text.split(" ")){
    //         str=str+ word[0].toUpperCase() + word.slice(1)+" ";
    //         console.log(str)
    //     }
    //     return str
    // }

    const eventUpHandle=()=>{
        setText(text.toUpperCase())
        props.showAlert("Converted to uppercase!","success")
    }
    const eventLoHandle=()=>{
        setText(text.toLowerCase())
        props.showAlert("Converted to lowercase!","success")
    }
    // const eventCapHandle=()=>{
    //     setText(Capitalize(text))
    //     props.showAlert("Converted first word of each character to uppercase!","success")
    // }
    const handleChange=(event)=>{
        setText(event.target.value)
        
    }
    return (
        <>
        <div className="form-floating my-2">
            <h1>{props.heading}</h1>
            <textarea className="form-control" onChange={handleChange} value={text} id="floatingTextarea2" style={myStyle}></textarea>
            <button className="btn btn-primary mx-2" disabled={text.length===0} onClick={eventUpHandle}>Convert to UpperCase</button>
            {/* <button className="btn btn-primary mx-2" onClick={eventCapHandle}>Capitalized Case</button> */}
            <button className="btn btn-primary mx-2" disabled={text.length===0} onClick={eventLoHandle}>Convert to LowerCase</button>
            <button className="btn btn-primary" onClick={changeStyle}>{btnText}</button>
        </div>
        <div className="container">
            <h1>YOUR TEXT SUMMARY</h1>
            <p>{len(text.split(" "))} words and {text.length} characters</p>
        </div>
        </>
    )
}
