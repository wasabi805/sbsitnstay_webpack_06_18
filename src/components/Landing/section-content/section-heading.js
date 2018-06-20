import React,{Component} from 'react';

class SectionHeading extends Component{

    constructor(props){
        super(props);
        this.state={
            title: 'Services'

        }
    }


    render(){
        return(
                <section id="one">
                    <div className="inner">

                        <header class="major">
                            <h2> {this.state.title}</h2>
                        </header>

                        <p>THIS WILL BE THE SERVICES CONTENT.</p>
                        {/*<Link to="/landing/sub"> HELLO</Link>*/}
                    </div>
                </section>
        )
    }
}

export default SectionHeading