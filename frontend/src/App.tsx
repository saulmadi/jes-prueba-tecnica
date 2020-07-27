import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {Header} from "./Header";
import {Container} from 'react-bootstrap';
import {Home} from "./Home";
import {FicaliasList} from "./fiscalias/FiscaliaList";

import {QueryParamProvider} from "use-query-params/esm";
import {CrearFiscalia} from "./fiscalias/CrearFiscalia";
import {EditarFiscalia} from "./fiscalias/EditarFiscalia";


function App() {
    return (
        <Router>
            <QueryParamProvider ReactRouterRoute={Route}>
                <Header/>
                <Container className="mb-5">
                    <Switch>
                        <Route exact path="/" children={<Home/>}/>
                        <Route exact  path="/fiscalias" children={<FicaliasList/>}/>
                        <Route path={`/fiscalias/crear`}>
                            <CrearFiscalia />
                        </Route>
                        <Route path={`/fiscalias/editar/:id`}>
                            <EditarFiscalia />
                        </Route>
                        <Route path="*">
                            <>Not Found</>
                        </Route>
                    </Switch>
                </Container>

            </QueryParamProvider>

        </Router>
    );
}

export default App;
