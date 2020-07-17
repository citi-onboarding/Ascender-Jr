import React, {Component} from 'react';
import './App.css';
import './Contact.css';

import instagram from './instagram.png';
import whatsapp from './whatsapp.png';
import gmail from './gmail.png';
import linkedin from './linkedin.png';
import facebook from './facebook.png';
import userform from './user-form.png';
import envelope from './envelope-form.png';
import card from './card-form.png';
import note from './note-form.png';
import code from './code.svg';
import coracao from './coracao.svg';
import citi from './citi-logo.png';

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