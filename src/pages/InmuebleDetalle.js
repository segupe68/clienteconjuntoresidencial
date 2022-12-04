import axios from "axios"
import { useEffect, useState } from "react"
import { Badge, Card, Col, Container, Row } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import { INMUEBLEDETALLE_GET_ENDPOINT } from "../connections/endpoints"

const InmuebleDetalle= ()=>{

    const [inmueble, setInmueble]= useState(null)
    const {id}= useParams()
    const navegar= useNavigate()
       

    useEffect(()=>{
        axios.get(`${INMUEBLEDETALLE_GET_ENDPOINT}/${id}`)
        .then(respuesta=>{
            setInmueble(respuesta.data)
          
            
        })
        .catch(err=>{
            console.error(err)
            navegar(-1)
           
            
        })
    },[])


    return(
        <Container className="mt-3 mb-3">
            <Row className="justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                    <h3 className="text-center">Detalle Inmueble</h3>
                    {inmueble && (
                        <Card classname="mt-3 mb-3">
                            <Card.Header>
                                Torre {inmueble.torre}  Apartamento {inmueble.numeroInmueble}
                                {inmueble.pagado ? 
                                    <Badge className='mi-badge-pagado'>Pagado</Badge> : 
                                    <Badge className='mi-badge-pendiente'>Pendiente</Badge>
                                }
                            </Card.Header>
                            <Card.Body>
                                <p>
                                    Propietario : {inmueble.usuarioEntity.nombre} {inmueble.usuarioEntity.apellido}
                                </p>
                                <p>
                                    Valor Administracion : {inmueble.ObligacionEntity.valorAdministracion}
                                </p>
                                Fecha vencimiento: {inmueble.ObligacionEntity.fechaVencimiento}
                                
                                
                               
                            </Card.Body>
                            <Card.Footer>
                                Creado por: {inmueble.usuarioEntity.nombre}
                            </Card.Footer>
                        </Card>
                                      
                    
                    )}
                    
                </Col>
            </Row>
            
        </Container>
        

    )

}

export {InmuebleDetalle}