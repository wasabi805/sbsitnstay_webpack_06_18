import React, {Component} from 'react';
import {ThemeProvider} from 'styled-components';
import {SectionContainer,TextBox, SecondaryParallaxBanner, FormContainer, FormCol1, FormCol2} from '../../assets/js/styled-components/00-MainContainerStyle'
import {aboutUsTheme} from "../../assets/js/styled-components/Themes";


class ContactSection extends Component{
    render(){
        return(
            <React.Fragment>
                <ThemeProvider theme={aboutUsTheme}>
                    <SectionContainer>
                        <TextBox>
                            <h1>We'd love to hear from you!</h1>
                            <p> grew up on the crime side, the New York Times side
                                Staying alive was no jive
                                Had second hands, moms bounced on old men
                                So then we moved to Shaolin land</p>
                        </TextBox>
                    </SectionContainer>
                </ThemeProvider>

                <SecondaryParallaxBanner>
                    <FormContainer>
                        <FormCol1>
                            <p>Phone: 650-123-4567</p>
                            <p>Email: timothy.j.ocampo@gmail.com</p>
                        </FormCol1>

                        <div className='x'></div>
                            <FormCol2>
                                <table className='tableF'>
                                    <tbody>
                                        <tr>
                                            <td className='pt-2 pl-2 pr-2'><input className='inputF w-100' type='text' placeholder='first name:'/></td>
                                            <td className='pt-2 pl-2 pr-2'><input className='inputF w-100' type='text' placeholder='last name:'/></td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td className='pb-2 pt-2 pl-2 pr-2'><input className='inputF w-100' type='text' placeholder='phone:'/></td>
                                            <td className='pb-2 pt-2 pl-2 pr-2'><input className='inputF w-100' type='text' placeholder='email:'/></td>
                                        </tr>
                                </tbody>
                                </table>

                                <table className='w-100'>

                                    <tbody>
                                        <tr className='pl-2 pr-2 pt-3 '>
                                            <td>
                                                <textarea className='w-100 h-auto ' rows='10' placeholder='comments'/>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className='buttonFCont'>
                                    <button className='btn buttonF' value="Submit">Submit</button>
                                </div>
                            </FormCol2>

                    </FormContainer>
                </SecondaryParallaxBanner>

            </React.Fragment>
        )
    }
}

export default ContactSection
