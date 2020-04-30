import React from "react";
import { Switch, Route } from "react-router-dom";

import Livro from "./pages/Livro/Livro";
import ListaLivro from "./pages/ListaLivro/ListaLivro";

function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={ListaLivro} />
            <Route path='/cadastrolivro' component={Livro} />
        </Switch>
    );
}

export default Routes;
