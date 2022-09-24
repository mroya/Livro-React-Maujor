import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <>
    <center>
    <h2>404!</h2>
    <p>
      Página não encontrada ou removida. <Link to="/">Ir para Home Page</Link>
    </p>
    </center>
  </>
);

export default NotFound;
