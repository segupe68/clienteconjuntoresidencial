import { Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function InmuebleCard({inmueble}) {
  return (
    <Card classname="mt-3 mb-3">
        <Card.Header>
          {inmueble.pagado ? 
            <Badge className='mi-badge-pagado'>Pagado</Badge> : 
            <Badge className='mi-badge-pendiente'>Pendiente</Badge>
          }
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <Link to={`/inmueble/${inmueble.id}`}>
                Torre {inmueble.torre}  Apartamento {inmueble.numeroInmueble}
            </Link>
            
          </Card.Title>
          <Card.Text>
            Fecha creacion: {inmueble.creado}   
          </Card.Text>
          <Card.Text>
            Creado por: {inmueble.usuarioEntity.nombre}   
          </Card.Text>
        </Card.Body>
    </Card>
  );
}

export {InmuebleCard}