import React, { useState, useEffect } from 'react';
import axios from "axios";
import Table from '../../components/table/Table';
import Description from '../../components/description/Description';
import './ventas.css';
import descripcion from '../../datasource/descripcion.json'

export default function Ventas() {

    let [titulo, cuerpo, textoBoton] = Object.values(descripcion[0])
    return (
            //   <div>
            //   {users.map(user => (
            //      <h1>{user.name}</h1>
            //))}
            // <h1>what its loading?</h1>
            // </div>
            // <h1>Loaded already. </h1>
            <div className="contenedor">
                <Description
                    titulo={titulo}
                    descripcion={cuerpo}
                    textoBoton={textoBoton}
                />
                <Table title=""
                    headers={["ID Usuario"]}
                    data={["1250"]} />
            </div>
        )    
}