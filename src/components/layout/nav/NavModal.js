import React from 'react';

const NavModal =(props)=>{
    return(

        <div id="id01" className="w3-modal" style={{display: props.toggleModal}}>
            <div className="w3-modal-content w3-animate-top w3-card-4">
                <header className="w3-container w3-teal">
                    {/*<span onClick="document.getElementById('id01').style.display='none'" className="w3-button w3-display-topright">&times;</span>*/}
                    <span onClick={props.closeNavModal} className="w3-button w3-display-topright">&times;</span>
                    <h2>Modal Header</h2>
                </header>

                <div className="w3-container">
                    <p>Some text..</p>
                    <p>Some text..</p>
                </div>

                <footer className="w3-container w3-teal">
                    <p>Modal Footer</p>
                </footer>
            </div>
        </div>
    )
}

export default NavModal