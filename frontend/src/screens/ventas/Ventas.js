import React, { useState, useEffect } from 'react';
import axios from "axios";
import Table from '../../components/table/Table';
import Description from '../../components/description/Description';
import './ventas.css';
import descripcion from '../../datasource/descripcion.json'
import tablaUsuarios from '../../datasource/tablaUsuarios.json'

export default function Ventas() {

    let [titulo, cuerpo, textoBoton] = Object.values(descripcion[0])
    let headers = Object.keys(tablaUsuarios[0])
    let data = Object.values(tablaUsuarios)
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
            <Table
                tipo="venta"
                headers={headers}
                data={data} />
        </div>
        )    
}