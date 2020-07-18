import React from 'react';

import './Contact.css';

import instagram from './assets/instagram.png';
import whatsapp from './assets/whatsapp.png';
import gmail from './assets/gmail.png';
import linkedin from './assets/linkedin.png';
import facebook from './assets/facebook.png';
import userform from './assets/user-form.png';
import envelope from './assets/envelope-form.png';
import card from './assets/card-form.png';
import note from './assets/note-form.png';
import code from './assets/code.svg';
import coracao from './assets/coracao.svg';
import citi from './assets/citi-logo.png';

const Contact = () => {
    return (
        <div className="secao-contato">
            <div className="blur-degrade">
                <div className="infos-contato">
                    <div className="container-whatsapp">
                        <img className="svg-whatsapp" src= { whatsapp } alt=""/>
                        <p>(31) 9 8505-6323</p>
                    </div>
                    <div className="container-email">
                        <img className="svg-email" src= { gmail } alt=""/>
                        <p>ascenderjr@gmail.com</p>
                    </div>
                    <div className="container-social-media">
                        <a href="" id="instagram"><img className="instagram" src= { instagram } alt=""/></a>
                        <a href="" id="linkedin"><img className="linkedin" src= { linkedin } alt=""/></a>
                        <a href=""><img className="facebook" src= { facebook } alt=""/></a>
                    </div>
                    <p>Ascender Jr. - Soluções em Energia | © 2020 Universidade Federal de Ouro Preto CNPJ: 20.413.778/0001-30</p>
                </div>
                <div className="form-contato">
                    <h2>Contato</h2>
                    <form action="">
                        <div className="alinhar-svg-input">
                            <img className="svg-input" src= { userform } alt=""/>
                            <input type="text" placeholder="Nome"/>
                        </div>
                        <div className="alinhar-svg-input">
                            <img className="svg-input" src= { envelope } alt=""/>
                            <input type="text" placeholder="E-mail"/>
                        </div>
                        <div className="alinhar-svg-input">
                            <img className="svg-input" src= { card } alt=""/>
                            <input type="text" placeholder="Assunto"/>
                        </div>
                        <div className="alinhar-svg-input">
                            <img className="form-msg-img svg-input" src= { note } alt=""/>
                            <textarea name="" id="" cols="30" rows="10" placeholder="Mensagem"></textarea>
                        </div>  
                        <button>ENVIAR</button>
                    </form>
                </div>
            </div>
            <footer>
                <p>
                    Made with
                    <img src= { code } className="ch-footer" alt=""/>
                    and
                    <img src= { coracao } className="ch-footer" alt=""/>
                    by
                    <a href="https://www.citi.org.br/">
                        <img id="citi-logo" src= { citi } alt=""/>
                    </a>
                </p>
            </footer>
        </div>
    );
}


export default Contact;