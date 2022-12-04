import axios from "axios"
import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { InmuebleCard } from "../components/InmuebleCard"
import { INMUEBLESCREADOS_GET_ENDPOINT } from "../connections/endpoints"

const InmueblesCreados= ()=>{

    const [inmuebles, setInmuebles]= useState([])
    const [buscando, setBuscando]= useState(true)
    

    useEffect(()=>{
        axios.get(INMUEBLESCREADOS_GET_ENDPOINT)
        .then(respuesta=>{
            setInmuebles(respuesta.data)
            setBuscando(false)
            
        })
        .catch(err=>{
            console.error(err)
            setBuscando(false)
            
        })
    },[])


    return(
        <Container className="mt-3 mb-3">
            <Row className="justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                    <h3 className="text-center">Inmuebles Creados</h3>
                    {buscando ? "Cargando...": (inmuebles.length == 0 && "No hay inmuebles disponible")}
                    {inmuebles.map(inmueble=> <InmuebleCard key={inmueble.idInmueble} inmueble={inmueble} />)}
                    
                </Col>
            </Row>
            

        </Container>
        
    )

}

export {InmueblesCreados}