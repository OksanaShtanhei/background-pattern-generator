import React, {useEffect, useState} from 'react'
import Cell from './Cell'
import Card from './Card'
import {FaHandPointUp} from 'react-icons/fa'
import {FaHandPointDown} from 'react-icons/fa'

const getElements = (items)=> {
    let content = []
    for(let i = 0; i < items; i++){
        content.push(i)
    }
    return content
}

const App = () => {
    const num = getElements(13)
    const regexp = /\d/ 
    const [flag, setflag] = useState(false)
    const [corner, setCorner] = useState()
    const [oneCell, setOneCell] = useState('5% 5% 5% 5%')
    let cellStyles = {
            width: '60px',
            height: '60px',
            border: '1px solid white',
            borderRadius: oneCell
        }
    
    const openCart = () =>{
        setflag(!flag)
    }

    const checkCorner = (e) => {
        setCorner(e.target.id.match(regexp))
    }
    
    useEffect(() => {
        return corner !== undefined ? changeBg(corner) : null
    }, [corner])
    
    const changeBg = (number) =>{
        console.log(number);
        if(number[0] === '1'){
            setOneCell('50% 5% 5% 5%')
        }
        else if(number[0] === '2'){
            setOneCell('50% 5% 50% 5%')
        }
        else if(number[0] === '3'){
            setOneCell('50% 5% 50% 50%')
        }
        else if(number[0] === '4'){
            setOneCell('50% 50% 50% 50%')
        }
    }
    return (
        <div className="container">
            <div className="row position-relative">
                <div className="fs-4 position-absolute text-light d-flex justify-content-end p-3" >
                    {flag ? <FaHandPointDown onClick={openCart}/> : <FaHandPointUp onClick={openCart}/>}
                    {flag ? <Card checkCorner={checkCorner} /> : null}
                </div>
                {num.map(el => {
                    return <div className="d-flex justify-content-start" key={el}>{
                        num.map(el => {
                            return <Cell key={el} cellStyles={cellStyles} oneCell={oneCell} />
                        })
                    }
                </div>
                }) 
            }
            </div>
        </div>
    )
}
export default App