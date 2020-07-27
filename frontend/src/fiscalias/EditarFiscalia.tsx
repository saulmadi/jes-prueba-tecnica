import React, {useEffect, useState} from "react";
import {Row, Form, Button} from "react-bootstrap";
import {useForm, Controller} from "react-hook-form";
import {Fiscalia, ListFiscalias} from "./Fiscalia";
import {yupResolver} from '@hookform/resolvers';
import * as yup from "yup";
import {useHistory, useParams} from "react-router-dom";

import {useQueryParam, NumberParam} from "use-query-params";
import {Action, useMutation, useQuery} from "react-fetching-library";
import {ENVIRONMENT} from "../config/Environment";

const validacionFiscalia = yup.object().shape({
    nombre: yup.string().required(),
    departamento: yup.string().required(),
    municipio: yup.string().required(),
    direccion: yup.string().required(),
    ciudad: yup.string().required(),
    telefono: yup.string().required(),
    telefono2: yup.string().optional().nullable(true),
    lat: yup.number().optional().nullable(true),
    long: yup.number().optional().nullable(true),
});

export function EditarFiscalia() {
    const {register, handleSubmit, watch, errors, control} = useForm({
        resolver: yupResolver(validacionFiscalia)
    });

    let {id} = useParams();


    const history = useHistory();

    const fetchFiscalias: Action<ListFiscalias> = {
        method: 'GET',
        endpoint: `${ENVIRONMENT.backend}/fiscalias?id=${id}`,
    };
    const {loading: loadinFetch, payload: fiscaliaEditar} = useQuery(fetchFiscalias)

    const [editar, setEditar] = useState<any>(null as unknown as Fiscalia);

    useEffect(() => {
        if (!loadinFetch) {
            const {data} = fiscaliaEditar as ListFiscalias;

            const [editar] = data
            if(editar)
            {
                setEditar(editar)
            }
        }
    }, [loadinFetch, editar])


    const addFiscalia: (action: Fiscalia) => Action = (formValues: Fiscalia) => ({
        method: 'PUT',
        endpoint: `${ENVIRONMENT.backend}/fiscalias/${id}`,
        body: formValues,
    });

    const {payload, mutate, error} = useMutation(addFiscalia);


    async function crearFiscalia(data: Fiscalia) {
        const {error: mutateError} = await mutate(data);

        if (mutateError) {
            //show ie. notification
            console.log('error', mutateError)
            console.log("error server", error);
            console.log("payload", payload);
        } else {
            history.push("/fiscalias");
        }

    }

    const fields = [
        "nombre",
        "departamento",
        "municipio",
        "ciudad",
        "direccion",
        "telefono",
        "telefono2",
        "lat",
        "long",
    ]

    return (
        <>
            <h1>Editar Fiscalías</h1>

            <div>
                <Form onSubmit={handleSubmit(crearFiscalia)}>
                    { editar &&
                        fields.map(field =>
                            <Form.Group key={`f-${field}`} controlId={`form${field}`}>
                                <Form.Label className="text-capitalize">{field}</Form.Label>
                                <Controller
                                    name={field}
                                    as={<Form.Control type="text" value={editar[field]} placeholder={field} isInvalid={errors[field]}/>}
                                    control={control}
                                 defaultValue={editar[field]}>

                                </Controller>
                                <Form.Control.Feedback type={"invalid"}>
                                    {errors[field] ? errors[field]["message"] : ''}
                                </Form.Control.Feedback>

                            </Form.Group>
                        )
                    }
                    <Button variant="primary" type="submit" disabled={!editar}>
                        Guardar
                    </Button>
                    <Button className="ml-1" variant="danger" onClick={() => history.push('/fiscalias')}>
                        Cancelar
                    </Button>

                </Form>

            </div>
        </>
    )

}