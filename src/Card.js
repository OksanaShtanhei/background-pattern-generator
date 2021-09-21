import React from 'react'

const Card = ({checkCorner}) => {
    return (
        <>
            <div className="card text-center d-flex justify-content-end p-3 m-4 position-absolute" style={{width: 200}}>
                <div className="card-body">
                    <h5 className="card-title text-dark">Choose corners</h5>
                </div>
                    <div className="card-footer text-muted fs-6">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="radio" id="radio1" onClick={checkCorner}/>
                        <label className="form-check-label" htmlFor="radio1">
                            One
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="radio" id="radio2" onClick={checkCorner} />
                        <label className="form-check-label" htmlFor="radio2">
                            Two
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="radio" id="radio3" onClick={checkCorner} />
                        <label className="form-check-label" htmlFor="radio3">
                            Three
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="radio" id="radio4" onClick={checkCorner} />
                        <label className="form-check-label" htmlFor="radio4">
                            Four
                        </label>
                        </div>
                    </div> 
                </div>
        </>
    )
}
export default Card