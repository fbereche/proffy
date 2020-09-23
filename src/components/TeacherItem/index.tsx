import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars3.githubusercontent.com/u/6242011?s=400&u=42011bbbfcb5902a8bad940d3dbc86eca1129538&v=4" alt="Avatar"/>
                        <div>
                            <strong>Franco Bereche</strong>
                            <span>Matemática</span>
                        </div>
                    </header>

                    <p>
                        Texto. Texto. Texto. Texto. Texto. Texto. Texto. Texto.
                        <br /><br />
                        Texto. Texto. Texto. Texto. Texto. Texto. Texto. Texto. Texto. Texto. Texto. Texto. Texto. Texto. Texto. Texto. Texto. Texto. Texto. Texto. Texto. Texto. Texto. Texto.
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    );
}

export default TeacherItem;