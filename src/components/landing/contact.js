import React, {Component} from 'react';

class Contact extends Component{

    constructor(props){
        super(props);

        this.state={
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            comments: '',
            errors: {},
        };



        this.handleInputChange = this.handleInputChange.bind(this)
    };


    // ! IMPORTANT : without this, we wont be able to update state
    // form inputs targets the name && value

    handleInputChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })

    };


    render(){

        return(
            <section id="contact">
                <div className="inner">
                    <section>
                        <form method="post" action="#">

                            <div className="fields">

                                <div className="field half">
                                    <label htmlFor="firstName">First name</label>

                                    <input type="text" name="firstName" id="name"

                                           value={this.state.firstName}
                                           onChange={this.handleInputChange}
                                    />
                                </div>

                                <div className="field half">
                                    <label htmlFor="lastName">Last name</label>
                                    <input type="text" name="lastName" id="name"
                                           value={this.state.lastName}
                                           onChange={this.handleInputChange}
                                    />
                                </div>

                                <div className="field half">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" name="email" id="email"
                                           value={this.state.email}
                                           onChange={this.handleInputChange}
                                    />
                                </div>

                                <div className="field half">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="text" name="phone" id="email"
                                           value={this.state.phone}
                                           onChange={this.handleInputChange}
                                    />
                                </div>

                                <div className="field">
                                    <label htmlFor="comments">Questions or Comments</label>
                                    <textarea name="comments" id="message" rows="6"
                                              value={this.state.comments}
                                              onChange={this.handleInputChange}
                                    >

                                    </textarea>
                                </div>

                            </div>


                            <ul className="actions">
                                <li><input type="submit" value="Send Message" className="primary"  /></li>
                                <li><input type="reset" value="Clear" /></li>
                            </ul>
                        </form>
                    </section>

                    <section className="split">
                        <section>
                            <div className="contact-method">
                                {/*<span className="icon alt fa-envelope"></span>*/}
                                <h3>Email</h3>
                                <a href="#">information@untitled.tld</a>
                            </div>
                        </section>
                        <section>
                            <div className="contact-method">
                                {/*<span className="icon alt fa-phone"></span>*/}
                                <h3>Phone</h3>
                                <span>(000) 000-0000 x12387</span>
                            </div>
                        </section>
                        <section>
                            <div class="contact-method">
                                {/*<span className="icon alt fa-home"></span>*/}
                                <h3>Address</h3>
                                <span>1234 Somewhere Road #5432<br />
										Nashville, TN 00000<br />
										United States of America</span>
                            </div>
                        </section>
                    </section>
                </div>
            </section>
        )
    }
}

export default Contact


