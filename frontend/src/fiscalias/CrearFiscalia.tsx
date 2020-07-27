import React from "react";
import {Row, Form, Button} from "react-bootstrap";
import {useForm, Controller} from "react-hook-form";
import {Fiscalia, ListFiscalias} from "./Fiscalia";
import {yupResolver} from '@hookform/resolvers';
import * as yup from "yup";
import {useHistory} from "react-router-dom";

import {useQueryParam, NumberParam} from "use-query-params";
import {Action, useMutation} from "react-fetching-library";
import {ENVIRONMENT} from "../config/Environment";

const validacionFiscalia = yup.object().shape({
    nombre: yup.string().required(),
    departamento: yup.string().required(),
    municipio: yup.string().required(),
    direccion: yup.string().required(),
    ciudad: yup.string().required(),
    telefono: yup.string().required(),
    telefono2: yup.string().optional(),
    lat: yup.number().optional(),
    long: yup.number().optional(),
});

export function CrearFiscalia() {
    const {register, handleSubmit, watch, errors, control} = useForm({
        resolver: yupResolver(validacionFiscalia)
    });

    const history = useHistory();


    const addFiscalia: (action: Fiscalia) => Action = (formValues: Fiscalia) => ({
        method: 'POST',
        endpoint: `${ENVIRONMENT.backend}/fiscalias`,
        body: formValues,
    });
    const {loading, payload, mutate, error, reset, abort} = useMutation(addFiscalia);


    async function crearFiscalia(data: Fiscalia) {
        const {error: mutateError} = await mutate(data);

        if (mutateError) {
            //show ie. notification
            console.log('error', mutateError)
            console.log("error server", error);
            console.log("payload", payload);
        }else {
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
            <h1>Crear Fiscalías</h1>

            <div>
                <Form onSubmit={handleSubmit(crearFiscalia)}>
                    {
                        fields.map(field =>
                            <Form.Group key={`f-${field}`} controlId={`form${field}`}>
                                <Form.Label className="text-capitalize">{field}</Form.Label>
                                <Controller
                                    name={field}
                                    as={<Form.Control type="text" placeholder={field} isInvalid={errors[field]}/>}
                                    control={control}>

                                </Controller>
                                <Form.Control.Feedback type={"invalid"}>
                                    {errors[field] ? errors[field]["message"] : ''}
                                </Form.Control.Feedback>

                            </Form.Group>
                        )
                    }
                    <Button variant="primary" type="submit">
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