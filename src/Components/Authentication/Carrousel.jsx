import React from "react"

const Carrousel = () => {
    return (
    <div className="col-lg-6">
        <div className="bg-login dissapear">
        <img src="images/Authentication/bg-login-1.png" className="img-fluid" alt="" />
        <div className="auth-contain">
            <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
            >
            <div className="carousel-indicators">
                <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
                />
                <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={1}
                aria-label="Slide 2"
                />
                <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={2}
                aria-label="Slide 3"
                />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <div className="text-center text-white my-4 p-4">
                    <h3>
                    Servicios con Descuentos
                    <br />
                    en tu Email
                    </h3>
                    <p className="text-white-50 f-20 mt-3">
                    Suscríbete y te enviaremos por email,
                    <br />
                    servicios con ofertas y promociones.
                    </p>
                </div>
                </div>
                <div className="carousel-item">
                <div className="text-center text-white my-4 p-4">
                    <h3>
                    Recibe Presupuestos
                    <br />
                    en tu email sin costo!
                    </h3>
                    <p className="text-white-50 f-20 mt-3">
                    Puedes pedir que te coticen lo que necesitas
                    <br />y así elegir la opción que más te sirva.
                    </p>
                </div>
                </div>
                <div className="carousel-item">
                <div className="text-center text-white my-4 p-4">
                    <h3>
                    También puedes
                    <br />
                    ofrecer tu servicio aquí!
                    </h3>
                    <p className="text-white-50 f-20 mt-3">
                    Puedes publicar sin costo!
                    <br />
                    sólo pagas si contratan lo que ofreces.
                    </p>
                </div>
                </div>
            </div>
            {/* end */}
            </div>
        </div>
        </div>
    </div>
    );
}

export default Carrousel;