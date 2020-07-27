import React from "react";
import {Row, Col, Table, Pagination, ToggleButtonGroup, ToggleButton, ButtonGroup, Button} from "react-bootstrap";
import {Action, useQuery} from 'react-fetching-library';
import {ENVIRONMENT} from '../config/Environment';
import {ListFiscalias} from "./Fiscalia";
import {useQueryParam, NumberParam} from "use-query-params";
import {useHistory, useRouteMatch, Switch, Route, Link} from 'react-router-dom'


export function FicaliasList() {

    let { url } = useRouteMatch();

    const [perPage, setPerPage] = useQueryParam('perPage', NumberParam);
    const [page, setPage] = useQueryParam('page', NumberParam);

    const history =  useHistory();

    if(!page) setPage(1);
    if(!perPage) setPerPage(5);



    const fetchFiscalias: Action<ListFiscalias> = {
        method: 'GET',
        endpoint: `${ENVIRONMENT.backend}/fiscalias?perPage=${perPage}&page=${page}`,
    };


    const {loading, payload: fiscalias, error, query, reset, abort} = useQuery(fetchFiscalias)

    const pagination = (p: ListFiscalias | undefined, active: number) => {
        if (!p) {
            return []
        }
        let items = [];
        for (let number = 1; number <= p.lastPage -1; number++) {
            items.push(
                <Pagination.Item key={number} active={number === page} onClick={() =>setPage(number)}>
                    {number}
                </Pagination.Item>,
            );
        }
        return items
    }


    return (

        <div className="mt-2">


            <h1 className="mb-5">Fiscalías</h1>

            <Row className="justify-content-center">
                <Col xs lg="10">
                    <ButtonGroup  >
                        <Button className="btn outline-info" as={Link}  to={`${url}/crear`} >Aggregar Nueva</Button>

                        <Button  variant="outline-danger" onClick={()=>history.push('/')}>Cancelar</Button>

                    </ButtonGroup>
                </Col>
            </Row>
            {!loading && <>    <Row className="justify-content-center mt-3">
                <Col xs lg="10">

                      <Table striped hover>
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Departamento</th>
                                <th>Municipio</th>
                                <th>Ciudad</th>
                                <th>Telefono</th>
                                <th>telefono2</th>
                                <th>Ver</th>
                            </tr>
                            </thead>
                            <tbody>
                            {fiscalias && fiscalias.data && fiscalias.data.map(f => {
                                return <tr key={f.id}>
                                    <td>{f.id}</td>
                                    <td>{f.nombre}</td>
                                    <td>{f.departamento}</td>
                                    <td>{f.municipio}</td>
                                    <td>{f.ciudad}</td>
                                    <td>{f.telefono}</td>
                                    <td>{f.telefono2}</td>
                                    <td>
                                        <Button className="btn outline-info" variant={"link"} as={Link}  to={`${url}/editar/${f.id}`} >ver</Button>

                                    </td>
                                </tr>
                            })}

                            </tbody>
                        </Table>
                </Col>

            </Row>
                <Row className="justify-content-center">
                    <Col xs lg="10">

                        <Pagination>
                            <Pagination.First onClick={()=>setPage(1)}/>
                            <Pagination.Prev onClick={()=>setPage(fiscalias ? fiscalias.currentPage - 1 : 1)}/>
                            {
                                pagination(fiscalias, 1)
                            }
                            <Pagination.Next onClick={()=>setPage(fiscalias ? fiscalias.currentPage + 1 : 1)}/>
                            <Pagination.Last onClick={()=>setPage(fiscalias ? fiscalias.lastPage - 1 : 1)}/>
                        </Pagination>

                    </Col>
                </Row>
            </>
            }


        </div>
    );

}