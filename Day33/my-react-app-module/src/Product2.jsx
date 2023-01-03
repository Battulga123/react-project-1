import React from "react"
class Product2 extends React.Component {
    render() {
        return (
            <div className='item'>
                <div className="image thumbnail rounded">
                    <img src='pics/image-rose.png' className="thumbnail rounded" />
                </div>
                <div className="description-container">
                    <div className="description">

                        <p>55</p>
                        <p> Haught or Naught</p>
                        <p>Hight-minded or absent-minded? You decide</p>
                        <div className="Submit">
                            <p>Submitted by:</p>
                            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" className="profile" />

                        </div>


                    </div>

                </div>
            </div>
        )
    }
}

export default Product2